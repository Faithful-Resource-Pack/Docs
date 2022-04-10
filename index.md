---
title: Home
---
<p align="center">
  <img src="https://database.faithfulpack.net/images/branding/wordmarks/outlined/flat/faithful_flat_border.png" alt="Wordmark">
</p>

<h1>Welcome to The Docs.</h1>
<p align="justify">Here you will find documentation and guides related to the Faithful Project, including the Faithful Resources Packs, Discord bots and website.</p>

<h2>Tags</h2>
<ul class="no-heads">
  <li><span class="new-badge">NEW</span>: This is a recently released article.</li>
  <li><span class="deprecated-badge">DEPRECATED</span>: This article has old and/or inacurate information, and needs to be reviewed and updated.</li>
</ul>

<h2>Table of Contents</h2>
<div class="table-of-content" style="position: inherit;">

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
