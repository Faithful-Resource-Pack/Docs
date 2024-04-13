---
layout: home
title: Faithful Docs
hero:
  name: Welcome to the <span class="colorful">Faithful Docs</span>
  tagline: Documentation and guides related to the Faithful Project for texture making, moderation, and more.
  image:
    src: https://database.faithfulpack.net/images/branding/logos/transparent/512/plain_logo.png
    alt: Faithful Logo
---
<style>

.colorful {
  background: -webkit-linear-gradient(115deg, var(--faithful-brand) 30%, var(--secondary-brand));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:root {
  --vp-home-hero-name-color: var(--vp-c-text-1);
  --vp-home-hero-image-background-image: linear-gradient(45deg, #76c94555 50%, #00a2ff55 50%);
  --vp-home-hero-image-filter: blur(44px);
}

/* bigger blur for bigger screens */
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>