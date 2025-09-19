# Porfolio UX For UX Porftolio


Designing your UX/UI portfolio is fun but implementing it can be a burden.

Streamlined approach with both the user and designer in mind.

The page is easy to read and navigate without any fancy js. As fast as possible.

The designer can focus on writing content, not code.




## Features
- static no-JS portfolio website
- loads fast!
- write pages as .md files
- external links (socials)
- simple nav
- responsive design
- respects system theme
  - theme cannot be toggled due to no-JS approach but it easily configurable
- minify html+css output

- comes with a minimal brutalist theme

## Usage
- edit _data/site.json
  - change how many posts and projects you want on the home page
    - projects need a "highlight" tag to appear on home page
    - latest posts are selected automatically
- edit .md files
- add portfolio pages or blog posts (.md files)
- use realfavicongenerator to generate your favicon, put the contents into src/favicon/
- add your portfolio as a `png` file

## Running
```
npm i
npm start
```
