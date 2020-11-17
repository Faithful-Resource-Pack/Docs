---
title: Home
---
<p align="center">
  <img src="{{ site.baseurl }}/images/logo.png" alt="Logo">
</p>

# Welcome to the docs

On this site you will find documentation and guides related to the Compliance Resource Pack.

## Pages

This is a list of all available pages on this site.

{% assign sorted_pages = site.pages | sort:"title" %}
{% for page in sorted_pages %}
{% unless page.url contains "assets/css/style.css" or page.title == "Home" %}- [{{ page.title }}]({{ site.baseurl }}{{ page.url }}){% endunless %}
{% endfor %}
