import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTOC from "markdown-it-table-of-contents";
import htmlmin from "html-minifier-terser";
import postcss from "postcss";
import cssnano from "cssnano";
import Image from "@11ty/eleventy-img";
import markdownItAttrs from "markdown-it-attrs";
import { JSDOM } from "jsdom";
import site from "./src/_data/site.json" with { type: "json" };
import fs from "fs";
import path from "path";

export default (eleventyConfig) => {
  // --- Copy files directly to build ---
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/humans.txt");
  eleventyConfig.addPassthroughCopy("src/favicon");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/**/*.pdf");
  eleventyConfig.addPassthroughCopy("src/scripts/");

  // --- Collections ---
  eleventyConfig.addCollection("main", (collectionApi) =>
    collectionApi.getAll()
      .filter(item => item.data.tags && item.data.tags.includes("main"))
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  eleventyConfig.addCollection("project", (collectionApi) =>
    collectionApi.getAll()
      .filter(item => item.data.tags && item.data.tags.includes("project"))
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("projectHighlight", (collectionApi) =>
    collectionApi.getAll()
      .filter(item => item.data.tags && item.data.tags.includes("project") && item.data.tags.includes("highlight"))
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("post", (collectionApi) =>
    collectionApi.getAll()
      .filter(item => item.data.tags && item.data.tags.includes("post"))
      .sort((a, b) => b.date - a.date)
  );

  // --- Filters ---
  eleventyConfig.addFilter("formatMonthYear", (dateObj) => {
    const options = { year: "numeric", month: "short" };
    return new Date(dateObj).toLocaleDateString("en-US", options);
  });

  // --- Markdown ---
  const md = new MarkdownIt({ html: true, breaks: true, linkify: true })
    .use(markdownItAnchor, { permalink: markdownItAnchor.permalink.ariaHidden({}) })
    .use(markdownItTOC, {
      includeLevel: [1, 2, 3, 4, 5, 6],
      wrapper: 'nav',
      containerClass: 'toc',
      markerPattern: /^\[toc\]/im
    })
    .use(markdownItAttrs);

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("markdown", (content) => md.render(content));

  // --- Transform: Optimise all <img> tags in final HTML ---
  eleventyConfig.addTransform("optimise-img-tags", async (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {

      // const dom = new JSDOM(content);
      const dom = new JSDOM(`<!DOCTYPE html><html><body>${content}</body></html>`);
      const document = dom.window.document;
      const images = [...document.querySelectorAll("img")];

      for (const img of images) {
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt") || "";
        const title = img.getAttribute("title") || "";
        const classes = img.getAttribute("class") || "";
        
        if (!src || src.startsWith("data:") || src.startsWith("/images/")) continue;
        
        try {
          const metadata = await Image(src, {
            widths: [600, 900, 1134, 2268],
            formats: ["avif", "webp", "jpeg"],
            outputDir: "./docs/images/",
            urlPath: "/images/"
          });
          
          const html = Image.generateHTML(metadata, {
            alt,
            title,
            classes,
            sizes: "100vw",
            loading: "lazy",
            decoding: "async"
          });

          // create picture
          const wrapper = document.createElement("div");
          wrapper.innerHTML = html.trim();
          const picture = wrapper.querySelector("picture");
          
          // create figure
          const figure = document.createElement("figure");
          figure.classList.add("optimised-image");
          figure.appendChild(picture);

          if (title) {
            const caption = document.createElement("figcaption");
            caption.textContent = title;
            caption.classList.add("image-caption");
            figure.appendChild(caption);
          }

          img.replaceWith(figure);
        } catch (err) {
          console.warn(`Image optimization failed for ${src}:`, err);
        }
      }

      // return dom.serialize();
      return document.body.innerHTML;
    }

    return content;
  });

  // --- Transform: Remove stuff from final HTML ---
  eleventyConfig.addTransform("clean-html", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      const dom = new JSDOM(content);
      const document = dom.window.document;

      // Remove all empty <p> tags
      document.querySelectorAll("p").forEach(p => {
        if (!p.textContent.trim() && p.children.length === 0) p.remove();
      });

      // Remove all empty <br> tags
      document.querySelectorAll("br").forEach(br => {br.remove();});

      return dom.serialize();
    }

    return content;
  });

  // --- Generate sitemap.xml ---
  let allPages = [];
  eleventyConfig.addCollection("allPages", function(collectionApi) {
    allPages = collectionApi.getAll();
    return allPages;
  });
  eleventyConfig.on("afterBuild", () => {
    const baseUrl = site.url.replace(/\/$/, "");

    const pages = allPages
      .filter(page => !page.data.noindex) // filter out pages with noindex: true
      .map(page => ({
        url: baseUrl + page.url,
        date: page.date ? new Date(page.date).toISOString() : null,
      }));

    const sitemapEntries = pages.map(p => `
    <url>
      <loc>${p.url}</loc>
      ${p.date ? `<lastmod>${p.date}</lastmod>` : ""}
    </url>
  `).join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
  </urlset>`;

    const outputPath = path.join("docs", "sitemap.xml");
    fs.writeFileSync(outputPath, sitemap.trim());
    console.log("✅ sitemap.xml created");
  });

  // --- HTML minification ---
  eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return await htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  // --- CSS passthrough + minification ---
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent) {
      return async () => inputContent;
    },
  });

  eleventyConfig.addTransform("postcss-minify", async (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".css")) {
      const result = await postcss([cssnano]).process(content, { from: undefined });
      return result.css;
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "docs",
    },
    templateFormats: ["html", "njk", "md", "css"],
    markdownTemplateEngine: "njk"
  };
};
