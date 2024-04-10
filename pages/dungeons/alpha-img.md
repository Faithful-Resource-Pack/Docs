---
title: "Alpha Textures"
type: "Dungeons"
date: "2020-08-03"
archived: true
---

# Make texture using full or half transparent pixels

## Introduction

Minecraft Dungeons is known to use textures with invisible or half-visible pixels. This can be an issue when your software do not allow you to save pixels with their alpha value set to 0. There are a bunch of handy scripts to help you making these tricky textures!

## Sources

All scripts are available [here](https://github.com/Faithful-Resource-Pack/Faithful-Dungeons-32x/tree/dungeons-latest/Tools/alpha%20textures).
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
        <code>remove_alpha.py</code><br><br>
        <img src="/images/pages/dungeons/alpha-img/remove_alpha.png" alt="remove alpha" width="192" height="64" loading="lazy">
        <blockquote>From Alpha to Opaque.</blockquote>
        <p>Set <strong class="red-text">all pixels</strong> opaque.</p>
        <ul>
            <li>Use <code>BASE_remove_alpha.png</code> as base.</li>
            <li>Return <code>RESULT_remove_alpha.png</code>.</li>
        </ul>
    </li>
    <br>
    <li>
        <code>get_alpha.py</code><br><br>
        <img src="/images/pages/dungeons/alpha-img/get_alpha.png" alt="get alpha" width="192" height="64" loading="lazy">
        <blockquote>From Opaque to Alpha.</blockquote>
        <p>Set <strong class="red-text">all pixels</strong> transparent.</p>
        <ul>
            <li>Use <code>BASE_get_alpha.png</code> as base.</li>
            <li>Return <code>RESULT_get_alpha.png</code>.</li>
        </ul>
    </li>
    <br>
    <li>
        <code>merge_alpha_layers.py</code><br><br>
        <img src="/images/pages/dungeons/alpha-img/merge_alpha_layers.png" alt="merge alpha layers" width="192" height="192" loading="lazy">
        <blockquote>Merge both types easily.</blockquote>
        <p>With this one, you have to set "masks", one with opaque pixels, one with transparent pixels.</p>
        <ul>
            <li>Use <code>BASE_merge_alpha_layer0.png</code> as base for solid pixels.</li>
            <li>Use <code>BASE_merge_alpha_layer1.png</code> as base for transparent pixels.</li>
            <li>Return <code>RESULT_merge_alpha.png</code>.</li>
        </ul>
    </li>
</ul>