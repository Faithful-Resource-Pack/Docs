---
title: "Classic Faithful 32x Texturing Guidelines"
type: "Textures"
date: "22/08/2022"
deprecated: false
---

# Classic Faithful 32x (Jappa and PA) Texturing Rules and Guidelines

___

## Introduction

<p>
  <i>Classic Faithful was made as a tribute to the original creator of the Faithful 32x32 resource pack, Vattic, and to all his hard work to build the Faithful community to what it is now, all the way back when it was just one person running everything.
  <br><br>Initially named "Emulated Vattic Textures", or "EM" for short, the pack was designed to fix the stylistic shift that came under the leadership of Kraineff and later the Compliance / Faithful Administration. The main Faithful pack's art direction shifted to something quite different to the original work Vattic had made, opting instead for a much more detailed, modern style to go along with the new textures the texture artist Jappa had made starting versions 1.14 inclusive. However, this style completely replaced the old one with no real alternative for those who preferred the old style. This is where we come in, as the spiritual successor to Vattic's Faithful, maintaining the original style of the packs.
  <br><br>However, contributions ended up being few and far between even though the project was intended to be community run and managed similarly to the main Faithful packs. This was both due to the project never being the main focus of Faithful, and the rapidly increasing and changing standards deterring anyone who wanted to try. Contributors had to walk the very tight line of achieving the same look and feel of Vattic's original work while maintaining Jappa's newer ideologies more reminiscent of traditional pixel art, which was no easy feat. As well as this, when a programmer art variant was started later on, contributors had to learn how to deal with excessive palette sizes and a number of other issues that plagued the original textures, while also upscaling using Vattic methods. All of this contributed to the project always being somewhat inactive and usually one to two people doing all the work for any given pack.
  <br><br>These guidelines are designed to formalize the unspoken procedures that were formed over time to recreate Vattic's style today, and to lay down some actual instructions for any aspiring artists rather than vague advice that rarely works.
  <br><br>With all of that being said, let's start with the basics.
  </i>
</p>

___

<div class="table-of-content">
<h2>Table of Contents</h2>

<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#part-1-terms-and-definitions">Part 1: Terms and Definitions</a></li>
  <ol>
    <li><a href="#blending">(Color) Blending</a></li>
    <ol class="lettered">
      <li><a href="#no-blending">No Blending</a></li>
      <li><a href="#antialiasing">Antialiasing (AA)</a></li>
      <li><a href="#dithering">Dithering</a></li>
      <ol class="roman">
        <li><a href="#checkerboard-dithering">Checkerboard Dithering</a></li>
        <li><a href="#regular-dithering">Regular Dithering</a></li>
        <li><a href="#linear-dithering">Linear Dithering (LD)</a></li>
      </ol>
      <li><a href="#color-banding">Color Banding</a></li>
    </ol>
    <li><a href="#upscaling-textures">Upscaling (a texture)</a></li>
    <li><a href="#limited-palettes">Limited Palettes</a></li>
    <li><a href="#noise">Noise</a></li>
    <li><a href="#jappa">Jasper "JAPPA" Boerstra</a></li>
    <li><a href="#prog-art">Programmer Art</a></li>
    <li><a href="#jappa-textures">Jappa Textures</a></li>
    <li><a href="#vattic">Vattic</a></li>
    <li><a href="#false-lines">False Lines</a></li>
    <li><a href="#mixels">Mixels</a></li>
    <li><a href="#contrast">Contrast</a></li>
    <li><a href="#depth-shading">Depth Shading</a></li>
    <li><a href="#stairing">Stairing</a></li>
  </ol>
  <li><a href="#part-2-general-rules-and-tips">Part 2: General Rules and Tips</a></li>
  <ol>
    Rules
    <li><a href="#follow-default">Follow Default</a></li>
    <li><a href="#reference-vattic">Reference Vattic's Work</a></li>
    <li><a href="#less-is-more">Don't Overdetail</a></li>
    <li><a href="#palette">Use a Vanilla-ish Palette</a></li>
    <li><a href="#1px-items">Thin out Item Borders</a></li>
    <li><a href="#outdated-textures">Keep Vanilla Mistakes</a></li>
    <li><a href="#reuse-textures">Reuse Existing Textures</a></li>
    <li><a href="#useless-textures">Don't Upscale Useless Textures</a></li>
  </ol>
  <ol>
    Tips
    <li><a href="#mob-faces">Mob Faces</a></li>
    <li><a href="#jaggies-bad">Smooth Jagged Lines</a></li>
    <li><a href="#overuse-2px">Don't Overuse Thick Lines</a></li>
    <li><a href="#cross-reference">Cross Reference Similar Textures</a></li>

  </ol>
  <li><a href="#part-3-material-reference-list">Part 3: Material Reference List</a></li>
  <ul>
    <li><a href="#conventional">Conventional Upscaling</a></li>
    <li><a href="#gem-and-metals">Gem and Metal Textures</a></li>
    <li><a href="#contiguous-stones">Contiguous Stones</a></li>
    <li><a href="#distinct-stones">Rocky Materials</a></li>
    <li><a href="#tiles">Small Bricks and Tiles</a></li>
    <li><a href="#large-bricks">Large Bricks</a></li>
    <li><a href="#polished-stones">Polished Stone/Wood</a></li>
    <li><a href="#logs-and-stems">Tree Bark and Mushroom Stems</a></li>
    <li><a href="#refined-wood">Refined Wood</a></li>
    <li><a href="#large-plants">Leaves and Larger Plants</a></li>
    <li><a href="#foliage">Flowers and Foliage</a></li>
    <li><a href="#grass-fungi">Grass and Certain Fungi</a></li>
    <li><a href="#sand">Sand and Other Powders</a></li>
    <li><a href="#sandstone">Sandstone</a></li>
    <li><a href="#prismarine">Prismarine</a></li>
    <li><a href="#contrasty">Contrasty Textures</a></li>
    <li><a href="#ice-glass">Ice and Glass</a></li>
    <li><a href="#fur-fabric">Fur and Fabric</a></li>
    <li><a href="#door-trapdoor">Doors and Trapdoors</a></li>
  </ul>
  <li><a href="#part-4-about-classic-faithful-32x-pa">Part 4: About Classic Faithful 32x PA</a></li>
  <li><a href="#part-5-upscaling-noise-and-blurriness">Part 5: Upscaling Noise and Blurriness</a></li>
  <ol>
    Noisy Textures
    <li><a href="#tiling-with-edits">Tiling with Edits</a></li>
    <li><a href="#jumbling">Jumbling</a></li>
    <li><a href="#tiled-detail">Tiled Detail</a></li>
    <li><a href="#softening">Softening</a></li>
    <li><a href="#indexing">Indexing</a></li>
    <li><a href="#native-upscale">Natively Upscaling</a></li>
  </ol>
  <ol>
    Blurry Textures
    <li><a href="#automatic-upscale">Automatic Upscaling</a></li>
  </ol>
  <li><a href="#conclusion">Conclusion</a></li>
  <li><a href="#credits-go-to">Credits go to…</a></li>
</ul>
</div>

___

## Part 1: Terms and Definitions

Over time, our community has adopted and come up with numerous terms regarding pixel art, texturing and the people involved in the process. Since these guidelines use these terms extensively, a definitive dictionary must be made for the layman.

<ol>
  <li id="blending"><b>(Color) Blending</b> refers to the method of transitioning one color into another. It mostly occurs around the border between these two colors.
  <br>
  <br>There are many types of blending. The most important ones in the context of Classic Faithful are listed here:</li>
  <ol class="lettered">
    <br>
    <li id="no-blending"><b>No blending</b> is a simple border between two or more colors, without any additional effects. A work in progress texture tends to have no blending, as other blending methods are usually added later on. However, this tends to have a "plasticky" effect or look flat, which is undesirable in most cases.</li>
    <br>
    <img src="/images/pages/textures/cf32-texturing-guidelines/1.png" alt="no blending" class="center" loading="lazy">
    <i class="center"><b>Picture 1:</b> Example of a border between two colors, with no blending applied.</i>
    <br>
    <li id="antialiasing"><b>Antialiasing (AA)</b> is a technique used to smooth the jaggedness of a pixelated border between colors. It uses an additional in-between color to provide a smoother transition. This is particularly useful for smoother textures or getting rid of harsh color borders that may form.</li>
    <br>
    <img src="/images/pages/textures/cf32-texturing-guidelines/2.png" alt="aliased and antialiased" class="center" loading="lazy">
    <i class="center"><b>Picture 2:</b> A line with no antialiasing compared to a line with antialiasing applied to it.</i>
    <img src="/images/pages/textures/cf32-texturing-guidelines/3.png" alt="aa-example" class="center" loading="lazy">
    <i class="center"><b>Picture 3:</b> Example of antialiasing used in a texture featured in Classic Faithful.</i>
    <br>
    <li id="dithering"><b>Dithering</b> is where pixels of a color border are displaced in such a way that said border is no longer as sharply defined and has parts protruding in and out of the other color. Places where these can be used will be explained further in the material reference list, however in most cases using it gives it an overly noisy or sharp appearance which isn't desirable most of the time.
    <br><br>Dithering can be done in multiple ways:</li>
    <br>
    <ol class="roman">
      <li id="checkerboard-dithering"><b>Checkerboard dithering</b> (also known as simply "checkerboarding") is not recommended in most cases, because it is too repetitive and usually doesn't fit the material. Special cases include chainmail and some particle effects. It looks, exactly as you'd expect, like a checkerboard of two colors.</li>
      <br>
      <img src="/images/pages/textures/cf32-texturing-guidelines/4.png" alt="checkerboard dithering transition" class="center" loading="lazy">
      <i class="center"><b>Picture 4:</b> Checkerboard dithering used as a transition between two colors.</i>
      <br>
      <li id="regular-dithering"><b>Regular dithering</b> (sometimes called "conventional dithering" or simply "dithering") consists of displacing pixels around the color border in such a way that little to no checkerboarding is created. These displaced pixels may look random, but oftentimes are cleverly laid out to avoid visual issues. Displaced pixels are usually a single pixel or sometimes a small cluster, but regular dithering should never convey any sense of directionality.</li>
      <br>
      <img src="/images/pages/textures/cf32-texturing-guidelines/5.png" alt="regular dithering textures" class="center" loading="lazy">
      <i class="center"><b>Picture 5:</b> Examples of regular dithering being used on certain materials.</i>
      <br>
      <li id="linear-dithering"><b>Linear dithering (LD)</b> is exactly like regular dithering, but the displaced pixels are longer and face in a particular direction, as if regular dithering was stretched. This gives a streaky look to the texture in question, which is particularly useful for refined wood textures and certain types of stone.</li>
      <br>
      <img src="/images/pages/textures/cf32-texturing-guidelines/6.png" alt="linear dithering textures" class="center" loading="lazy">
      <i class="center"><b>Picture 6:</b> Examples of linear dithering in wood and stone textures.</i>
      <br>
    </ol>
    <p>Do note that these methods can be mixed and matched in certain amounts to get a material looking as it should.</p>
    <li id="color-banding"><b>Color banding</b> describes the phenomenon of noticeable stripes of a single color appearing as a result of using multiple colors for a transition. This goes hand in hand with having no blending methods being employed, and just like using no blending it has a flat look which is generally undesirable. This can be prevented in many ways, such as through the usage of added colors, antialiasing, or simply reducing the amount or size of bands.</li>
    <br>
    <img src="/images/pages/textures/cf32-texturing-guidelines/7.png" alt="color banding" class="center" loading="lazy">
    <i class="center"><b>Picture 7:</b> Left: An example of noticeable color banding. Right: Most of the color banding removed.</i>
    <br>
  </ol>
  <li id="upscaling-textures"><b>Upscaling (a texture)</b> refers to redrawing a vanilla resolution texture in a higher resolution (32x or 64x) according to these guidelines. In other contexts, it can refer to an image whose resolution has been increased. For example, all 1x1 pixels become 2x2 color areas using an image editing program, which is usually referred to as "nearest-neighbor" upscaling. There are other types of automatic upscaling (usually referred to as AI upscaling, despite having nothing to do with an AI) which can have varying levels of success such as bilinear and rotsprite. However, upscaling by hand will almost always look the best.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/8.png" alt="upscaled texture" class="center" loading="lazy">
  <i class="center"><b>Picture 8:</b> Left: The vanilla 16x texture. Right: A 32x upscale of said texture.</i>
  <br>
  <li id="limited-palettes"><b>Limiting palettes (LP), indexing textures, or color quantizing</b> are names for the concept of reducing the amount of colors in a texture to only the necessary shades. This can either be done by hand or automatically using a program like GIMP or Aseprite. Limited palette textures generally have colors reused throughout the texture and noticeable color transitions, as opposed to a blurry texture where color transitions are fuzzy and hard to make out or noisy textures which will be covered directly below.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/9.png" alt="indexed textures" class="center" loading="lazy">
  <i class="center"><b>Picture 9:</b> Left: A "limited palette" texture. Center: A blurry texture. Right: A noisy texture.</i>
  <br>
  <li id="noise"><b>Noise</b>, as opposed to limited palette is a filter which randomly brightens and darkens pixels to give a grainer look, oftentimes used by novice pixel artists. In other contexts, it can mean a texture with no "definition", in that the detail has no meaning and is just a jumble of randomly placed pixels with no thought or reasoning behind them, oftentimes on materials that make no sense to be noisy.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/10.png" alt="noise" class="center" loading="lazy">
  <i class="center"><b>Picture 10:</b> Left: A "noisy" texture with an excessively large palette. Right: A "noisy" texture with no definition and just a random mess of pixels.</i>
  <br>
  <li id="jappa"><b>Jasper "JAPPA" Boerstra</b> is the current art director for Minecraft, formerly working on the game's art from 2017 to 2022. In addition, he was mostly responsible for the 1.14 texture update.</li>
  <br>
  <li id="prog-art"><b>Programmer art</b> (often colloquially referred to as "progart" or "PA") is an umbrella term that describes the textures and the general art style used in Minecraft before version 1.14 (except all of the new textures that were added in 1.13). These weren't made by Jappa, or any real artist, but by the developers of the game. Note that this term wasn't coined by Mojang, and outside of the Minecraft resource pack community it refers to placeholder visuals usually created by the programmers as placeholders for new features, which is what the pre-1.14 textures basically are, since many of the widely used ones were originally made by Notch in paint.net within a span of minutes.</li>
  <br>
  <li id="jappa-textures"><b>Jappa textures</b> directly oppose Programmer Art. They were made by dedicated pixel artists like Jappa and they have a consistent art style. They are featured in all versions after 1.14 inclusive.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/11.png" alt="jappa textures" class="center" loading="lazy">
  <i class="center"><b>Picture 11:</b> Left: Programmer art oak planks. Right: Jappa's oak planks.</i>
  <br>
  <li id="vattic"><b>Vattic</b> is the original creator of the Faithful 32x32 texture pack in 2010. In the following years, the pack exploded in popularity, but in 2016, Vattic disappeared from the internet following some unfortunate IRL circumstances, leaving his pack discontinued at the peak of its popularity. After being found again in 2020, he authorized the Faithful project to continue the pack officially. Classic Faithful is built on upscaling textures based on Vattic's original principles, and to emulate his original style with both the new, Jappa textures and updating legacy versions of the pack with later programmer art textures. All of Vattic's original art can be found unmodified in the <a href="https://web.archive.org/web/20170630235514/faithful32x32.com/dl/faithful32pack.zip/">Wayback Archive.</a></li>
  <br>
  <li id="false-lines"><b>False lines</b> are the occurrence of several elements and/or color areas of a texture lining up in such a way that they create an illusion of a straight line, even when there is none in reality.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/12.png" alt="mixel texture" class="center" loading="lazy">
  <i class="center"><b>Picture 12:</b> An example of false lines.</i>
  <br>
  <li id="mixels"><b>Mixels</b> describe pixels of clashing resolutions, for example if a texture uses 1x1 pixels and the other uses 2x2 pixels extensively, that would be considered mixels.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/13.png" alt="mixel texture" class="center" loading="lazy">
  <i class="center"><b>Picture 13:</b> Example of mixels in a texture.</i>
  <br>
  <li id="contrast"><b>Contrast</b> is a method of classifying a certain color palette. High contrast means that the colors look very different from each other, and low contrast means the colors look very similar to each other. In more technical terms, it's the distance from each color on the wheel, usually in brightness, but sometimes with a mix of saturation and hue differences as well.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/14.png" alt="contrast" class="center" loading="lazy">
  <i class="center"><b>Picture 14:</b> Left: Example of a texture with low contrast. Right: The same texture with higher contrast.</i>
  <br>
  <li id="depth-shading"><b>Depth shading</b> is an extremely versatile method of shading two or more pixel wide lines which can be employed in a multitude of scenarios. Essentially, one shades a thicker line to make one side lighter and one side darker, using some form of added color, or color from elsewhere in the texture. Depending on the material, the added color will either be lighter or darker than the base color, and this will go into more detail in the material reference list. While this term was initially used just for gaps, it has expanded over time to include any two pixel wide line that you want to shade in this method, including highlights and ridges.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/15.png" alt="depth shading" class="center" loading="lazy">
  <i class="center"><b>Picture 15:</b> Examples of depth shading on gaps and highlights.</i>
  <br>
  <li id="stairing"><b>Stairing</b> is a method of making lines and curves, where each pixel moved up or down in the line is joined back to the previous one. This generally does not look the best in large amounts, and should be avoided in excess. However, it can be used in conjunction with thinner and thicker lines to give more natural gaps or lines to various textures.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/16.png" alt="stairing" class="center" loading="lazy">
  <i class="center"><b>Picture 16:</b> Left: An example of stairing being overused on a texture. Right: Stairing being used in small amounts alongside thicker and thinner lines.</i>
</ol>

___

## Part 2: General Rules and Tips

### **Rules**

These requirements apply to all textures unless specified otherwise and must all be met for a texture to be considered viable for Classic Faithful.

<ol>
  <li id="follow-default"><b>Textures need to follow vanilla Minecraft textures whenever possible.</b> This should go without saying, but textures have to keep the same proportions, general coloration, and representation as vanilla. A good rule of thumb is to check how the texture looks from far away compared with vanilla; the less difference, the better.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/17.png" alt="default vs cf" class="center" loading="lazy">
  <i class="center"><b>Picture 17:</b> Right: A texture with vanilla color placement, proportions, and overall structure. Left: Its vanilla counterpart.</i>
  <br>
  <li id="reference-vattic"><b>When applicable, always reference <a href="https://web.archive.org/web/20170630235514/faithful32x32.com/dl/faithful32pack.zip/">Vattic's art</a>.</b> Another self explanatory one given the entire purpose of the pack. If the texture has a programmer art equivalent, or just generally fits into a similar material as one, always reference Vattic's original art when drawing textures. Not only does it make texturing much easier, but it also helps keep the stylistic cohesion of looking like Vattic's original Faithful 32x32.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/18.png" alt="vattic vs cf" class="center" loading="lazy">
  <i class="center"><b>Picture 18:</b> Left: Vattic's bricks. Right: Its Jappa equivalent.</i>
  <br>
  <li id="less-is-more"><b>With detailing, less is more.</b> Don’t overdo dithering or antialiasing, use the minimal amount of detail to keep textures from looking flat or ugly. Always ask yourself "could Jappa have done this in a 16x canvas" before adding additional detail; if large details are not present in vanilla there's probably a reason for it. If something genuinely could not fit in the vanilla texture and makes no sense to not add, such as gravel not containing actual rocks, then it can be acceptable to add. However, always get feedback before changing anything noticeable about any texture.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/19.png" alt="overdetailed textures" class="center" loading="lazy">
  <i class="center"><b>Picture 19:</b> Left: A texture with just enough detail. Right: An overdetailed texture.</i>
  <br>
  <li id="palette"><b>Don't overly change the vanilla palette.</b> Adding in-between colors is encouraged to eliminate a "plasticky" flat look, but don't overdo it by making the texture completely nonvanilla or blurry. Generally, between one and three added colors should suffice, and oftentimes none are even necessary to begin with. As well as this, ensure that the darkest and lightest colors of the texture are untouched to avoid the overall contrast being significantly altered; any added colors should just be used to blend contrasty and/or flat areas rather than create nonvanilla contrast in the palette. Another thing to note is to never change any already existing colors in a texture, only add to them. There are certain specific exceptions to this rule which will be covered later on.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/20.png" alt="constructive color use" class="center" loading="lazy">
  <i class="center"><b>Picture 20:</b> Left: Vanilla texture. Center: Unnecessary use of added colors. Right: Constructive use of added colors.</i>
  <br>
  <li id="1px-items"><b>When making item textures, thin out the borders to one pixel wide.</b> Pretty much exactly what it sounds like; two pixel wide outlines for items in 32x almost always look disproportionate and bloated. If the texture doesn't have a clear outline or the vanilla texture itself doesn't use a one pixel wide outline, then it can be acceptable to use more than one pixel, but nearly all of the time you should be thinning them out.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/21.png" alt="thinned outlines" class="center" loading="lazy">
  <i class="center"><b>Picture 21:</b> Left: Examples of textures with two pixel wide outlines. Right: Textures with one pixel wide outlines.</i>
  <br>
  <li id="outdated-textures"><b>If a vanilla texture references an outdated texture, use the outdated texture as a base in the Classic Faithful counterpart.</b> Examples of this include the observer top using an outdated furnace base, the end crystal using an outdated bedrock texture, and smooth stone using an outdated stone texture.</li>
  <br>
  <li id="reuse-textures"><b>If a texture uses another texture as a base, use the already existing Classic Faithful rendition of it, if available.</b> An example of this would be planks and the crafting table. Don't make planks from scratch just for the crafting table texture, as not only would this cause inconsistencies if the two are used in conjunction, but it would also waste a lot of effort.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/22.png" alt="reusing textures" class="center" loading="lazy">
  <i class="center"><b>Picture 22:</b> A texture that directly references another. Note the identical plank background on the crafting table.</i>
  <br>
  <li id="useless-textures"><b>Don't upscale useless textures.</b> If a texture would end up looking identical to vanilla when upscaled, is unused, or is already so high resolution that there's no real need to upscale it, then just don't do it. It just bloats the file size of the pack and wastes your effort, pretty self explanatory.</li>
</ol>

### **Tips**

These are less specific ways to improve your textures, and unlike rules can be subject to interpretation.

<ol>
  <li id="mob-faces"><b>Mob faces</b> can be difficult to interpret. If making eyes, try to blend the corner of the eye into the next color over using an added color. This can be seen on a number of mob textures, as Vattic employed this method a lot. Try to upscale other features unless you cannot make it work (or it creates your new sleep paralysis demon), in which case leaving it the same as default is fine (a "mixel" face).</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/23.png" alt="mob faces" class="center" loading="lazy">
  <i class="center"><b>Picture 23:</b> Left and center: Examples of "demixelled" mob faces. Right: A hard to interpret face left as mixels.</i>
  <br>
  <li id="jaggies-bad"><b>Smooth jagged lines whenever possible.</b> When upscaling lines and curves in a texture, you have to ensure jagged or lumpy edges (oftentimes referred to as "jaggies") do not form. Essentially, you want to ensure differing lengths of pixels within the curve don't alternate or repeat, rather curving it in a more natural way where the lengths of each section get longer or shorter consistently.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/24.png" alt="jaggies vs not jaggies" class="center" loading="lazy">
  <i class="center"><b>Picture 24:</b> Left: Examples of jagged edges and curves. Right: Examples of smooth edges and curves.</i>
  <br>
  <li id="overuse-2px"><b>Don't overuse undetailed two pixel wide lines.</b> Not only does it look mixelly or incomplete which is undesired, but it also makes the texture look flat. The best way to upscale these types of textures would be to add a color or use an existing color to depth shade the block to eliminate these straight two pixel wide lines, or to simply reduce the width of the band if necessary.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/25.png" alt="stairing pixels" class="center" loading="lazy">
  <i class="center"><b>Picture 25:</b> Left: Improper interpretation of textures. Right: Utilizing the larger canvas size to remove unnecessarily thick lines.</i>
  <br>
  <li id="cross-reference"><b>Cross reference other similar textures.</b> This is one of the most important tips to make textures look like they fit in the pack in the first place. You don't just have to reference Vattic's art, but other pre-existing Classic Faithful textures as well. More information about how to shade specific materials can be found below, but this tip in particular will not only help you improve at getting the general style of Classic Faithful down, but improve at pixel art in general over time.</li>
</ol>

**And most importantly,** **_always get feedback from others while upscaling a texture!_** **It will help you improve in ways you wouldn't even have thought of.**

___

## Part 3: Material Reference List
This section goes into detail about how to shade materials that you shouldn't shade in the "normal" way. If a material is not on this list, refer to the first entry.

<br id="conventional">

**Conventional/normal/painted upscaling** (used for basically everything not on this list) has no real special or unique way to shade these textures. Simply upscale them normally by smoothening out curves and shapes, taper off any lines and defined structures, add antialiasing and added colors to remove flat areas if and where needed, and keep stylistic cohesion present wherever possible by cross referencing existing textures as much as possible.

<img src="/images/pages/textures/cf32-texturing-guidelines/26.png" alt="conventionally upscaled textures" class="center" loading="lazy">
<i class="center"><b>Picture 26:</b> Examples of conventionally upscaled blocks.</i>

<br id="gem-and-metals">

**Gem and metal blocks** should be upscaled through a normal pass, and similar to the shading on large bricks if there are defined gaps and highlights, blend them. Added color usage is also encouraged to accurately portray a shiny material. For gaps, depth shade them by adding a lighter color(s) rather than a darker one, to give the texture an almost "glowy" look..

<img src="/images/pages/textures/cf32-texturing-guidelines/27.png" alt="gem and metal textures" class="center" loading="lazy">
<i class="center"><b>Picture 27:</b> Examples of gem and metal blocks. Note the heavy usage of added colors and blended gaps.</i>

<br id="contiguous-stones">

**Contiguous stones** that are not broken up into defined shapes should not have any added colors, and should be upscaled in a highly "painted" style, meaning that blobs of color shouldn't have definition added to them where none exists, and it should be upscaled in a very literal sense of being closer to a simple "demixelling" pass. However, avoiding jagged edges and keeping stylistic cohesion present with the rest of the textures is still important.

<img src="/images/pages/textures/cf32-texturing-guidelines/28.png" alt="contiguous stone textures" class="center" loading="lazy">
<i class="center"><b>Picture 28:</b> Examples of contiguous stone textures. Note the lack of added detail and the plasticky look.</i>

<br id="distinct-stones">

**Rocky materials with distinct stones** should first use added colors to define what is a rock and what is a gap before doing anything else. After this, upscale normally while ensuring that the gaps and the rocks are visibly separated and don't overly blend into each other using added colors. Always shape based on the rocks, and the gaps will follow based on the rocks and look natural as a result. Otherwise, the rocks won't look anything like rocks!

<img src="/images/pages/textures/cf32-texturing-guidelines/29.png" alt="rocky textures" class="center" loading="lazy">
<i class="center"><b>Picture 29:</b> Examples of textures with distinct rocks. Note the visible separation of the rounded rocks and gaps through added colors, particularly in comparison to their vanilla counterparts.</i>

<br id="tiles">

**Small bricks and tiles** should thin out the gaps to one pixel wide in the direction that looks best, and be upscaled normally from there. If the bricks have highlights or shadows, thin those out as well to one pixel wide. If the texture ends up looking flat due to the larger brick size after thinning out the gaps and highlights, added colors and even dithering sometimes may be helpful depending on the texture.

<img src="/images/pages/textures/cf32-texturing-guidelines/30.png" alt="small brick textures" class="center" loading="lazy">
<i class="center"><b>Picture 30:</b> Examples of small bricks and tiles. Note the one pixel wide gaps/highlights and slight usage of dithering.</i>

<br id="large-bricks">

**Large bricks (and polished stones in certain situations)** should leave the gaps, highlights, and shadows two pixels wide, and be upscaled normally from there. Depth shade the gaps and highlights, and for the gaps add a darker color as opposed to gems which add a lighter color. This helps give the gaps a 3d effect and makes the gaps a lot less flat and "AI upscaled" looking. If the bricks have a linear pattern, small amounts of linear dithering may also be helpful.

<img src="/images/pages/textures/cf32-texturing-guidelines/31.png" alt="large brick textures" class="center" loading="lazy">
<i class="center"><b>Picture 31:</b> Examples of larger bricks and polished stones. Note the usage of two pixel wide blended gaps, small amounts of linear dithering, but the overall painted look.</i>

<br id="polished-stones">

**Polished stone/wood** are the same as large bricks, only with the interior of the texture being tiled and the obvious tiling repetitions removed. However, only do this if it looks good, otherwise refer to the entry of large bricks if it has a "noisy" or nonvanilla appearance which is undesirable.

<img src="/images/pages/textures/cf32-texturing-guidelines/32.png" alt="polished stone textures" class="center" loading="lazy">
<i class="center"><b>Picture 32:</b> Examples of polished stone and wood blocks. Note how the detail looks tiled and much more fine compared to vanilla, and the usage of two pixel wide blended gaps.</i>

<br id="logs-and-stems">

**Tree bark and mushroom stems** should have heavy amounts of antialiasing in the direction the texture goes added manually using added colors. This is primarily done to preserve the aesthetic of Vattic's original logs, which had an extremely glossy, almost motion blurred appearance and had no real reasoning for being so.

<img src="/images/pages/textures/cf32-texturing-guidelines/33.png" alt="log and stem textures" class="center" loading="lazy">
<i class="center"><b>Picture 33:</b> Examples of heavily motion blurred logs. Note the usage of added colors going in the direction of the texture's linearity.</i>

<br id="refined-wood">

**Planks and other refined wood** should be upscaled with a lot of linear dithering and small amounts of antialiasing, to accurately portray a wood grain material. A method of doing this which is useful for planks involves stretching the vanilla texture, tiling it downwards, and fixing any awkward areas. Alternatively, if this method does not work well, simply extend out the detail to portray a linear look. Do not add colors unless absolutely necessary, and preserve default's contrast where possible.

<img src="/images/pages/textures/cf32-texturing-guidelines/34.png" alt="refined wood textures" class="center" loading="lazy">
<i class="center"><b>Picture 34:</b> Examples of refined wood. Note the detailed and linear look.</i>

<br id="large-plants">

**Leaves and larger plants** can use small amounts of dithering on the branches mixed in with a slightly increased usage of antialiasing and/or added colors. With thicker plants like cacti or bamboo, don't use any dithering and upscale conventionally.

<img src="/images/pages/textures/cf32-texturing-guidelines/35.png" alt="larger plant textures" class="center" loading="lazy">
<i class="center"><b>Picture 35:</b> Examples of larger plants. Note the lack of any blending method on stalks and stems.</i>

<br id="foliage">

**Flowers and other foliage** can use dithering more heavily than leaves or stalks. Similar to rocky stones, ensure that flowers have a defined shape and don't overly blend into the stems or leaves, and depending on the flower type either dither or antialias. For plant stems, antialias heavily and thin them out. Vines should be evenly conventionally dithered throughout the entire texture, and use heavy amounts of antialiasing in addition.

<img src="/images/pages/textures/cf32-texturing-guidelines/36.png" alt="foliage textures" class="center" loading="lazy">
<i class="center"><b>Picture 36:</b> Examples of general foliage. Note the usage of dithering on the vines and on certain flowers, and how the flower stems were thinned out.</i>

<br id="grass-fungi">

**Grassy textures and certain fungi** should use a "jumble" or "scramble" filter if your editing program has that, with a few edits to fix mixels and other visual issues. If it doesn't, manually dither it to give it a coarse texture. Keep the palette as close to vanilla as possible to preserve the contrast, sometimes you may want to use additional effects and index it back to the vanilla palette.

<img src="/images/pages/textures/cf32-texturing-guidelines/37.png" alt="grassy textures" class="center" loading="lazy">
<i class="center"><b>Picture 37:</b> Examples of grassy textures. Note the usage of patchy dithering.</i>

<br id="sand">

**Sand and other powdery materials** should tile the block in a 2x2 grid, then cut out random sections and rotate and/or flip them randomly to remove repetitions that stops the texture from looking just tiled on its own.

<img src="/images/pages/textures/cf32-texturing-guidelines/38.png" alt="powdery textures" class="center" loading="lazy">
<i class="center"><b>Picture 38:</b> Examples of powdery materials. Note the fine detail and how it looks almost tiled but isn't.</i>

<br id="sandstone">

**Sandstone** should have large amounts of dithering present, a jumble tool may also suffice if necessary. Thin out natural gaps a lot more than otherwise, to give a more slate-like appearance. For more refined textures such as cut or chiseled sandstone antialiasing can also be used to properly convey smoothness.

<img src="/images/pages/textures/cf32-texturing-guidelines/39.png" alt="sandstone textures" class="center" loading="lazy">
<i class="center"><b>Picture 39:</b> Examples of sandstone textures. Note the heavy usage of dithering, and heavy usage of antialiasing on polished blocks.</i>

<br id="prismarine">

**Prismarine** should use added colors and antialiasing excessively to convey a smooth, shiny material. Thin out and curve highlights, and reduce gaps to one pixel wide.

<img src="/images/pages/textures/cf32-texturing-guidelines/40.png" alt="prismarine textures" class="center" loading="lazy">
<i class="center"><b>Picture 40:</b> Examples of prismarine textures. Note the heavy reliance on antialiasing to prevent flatness, and the one pixel wide gaps and highlights.</i>

<br id="contrasty">

**Contrasty dirt and stone textures** should soften the colors by using a translucent layer of the midtone color or manually editing the contrasty colors, and tile vanilla 16x on top of the texture at a low opacity using another different layer. However, only do this if the texture is particularly contrasty and the vanilla palette doesn't look good in any way even with added colors, as this method can add a lot of unnecessary colors and should be used as a last resort.

<img src="/images/pages/textures/cf32-texturing-guidelines/41.png" alt="tiled detail textures" class="center" loading="lazy">
<i class="center"><b>Picture 41:</b> Examples of contrasty dirt and stone textures. Note the noisy look.</i>

<br id="ice-glass">

**Icy and glassy textures** should use antialiasing excessively. For items in particular, added colors should be used to properly convey a smooth surface. For textures with an obvious diagonal shine, thin out the shine marks and use antialiasing in the direction of the the marks to convey a streaky look, almost like diagonal linear dithering.

<img src="/images/pages/textures/cf32-texturing-guidelines/42.png" alt="ice and glass textures" class="center" loading="lazy">
<i class="center"><b>Picture 42:</b> Examples of glassy and icy blocks. Note the usage of antialiasing and added colors.</i>

<br id="fur-fabric">

**Fur and fabric** should avoid false lines forming at all costs, which is very easy to happen given the spiky nature of these materials. Upscale it normally, and try to avoid having lines every two pixels from 16x by thickening and thinning out some of the spikes on the texture. Generally, the farther from the base color a spike gets, the thinner it should be. This creates a more natural effect and stops it from looking mindlessly upscaled.

<img src="/images/pages/textures/cf32-texturing-guidelines/43.png" alt="fabric and fur textures" class="center" loading="lazy">
<i class="center"><b>Picture 43:</b> Examples of fabric and fur textures. Note the heavy usage of tapering lines and spikes.</i>

<br id="door-trapdoor">

**Doors and trapdoors** should be upscaled like what they are made of. However, doors should always use one pixel wide borders, while trapdoors can use two pixel wide blended outlines for the outer border. This discrepancy is due to Vattic's original wooden door and trapdoor having this inconsistency present.

<img src="/images/pages/textures/cf32-texturing-guidelines/44.png" alt="door and trapdoor textures" class="center" loading="lazy">
<i class="center"><b>Picture 44:</b> Examples of doors and trapdoors. Note the usage of depth shading on the trapdoors and one pixel wide lines on the doors.</i>

<br>

**And above all, always reference [Vattic's art](https://web.archive.org/web/20170630235514/faithful32x32.com/dl/faithful32pack.zip/) or other similar textures if possible first.** **_Use these material guidelines only if there is no good reference point or equivalent!_**

___

## Part 4: About Classic Faithful 32x PA

These guidelines have been heavily focused on the 32x Jappa pack. However, the Classic Faithful 32x Programmer Art pack follows a similar enough style and logic to not merit an entirely separate doc.

As new programmer art in the sense of art by developers of the game with little to no stylistic cohesion is no longer being developed, explaining how to upscale these types of textures in the same level of detail as the Jappa pack is unnecessary, given the pack being done in the first place. In addition, upscaling programmer art is very similar to upscaling Jappa, just dealing with larger palette sizes and taking questionable texturing decisions into account.

To get around this constraint of programmer art simply not being made anymore, the 32x Programmer Art pack is designed around the built-in vanilla programmer art resource pack, meaning any texture without a programmer art equivalent just reuses its Jappa counterpart. This solves the majority of problems surrounding how to interpret newer textures, by just using the texture that already exists.

While vanilla programmer art is deprecated and no longer updated, therefore leading to a lot of texture bugs, Classic Faithful in this regard takes liberties from the vanilla assets, but only to fix obvious oversights and eyesores that were forgotten by the developers.

**Newer textures are not "progartified" to match older ones unless there is a direct reference and it is an obvious choice what to do, such as nylium using Jappa netherrack as a base.**

Even though newer Jappa textures have a distinct style from programmer art, the exact way a developer would have gone about making a certain texture can't ever be known for sure, and it is not up to us to interpret. The aforementioned nylium and netherrack issue has a clear solution, to replace the Jappa netherrack with programmer art netherrack. However, a texture like blackstone has no clear programmer art equivalent, and as such shouldn't be touched and reuse the Jappa texture.

<img src="/images/pages/textures/cf32-texturing-guidelines/45.png" alt="progartification" class="center" loading="lazy">
<i class="center"><b>Picture 45:</b> Left: Nylium, an example of a texture that should be "progartified" to fix an obvious oversight in the vanilla programmer art resource pack. Right: Blackstone, an example of a texture with no clear programmer art equivalent and as such should not be changed from its Jappa base.</i>

That being said, here's a section to help upscale any of the most different aspects of programmer art and Jappa art.

___

## Part 5: Upscaling Noise and Blurriness

This is a very useful skill for anyone interested in programmer art to learn, and an essential for working on Classic Faithful 32x PA. Programmer art palette sizes oftentimes make conventional upscaling near-impossible by hand, and cutting corners is usually necessary to produce textures in a timely manner. These types of textures are also generally exceptions to the palette rule, in that you can add a significant number of colors, as color counts weren't really considered during the creation of vanilla programmer art textures.

### **Noisy Textures**
Noise is usually present on textures because they are an original, programmer art texture, or are placeholder visuals for a snapshot texture. The reason for noise in textures is generally due to a programmer having no idea how to properly draw pixel art and hiding whatever they made behind a mess of darker and lighter pixels to make it harder to see.

<ol>
  <li id="tiling-with-edits"><b>Tiling with edits</b> works very well if the texture is powdery or grainy, particularly when the texture is too chaotic and noisy to do it by hand. However, the most important part is to edit the texture after it's been tiled, or tiling repetitions will occur and it won't look good as a result.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/46.png" alt="tiling repetitions" class="center" loading="lazy">
  <i class="center"><b>Picture 46:</b> Left: The default texture. Center: The default texture tiled in a 2x2 grid. Right: Tiling repetitions removed.</i>
  <br>
  <li id="jumbling"><b>Jumbling</b>, sometimes also called "scrambling", "diffuse", or just "randomize", is a method of automatically upscaling textures with a lot of noise, which you may recall is how you should be upscaling grassy textures. Essentially, it gets demixelled by shuffling the pixels around randomly near, meaning that color placement stays similar to default. However, this method has a very rough and almost patchy look and not all materials will support it.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/47.png" alt="jumbling" class="center" loading="lazy">
  <i class="center"><b>Picture 47:</b> Examples of texture upscaling via jumbling.</i>
  <br>
  <li id="tiled-detail"><b>Tiled detail</b>, which contrasty stone and dirt textures also use, however just without the contrast reduction. After doing a cursory upscale, likely using another method on this list such as bilinear or indexing, tile the same vanilla 16x texture you're upscaling on top of the texture at a low opacity using a different layer. This works best on dirty or very detailed textures however, as it has a very grainy appearance, similar to jumbling but even more detailed.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/48.png" alt="tiled detail" class="center" loading="lazy">
  <i class="center"><b>Picture 48:</b> Left: An automatically upscaled base. Center: The vanilla texture tiled. Right: The two overlaid on top of each other.</i>
  <br>
  <li id="softening"><b>Softening</b> is effectively the opposite effect of tiled detail, in that rather than making it more contrasty and grainy, it makes it less so. Basically, rather than tiling default on top you put a heavily blurred version of the texture on top at a very low opacity, decreasing the contrast on the colors and softening the overall texture to look less sharp.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/49.png" alt="softening" class="center" loading="lazy">
  <i class="center"><b>Picture 49:</b> Left: A base upscale. Center: The base upscale blurred. Right: The two overlaid on top of each other.</i>
  <br>
  <li id="indexing"><b>Indexing and re-adding noise</b> is a method where you index the palette down to a more reasonable size, upscale like normal or however the material should be shaded, then adding noise back and approximating the palette to something similar to what it originally was. On textures with defined gaps or other visible structures this is oftentimes the most viable option.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/50.png" alt="indexing" class="center" loading="lazy">
  <i class="center"><b>Picture 50:</b> Top right: The default vanilla texture. Top left: Indexed down to essential colors. Bottom Left: An upscale of the indexed version. Bottom right: Added noise back in, finished version.</i>
  <br>
  <li id="native-upscale"><b>Natively upscaling</b> is pretty much exactly what it sounds like, and by far the most difficult on this list. Simply upscale the texture as usual, while keeping the noise present and avoiding mixelly areas.</li>
  <br>
</ol>

**Many of the techniques listed here can work in conjunction with each other. You can even crop out certain areas of a texture and upscale them separately, effectively isolating areas of a texture from each other to make palette sizes more manageable and localized.**

### **Blurry Textures**
The majority of additional techniques for upscaling blurry textures are shared with noise.

<ol>
  <li id="automatic-upscale"><b>Automatic upscaling</b>, such as a bilinear or bicubic upscaling filter rather than nearest neighbor and doing it by hand can oftentimes do the trick. As it tends to add a lot of additional transition tones, it fits blurry textures very well.</li>
  <br>
  <img src="/images/pages/textures/cf32-texturing-guidelines/51.png" alt="indexing" class="center" loading="lazy">
  <i class="center"><b>Picture 51:</b> Left: The programmer art bone block. Right: A bilinear upscale of said bone block.</i>
</ol>

___

## Conclusion

<p>
  <i>Well, you did it and got through the whole thing. You should hopefully now have an actual idea of what Classic Faithful looks like and how it's done behind the scenes. If you have any questions or want something changed, make sure to let us know on our <a href="https://discord.gg/KSEhCVtg4J">Discord Server.</a></i>
</p>

___

## Credits go to…
<p>
  The <a href="/pages/textures/f32-texturing-guidelines">Faithful 32x guidelines</a> by <a href="https://github.com/Pomi108">Pomi108</a>, which this document took heavy inspiration and sections from.
  <br>Written by <a href="https://github.com/3vorp">Evorp</a>.
  <br>Edits by <a href="https://www.twitch.tv/zappack_">ZapPack</a>.
  <br>Images by various Classic Faithful contributors and Mojang Studios.
</p>

___