---
layout: home
title: Faithful Docs

hero:
  name: Welcome to the <span class="colorful">Faithful Docs</span>
  tagline: Documentation and guides related to the Faithful Project for texture making, moderation, and more.
  image:
    src: https://database.faithfulpack.net/images/branding/logos/transparent/512/plain_logo.png
    alt: Faithful Logo

---

## Tags

<Badge type="danger" text="NEW" />: This is a recently released article.
<br />
<Badge type="warning" text="DEPRECATED" />: This article is no longer being updated and may contain outdated information.
<br />
<Badge type="info" text="ARCHIVED" />: This article is no longer relevant to Faithful, but is staying up for archival purposes.

<style>

.colorful {
  background: -webkit-linear-gradient(115deg, var(--faithful-brand) 30%, var(--secondary-brand));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:root {
  --vp-home-hero-name-color: var(--vp-c-text-1);
  --vp-home-hero-image-background-image: linear-gradient(45deg, #76c94599 50%, #00a2ff99 50%);
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