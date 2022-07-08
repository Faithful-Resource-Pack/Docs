---
title: "Write a Doc"
type: "Docs"
date: "19/07/2021"
---
# How to write a new documentation article

You can add a new article ba creating a new file in the pages directory or any of its subdirectories.
Please only use markdown files and do not change anything on the existing HTML, CSS or JavaScript.

## Front Matter

The article needs a front matter to get recognized automatically.
It has to be the first thing in the file and defines the title of your article.
Below you can see an example.
```yml
---
title: 'Your title here'
type: 'Docs'
date: 'dd/mm/yyyy'
---
```

## Add a new type of docs:
Currently, documents ``type`` could be: ``API``, ``CompliBot``, ``Docs``, ``Dungeons``, ``Modpacks``, ``Mods``, ``Textures``.  
If you want to add a new type, please modify this [line](https://github.com/Faithful-Resource-Pack/Docs/blob/main/_layouts/default.html#L34).

## Markdown

Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004.  
You can find a useful cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).  
You can find a useful online editor for it [here](https://hackmd.io/) (click the blue button saying: ``use for free``).  

## Jekyll

You can also use the liquid templating language which is used by Jekyll.  
You can find a useful cheatsheet [here](https://shopify.github.io/liquid/).
