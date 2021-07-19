---
title: Home
---
<p align="center">
  <img src="{{ site.baseurl }}/images/logo.png" alt="Logo">
</p>

<h1>Welcome to the docs</h1>
<p align="justify">On this site you will find documentation and guides related to the Compliance Resource Pack.</p>

<div class="table-of-content" style="position: inherit;">

<h2>Table of Contents</h2>
<ul>

{% assign sorted_pages = site.pages | sort:"title" %}
{%- assign sorted_pages = site.pages | sort: "type" -%}
{%- assign items = "CompliBot, Docs, Dungeons, Modpacks, Mods, Textures" | split: ", " -%}

{%- for item in items -%}
<li><h3>{{ item }}</h3></li>

{%- for page in sorted_pages -%}
{%- unless page.title == "Home" -%}
<ul>
{%- if page.type == item -%}
<li><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></li>
{%- endif -%}
</ul>
{%- endunless -%}
{%- endfor -%}

{%- endfor -%}
</ul>
</div>