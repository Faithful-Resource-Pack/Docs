---
title: "Faithful 32x Texturing Guidelines"
type: "Textures"
date: "19/03/2022"
deprecated: false
---

<style>
  li, p {
    text-align: justify;
  }
</style>

# Faithful 32x Texturing Rules and Guidelines

<div class="table-of-content">
<h2>Table of Contents</h2>

<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#part-1-terms-and-definitions">Part 1: Terms and Definitions</a></li>
  <ol>
    <li><a href="#blending">(Colour) Blending</a></li>
    <ol class="lettered">
      <li><a href="#no-blending">No Blending</a></li>
      <li><a href="#anti-aliasing">Anti-Aliasing (AA)</a></li>
      <li><a href="#dithering">Dithering</a></li>
      <ol class="roman">
        <li><a href="#checkerboard-dithering">Checkerboard dithering</a></li>
        <li><a href="#regular-dithering">Regular dithering</a></li>
        <li><a href="#linear-dithering">Linear dithering</a></li>
      </ol>
      <li><a href="#colour-banding">Colour Banding</a></li>
    </ol>
    <li><a href="#indexing-colours">Indexing Colours</a></li>
    <li><a href="#upscaling-a-texture">Upscaling</a></li>
    <li><a href="#jappa">JAPPA</a></li>
    <li><a href="#prog-art">Programmer Art</a></li>
    <li><a href="#jappa-textures">JAPPA Textures</a></li>
    <li><a href="#false-lines">False Lines</a></li>
    <li><a href="#mixels">Mixels</a></li>
    <li><a href="#contrast-palette">Contrast</a></li>
  </ol>
  <li><a href="#part-2-general-rules-and-tips">Part 2: General Rules and Tips</a></li>
  <ol>
    Rules
    <li><a href="#mimic-vanilla">Mimic Vanilla Textures</a></li>
    <li><a href="#1px-wide">One Pixel Lines</a></li>
    <li><a href="#shading">Shading</a></li>
    <li><a href="#meaning">Meaning</a></li>
    <li><a href="#vanilla-colour-palette">Vanilla Colour Palette</a></li>
    <li><a href="#too-much-details">Details</a></li>
    <li><a href="#blending-colours">Blending Colours</a></li>
    <li><a href="#erase-colour-banding">Colour Banding</a></li>
    <li><a href="#no-colour-chunk">No Large Single-Colour Areas</a></li>
    <li><a href="#other-texture-as-base">Use Existing Textures as a Base</a></li>
    <li><a href="#identical-when-upscaled">Don't Upscale Useless Textures</a></li>
    <li><a href="#bugs-in-textures">Fix Vanilla Bugs</a></li>
  </ol>
  <ol>
    Tips
    <li><a href="#mob-faces">Mob Faces</a></li>
    <li><a href="#dithering-tip">Dithering</a></li>
    <li><a href="#stairing-pixels">Stairing Pixels</a></li>
  </ol>
  <li><a href="#part-3-material-and-shape-reference-list">Part 3: Material and Shape Reference List</a></li>
  <ul>
    <li><a href="#materials">Materials</a></li>
    <li><a href="#smooth-metal">Smooth Metal</a></li>
    <li><a href="#rough-metal">Rough Metal</a></li>
    <li><a href="#gems">Gemstones</a></li>
    <li><a href="#contiguous-stones">Contiguous Stones</a></li>
    <li><a href="#polished-stones">Polished Stones</a></li>
    <li><a href="#rocky-materials">Rocky Materials</a></li>
    <li><a href="#wood">Wood</a></li>
    <li><a href="#flowers">Flowers</a></li>
    <li><a href="#corals">Corals</a></li>
    <li><a href="#sands">Sand & Powder</a></li>
    <li><a href="#bee-nests">Bee Nests</a></li>
    <li><a href="#honey">Honey & Slime</a></li>
    <li><a href="#terracotta">Glazed Terracotta</a></li>
    <li><a href="#glass">Glass</a></li>
    <li><a href="#bones">Bones</a></li>
    <li><a href="#cloth-paper">Cloth & Paper</a></li>
    <li><a href="#skin">Skin</a></li>
    <li><a href="#creepers">Creepers</a></li>
    <li><a href="#fur-hair">Fur & Hair</a></li>
    <li><a href="#fish">Fish Entity</a></li>
    <li><a href="#shapes">Shapes</a></li>
    <li><a href="#cylinders">Cylinders</a></li>

  </ul>
  <li><a href="#part-4-fixing-jappas-mistakes-and-things-hes-forgotten">Part 4: Fixing JAPPA’s Mistakes and Things He’s Forgotten</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
  <li><a href="#final-note">Final Note</a></li>
  <li><a href="#credits">Credits</a></li>
</ul>
</div>

___

## Introduction

<p>
  <i>Faithful was meant to be a love letter to the artists that created the world of Minecraft. In doing a default style resource pack such as this, we pay respect to the art by following the design philosophies made by JAPPA in order to maintain Faithful.
  But since the pack was premised primarily on community contributions, the risk of inconsistency in the art loomed over us. We figured that with a set of rules or guidelines, these inconsistencies could be reduced and allow the pack to flourish.
  Initially, we tried to have minimal, ambiguous guidelines so as to not limit people’s creativity too much, in the hopes that artists would stick to approximately the same style. This proved to be too optimistic, and as the pack expanded, textures with increasing degrees of stylistic variety were added, hindering the overall consistency of the pack.
  <br>Whenever a texture that was borderline rule-breaking was made, it always led to controversy and a huge debate that would drag on for hours, and would never come to a clear conclusion.
  <br>The truth is, nobody really expressed a clear enough idea on what the pack’s style should be, nor were the preceding guidelines ever enforced heavily.
  <br>These new rules and guidelines aim to fix all of these problems, and will try to outline Faithful's stylistic direction with as much attention to detail and as much clarity as possible.</i>
</p>

___

## Part 1: Terms and Definitions

Over time, our community has adopted and come up with numerous terms regarding pixel art, texturing and art techniques. Since these guidelines use these terms extensively, a definitive dictionary must be made for the layman.

<ol>
  <li id="blending"><b>(Colour) Blending</b> refers to the method of transitioning one colour into another. It mostly occurs around the border between these two colours.
  <br>There are many types of blending. The most important ones are listed here:</li>
  <ol class="lettered">
    <br>
    <li id="no-blending"><b>No blending</b> is a simple border between two or more colours, without any additional effects. An early in-development texture usually has no blending, which is added in later stages of the process.
    <br>This type of blending is discouraged in most cases, because it usually ends up making the texture look “plasticky” and fails to portray the material of the texture.</li>
    <br>
    <img src="/images/pages/textures/1.png" alt="no blending" class="center" loading="lazy">
    <p class="center"><i><b>Picture 1:</b> Example of a border between two colours, with no blending applied.</i></p>
    <br>
    <li id="anti-aliasing"><b>Anti-Aliasing (AA)</b> is a technique used to smooth the jaggedness of a pixelated border between colours. It uses an additional in-between colour (usually taken from somewhere else in the texture) to provide a smoother transition. This method is recommended to be used in conjunction with no blending on very smooth surfaces, like metal or plastic. It can also be used in small amounts on most other materials to eliminate drastic borders between light and dark colours.</li>
    <br>
    <img src="/images/pages/textures/2.png" alt="aliased and anti-aliased" class="center" loading="lazy">
    <p class="center"><i><b>Picture 2:</b> A line with no anti-aliasing compared to a line with anti-aliasing applied to it.</i></p>
    <img src="/images/pages/textures/3.png" alt="anti-aliasing" class="center" loading="lazy">
    <img src="/images/pages/textures/4.png" alt="anti-aliasing" class="center" loading="lazy">
    <p class="center"><i><b>Picture 3:</b> Example of anti-aliasing used in a texture featured in Faithful.</i></p>
    <br>
    <li id="dithering"><b>Dithering</b> is perhaps the most used texturing term in the Faithful servers. The word describes a method used very commonly for the many textures of raw, unprocessed materials found in Minecraft, such as stone, wood and others. To achieve dithering, one is required to displace the pixels of a colour border in such a way that said border is no longer as defined and has parts protruding in and out of the other colour.
    <br>Dithering can be done in multiple ways:</li>
    <br>
    <ol class="roman">
      <li id="checkerboard-dithering"><b>Checkerboard dithering</b> (AKA checkering/checkerboarding) is not recommended in most cases, because it is too repetitive and usually doesn’t fit the material.
      <br>Special cases include chainmail and sand (in small amounts). It looks like a checkerboard of two colours.</li>
      <br>
      <img src="/images/pages/textures/5.png" alt="checkerboard dithering transition" class="center" loading="lazy">
      <p class="center"><i><b>Picture 4:</b> Checkerboard dithering used as a transition between two colours.</i></p>
      <br>
      <img src="/images/pages/textures/6.png" alt="checkerboard dithering texture" class="center" loading="lazy">
      <p class="center"><i><b>Picture 5:</b> Example of checkerboard dithering in a texture.</i></p>
      <br>
      <li id="regular-dithering"><b>Regular dithering</b> is the single most used dithering method, as it can be utilised in the largest array of cases, and the vast majority of Faithful textures, be it in high or low levels. The technique consists of placing displaced pixels around the colour border (which look random, but oftentimes are cleverly laid out to avoid visual issues) in such a way that little to no checkerboarding/checkering is created. Displaced pixels usually take the shape of a single 1px square or a 2x1px rectangle, but never full-on intentional lines. Regular dithering doesn’t convey any sense of directionality!</li>
      <br>
      <img src="/images/pages/textures/7.png" alt="regular dithering texture" class="center" loading="lazy">
      <p class="center"><i><b>Picture 6:</b> Example of regular dithering in a texture.</i></p>
      <br>
      <li id="linear-dithering"><b>Linear dithering (LD)</b> is just like dithering, but with displaced pixels taking the shape of (usually) 1px wide lines that all go in the same direction, most of the time vertically or horizontally. This method is best used for textures that already have a linear pattern in vanilla, such as stone or wood.</li>
      <br>
      <img src="/images/pages/textures/8.png" alt="linear dithering texture" class="center" loading="lazy">
      <p class="center"><i><b>Picture 7:</b> Example of linear dithering in a texture.</i></p>
      <br>
    </ol>
    <p>Do note that all of these dithering methods can be mixed and matched at various intensities in a single texture. This is often required to accurately portray a desired material.</p>
    <img src="/images/pages/textures/9.png" alt="mixed dithering textures" class="center" loading="lazy">
    <p class="center"><i><b>Picture 8:</b> Examples of mixed dithering methods: linear and regular on stone, regular and hints of checkerboard dithering on sand, respectively.</i></p>
    <br>
    <li id="colour-banding"><b>Colour banding</b> describes the phenomenon of noticeable stripes of a single colour appearing as a result of using multiple colours for a transition. This is generally unwanted, just because it doesn’t look the best. Colour banding can be reduced by narrowing the individual colour stripes to be 1 pixel thick or so, but this method often can and does look bad. If it doesn’t work, keep the colours banded, it’s not that much of an issue.</li>
    <br>
    <img src="/images/pages/textures/10.png" alt="colour banding" class="center" loading="lazy">
    <p class="center"><i><b>Picture 9:</b> Left: An example of a texture with noticeable colour banding. Right: The same texture, with colour banding mostly eliminated.</i></p>
    <br>
  </ol>
  <li id="indexing-colours"><b>Indexing colours</b> refers to the process of reducing the colour count of an image. This is used when basing a texture off of its (usually) programmer art version, which oftentimes has needless amounts of colours. Since using too many colours would be against these guidelines, one is required to index them. This can be done automatically in an image editing program by using the Indexed Colours mode, but since that can cause problems, it’s recommended to either switch back to RGB/8 after indexing is done or to do the indexing manually.</li>
  <br>
  <img src="/images/pages/textures/11.png" alt="indexing" class="center" loading="lazy">
  <img src="/images/pages/textures/12.png" alt="indexing" class="center" loading="lazy">
  <p class="center"><i><b>Picture 10:</b> Left: An example of a texture with too many colours. Right: The same texture, with indexed colours.</i></p>
  <br>
  <li id="upscaling-a-texture"><b>Upscaling (a texture)</b> in Faithful's context refers to redrawing a vanilla-resolution texture in a higher resolution (32x or 64x) according to these guidelines. In other contexts, it can refer to an image whose resolution has been increased for example, all 1x1 pixels become 2x2 colour areas using an image editing program, and/or with an AI.</li>
  <br>
  <li id="jappa"><b>JAPPA,</b> or Jasper Boerstra is the current art director for Minecraft, formerly working on the game's art from 2017 to 2022.</li>
  <br>
  <li id="prog-art"><b>Programmer art</b> (often colloquially referred to as “progart”) is an umbrella term that describes the textures and the general art style used in Minecraft before version 1.14 (except all of the new textures that were added in 1.13). These weren’t made by JAPPA, or any real artist, but by the developers of the game. Note that this term wasn’t coined by Mojang, and outside of the Minecraft resource pack community it refers to placeholder visuals usually created by the programmers as placeholders for new features. Which is what the pre-1.14 textures basically are, since most of the widely used ones were originally made by Notch in paint.net within a span of minutes.</li>
  <br>
  <li id="jappa-textures"><b>Jappa textures</b> directly oppose Programmer Art. They were made by a single artist – JAPPA – and they have a consistent art style. They are featured in all versions after 1.14 inclusive.</li>
  <br>
  <img src="/images/pages/textures/13.png" alt="Jappa textures" class="center" loading="lazy">
  <p class="center"><i><b>Picture 11:</b> Left: Programmer art oak planks. Right: Jappa oak planks.</i></p>
  <br>
  <li id="false-lines"><b>False lines</b> are the occurrence of several elements and/or colour areas of a texture lining up in such a way that they create an illusion of a straight line, even when there is none in reality.</li>
  <br>
  <img src="/images/pages/textures/14.png" alt="false lines" class="center" loading="lazy">
  <p class="center"><i><b>Picture 12:</b> An example of false lines.</i></p>
  <br>
  <li id="mixels"><b>Mixels</b> describe pixels of clashing resolutions, for example if a texture uses 1x1 pixels and the other uses 2x2 pixels extensively, that would be considered mixels.</li>
  <br>
  <img src="/images/pages/textures/15.png" alt="mixel texture" class="center" loading="lazy">
  <p class="center"><i><b>Picture 13:</b> Example of mixels in a texture.</i></p>
  <br>
  <li id="contrast-palette"><b>A contrasty colour palette</b> is a colour palette utilising colours which have high contrast between each other. Contrast in colour theory is defined as the difference in brightness or hue between two or more colours.</li>
  <br>
  <img src="/images/pages/textures/16.png" alt="false lines" class="center" loading="lazy">
  <p class="center"><i><b>Picture 14:</b> Left: example of a texture with low contrast. Right: example of a texture with high contrast.</i></p>
</ol>

___

## Part 2: General Rules and Tips

**Rules**

These requirements apply to all textures unless specified otherwise and must all be met for a texture to be considered viable for Faithful.

<ol>
  <li id="mimic-vanilla"><b>Textures need to mimic vanilla Minecraft textures, and should be heavily based upon them.</b> This probably goes without saying, but it’s good to have it specified nonetheless. While you are not required to make your texture by directly editing the vanilla one, it is heavily recommended and usually helps your texture look better and closer to the default texture.</li>
  <br>
  <li id="1px-wide"><b>Outlines, dividing lines and the like that would end up being 2 pixels wide when upscaled to double the resolution should almost always be 1 pixel wide.</b> Pretty straight-forward, most lines in Faithful should be 1 pixel wide (examples: glass, gold block, iron ingot, diamond). There are exceptions to this, especially if a line is not an outline/dividing line,  and/or is curvy, or would be off-centre if it was 1 pixel wide. In these cases it’s acceptable to make the line wider.</li>
  <br>
  <img src="/images/pages/textures/17.png" alt="outlines" class="center" loading="lazy">
  <p class="center"><i><b>Picture 15:</b> Top: Vanilla texture. Bottom left: Incorrect interpretation of lines present in the vanilla texture. Bottom right: Correct interpretation.</i></p>
  <br>
  <li id="shading"><b>All textures are required to be shaded correctly according to their material and shape.</b> Before shading a texture, define its material correctly (rough/smooth, shiny/non-reflective), and then use adequate shading methods. These are further described in the Material and Shape Reference List.</li>
  <br>
  <img src="/images/pages/textures/18.png" alt="shading" class="center" loading="lazy">
  <p class="center"><i><b>Picture 16:</b> Left: Incorrectly shaded item (see the Material and Shape Reference List). Right: Correctly shaded item.</i></p>
  <br>
  <li id="meaning"><b>All elements of a texture need to have their meaning, and should look like actual things instead of just shapes.</b> Don’t just mindlessly upscale textures without paying attention to what they’re supposed to represent: When drawing an element of a texture, always think about what it’s supposed to represent in vanilla, and then draw the element according to this idea (while still keeping similarity to vanilla in mind, of course).</li>
  <br>
  <img src="/images/pages/textures/19.png" alt="correct upscaling" class="center" loading="lazy">
  <p class="center"><i><b>Picture 17:</b> Top: Vanilla texture. Bottom left: Incorrect upscale. Bottom right: Correct interpretation (note the individual leaves, which are required in double the resolution but aren’t possible to be depicted in the vanilla resolution).</i></p>
  <br>
  <li id="vanilla-colour-palette"><b>Textures should stick to the vanilla colour palette.</b> Self-explanatory; try to only use the colours that the vanilla texture uses. If you’re trying to blend two colours together using anti-aliasing, you can usually re-use a colour from elsewhere in the texture. In difficult circumstances you can add colours to help you, but most of the time, one or two is enough. If the texture you’re upscaling already has many colours, you can use that to your advantage, but you should still keep the palette limited to more or less than 10 colours. Additionally, never change existing colours from the vanilla palette! If a vanilla texture uses 5 specific colours, make sure your texture uses these exact ones.
  <br>This rule does not apply to animated textures that used to be generated procedurally in the past: e.g. water, lava, nether portal, fire and soul fire.</li>
  <br>
  <li id="too-much-details"><b>Do not make up features/details that are not clearly present in the vanilla texture and don’t add them to your texture, unless not having them makes absolutely no sense in double the resolution.</b> While upscaling a texture, one might have the tendency to add significant elements that are not present in vanilla. This is discouraged, as it makes a texture look too distant from the vanilla look most of the time. This also applies to various details in a texture: If appropriate, a normal amount is encouraged, but don’t overdo it.</li>
  <br>
  <img src="/images/pages/textures/20.png" alt="texture details" class="center" loading="lazy">
  <p class="center"><i><b>Picture 18:</b> Top: Vanilla texture. Bottom left: A texture with too many added details. Bottom right: A texture with just enough details and features.</i></p>
  <br>
  <li id="blending-colours"><b>When blending colour using anti-aliasing or dithering, make sure that darkest colours never directly border the lightest ones and vice versa.</b> Dirt is an example of this. Always have a transition colour in between the colours. In some cases this is desired, but not in many. If you’re a beginner Faithful contributor, always follow this rule.</li>
  <br>
  <img src="/images/pages/textures/21.png" alt="colour borders" class="center" loading="lazy">
  <p class="center"><i><b>Picture 19:</b> Left: Improper colour borders. Note the very harsh-looking colour borders caused by the lack of a transition colour. Right: Correct colour transitions.</i></p>
  <br>
  <li id="erase-colour-banding"><b>Try to eliminate colour banding, if possible.</b> As already described in previous sections, this can be done by cleverly reducing the width of each colour band to one or two pixels. Don’t brute force it though, in some cases where the colour palette is especially limited this can harm the texture overall. It’s certainly possible to do in most cases though.</li>
  <br>
  <li id="no-colour-chunk"><b>Unless it’s intentional and makes sense to have, there should never be large single-colour areas in your texture.</b> This applies especially to raw materials like stone or wood. You can always break these areas up by using dithering or other methods.</li>
  <br>
  <li id="other-texture-as-base"><b>If a texture uses another texture as a base, use the already existing Faithful rendition of it, if available.</b> An example of this would be stone and ores. Don’t make stone from scratch just for the ore texture. Make your life simpler and re-use existing textures when you can.</li>
  <br>
  <img src="/images/pages/textures/22.png" alt="already existing texture" class="center" loading="lazy">
  <p class="center"><i><b>Picture 20:</b> An ore texture. Note how the already existing stone texture is used in the background.</i></p>
  <br>
  <li id="identical-when-upscaled"><b>If a texture would end up looking identical to vanilla when upscaled (while following all the above rules), it shall not be included in Faithful.</b> Self-explanatory. Textures like these look exactly the same as vanilla when used in-game, and so they only bloat the pack and needlessly increase the file size.</li>
  <p class="red-text center" style="text-align: center;"><b>Special rules and/or exceptions can apply to specific textures if the Art Director Council approves it.</b></p>
  <br>
  <li id="bugs-in-textures"><b>If a texture has issues noted on the Mojira website, Mojang's offical bug tracker, then changes should be made to fix them.</b> Some examples of bugs that are allowed to be fixed include: unused/misaligned pixels or textures, “Jappafication” errors, and parity issues. Fixing bugs allows for the pack to have issues in textures resolved before they are added into the base game, which saves us time.</li>
</ol>

**Tips**

<ol>
  <li id="mob-faces"><b>Mob faces</b> can be particularly hard to interpret in only double the resolution. If all attempts at upscaling the face end up looking bad, it is acceptable to use a “mixel-face” – just keeping the vanilla mob face, without any edits, on an upscaled background.</li>
  <br>
  <img src="/images/pages/textures/23.png" alt="acceptable mob face" class="center" loading="lazy">
  <p class="center"><i><b>Picture 21:</b> An acceptable mob face.</i></p>
  <br>
  <li id="dithering-tip"><b>Dithering</b> should not be overdone, unless you’re re-drawing a particularly noisy texture (e.g. sand). Also while dithering, try to avoid lone pixels, as in the ones that do not border other ones of the same colour.</li>
  <br>
  <img src="/images/pages/textures/24.png" alt="overdone dithering" class="center" loading="lazy">
  <p class="center"><i><b>Picture 22:</b> A close-up of a colour transition with lone pixels, which should be avoided.</i></p>
  <br>
  <li id="stairing-pixels"><b>Try to minimise the occurrence of stairing pixels</b>, an example of which is shown below.</li>
  <br>
  <img src="/images/pages/textures/25.png" alt="stairing pixels" class="center" loading="lazy">
  <p class="center"><i><b>Picture 23:</b> Left: Example of a colour transition featuring stairing pixels. Right: The same transition, with the stairing removed.</i></p>
</ol>

**And most importantly, always get feedback from others while drawing a texture! It will help you improve in ways you wouldn’t even have thought of.**

___

## Part 3: Material and Shape Reference List
This section goes into detail about how to draw and shade specific materials and shapes.

<br>

### Materials
There exists a correlation between the roughness and shininess of a material and the colour blending method. Generally, the rougher a material is, the more dithering you should use. The same applies to high-contrast colours and minimal colour blending for shiny materials.

<br id="smooth-metal">

**Smooth metal** should only use anti-aliasing as a colour blending method, or no blending at all. The colour palette should be limited and contrasty. In some cases mild linear dithering is acceptable if it’s required to keep the texture from looking like plastic. Additionally, in item textures, faces of an object which are in the shade should have a lighter outline (as well as the item outline itself) to simulate light reflection.

<img src="/images/pages/textures/26.png" alt="smooth metal textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 24:</b> Examples of various smooth metal textures.</i></p>

<br id="rough-metal">

**Rough metals** such as raw ore blocks, netherite, anvils and even iron golems should follow the same lighting logic as regular metals while being dithered. Regular dithering should be used as the preferred method.

<img src="/images/pages/textures/27.png" alt="rough metal textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 25:</b> Examples of rough metal textures.</i></p>

<br id="gems">

**Diamonds and other gemstones** in Minecraft’s context should be shaded like reflective rocks more than anything – they usually don’t let much light pass through, unlike their real-life counterparts. Only anti-aliasing should be used here. For faces in the shade in item textures, the same shading logic as on smooth metal textures applies.

<img src="/images/pages/textures/28.png" alt="gemstone textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 26:</b> Examples of gemstone textures.</i></p>

<br id="contiguous-stones">

**Contiguous stones** that are not broken up into smaller rocks are very rough, so they should use dithering as much as possible. For textures with a linear pattern (stone, dripstone), it is recommended to use a mixture of linear and regular dithering to emphasise the material even more. Anti-aliasing can be used here, but only when the material is smoother than usual, like with dripstone.

<img src="/images/pages/textures/29.png" alt="raw stone textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 27:</b> Examples of contiguous raw stone textures.</i></p>

<br id="polished-stones">

**Polished stones** should use dithering (linear when applicable) a bit, but not nearly as much as raw stones. Instead, anti-aliasing should be used in heavier amounts to express the smoothness of the material.
Smooth stone is a special case however, as it directly reuses regular stone’s texture pattern (which you should do as well, as per rule 10).

<img src="/images/pages/textures/30.png" alt="polished stone textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 28:</b> Examples of polished stone textures.</i></p>

<br id="rocky-materials">

**Rocky materials** such as cobblestone and netherrack should be dithered as much as raw stones, but unless the rocks are arranged in a clear linear pattern (like in the deepslate texture), linear dithering should never be used.

<img src="/images/pages/textures/31.png" alt="rocky material textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 29:</b> Examples of rocky material textures.</i></p>

<br id="wood">

**Wood** should use a lot of linear dithering and very minimal amounts of regular dithering. To smooth colour transitions, anti-aliasing can be used if it looks good.

<img src="/images/pages/textures/32.png" alt="wood textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 30:</b> Examples of wood textures.</i></p>

<br id="flowers">

**Most flowers, foliage, and other plant matter** can use dithering (linear or regular) depending on the general roughness/smoothness of the surface. While flower petals can employ this shading method, genuine leaves should never use dithering.

<img src="/images/pages/textures/33.png" alt="plant textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 31:</b> Examples of plant textures.</i></p>

<br id="corals">

**Corals** should mainly use anti-aliasing, but regular dithering is also acceptable.

<img src="/images/pages/textures/34.png" alt="coral textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 32:</b> Examples of coral textures.</i></p>

<br id="sands">

**Sand and other powdery materials** should be heavily dithered: there should be no large contiguous area of a single colour. Even checkerboard dithering can be used in this case, in small amounts. Anti-aliasing is encouraged to a smaller degree. This also applies to gravel, where the individual rocks that make up the material are clearly visible.

<img src="/images/pages/textures/35.png" alt="powdery textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 33:</b> Examples of powdery textures.</i></p>

<br id="bee-nests">

**Bee nests** are to be shaded the same way wood is.

<br id="honey">

**Honey and slime** should not feature any dithering at all, only using anti-aliasing to smooth the colours.

<br id="terracotta">

**Glazed terracotta** should only use minimal amounts of anti-aliasing when required, otherwise no colour blending should be present.

<img src="/images/pages/textures/36.png" alt="glazed terracotta textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 34:</b> Examples of glazed terracotta textures.</i></p>

<br id="glass">

**Glass** can use small amounts of dithering for the frame. This does not apply to items.

<br id="bones">

**Bones** (including skeletons) should ideally mainly use anti-aliasing, with a bit of occasional linear dithering sprinkled in, near colour transitions. This applies to tusks as well.

<img src="/images/pages/textures/37.png" alt="bone textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 35:</b> Examples of bone textures.</i></p>

<br id="cloth-paper">

**Cloth and paper** should both be shaded approximately the same way, with the only difference being that cloth should have more linearity. Anti-aliasing should be the main colour blending method for these materials.

<br id="skin">

**Skin (in mob textures) and leather** should mainly use anti-aliasing. Not using many colour blending methods can lead to heavy colour banding and looking plasticky, so this is a reminder to try and eliminate that if possible. Depending on the roughness of a specific skin type, linear and regular dithering can also be used to communicate the feel of the material.

<img src="/images/pages/textures/38.png" alt="skin textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 36:</b> Examples of skin textures.</i></p>

<br id="creepers">

**Creepers** are quite mind boggling. The texture was originally made from the leaves texture used in Alpha, but since a lot of noise has been overlaid on top, the texture no longer looks anything close to leaves, not to mention Alpha leaves barely resemble leaves in the first place. Basically, nobody knows how to shade this chaos of a material properly, so we just indexed the texture and used a combination of all the techniques listed here to create a chaotic material that doesn't really represent anything. Worked surprisingly well.

<br id="fur-hair">

**Fur and hair** should employ linear dithering, but in such a way that it creates visible strands of hair. Some regular dithering and anti-aliasing can also come in handy. This applies to wool on sheep as well.

<img src="/images/pages/textures/39.png" alt="fur/hair textures" class="center" loading="lazy">
<p class="center"><i><b>Picture 37:</b> Examples of fur/hair textures.</i></p>

<br id="fish">

**Fish entities** should have clearly visible scales present where appropriate (don’t just draw a checkerboard!). Basically all colour blending methods can be used here.

<img src="/images/pages/textures/40.png" alt="fish texture" class="center" loading="lazy">
<p class="center"><i><b>Picture 38:</b> Example of a fish texture.</i></p>

<br>

### Shapes

<br id="cylinders">

**Cylindrical type objects** such as iron bars, individual dynamite sticks that make up TNT and metal railings should have visible shades along both sides and a highlight on the side near the centre like so:

<img src="/images/pages/textures/41.png" alt="cylindrical type objects" class="center" loading="lazy">
<p class="center"><i><b>Picture 39:</b> An example showing how to shade cylindrical type objects</i></p>

___

## Part 4: Fixing JAPPA’s Mistakes and Things He’s Forgotten

Faithful extends its field of expertise to correcting JAPPA’s mistakes. One such example would be the oak sign, which until 1.17 used this texture:

<img src="/images/pages/textures/42.png" alt="forgotten texture" class="center" loading="lazy">
<p class="center"><i><b>Picture 40:</b> Pre-1.17 vanilla oak sign texture</i></p>

<br>

It is obvious that this texture uses the programmer art oak planks and bark. This is not viable for Faithful, as the pack strives for consistency, and as such it has been decided to use the already existing jappa plank and bark textures instead. Besides the sign, many more textures requiring this treatment exist. Some uncertainties about this have emerged though, so after all this time we are finally defining the replaceable textures properly:

**Only replace programmer art textures (or textures that weren’t changed in the texture update) if it’s absolutely obvious what they should be changed to.**

Let’s take the sign texture mentioned above as an example. It is clear that it uses programmer art textures with very little modifications, and even when these edits exist, they’re simple recolours. Thus, this process can be replicated with the Jappa planks in order to make a viable Faithful texture.

On the contrary, a texture that should NOT be “Jappafied” is blaze powder, for instance. The number of colours and the shading style make it clear that it was not made by JAPPA, meaning that it can be classed as programmer art. One might think of trying to re-interpret the texture using the art style present in other item textures by JAPPA, but one major problem arises – there is no obvious way to do it correctly. What colour palette should be used? How contrastive should the colours be? Should the shape be preserved? Would the same shading methods be kept? Nobody knows for sure, and these assumptions are not for Faithful artists to make. As such, this texture, and all the other textures that fall into this category, are to be left as-is, and should be upscaled like any other texture according to the rules mentioned above.

<img src="/images/pages/textures/43.png" alt="texture should not be jappafied" class="center" loading="lazy">
<p class="center"><i><b>Picture 41:</b> Blaze powder, an example of a texture that should not be “Jappafied”.</i></p>

___

## Conclusion
Wow, this turned out way longer than we expected it to be. Would you believe that these guidelines were over a month in development? Well, we hope that you have found them useful and descriptive, and that they have cleared up any misbeliefs or doubts you might have had. If you have any questions, want to give feedback for this document or just post your textures, message us on our Discord server!

___

## Final Note
These rules and guidelines are subject to change at any time. Significant changes to this document will be announced publicly.

___

## Credits
<p>
  Written by Pomi108 for use in the Faithful project
  <br>Edited by Anonymous, Juknum, and Fred figglehorn
  <br>Images compiled by Anonymous and Pomi108
  <br>Credit for images goes to various Faithful and Faithful contributors, Mojang Studios and Google Images
</p>
