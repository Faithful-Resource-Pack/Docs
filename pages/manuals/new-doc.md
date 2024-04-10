---
title: "Write a Doc"
type: "Manuals"
date: "2021-07-19"
---

# How to write a new documentation article

You can add a new article by creating a new file in the `pages/` directory or any of its subdirectories.
Please only use markdown files and do not change anything on the existing CSS or TypeScript.

## Front Matter

The article needs a front matter to be added to the sidebar and be easily viewable.
It has to be the first thing in the file and defines the title and other properties of your article.
Below you can see an example.

```yaml
---
title: "Your title here"
type: "Docs"
date: "yyyy-mm-dd"
deprecated: false # optional
archived: false # optional
---
```

## Markdown

Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004.
You can find a useful cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
You can find a useful online editor for it [here](https://hackmd.io/) (click the blue button saying: `use for free`).

## Other programming/markup languages

We recommend only using markdown, but other languages can be used or included in the markdown file:

- HTML
- CSS (using the `style` html tag)
- JavaScript (using the `script` html tag)
- [Vue components](https://vitepress.dev/guide/using-vue)
