---
title: "Alpha Textures"
type: "Dungeons"
date: "03/08/2020"
deprecated: false
---

<style>
  li, p {
    text-align: justify;
  }
</style>

# Make texture using full or half transparent pixels

## Introduction

Minecraft Dungeons is known to use textures with invisible or half-visible pixels, that's an issue when your software do not allow you to save pixel with alpha value set to 0. Here come handy scripts to help you making those tricky texture!

## Sources

All scripts are available [here](https://github.com/Compliance-Dungeons/Resource-Pack/tree/master/Tools/alpha_img).  
_If you find any bugs, please post a new issue on GitHub._

## Requirements

- Pillow is required to use those programs!

```python
 python3 -m pip install --upgrade pip
 python3 -m pip install --upgrade Pillow
```

> Follow this tutorial if you don't know how to use inline commands: [YouTube Link](https://www.youtube.com/watch?v=Jey1GH8CERI)

## Scripts
<ul>
    <li>
        <code class="language-plaintext">remove_alpha.py</code><br><br>
        <img src="{{ site.baseurl }}/images/pages/dungeons/alpha-img/remove_alpha.png" width="192" height="64" loading="lazy">
        <blockquote>From Alpha to Opaque.</blockquote>
        <p>Set <strong class="red-text">all pixels</strong> opaques.</p>
        <ul>
            <li>Use <code class="language-plaintext">BASE_remove_alpha.png</code> as base.</li>
            <li>Return <code class="language-plaintext">RESULT_remove_alpha.png</code>.</li>
        </ul>
    </li>
    <br>
    <li>
        <code class="language-plaintext">get_alpha.py</code><br><br>
        <img src="{{ site.baseurl }}/images/pages/dungeons/alpha-img/get_alpha.png" width="192" height="64" loading="lazy">
        <blockquote>From Opaque to Alpha.</blockquote>
        <p>Set <strong class="red-text">all pixels</strong> transparents.</p>
        <ul>
            <li>Use <code class="language-plaintext">BASE_get_alpha.png</code> as base.</li>
            <li>Return <code class="language-plaintext">RESULT_get_alpha.png</code>.</li>
        </ul>
    </li>
    <br>
    <li>
        <code class="language-plaintext">merge_alpha_layers.py</code><br><br>
        <img src="{{ site.baseurl }}/images/pages/dungeons/alpha-img/merge_alpha_layers.png" width="192" height="192" loading="lazy">
        <blockquote>Merge both types easily.</blockquote>
        <p>With this one, you have to set "masks", one with opaque pixels, one with transparents pixels.</p>
        <ul>
            <li>Use <code class="language-plaintext">BASE_merge_alpha_layer0.png</code> as base for solid pixels.</li>
            <li>Use <code class="language-plaintext">BASE_merge_alpha_layer1.png</code> as base for transparent pixels.</li>
            <li>Return <code class="language-plaintext">RESULT_merge_alpha.png</code>.</li>
        </ul>
    </li>
</ul>