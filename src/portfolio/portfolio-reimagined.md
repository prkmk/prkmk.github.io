--- 
tags: [project, highlight]
date: 2026-04-22
layout: project.njk

title: Portfolio Reimagined
subtitle: How I improved the UX of this portfolio by treating it like a UX project

thumbnail_src: ./src/images/tn-portfolio.png

overview:
  challenge: |
    Ideally, a portfolio is a passion project you update regularly but often it's treated as a static collection of past work instead of a rich, living medium. I wanted to challenge myself by reimagining what a portfolio should be. At its best, it can serve as a business card — a clear, insightful snapshot of your skills and thinking — but for me, that wasn't enough. I wanted it to reflect my personal approach to design, my philosophy, and my ability to solve problems.

    So I treated it as a UX project from start to finish. I let the fundamentals guide me; clear content structure, lightweight code, and a deep understanding of the key user groups acted as the pillars for the design. The result is a portfolio that's not just a collection of my past projects, but a tailored experience designed to showcase my thinking, style, philosophy, and future potential.

    To maximize maintainability, performance, and authenticity, I chose to build it with Eleventy and a lightweight stack — letting content drive the structure and letting my code reflect my values.

    The code is free and open-source. Feel free to reuse it if you find it helpful.
  objectives:
    - Enhance maintainability
    - Provide a smooth experience for recruiters and collaborators
    - Minimise carbon footprint
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

## Background Story

It was over 2 years of not touching my portfolio. I didn't want to open nor update it and I didn't know why. I had created my portfolio during my master's degree studies because I thought every designer should have one to apply for any job. I had programmed it with the tools and methods I was the most familiar at the time. My portfolio was a React single-page-application. All pages were implemented as components on top of components. I remember spending lots of time polishing the style, changing typography, and tweaking the layouts. I think my idea was to have a sleek and clean portfolio that has good UX and minimal aesthetics.

It had clean and intuitive navigation, clear structure for the project pages, consistent light grey style, and a professional-looking picture of me. In a sentence, the portfolio felt like it belongs to a technology-oriented developer who tries to shift to design. And to be honest, that was me. The portfolio was also sluggish to load, had UX mistakes done for the sake of what I thought was minimalism, and just looked a bit off. I never felt it truly represents me although it might have represented my skills. I was not proud of my portfolio and I think I was actually a bit ashamed of it. Something needed to change.

![A picture of me around the age of 4 using an early 2000's laptop](./src/images/portfolio-retro_laptop.jpg "A non-professional picture of me")

But why? I had changed; I had grown as a designer, finished my studies, gained work experience, and, most of all, grown as a person. I had reached the point where I realised my portfolio should represent myself as a person, not just a generic collection of work. At this point I didn't know how to do it or how much time it would take but I really wanted to recreate everything from scratch with intent and attention to detail.



## What Actually Is A Portfolio?

I had to start from the beginning. That means starting from an empty programming project, right? No. By beginning I mean the concept. I don't think I knew what portfolio meant. I held this belief that a good portfolio is a fancy website with flashy graphics. I'm not sure how common a belief this is but it was quite strong in me. 

Starting to question every single definition and assumption I had regarding portfolios, I began building the concept from ground up. I spent time thinking about what a portfolio _is_ as a concept and how to embody that conceptualisation. This could have been a quicker process if I had just looked up the word in a dictionary. For example, [Merriam-Webster](https://www.merriam-webster.com/dictionary/portfolio) gives two noteworthy definitions:

> A selection of a student's work (such as papers and tests) compiled over a period of time and used for assessing performance or progress.
>
> A hinged cover or flexible case for carrying loose papers, pictures, or pamphlets.

The first definition pretty much matches what I had though: a selection of prior work for some sort of assessment. In my context, the assessment is most often recruiting but not necessarily so. I picked the second description because I feel like that goes to the root of what portfolio is: a structure that holds different kinds of content. Now that is what I was looking for. So it's not necessarily a website, does not have to include any graphics at all, and isn't solely for assessment purposes.

So, a portfolio is just a container for selected work but could it be more than that. And I feel like work means just something I have done. Would it be possible to let portfolio convey something from yourself in addition to the obvious? I like to think it can and maybe this project will test that hypothesis. I think my ultimate goal is to make it some sort of a temporal representation of some parts of myself. I believe, at best, portfolio is a medium to tell your story — a story about how you solve problems, how you learn, how you grow, and your philosophy and values. This potential is what I aim for.


## Why Am I Doing It This Way?

To maximise shareability in the 21st century, I feel a portfolio should be in some digital format. I don't necessarily think an online portfolio is any better than a slideshow or even a `.txt` file. The form can put restriction on the type of content you can include. I actually think the most minimal format on which you're still able to highlight your relevant skills is probably the best one.

You're reading this on a browser so it means I decided to create my portfolio as a website. Why did I do that when I just outlined that it's not a requirement? I think having grown up in the age on the internet is the main driver to creating the portfolio as a website. Additionally, I feel like it's a good medium for my skillset: UX/UI design, programming, problem solving, thinking. Since I was creating this as a website, I had to put some boundaries to put more focus my skills rather than what's possible on the internet nowadays.

There are a lot of pitfalls when you create a website: making it too plain, spending countless of hours trying irrelevant things only you think are cool, adding too many features, making it difficult to maintain, relying on too many external libraries. There are practically no constraints, and that is not necessarily a good thing for creativity. Research shows that [creativity benefits from a healthy dose of constraints](https://pure.eur.nl/ws/portalfiles/portal/48315641/Repub_127602.pdf). So it might be wise to set yourself some constraints when working on a digital canvas.


## Who Are The Users?

It's the recruiters. Let's move on. You'd think it's that simple, wouldn't you? Actually I managed to find three user groups: recruiters, collaborators or colleagues, and me. Yes, I am a user as I maintain the website.

![An illustration of the user groups](./src/images/portfolio-users.png "Users. Which of them are you?")

Recruiters might visit this website as a part of recruitment process. For them, I think, it's important that relevant content is highlighted and projects are described clearly. I need to have a clear structure, intuitive navigation, and highlight key data from projects.

For collaborators and colleagues, I think, it would be typical to browse through the pages reading through what kind of projects I've been involved in the past. I would guess they might visit this website on a mobile device so apparently responsiveness is a requirement. Maybe they'd also like to read about how I think and approach things.

For myself, I need to structure the portfolio so that it's easy to maintain and add projects. I need to avoid poor maintainability at all costs because that's what sank my last portfolio. Additionally, I can set whatever requirements I like but I think the core things include it being lightweight, platform that is able to evolve, and can include more personal stuff and philosophy. The last thing I want is a portfolio that feels stiff and plasticy. Finally, this time I need to be able to be able to be proud to be associated with my portfolio.



## How did I do it?

I constrained my work quite a bit based on the requirements of the portfolio and my skillset. I did not want to get overwhelmed with all the options and graphics and styles and typography and multimedia content and non-standard scrolling and effects and whatnot. Instead, I set clear boundaries which guided my design and implementation but not the content.

### 1st Constraint: a static website

I started by thinking about maintainability and filetypes. How can I make a portfolio that _I_ find easy to maintain? For me, simpler files feel better but I knew `.txt` files might be a bit too bare-boned. The file type one step more complex I thought was `.md` which are basically textfiles that support headings and images. That sounded like a perfect match. The next step was to find a framework or a website generator that uses `.md` files to build websites. I decided to go with a static website for reasons given [a bit later](#2nd-constraint%3A-low-carbon-emissions). There were options of which [11ty](https://www.11ty.dev/) sounded perfect due to its [good performance](https://www.11ty.dev/docs/performance/). So now I have a fast and lightweight stack. On to the next step.

### 2nd constraint: low carbon emissions

Did you know that [each click causes carbon emissions](https://link.springer.com/article/10.1007/s12045-025-1907-x)? Computers and servers run on electricity and to minimise the electricity consumption I could minimise the data loaded. That's likely the only way of getting anywhere with this goal. My portfolio being a static website means in practical terms that your browser loads each page separately. This might make the navigation on the website slower but doesn't require your browser to load a complex framework for such a simple website. Even if the navigation was slightly slower that should not be a problem if the site is light enough. All in all, your browser loads less data when visiting my website than it would if I had used some framework. Also, I wrote small scripts to minimise the output files and to optimise images. The image optimisation makes the website take more space on the server but it should reduce the loaded data. This is how I managed to keep the carbon emissions low. You could additionally argue that this website being lightweight is a UX win as well.

### 3rd constraint: semantic website with minimal styling

At first I built the website with the default styles to let the content define the structure; everything is designed content-first. Only then I started adding a little styling to the website but I wanted it to be as minimal as possible. The styling itself is pure `css`. My goal was to style it so that the page would look empty and boring with no content. I went as simple as possible by drawing outlines of certain components with thin strokes. Adding a little padding here and there and voilà! I also did not add any fonts or references to external fonts; all typography is directly from your browser. This is both a minimal design decision and a way to cut down the emissions.

The style of this website could be defined as minimal brutalism which was inspired by [brutalist architecture](https://en.wikipedia.org/wiki/Brutalist_architecture). I chose or gravitated towards this style as, in essence, it highlights the functionality without adding visual fluff. Lines should be straight and predictable.

I paired the style with some modern features people expect nowadays: intuitive clickable regions, responsiveness, and dark mode. Since I had already implemented fonts so that I do not get to explicitly choose how it's displayed on your device, I did the same for the dark mode. If your device is on dark mode this website should load with dark mode on as well. This all fits with the core design principle: portfolio is just a structure for content.


### Embedding My Values

As you can already tell, sustainability is very important to me. This website being lightweight doesn't do much in the grand scheme of things. However, I wanted to highlight this and raise awareness a little, it's the least I can do. I added a little carbon emission calculator at the bottom which roughly estimates the impact on load:

> grams CO₂ = total bytes × (energy per GB × grid carbon density / bytes per GB)

where 
- energy per GB = 0.81 kWh/GB
- grid carbon density = 442 gCO₂/kWh
- bytes per GB = 1024³

The point is not to give an exact value, because dedicated [carbon emission calculators](https://1clickimpact.com/website-carbon/parkkamaki-com) exists, but to make you think even a little.

![An illustration of a bonsai tree](./src/images/portfolio-bonsai.png "Bonsai - sustainability and minimalism in one")

You might also have noticed I'm into minimalism in general. I hope the style and the technology stack gave that away. I used to think more is more but nowadays I think digital systems are required but they do not be that complicated most of the times. I prefer simpler solutions that do not try to sell something extra with visual popcorn. For me, minimalism is not having less things but more about paying more attention to what's important.

I tend to be a little perfectionist especially with creative projects. Since I had set meaningful constraints, I feel like I could perfect my design within those. I did not know what the portfolio would look like in the end but I am quite happy with the results.


<!-- ### Mandatory Note On AI

I did use AI to create this website. I used it to help me with programming but refused to use it to create the content.

I feel like at the moment AI is being used everywhere without thinking. Often, it doesn't add any value and changes the vibes of content ever so slightly. AI-made content often feels plasticy and soulless and that is what the internet feels like more and more every day.


## Results

performance (lighthouse score)

usability (make sure it's informative and intuitive)

maintainability (describe how it is adding a new project) -->


## Takeaways

Portfolio is more than writing content and programming a website. It's a project of self-discovery and self-expression. I feel like this version manages to capture some parts of me as it, in a way, looks like me. Portfolio also is definitely not a universal template although mine is free to download and modify. The design of a portfolio should start from the actual requirements you have and what you want to convey with it.

I am grateful that I spent so much time processing the thoughts and progressed meaningfully through the steps although it wasn't as clean process as I described. But hey, that's life. I think allowing it to be slightly messy might be beneficial. I'm happy that I did not default to React as I had done before. Instead I took the time to do look for tools and methods that feel intuitive and simple enough to me. This I think is also where I let the substance define the structure; I had my own requirements to which I matched the tool, not the other way around.

Every ~~detail~~ choice matters. And by choice I mean everything. Not making a choice is also a choice. Some people might be far better off with a premade template or a website builder. But that's not me. I chose to do it this way and I think I have outlined my decision-making well enough in the previous chapters. To give you a few examples as a reminder, I chose to not explicitly choose the typography, I chose to write this project's text in this narrative freeform style, I chose the images and to implement optimisation, I chose to optimise the load for you and the planet, and I chose to maximise the maintainability for myself. These all were conscious choices. I'm not saying you have to do it as painstakingly thoroughly as I did but I did it by a choice.

In the future, I would like to expand my portfolio to include things from my hobbies and interests which are plenty.

If you liked what you read, you can tap the heart below. It's not tracked or stored anywhere; it's simply there to give you a way to mark the moment. And if you'd like to actually reach out, feel free to email me at [lauri@parkkamaki.com](mailto:lauri@parkkamaki.com).

<button class="button like-button" data-start="2026-04-22">
  <span class="like-count">0</span> ❤️
</button>