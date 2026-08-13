---
title: "Classic Faithful 32x Texturing Guidelines"
category: "Textures"
date: "2022-08-22"
---

# Classic Faithful 32x Texturing Guidelines

## Introduction

*Classic Faithful's art direction is fundamentally built around Vattic, Faithful's founder. Unpacking the five years of textures he left behind and seamlessly carrying on from there has been a years-long endeavor, being further complicated with Classic Faithful 32x Jappa's need to apply his techniques to JAPPA's radically different art style.*

*At first glance, Vattic's style is idiosyncratic at best, oftentimes being openly inconsistent even within the same set of textures or materials. As soon as you think he followed any sort of general guiding principles, there's immediately at least three or four exceptions to the rule. How can you make a set of rules for a pack so obviously never governed by any?*

*We've accepted that these guidelines can never be truly exhaustive in terms of how Vattic worked or exactly what methods he would have chosen in a given situation, since you can plausibly justify any number depending on which reference you're looking at. Instead of being a tutorial on how to create a perfect texture every time, these guidelines only aim to provide a primer on common techniques you may see and generally when they'll appear. You'll still need to rely on your own judgment for finding reference material and choosing the right techniques, but ultimately, community feedback will be your biggest resource over any document.*

*Ready to begin? Let's get started with some basics.*

::: tip
Many texturing and Faithful-specific terms are referred to throughout these guidelines. Make sure to read the [Faithful Texturing Glossary](/pages/textures/glossary) if you run into any terminology you're unfamiliar with.
:::

## Part 1: General Rules and Tips

### **Rules**

While there may be some exceptions in particularly difficult circumstances, these rules apply to all Classic Faithful 32x textures and must be followed for a texture to be considered viable.

1. **Textures need to follow vanilla Minecraft textures.** A good rule of thumb is to check how the texture looks from far away compared with vanilla in-game (or at a low GUI scale if it's an item sprite). Keep an eye out for proportions, general color ratios, shaping, lighting direction, and material definition.

<img src="/images/textures/cf32-texturing-guidelines/follow_default.png" alt="default vs cf" class="center">
<i class="center">Right: A texture with vanilla color placement, proportions, and overall structure. Left: Its vanilla counterpart.</i>

2. **Reference existing textures.** This is one of the most important tips to make textures look like they fit. Not only should you reference Vattic's own art, especially if there's a direct programmer art equivalent, but you should also reference existing textures that may be similar shape or material-wise. Using a lot of reference material also has the added upside of making texturing oftentimes easier, since you can frequently copy shapes or shading ideas from a texture already in the pack.

<img src="/images/textures/cf32-texturing-guidelines/reference_vattic.png" alt="vattic vs cf" class="center">
<i class="center">Left: Vattic's bricks. Right: Its Jappa equivalent.</i>

3. **With detailing, less is more.** Try asking yourself, "Could Jappa have done this in a 16x canvas?" before adding additional detail, and avoid reaching for techniques like dithering and excessive antialiasing if there's no need for it. There are exceptions to this rule, however, and you should always get feedback if you're struggling with the amount of detail a texture should have.

<img src="/images/textures/cf32-texturing-guidelines/less_is_more.png" alt="overdetailed textures" class="center">
<i class="center">Left: A texture with just enough detail. Right: An overdetailed texture.</i>

4. **Don't overly change the vanilla palette.** While adding in-between colors is encouraged to eliminate "plasticky" areas, it's easy to overdo and should usually be avoided unless actually needed. When adding colors, ensure that the darkest and lightest colors of the texture aren't altered to avoid changing the overall contrast, and never change any already-existing colors in a texture. Again, there are certain specific exceptions to this rule, which will be covered later on.

<img src="/images/textures/cf32-texturing-guidelines/palette.png" alt="constructive color use" class="center">
<i class="center">Left: Vanilla texture. Center: Unnecessary use of added colors. Right: Constructive use of added colors.</i>

5. **When making item textures, keep the outline one pixel-wide.** Vattic's item sprites always used one pixel-wide outlines, and while they are theoretically more proportionate, at the scale of a 32x resource pack they tend to look unrealistic and chunky. If the texture doesn't have a clear outline or the vanilla texture itself doesn't use a one pixel-wide outline, then it can be acceptable to use more than one pixel, but these are generally rare circumstances.

<img src="/images/textures/cf32-texturing-guidelines/1px_items.png" alt="thinned outlines" class="center">
<i class="center">Left: Examples of textures with two pixel-wide outlines. Right: Textures with one pixel-wide outlines.</i>

6. **If a vanilla texture references an outdated texture, use the outdated texture as a base in the Classic Faithful counterpart.** Classic Faithful generally maintains version accuracy, so any bugs in a given version are usually accurately maintained unless actively detrimental. Examples of this phenomenon include the observer top using an outdated furnace base, the end crystal using an outdated bedrock texture, and smooth stone using an outdated stone texture.

7. **If a texture uses another texture as a base, use the already existing Classic Faithful rendition of it, if available.** An example of this would be planks and the crafting table. Don't make planks from scratch just for the crafting table texture, since it's both a waste of effort and actively creates an inconsistency.

<img src="/images/textures/cf32-texturing-guidelines/reuse_textures.png" alt="reusing textures" class="center">
<i class="center">A texture that directly references another. Note the identical plank background on the crafting table.</i>

8. **Don't upscale useless textures.** Fairly self-explanatory: if a texture would end up looking identical to vanilla when upscaled, is unused, or is already so high-resolution that there's no real need to upscale it, then it should not be upscaled since it would bloat the pack's file size be a waste of effort.

### **Tips**

These are less specific ways to improve your textures, and are usually judged on a texture-by-texture basis.

1. **Mob faces** can be difficult to interpret. While eyes can sometimes be blended (such as the Steve and villager textures), this doesn't work in all cases. Try to upscale other features unless you cannot make it work (or it creates your new sleep paralysis demon), in which case leaving it the same as default is fine (a "mixel" face).

<img src="/images/textures/cf32-texturing-guidelines/mob_faces.png" alt="mob faces" class="center">
<i class="center">Left and center: Examples of "demixelled" mob faces. Right: A hard to interpret face left as mixels.</i>

2. **Smooth jagged lines whenever possible.** A common texturing issue is creating jagged or lumpy edges (colloquially called "jaggies") when upscaling lines and curves. This can be prevented by ensuring that the number of pixels per row in a curve always increases and decreases uniformly.

<img src="/images/textures/cf32-texturing-guidelines/jaggies.png" alt="jaggies vs not jaggies" class="center">
<i class="center">Left: Examples of jagged edges and curves. Right: Examples of smooth edges and curves.</i>

3. **Avoid flat two pixel-wide lines.** While Classic Faithful prefers maintaining vanilla proportions and not thinning out dividing lines, leaving these outlines unshaded often makes a texture look unfinished and flat. This issue can be resolved by using a blending color to apply depth shading to the line or simply reducing the width of the band if applicable.

<img src="/images/textures/cf32-texturing-guidelines/overuse_2px.png" alt="stairing pixels" class="center">
<i class="center">Left: Improper interpretation of textures. Right: Utilizing the larger canvas size to remove unnecessarily thick lines.</i>

::: tip And most importantly...
Always get feedback from others while drawing a texture! It will help you improve in ways you wouldn’t even have thought of.
:::

## Part 2: Material Reference List

This section goes into detail about how to shade materials that you shouldn't shade in the "normal" way. If a material is not on this list, refer to the first entry.

**Conventional/normal/painted upscaling** (used for basically everything not on this list) has no real special or unique way to shade these textures. Simply upscale them normally by smoothening out curves and shapes, taper off any lines and defined structures, add antialiasing and added colors to remove flat areas if and where needed, and keep stylistic cohesion present wherever possible by cross-referencing existing textures as much as possible.

<img src="/images/textures/cf32-texturing-guidelines/conventional.png" alt="conventionally upscaled textures" class="center">
<i class="center">Examples of conventionally upscaled blocks.</i>

**Gem and metal blocks** should be upscaled through a normal pass, and similar to the shading on large bricks if there are defined gaps and highlights, blend them. Added color usage is also encouraged to accurately portray a shiny material. For gaps, depth shade them by adding a lighter color(s) rather than a darker one, to give the texture an almost "glowy" look..

<img src="/images/textures/cf32-texturing-guidelines/gem_and_metals.png" alt="gem and metal textures" class="center">
<i class="center">Examples of gem and metal blocks. Note the heavy usage of added colors and blended gaps.</i>

**Contiguous stones** that are not broken up into defined shapes should not have any added colors, and should be upscaled in a highly "painted" style, meaning that blobs of color shouldn't have definition added to them where none exists, and it should be upscaled in a very literal sense of being closer to a simple "demixelling" pass. However, avoiding jagged edges and keeping stylistic cohesion present with the rest of the textures is still important.

<img src="/images/textures/cf32-texturing-guidelines/contiguous_stone.png" alt="contiguous stone textures" class="center">
<i class="center">Examples of contiguous stone textures. Note the lack of added detail and the plasticky look.</i>

**Rocky materials with distinct stones** should first use added colors to define what is a rock and what is a gap before doing anything else. After this, upscale normally while ensuring that the gaps and the rocks are visibly separated and don't overly blend into each other using added colors. Always shape based on the rocks, and the gaps will follow based on the rocks and look natural as a result. Otherwise, the rocks won't look anything like rocks!

<img src="/images/textures/cf32-texturing-guidelines/distinct_stone.png" alt="rocky textures" class="center">
<i class="center">Examples of textures with distinct rocks. Note the visible separation of the rounded rocks and gaps through added colors, particularly in comparison to their vanilla counterparts.</i>

**Small bricks and tiles** should thin out the gaps to one pixel-wide in the direction that looks best, and be upscaled normally from there. If the bricks have highlights or shadows, thin those out as well to one pixel-wide. If the texture ends up looking flat due to the larger brick size after thinning out the gaps and highlights, added colors and even dithering sometimes may be helpful depending on the texture.

<img src="/images/textures/cf32-texturing-guidelines/tiles.png" alt="small brick textures" class="center">
<i class="center">Examples of small bricks and tiles. Note the one pixel-wide gaps/highlights and slight usage of dithering.</i>

**Large bricks (and polished stones in certain situations)** should leave the gaps, highlights, and shadows two pixels wide, and be upscaled normally from there. Depth shade the gaps and highlights, and for the gaps add a darker color as opposed to gems which add a lighter color. This helps give the gaps a 3d effect and makes the gaps a lot less flat and "AI upscaled" looking. If the bricks have a linear pattern, small amounts of linear dithering may also be helpful.

<img src="/images/textures/cf32-texturing-guidelines/large_bricks.png" alt="large brick textures" class="center">
<i class="center">Examples of larger bricks and polished stones. Note the usage of two pixel-wide blended gaps, small amounts of linear dithering, but the overall painted look.</i>

**Polished stone/wood** are the same as large bricks, only with the interior of the texture being tiled and the obvious tiling repetitions removed. However, only do this if it looks good, otherwise refer to the entry of large bricks if it has a "noisy" or nonvanilla appearance which is undesirable.

<img src="/images/textures/cf32-texturing-guidelines/polished_stone.png" alt="polished stone textures" class="center">
<i class="center">Examples of polished stone and wood blocks. Note how the detail looks tiled and much more fine compared to vanilla, and the usage of two pixel-wide blended gaps.</i>

**Tree bark and mushroom stems** should have heavy amounts of antialiasing in the direction the texture goes added manually using added colors. This is primarily done to preserve the aesthetic of Vattic's original logs, which had an extremely glossy, almost motion blurred appearance and had no real reasoning for being so.

<img src="/images/textures/cf32-texturing-guidelines/bark.png" alt="log and stem textures" class="center">
<i class="center">Examples of heavily motion blurred logs. Note the usage of added colors going in the direction of the texture's linearity.</i>

**Planks and other refined wood** should be upscaled with a lot of linear dithering and small amounts of antialiasing, to accurately portray a wood grain material. A method of doing this which is useful for planks involves stretching the vanilla texture, tiling it downwards, and fixing any awkward areas. Alternatively, if this method does not work well, simply extend out the detail to portray a linear look. Do not add colors unless absolutely necessary, and preserve default's contrast where possible.

<img src="/images/textures/cf32-texturing-guidelines/refined_wood.png" alt="refined wood textures" class="center">
<i class="center">Examples of refined wood. Note the detailed and linear look.</i>

**Leaves and larger plants** can use small amounts of dithering on the branches mixed in with a slightly increased usage of antialiasing and/or added colors. With thicker plants like cacti or bamboo, don't use any dithering and upscale conventionally.

<img src="/images/textures/cf32-texturing-guidelines/big_plants.png" alt="larger plant textures" class="center">
<i class="center">Examples of larger plants. Note the lack of any blending method on stalks and stems.</i>

**Flowers and other foliage** can use dithering more heavily than leaves or stalks. Similar to rocky stones, ensure that flowers have a defined shape and don't overly blend into the stems or leaves, and depending on the flower type either dither or antialias. For plant stems, antialias heavily and thin them out. Vines should be evenly conventionally dithered throughout the entire texture, and use heavy amounts of antialiasing in addition.

<img src="/images/textures/cf32-texturing-guidelines/foliage.png" alt="foliage textures" class="center">
<i class="center">Examples of general foliage. Note the usage of dithering on the vines and on certain flowers, and how the flower stems were thinned out.</i>

**Grassy textures and certain fungi** should use a "jumble" or "scramble" filter if your editing program has that, with a few edits to fix mixels and other visual issues. If it doesn't, manually dither it to give it a coarse texture. Keep the palette as close to vanilla as possible to preserve the contrast, sometimes you may want to use additional effects and index it back to the vanilla palette.

<img src="/images/textures/cf32-texturing-guidelines/grass.png" alt="grassy textures" class="center">
<i class="center">Examples of grassy textures. Note the usage of patchy dithering.</i>

**Sand and other powdery materials** should tile the block in a 2x2 grid, then cut out random sections and rotate and/or flip them randomly to remove repetitions that stops the texture from looking just tiled on its own.

<img src="/images/textures/cf32-texturing-guidelines/powders.png" alt="powdery textures" class="center">
<i class="center">Examples of powdery materials. Note the fine detail and how it looks almost tiled but isn't.</i>

**Sandstone** should have large amounts of dithering present, a jumble tool may also suffice if necessary. Thin out natural gaps a lot more than otherwise, to give a more slate-like appearance. For more refined textures such as cut or chiseled sandstone antialiasing can also be used to properly convey smoothness.

<img src="/images/textures/cf32-texturing-guidelines/sandstone.png" alt="sandstone textures" class="center">
<i class="center">Examples of sandstone textures. Note the heavy usage of dithering, and heavy usage of antialiasing on polished blocks.</i>

**Prismarine** should use added colors and antialiasing excessively to convey a smooth, shiny material. Thin out and curve highlights, and reduce gaps to one pixel-wide.

<img src="/images/textures/cf32-texturing-guidelines/prismarine.png" alt="prismarine textures" class="center">
<i class="center">Examples of prismarine textures. Note the heavy reliance on antialiasing to prevent flatness, and the one pixel-wide gaps and highlights.</i>

**Contrasty dirt and stone textures** should soften the colors by using a translucent layer of the midtone color or manually editing the contrasty colors, and tile vanilla 16x on top of the texture at a low opacity using another different layer. However, only do this if the texture is particularly contrasty and the vanilla palette doesn't look good in any way even with added colors, as this method can add a lot of unnecessary colors and should be used as a last resort.

<img src="/images/textures/cf32-texturing-guidelines/contrasty_stone.png" alt="tiled detail textures" class="center">
<i class="center">Examples of contrasty dirt and stone textures. Note the noisy look.</i>

**Icy and glassy textures** should use antialiasing excessively. For items in particular, added colors should be used to properly convey a smooth surface. For textures with an obvious diagonal shine, thin out the shine marks and use antialiasing in the direction of the the marks to convey a streaky look, almost like diagonal linear dithering.

<img src="/images/textures/cf32-texturing-guidelines/ice_and_glass.png" alt="ice and glass textures" class="center">
<i class="center">Examples of glassy and icy blocks. Note the usage of antialiasing and added colors.</i>

**Fur and fabric** should avoid false lines forming at all costs, which is very easy to happen given the spiky nature of these materials. Upscale it normally, and try to avoid having lines every two pixels from 16x by thickening and thinning out some of the spikes on the texture. Generally, the farther from the base color a spike gets, the thinner it should be. This creates a more natural effect and stops it from looking mindlessly upscaled.

<img src="/images/textures/cf32-texturing-guidelines/fur.png" alt="fabric and fur textures" class="center">
<i class="center">Examples of fabric and fur textures. Note the heavy usage of tapering lines and spikes.</i>

**Doors and trapdoors** should be upscaled like what they are made of. However, doors should always use one pixel-wide borders, while trapdoors can use two pixel-wide blended outlines for the outer border. This discrepancy is due to Vattic's original wooden door and trapdoor having this inconsistency present.

<img src="/images/textures/cf32-texturing-guidelines/doors.png" alt="door and trapdoor textures" class="center">
<i class="center">Examples of doors and trapdoors. Note the usage of depth shading on the trapdoors and one pixel-wide lines on the doors.</i>

::: tip And above all...
Always reference [Vattic's art](https://web.archive.org/web/20170630235514/faithful32x32.com/dl/faithful32pack.zip/) or other similar textures if possible first. _Use these material guidelines only if there is no good reference point or equivalent!_
:::

## Part 3: "Progartification" and Classic Faithful 32x

These guidelines have mainly referenced Classic Faithful 32x Jappa thus far. For the regular Classic Faithful 32x pack, explaining how to upscale programmer art to the same level of detail is pointless, since all of its programmer art-era work has been completed for years. That being said, a question arises in how new textures are treated: should they be retroactively "progartified" to match the feel of the other work in the pack, or left as-is?

::: danger Our answer:
Newer textures should never be "progartified" to match older ones unless there is one—and only one—obvious way to make it. When in doubt, defer to the vanilla programmer art resource pack.
:::

Even though newer Jappa textures have a distinct style from programmer art, the exact way a developer would have gone about making a certain texture can't ever be known for sure, and it isn't really our job to interpret that. While a texture like nylium, which was introduced in 1.16, has an obvious fix (to update the netherrack texture), a texture like blackstone has no clear programmer art equivalent, and as such shouldn't be edited.

<img src="/images/textures/cf32-texturing-guidelines/progartification.png" alt="progartification" class="center">
<i class="center">Left: Nylium, an example of a texture that should be "progartified" to fix an obvious oversight in the vanilla programmer art resource pack. Right: Blackstone, an example of a texture with no clear programmer art equivalent and should not be changed from its Jappa texture.</i>

## Part 4: Working With Larger Palettes

One hallmark of programmer art-era textures is a large palette size. Conventional upscaling techniques and wisdom begin to break down when working with gradients, procedural noise, and blur filters, so a number of methods have been developed to work around these issues.

**Tiling with edits** is ideal for powdery or grainy textures, such as concrete powder. Simply tile the texture in a 2x2 grid, and edit is to edit the texture after it's been tiled to remove noticeable repetitions. One way to remove repetitions is to marquee select random rectangles throughout the texture and flip or rotate the selection, since it ensures that the color proportions don't get unnecessarily altered.

<img src="/images/textures/cf32-texturing-guidelines/tile_with_edits.png" alt="tiling repetitions" class="center">
<i class="center">Left: The default texture. Center: The default texture tiled in a 2x2 grid. Right: Tiling repetitions removed.</i>

**Jumble filters**, sometimes also called "scrambling" or "diffuse" filters, is particularly useful for grassy or low-contast textures. It creates a patchy appearance by randomly shuffling pixels while keeping the color areas intact. Not all materials will support this method, due to the messy appearance of the displaced pixels, but it can oftentimes lead to results that look very similar to vanilla.

<img src="/images/textures/cf32-texturing-guidelines/jumble.png" alt="jumbling" class="center">
<i class="center">Examples of texture upscaling via jumbling.</i>

**Tiled detail** can be useful for adding material definition to a chaotic vanilla textures. After making a cursory upscale (potentially using another technique in this list), tile the same vanilla 16x texture you're upscaling on a separate layer on top of your upscale at a low opacity. This adds some grain to your texture, and can restore detail that may have been smoothened out through manual upscaling.

<img src="/images/textures/cf32-texturing-guidelines/tiled_detail.png" alt="tiled detail" class="center">
<i class="center">Left: An automatically upscaled base. Center: The vanilla texture tiled. Right: The two overlaid on top of each other.</i>

**Softening** is effectively the opposite of tiled detail, in that it reduces the graininess of an existing upscale. Instead of using the tiled vanilla texture as an overlay, heavily blur the texture and reapply it on top at a low opacity. This decreases the overall contrast of the texture and can smooth out harsh details caused by tiling or jumbling.

<img src="/images/textures/cf32-texturing-guidelines/softening.png" alt="softening" class="center">
<i class="center">Left: A base upscale. Center: The base upscale blurred. Right: The two overlaid on top of each other.</i>

**Indexing and re-adding noise** is particularly useful for textures with minimal but noticeable noise. By quantizing the palette to something more reasonable, it becomes much easier to upscale the texture normally. From there, noise can be re-added at a similar level to the vanilla texture to restore its appearance. This is oftentimes the only viable technique for textures with defined structures or gaps.

<img src="/images/textures/cf32-texturing-guidelines/indexing.png" alt="indexing" class="center">
<i class="center">
	Top right: The default vanilla texture. Top left: Indexed down to essential colors.<br>
	Bottom Left: An upscale of the indexed version. Bottom right: Restored noise, finished version.
</i>

**Automatic upscaling algorithms**, such as bilinear, RotSprite, or bicubic filters, can be useful in areas with low-contrast or blurry detail. This is oftentimes best combined with another technique, such as a jumble filter layer, since it can create excess blurriness or harsh tiling repetitions otherwise.

<img src="/images/textures/cf32-texturing-guidelines/bilinear.png" alt="bilinear upscale" class="center">
<i class="center">Left: The programmer art bone block. Right: A bilinear upscale of said bone block.</i>

::: tip
Many of the techniques listed here can work in conjunction with each other. You can even crop out certain areas of a texture and upscale them separately, effectively isolating areas of a texture from each other to make palette sizes more manageable and localized.
:::

## Conclusion

*Congratulations on getting through the whole doc! Always remember that the most useful asset at your disposal is community feedback, and that you should take advantage of that resource as early and frequently as possible.*

*If you have any questions or want something changed, make sure to let us know on our [Discord server](https://discord.gg/KSEhCVtg4J).*

## Credits go to…

- The [Faithful 32x guidelines](/pages/textures/f32-texturing-guidelines) by [Pomi108](https://github.com/Pomi108), which this document drew heavy inspiration from.
- Written by [Evorp](https://3vorp.github.io).
- Edits by [ZapPack](https://www.twitch.tv/zappack_).
- Images by various Classic Faithful contributors and Mojang Studios.
