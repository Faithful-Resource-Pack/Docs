---
title: "Write a Doc"
type: "Docs"
date: "19/07/2021"
deprecated: false
---
# How to write a new documentation article

You can add a new article by creating a new file in the `src/routes/pages` directory or any of its subdirectories.
Please only use markdown files and do not change anything on the existing HTML, CSS or JavaScript.

## Front Matter

The article needs a front matter to get recognized automatically.
It has to be the first thing in the file and defines the title and other properties of your article.
Below you can see an example.
```yml
---
title: 'Your title here'
type: 'Docs'
date: 'dd/mm/yyyy'
deprecated: false
---
```

## Markdown

Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004.  
You can find a useful cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).  
You can find a useful online editor for it [here](https://hackmd.io/) (click the blue button saying: ``use for free``).  

## Other programming/markup languages

We recommend only using markdown, but other languages can be used or included in the markdown file:
- HTML
- CSS (using the `style` html tag)
- JavaScript (using the `script` html tag)
- [SvelteKit logic blocks](https://svelte.dev/docs#template-syntax-if)
