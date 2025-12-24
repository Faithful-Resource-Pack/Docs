---
title: "Write a Doc"
category: "Manuals"
date: "2021-07-19"
---

# How to write a new documentation article

You can add a new article by creating a new file in the `pages/` directory or any of its subdirectories.
Please only use Markdown files and do not change anything on the existing CSS or TypeScript.

## Frontmatter

Each article must contain frontmatter specifying metadata like the title, category, and other relevant properties. Without it, the article will not appear in the sidebar or navigation and hence be inaccessible.
Below you can see an example.

```yaml
---
title: "Your title here"
category: "Docs" # optional, falls back to folder name
date: "yyyy-mm-dd"
deprecated: false # optional
archived: false # optional
---
```

## Markdown

Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004. You can find a useful cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), and a useful online editor for it [here](https://markdownlivepreview.com/).

## Other programming/markup languages

We recommend only using Markdown, but other languages can be used or included in the Markdown file:

- HTML
- CSS (using the `style` html tag)
- JavaScript (using the `script` html tag)
- [Vue components](https://vitepress.dev/guide/using-vue)
