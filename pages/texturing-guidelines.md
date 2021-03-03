---
title: 'Textures: Compliance texturing guidelines'
---
# Acquiring More Pixels
### *A guide on how to upscale Minecraft textures for Compliance, and have them not suck*

___

Redrawing textures in double the resolution while staying true to the art style is ***hard***, and I'm sure everyone who's tried making anything for Compliance knows this. Nonetheless, it's time to tackle all the problems you might encounter while texturing.  
Here are some basic rules and guidelines to help you!

## Part 1: The Do's and Don't's

**1. Outlines, dividing lines and the like that would end up being 2px when upscaled should always\* be 1px.**  
This one is particularly important. There's no exact reason for this, but most people agree that 1px outlines simply look better. Thin outlines have also become a staple of Compliance, and help maintain the style consistency we want to achieve.  
In certain cases, like in the daylight sensor texture, it is acceptable to use 2px lines, as 1px lines would look off-centre or otherwise out of place.

*fig. 1: Bad examples.*  
<img src="{{ site.baseurl }}/images/pages/textures/bad_2px_examples.png" alt="bad_2px_examples">

*fig. 2: Good examples.*  
<img src="{{ site.baseurl }}/images/pages/textures/good_2px_examples.png" alt="good_2px_examples">

**2. Avoid adding extra colours at all costs. Use the vanilla palette.**  
Most of the time, in double the resolution, you're fine with the palette the original texture uses. If you need to blend two or more colours, use dithering, if applicable.  
In extreme cases, such as shading a smooth object where dithering would look out of place, adding colours is necessary for the texture to look good. Just try to keep the number of extra colours at a minimum, and discuss it with other artists as well.
**This applies to vanilla textures with many unnecessary colours as well!** If you want to redraw one of these, index the original's colours first. (That means you should reduce the colours present in the image to only the necessary colours, using an image editing program like Aseprite or Photoshop.)

*fig. 1: Bad examples.*  
<img src="{{ site.baseurl }}/images/pages/textures/bad_colour_examples.png" alt="bad_colour_examples">

*fig. 2: Good examples.*  
<img src="{{ site.baseurl }}/images/pages/textures/good_colour_examples.png" alt="good_colour_examples">

**3. Keep material in mind.**  
You can't shade coal the same way as you would a bucket. When drawing a texture, define its material (rough/smooth, shiny/non-reflective), and shade it accordingly. If it's shiny, make the highlights and shades stand out and don't dither, if it's not reflective, lower the shades'/highlights' contrast and use dithering to your advantage.  
In the same manner, well-defined shapes mean nothing if they look out of place – think about what the texture represents, so make leaves look like leaves, wood like wood, etc.

*fig. 1: Middle: Default texture; Left: Incorrect interpretation; Right: Correct interpretation.*  
<img src="{{ site.baseurl }}/images/pages/textures/well_defined_shapes.png" alt="well_defined_shapes">

**4. Additional tips**  
When dithering, try not to overdo it – super-noisy textures usually don't look good. (Unless you're drawing e.g. sand – whether or not the sand texture uses dithering is up for debate.)  
Avoid large patches of a singular colour in most textures. If possible, break the colour patches into smaller, more compact areas using dithering or other methods. This helps get rid of the plasticky look that's usually not suited for a texture.  
When doing a texture of a mob's face, if all attempts at upscaling the face fail, it is fine to just use the vanilla face directly upscaled to double the resolution, such as seen below.

*fig. 1: An acceptable mob face*  
<img src="{{ site.baseurl }}/images/pages/textures/good_face_example.png" alt="good_face_example">

___

## Part 2: The Jappa Dilemma

Most people agree that the main Compliance pack should be "Jappa". But what even *is* this word?  
Well, for starters, Jappa is the online nickname of [Jasper Boerstra](https://minecraft.gamepedia.com/Jasper_Boerstra), Minecraft's lead texture artist, that has been hired to make textures for the 1.14 Texture Update and continues to make textures for new Minecraft features.

When most people say "it should be jappa", what they *really* mean is that a texture should not be "programmer art" – or modelled after a pre-1.14 Minecraft texture, which are colloquially called "programmer art", or "progart" for short, among Minecraft texture artists. For the main Compliance pack, this should indeed not be the case, as modelling textures after programmer art ones for 1.14+ would mean using non-default textures as a base, which is against the main aim of Compliance.  

The problem arises when people say "this is *not* jappa", because the actual meaning varies.  
It is widely accepted that Compliance's textures should "look jappa" as in they should *try to emulate Jappa's personal style in double the resolution, while keeping attention to detail.*  
That means that when making a texture, you should look at the default texture, think "how would Jappa do it if he had more pixels to work with?" and conceive the texture with this in mind.  
If you're still confused (which is okay), here is a list of what (generally) applies to a "jappa" Compliance texture:
- The object represented is the same as in the default texture.
- The object is portrayed in the same angle/perspective.
- The object maintains similar proportions to the vanilla one.
- The overall design of the object is the same.
- If said object is an item, it is drawn with a darker, one pixel thick outline.
- The object is lit from the same direction (usually top-left) as the vanilla one, and is shaded accordingly.
- Each area of the object is shaded using only a few shades of each colour.
- The texture maintains the same palette as the vanilla one.

#### About 16x limitations

When redrawing a texture in double the resolution, there is a tendency to keep the same level of detail and the same shape, without really thinking about what the texture represents. It is important to know that the perceived "flatness" or "cartooniness" is usually NOT a design choice, but rather a limitation of the resolution the texture is drawn in. Don't let yourself be chained up with the same limitations! Take full advantage of the higher resolution: as said above, make (for example) buckets look like buckets, even if you have to differ from the vanilla shape a bit.

Of course, all these definitions are really vague – and I don't think we can really improve that. So please, always discuss with other artists before posting a texture. You'll find that feedback can improve your texture by a *lot*.

___

That being said, have fun drawing and good luck with your texture!
