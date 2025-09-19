--- 
tags: [project, highlight]
date: 2025-06-16
layout: project.njk

title: Portfolio Reimagined
subtitle: How I improved the UX of this portfolio by treating it like a UX project

thumbnail_src: ./src/images/tn.png

overview:
  challenge: |
    Ideally, a portfolio is a passion project you update regularly but often it's treated as a static collection of past work instead of a rich, living medium. I wanted to challenge myself by reimagining what a portfolio should be. At its best, it can serve as a business card — a clear, insightful snapshot of your skills and thinking — but for me, that wasn't enough. I wanted it to reflect my personal approach to design, my philosophy, and my ability to solve problems.

    So I treated it as a UX project from start to finish. I let the fundamentals guide me; clear content structure, lightweight code, and a deep understanding of my two key user groups acted as the pillars for the design. The result is a portfolio that's not just a collection of my past projects, but a tailored experience designed to showcase my thinking, style, philosophy, and future potential.

    To maximize maintainability, performance, and authenticity, I chose to build it with Eleventy and a lightweight stack — letting content drive the structure and letting my code reflect my values.

    The code is free and open-source. Feel free to reuse it if you find it helpful.
  objectives:
    - Enhance ease of updating portfolio content
    - Provide a smooth experience for recruiters and collaborators
    - Maximize performance across all devices
  scope:
    - User Experience Improvement
    - Fast, lightweight, SEO-friendly portfolio
  role:
    - UX Designer
    - UI Designer
    - Developer
  team:
    - Self-directed
  tools:
    - Eleventy
    - VS Code
    - GPT
  duration:
    - 4 months
---

[toc]

## The Why and The What

What actually is a portfolio? I have asked this question many times without finding the answer that satisfies me. I think, while it may look like a nice-looking website, portfolio is an enormous project of self-discovery. It is not just the content you put on it but it's also the form itself. This is how and why it's a crucial part of a designer's identity. Regardless of the content, you don't need a fancy website for portfolio; why cannot it just be a slideshow? I think whatever reflects your values and skillset the best is the most suitable format for your portfolio. And I think that is *the core essence* of it all - using the form to convey yourself. It gets very personal very quickly and that usually makes it a very difficult project. That brings me to the next question: why am I making this portfolio as a website?

I think I could give a ton of different answers but at the core are
- I have used the internet from a young age so it feels like a natural medium
- I can program little things and believe vibe coding can handle the rest
- I believe I can better show my values comparing this website to your average website (I'm not saying this is technically better)

Notice that by website I mean a website, not web app. For the average user, this doesn't seem to be a big deal but it's actually a bigger issue than you might think. The majority of the internet would be better off as static websites instead of web apps. With the latter, each page loads the whole framework even if the user only visited the landing page. That's unnecessary data and carbon emissions.

So I naturally lean towards creating my portfolio as a webpage but that brought me more problems: how do I create a website that's up to my standards? How do I use the form to convey something more than just the contents? Where do I find the energy to actually finish it? The answer to the first question is obvious: find a good framework and spend enough hours until you're happy with it. The second question caused me to struggle but I finally found things to make the form elevate the contents (I'll write about it detail a bit later). The third question was answered by trying my best to find the joy of coding again. At best, portfolio is a medium to tell a story — a story about how I solve problems, how I learn, how I grow, and my philosophy and values.

### The Core Issue

Alright, let's go back a little. I struggled a lot creating my first portfolio. By the time it was finished, I was exhausted and did not want to touch it. The result was only *good enough*. Time went on and I never got to updating my portfolio; it was so difficult. I don't think it reflected anything I stood for except it looked modern and it was responsive. The design was decent at best and I was not proud of my portfolio. It didn't look like me. It did not truly show my thinking nor personality. I wanted to change all that. Updating it felt more of a struggle than building a new one.

### My Background

I have a bachelors degree in software development so it was always obvious I should create my own portfolio from scratch. I also had a master's degree in HTI which meant - at least to me - that I have to design it myself as well. As a hobby, I draw ASCII and PETSCII art alongside with other textmode mediums which is motivated by my appreciation towards technological lightweight solutions. I prefer simple tools whenever they fit for the job; usually you don't need the fanciest and shiniest software nor hardware. Less is more in this sense. This mixed background either stems from my philosophy or has guided me towards it. Either way I thought my portfolio should highlight the lo-fi technologies.


## Who's The User Anyway?

To ground this, I identified two key audiences:

- Recruiters
busy people who want to quickly gauge my skills, style, and potential
- Prospective collaborators
people who might spend a little more time digging through my contents

I'll group the audiences together as they're funtionally dissimilar.

But wait! I also view my own portfolio a lot while creating or editing content. Am I another end-user? Yes! So what are my user needs:
- a lightweight portfolio
- easy to keep up to date
- a portfolio that evolves with me


Based on the two user groups
My research — job ad analysis, portfolio reviews, and reflection on my own goals — revealed a few key needs:

✅ Conciseness: recruiters need to absorb content quickly.
✅ Performance: a lightweight, fast-loading site signals professionalism.
✅ Personality: a portfolio should reflect a designer's unique style — not a generic template. (however, style should not take attention away from the content!)
✅ Scalability: adding new projects should be effortless, without wrestling with code.
✅ Responsiveness: recruiters and collaborators should be able to view content on any device.

## Designing My Portfolio Experience

Using these insights, I defined the portfolio's architecture and style.
Instead of over-engineering, I kept it lightweight and semantic — letting content guide structure.
Some key choices I made:

✅ Eleventy + Markdown:
I would love a portfolio made of pure ASCII as it would be as lightweight as possible. However, relying on pure text would not reach the modern look and feel standards I have. 11ty + md lets me treat portfolio content as pure data — adding a new project is as simple as adding a .md file. It's close enough!

✅ Clean UI, Pure CSS:
A small set of utility classes lets me style quickly and efficiently without bloat. All this should be pre-set so when content is added, you don't need to fiddle with the layout or style.

✅ Design Principle:
Every piece — from the grid to the color — highlights content first and my style second.
Typography, spacing, and components were designed to maximize readability and scannability.

✅ Performance (true to the system/browser):
- No external typography
- Images (both local and external) should be optimised on build
- Utilising predictable html components

### Philosophy

The guiding philosophy behind the design is digital minimalism. It's not only visual, it also applies to the underlying site. This website is pure `html`, `css` and as little `javascript` as possible. At least that's what you see. The other user group, the maintaner, me, gets to work with `md` files as they are used for the content. I think that is a pretty minimal yet functional solution for both user groups.

### Sustainability

However, minimalism isn't be-all end-all reason. It's a method to achieve a more sustainable digital product. A simple site equals directly to less data transfer. The biggest data hoarder on this website is the images obviously. So I had to do something about it. To reduce lifetime emissions, I realised it's better to optimise images so your browser won't have to load the largest resolution of every image. Catering a wide range of different sizes of the same image bloated the build folder size a lot but again, the lifetime emissions will be lower this way.

Did you know each click causes some carbon emissions? I wanted to underline that in a subtle way by adding a tiny indicator in the footer. It shows you how much your last click caused carbon emissions. Notice that it's a rough estimate following this formula:

> grams CO₂ = total bytes × (energy per GB × grid carbon density / bytes per GB)

where 
- energy per GB = 0.81 kWh/GB
- grid carbon density = 442 gCO₂/kWh
- bytes per GB = 1024³
- 

The reason is not to show you the exact amount of emissions but make you think about how light-weight websites and more conscious consumption of web content can be a part of the solution. This is raising awareness on grassroots level. Try pressing back button on your browser and then check the carbon indicator!

### Style

You probably noticed the bare-bones look already, right? The style is called minimal brutalism. I naturally leaned towards it as I prioritised functionality and let the form follow. Moreover, I thought the contrast between the website and its contents highlight the contents. Think it this way: the portfolio forms the structure while the content provides the shape.

I chose to use thin outlines to visualise the sctructure because it simply works. It creates visual areas which are intuitive for us humans. Buttons look like buttons and even have a little pressing animation. Links look like links so you get what you'd expect. Images come with a caption to simply tell what the image is about. Everything is what it looks like. I strived towards functional aesthetics and relied on vertically scrolling "tall" pages to create almost like a digital version of what a newspaper could be.

Additionally, the fact that I chose not to add any custom fonts reduces unnecessary data load and I think the default fonts of your browser handle the job well enough - it is functional.

## Did It Work?

Once implemented, I evaluated the portfolio against my goals:

✅ Performance:
Page load under 1 second on 3G; Lighthouse scores above 90 across all metrics.

✅ Usability:
User testing with recruiters and collaborators confirmed they could find key information quickly and appreciate the clear structure.

✅ Maintainability:
Adding a new project was a matter of dropping in a Markdown file and adding a photo — no messy code rewrites.

## What I Learned and Where It's Heading

Designing my portfolio was more than a coding challenge — it was a deep UX exercise in framing my own narrative.
Some key takeaways:

✅ Framework matters:
Using lightweight technologies made it a flexible, adaptable platform — perfect for future growth.

✅ Design for your goals:
Your portfolio isn't a universal template; it's a tool tailored to your unique needs.

✅ Every detail communicates:
From typography choices to loading speeds, each decision adds up to a coherent story about who you are as a designer.

Looking forward, I'd like to:
➥ Experiment with adding small interactive components.
➥ Expand my portfolio to showcase not just finished products but process, prototypes, and future ideas.

---

## The Why and The What

What actually is a portfolio? What should it contain and convey? If there were a one-size-fits-all solution, we'd all be using it by now. But portfolios are much more than a directory of past projects — or at least, that's how I see it.

Creating a portfolio isn't about ticking a box. It's about framing your narrative. It's about showing who you are, how you solve problems, and where you're headed. It should reflect your thinking, your craft, and your future direction — not just your past. But when I first tried to create mine, it fell short in all these ways.

### The Core Issue

I struggled a lot designing and developing my first portfolio.
By the time I finished it, I was completely worn out. I avoided touching it afterwards — adding a new piece or updating something felt heavy and cumbersome. Time went on, and it fell further and further out of sync with who I was becoming.

It's true the portfolio looked reasonably modern and it was responsive across devices — a baseline I felt I should be proud of — but it fell flat in reflecting me. The design was decent at best; it didn't show what made me, me. It felt more like a template filled in with my content instead of a medium for my own expression. That was a key turning point: I decided I wanted to change all that.

### My Background

I have a bachelor's degree in Software Development and a master's degree in Human-Technology Interaction (HTI). Naturally, I felt it was my responsibility to create this portfolio myself — not to grab a pre-made template, but to piece it together in a way that made sense for me. My background meant I understood the technical side, while my education in HTI meant I was able to approach it from a human-centric view — designing not just for myself, but for my future viewers.

As a hobby, I draw ASCII and PETSCII art alongside other textmode media. There's something profoundly charming about creating rich, expressive art with a small set of lightweight components. It resonates with my view that you often need less, not more, to make something powerful. I prefer simple tools when they serve the job well; you typically don't need the fanciest, shiniest software or hardware — less is more in this sense.

### Outlining the Questions

This portfolio wasn't meant to be “just another collection of projects”—it was meant to be a true reflection of my thinking, my craft, and my future direction as a designer. It made me realize I wanted it to act not just as a directory of past work, but as a medium to tell a story — a story about how I solve problems, how I learn, how I grow, and what I care about.

This reflection raised a few key questions in my mind:

- Why do portfolios often miss the mark in communicating a designer's unique approach?

- What should a portfolio showcase, aside from finished products?

- How can I create a portfolio that looks and feels like me — reflecting my style and my values?

I did not seek to find answers to these questions but have them align my thinking with my goals.

## Who's Viewing It Anyway?

To ground this thinking, I identified two key audiences I need to serve:

➥ Primary: recruiters and prospective collaborators.
They're busy people who want to quickly gauge my skills, style, and potential. They need to absorb key information fast, without wading through fluff. It's a delicate balance — reflecting my unique approach while honoring their time and goals.

➥ Secondary: me — the portfolio's builder and curator.
I need something lightweight, adaptable, and easy enough to keep up to date. It should grow and evolve alongside me — a portfolio that's a tool for future expression, not a static showcase.

My research — job ad analysis, portfolio reviews, and reflection on my own goals — revealed a few key needs:

✅ Conciseness — recruiters need to absorb content quickly.
✅ Performance — a lightweight, fast-loading site signals professionalism.
✅ Personality — a portfolio should reflect a designer's unique style, without letting style undermine content.
✅ Scalability — adding a new project should be effortless, without wrestling with code.
✅ Responsiveness — recruiters and collaborators should be able to view content on any device.

## Designing My Portfolio Experience

Using these insights, I defined the portfolio's architecture and style.
Instead of over-engineering it, I kept it lightweight and semantic — letting content guide structure.

Some key choices I made:

✅ Eleventy + Markdown:
I would love a portfolio made of pure ASCII; it would be lightweight, efficient, and true to my aesthetic. But pure text would feel a bit unconventional in today's context. Eleventy lets me treat portfolio content as pure data — adding a new project is as simple as adding a .md file. It's close enough to pure simplicity while honoring modern standards.

✅ Clean UI, Pure CSS:
A small set of utility classes lets me style quickly and efficiently without needless bloat. All this is pre-done — when adding content, I don't need to wrestle with styling or structure.

✅ Design Principle:
Every piece — from the grid to the color — highlights content first and my style second. Typography, spacing, and components were designed to maximize readability and scannability.

✅ Performance (true to the system/browser):

    No external typography — I rely on fallback fonts.

    All images, whether local or external, are optimized at build time.

    The HTML components follow predictable structures, yielding a lightweight, fast-loading page.

## Did It Work?

Once implemented, I evaluated the portfolio against my goals:

✅ Performance:
Page load under 1 second on 3G; Lighthouse scores above 90 across all metrics — reflecting a lightweight, well-optimized site.

✅ Usability:
User testing with recruiters and collaborators confirmed they could find key information quickly and appreciate the clear structure. The portfolio struck a balance between form and content — it wasn't a mess of distractions, but it wasn't barren either.

✅ Maintainability:
Adding a new project was a matter of dropping in a Markdown file and adding a photo — no messy code rewrites. The portfolio evolves gracefully alongside me.

## What I Learned and Where It's Heading

Designing my portfolio was more than a coding challenge — it was a deep UX exercise in framing my own narrative.
Some key takeaways from this process:

✅ Framework matters:
Using lightweight technologies made it a flexible, adaptable platform — perfect for future growth.

✅ Design for your goals:
Your portfolio isn't a universal template; it's a tool tailored to your unique needs.

✅ Every detail communicates:
From typography choices to loading speeds, each decision adds up to a coherent story about who you are as a designer.

Looking forward, I'd like to:

➥ Experiment with adding small interactive components — not for needless complexity, but to illuminate aspects of my process.

➥ Expand my portfolio to showcase not just finished products, but process, prototypes, future ideas, and experiments — reflecting a more holistic view of my practice.