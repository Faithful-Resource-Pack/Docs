---
title: "Items Tutorial"
type: "Dungeons"
date: "09/09/2020"
archived: true
---

<style>
  li, p {
    text-align: justify;
  }
</style>

<img class="center" src="/images/pages/dungeons/items-tutorial/header.png" alt="header" loading="lazy">

<div class="table-of-content">
<h2>Table of Contents</h2>

<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#requirements">Requirements</a></li>
  <li><a href="#part-0-controls--hotkeys">Part 0: Controls & Hotkeys</a></li>
  <ul>
    <li><a href="#blockbench">Blockbench</a></li>
    <li><a href="#blender">Blender</a></li>
    <li><a href="#-what-if-i-dont-have-a-3rd-button-mousenumpad">No 3rd mouse Numpad</a></li>
  </ul>
  <li><a href="#part-1-modelling">Part 1: Modelling</a></li>
  <ol class="closing-bracket">
    <li><a href="#1-prepare-a-texture">Prepare a texture</a></li>
    <li><a href="#2-extrude-texture-in-blockbench">Extrude texture in Blockbench</a></li>
    <li><a href="#3-export-the-model-as-obj">Export the model as OBJ</a></li>
    <li><a href="#4-import-the-model-into-blender">Import the model into Blender</a></li>
    <li><a href="#5-set-up-a-material">Set up a material</a></li>
    <li><a href="#6-position-and-scale-your-model">Position & Scale your model</a></li>
    <li><a href="#7-export-your-model-as-fbx">Export your model as FBX</a></li>
  </ol>
  <li><a href="#part-2-rendering">Part 2: Rendering</a></li>
  <ol class="closing-bracket">
    <li><a href="#1-import-your-model">Import your model</a></li>
    <li><a href="#2-set-up-a-material-again">Set up a material (again)</a></li>
    <li><a href="#3-add-a-light">Add a light</a></li>
    <li><a href="#4-set-up-a-camera">Set up a camera</a></li>
    <li><a href="#5-configure-output-and-render">Configure & Render</a></li>
  </ol>
</ul>
</div>

<h2 id="introduction">Introduction</h2>

When making a mod for Minecraft: Dungeons, it is important to know that most weapons, melee and ranged, are not like items in Java or Bedrock Edition - their model is not generated from their texture, but rather it's made to fit it. This tutorial will show you how to make and render models for your own, custom item textures. Never worked with any 3D modelling software of any kind? Not to worry, this tutorial will show you exactly what to do, without any need for previous 3D modelling knowledge! Let's get started:

<h2 id="requirements">Requirements</h2>

- [Blockbench 3.6.6+](https://blockbench.net/)
- [Blender 2.80+](https://www.blender.org/)
- Import Unreal Skeletal Mesh add-on for Blender (download below)
- Minecraft: Dungeons default game files

<h2 id="part-0-controls--hotkeys">PART 0: Controls & Hotkeys</h2>

<h3 id="blockbench">Blockbench:</h3>
<img class="center" src="/images/pages/dungeons/items-tutorial/hotkey_blockbench.png" alt="hotkey blockbench" loading="lazy">
<h3 id="blender">Blender:</h3>
<img class="center" src="/images/pages/dungeons/items-tutorial/hotkey_blender.png" alt="hotkey blender" loading="lazy">

> If you are on Mac: use `Cmd` instead of `Ctrl`

<h3 id="-what-if-i-dont-have-a-3rd-button-mousenumpad">* What if I don't have a 3rd button mouse/numpad?</h3>

> you can skip this part if you've got a normal keyboard & mouse.

That's no problem! Blender allows you to emulate both of these, allowing you to access the controls you need.
Here's how to do it:

1. Go to Edit tab up top, then select Preferences. A window should pop up.
<img class="center" src="/images/pages/dungeons/items-tutorial/no-3rd-mouse-emulation-1.png" alt="no 3rd mouse emulation 1" loading="lazy">

2. In that window, go to the Input tab and check the `Emulate 3 Button Mouse` and `Emulate Numpad` boxes.
<img class="center" src="/images/pages/dungeons/items-tutorial/no-3rd-mouse-emulation-2.png" alt="no 3rd mouse emulation 2" loading="lazy">

By default, `alt`+`LMB` will be registered as `MMB`. If you emulate the numpad, you can access the numpad hotkeys by pressing numbers in the top row of the keyboard (do NOT press shift!). The emulation will override some existing hotkeys placed on the numerical row, but we don't need them anyway, so don't worry about that.

Additionally, if you've got an Apple Magic Mouse, on top of having to emulate a 3 button mouse the view controls are a bit different:
<img class="center" src="/images/pages/dungeons/items-tutorial/hotkey_mac.png" alt="hotkey mac" loading="lazy">

> All other controls are the same.

<h2 id="part-1-modelling">PART 1: Modelling</h2>
<h3 id="1-prepare-a-texture">1) Prepare a texture</h3>

When you're finished making a texture for your item, it should look something like this:

<img class="center" src="/images/pages/dungeons/items-tutorial/prepare-a-texture-1.png" alt="prepare a texture 1" loading="lazy">

This is the texture that you want to use in your mod. For our purposes we'll need another, slightly modified texture. Make a copy of your texture and modify that. For your texture to work properly with Blockbench, you need to get rid of all the parts that you do not want to be included in the model. In this case we need to remove the palette thingy, but depending on the texture you might also need to make the background transparent etc.
This is how your texture should look before importing to Blockbench:

<img class="center" src="/images/pages/dungeons/items-tutorial/prepare-a-texture-2.png" alt="prepare a texture 2" loading="lazy">

Now with that out of the way, let's get to modelling itself!

<h3 id="2-extrude-texture-in-blockbench">2) Extrude texture in Blockbench</h3>

Upon opening Blockbench you should get to this screen:

<img class="center" src="/images/pages/dungeons/items-tutorial/extrude-texture-1.png" alt="extrude texture 1" loading="lazy">

Make a new generic model and name it whatever you want. **DO NOT** change the texture dimensions in the window that pops up, it will break things!

<img class="center" src="/images/pages/dungeons/items-tutorial/extrude-texture-2.png" alt="extrude texture 2" loading="lazy">

Before importing the texture, make sure that your snapping grid resolution is 16x16. You can do that by going to `File > Settings...` and then the Snapping tab.

<img class="center" src="/images/pages/dungeons/items-tutorial/extrude-texture-3.png" alt="extrude texture 3" loading="lazy">

Now go to `File > Import` and select `Extrude Texture`. **Do not** change anything in the window that pops up. You should get something like this:

<img class="center" src="/images/pages/dungeons/items-tutorial/extrude-texture-4.png" alt="extrude texture 4" loading="lazy">

Now move the model so that it's centered on the grid.

<img class="center" src="/images/pages/dungeons/items-tutorial/extrude-texture-5.png" alt="extrude texture 5" loading="lazy">

Finally, right click on the texture under the Textures tab, and then change the file to your original, unmodified texture.

<img class="center" src="/images/pages/dungeons/items-tutorial/extrude-texture-6.png" alt="extrude texture 6" loading="lazy">

If you done that correctly, you shouldn't see a visual change.

<h3 id="3-export-the-model-as-obj">3) Export the model as OBJ</h3>

You can do that by going to `File > Export` and then selecting `Export OBJ Model`.

<img class="center" src="/images/pages/dungeons/items-tutorial/export-as-obj.png" alt="export as obj" loading="lazy">
Save the OBJ file somewhere you can find it - you'll need it in the next step:

<h3 id="4-import-the-model-into-blender">4) Import the model into Blender</h3>

> Time to get our hands dirty in Blender!

Upon opening you should see small window pop up - don't change anything in there, just click away so the window disappears.
Next, delete the default cube by selecting it, right clicking and selecting `Delete`.
Now you can import your OBJ model by going to `File > Import`, selecting `Wavefront (.obj)` and then navigating to your model.

<img class="center" src="/images/pages/dungeons/items-tutorial/import-model-to-blender-1.png" alt="import model to blender 1" loading="lazy">

You might notice that your model doesn't show any textures - that is completely normal, it's just blender's default view mode. Switch to Material mode (top right) to see the texture.

<img class="center" src="/images/pages/dungeons/items-tutorial/import-model-to-blender-2.png" alt="import model to blender 2" loading="lazy">

Your model should then look something like this:

<img class="center" src="/images/pages/dungeons/items-tutorial/import-model-to-blender-3.png" alt="import model to blender 3" loading="lazy">

Additionally, you can box select all the part of your model, shift-click on one of them and press `Ctrl` + `J` to merge all parts into one like so:

<img class="center" src="/images/pages/dungeons/items-tutorial/import-model-to-blender-4.png" alt="import model to blender 4" loading="lazy">

This will make it easier to edit the model all at once.
We don't want the textures this blurry though! To fix that you'll need to

<h3 id="5-set-up-a-material">5) Set up a material</h3>
You can edit your material by clicking on the red checkered circle in the tab on the right:

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-1.png" alt="set up a material 1" loading="lazy">

First you need to name your material correctly. Go to the location of the default texture in the Dungeons game files (assuming you've extracted them); you should see a bunch of files besides the texture. Locate the one with the .mat extension and copy its name (without the extension).

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-2.png" alt="set up a material 2" loading="lazy">

Next, copy the name into this field at the top of the Material Properties tab, and press Enter.

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-3.png" alt="set up a material 3" loading="lazy">

Now you can fix the texture filtering by going into this dropdown menu and selecting Closest.

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-4.png" alt="set up a material 4" loading="lazy">

If you've done everything correctly, your model should look roughly like this:

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-5.png" alt="set up a material 5" loading="lazy">

<h3 id="6-position-and-scale-your-model">6) Position and scale your model</h3>
Now it's time to position your model to fit the default scale and placement. To do that we're going to use the default item model.
For importing Unreal skeletal meshes into Blender we're gonna need the Import Unreal Skeletal Mesh add-on. To install it, go to `Edit > Preferences`, then in the window that pops up go into the Add-ons tab, click the Install button and navigate to where you saved the .py file

<img class="center" src="/images/pages/dungeons/items-tutorial/position-and-scale-1.png" alt="position and scale 1" loading="lazy">

When you've installed the add-on, make sure it's enabled by ticking the box below in the Add-ons tab and checking if the add-on is present in the list. (if it's not, untick the box, find the add-on and enable it manually.)

<img class="center" src="/images/pages/dungeons/items-tutorial/position-and-scale-2.png" alt="position and scale 2" loading="lazy">

Now you can import the default model by going to File > Import, selecting Skeleton mesh (.psk) and navigating to the model.

<img class="center" src="/images/pages/dungeons/items-tutorial/position-and-scale-3.png" alt="position and scale 3" loading="lazy">

Now that you've imported the model you can scale, move and rotate your custom one to fit the default like so:

<img class="center" src="/images/pages/dungeons/items-tutorial/position-and-scale-4.png" alt="position and scale 4" loading="lazy">

**TIP:** You can use a present view (like topdown) by clicking any of these points on the top right corner  for more accurate positioning.

<img class="center" src="/images/pages/dungeons/items-tutorial/position-and-scale-5.png" alt="position and scale 5" loading="lazy">

You don't have to be super precise though - just try to roughly match the position and size of the default model.

When you're finished, delete the default model by selecting it, right clicking it and selecting Delete.

<h3 id="7-export-your-model-as-fbx">7) Export your model as FBX</h3>

You can export your model into the FBX format by going to File > Export and then selecting FBX.

<img class="center" src="/images/pages/dungeons/items-tutorial/export-as-fbx-1.png" alt="export as fbx 1" loading="lazy">

In the window that pops up you can navigate to your desired file location. That's not all tough - we'll also need to change some settings in the tab on the right side. Set the scale in the Transform tab to 0.01 and then, in the Geometry tab, set Smoothing to Face.

<img class="center" src="/images/pages/dungeons/items-tutorial/export-as-fbx-2.png" alt="export as fbx 2" loading="lazy">

Next, look at the model's name in the default game files and name your model that.

<img class="center" src="/images/pages/dungeons/items-tutorial/export-as-fbx-3.png" alt="export as fbx 3" loading="lazy">

Finally, click the blue Export button to finish the process.

<img class="center" src="/images/pages/dungeons/items-tutorial/export-as-fbx-4.png" alt="export as fbx 4" loading="lazy">

Congratulations! You've made it through the entire modelling process and now have a model that will function properly when put into a mod!

<p class="red-text">This is the end of the tutorial for those of you that are making items like the apple health drop, which do not require a render. But if you're making a model of a weapon - or just need to make a render - get ready for the next part:  </p>

<h2 id="part-2-rendering">PART 2: Rendering</h2>
<h3 id="1-import-your-model">1) Import your model</h3>

> if you've followed the tutorial up to this part, you can skip this step.

To import the model ripped from Minecraft: Dungeons we will need to install the Import Unreal Skeletal Mesh add-on for Blender. To do that, go to Edit > Preferences, then in the window that pops up go into the Add-ons tab, click the install button and navigate to where you saved the.py file.

<img class="center" src="/images/pages/dungeons/items-tutorial/rendering-import-model-1.png" alt="rendering import model 1" loading="lazy">

When you've installed the add-on, make sure it's enabled by ticking the box below in the Add-ons tab and checking if the add-on is present in the list. (if it's not, untick the box, find the add-on and enable it manually.)

<img class="center" src="/images/pages/dungeons/items-tutorial/rendering-import-model-2.png" alt="rendering import model 2" loading="lazy">

Now you can import the default model by going to File > Import, selecting Skeleton mesh (.psk) and navigating to the model.

<img class="center" src="/images/pages/dungeons/items-tutorial/rendering-import-model-3.png" alt="rendering import model 3" loading="lazy">

<h3 id="2-set-up-a-material-again">2) Set up a material (again)</h3>
First, check if the Use Nodes button in the red checkered circle tab is blue. If it's not, click on it to make it blue.

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-again-1.png" alt="set up a material again 1" loading="lazy">

Then switch to the Shader Editor using this menu up top:

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-again-2.png" alt="set up a material again 2" loading="lazy">

The tab should change into a node editor. Enlarge it so you can see it better and then make it look like this:

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-again-3.png" alt="set up a material again 3" loading="lazy">

**TIP:** You can add a node by pressing Shift + A, selecting Search and then typing the node's name. You can also zoom in and out using Ctrl + scroll.
TO connect two nodes together just click and drag from one point (as seen above) to another with your mouse.

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-material-again-4.png" alt="set up a material again 4" loading="lazy">

<h3 id="3-add-a-light">3) Add a light</h3>

First of all, your model is probably HUGE because Minecraft: Dungeons scales it down. This can cause some issues with lightning, so make your model smaller before doing anything.
Next, delete any lights that might've been added by Blender when you created the model. Just select them, right click and select Delete. They look like this:

<img class="center" src="/images/pages/dungeons/items-tutorial/add-a-light-1.png" alt="add a light 1" loading="lazy">

Before adding a light, switch to Render mode (the third circle in the top right menu) to see the changes properly.

<img class="center" src="/images/pages/dungeons/items-tutorial/add-a-light-2.png" alt="add a light 2" loading="lazy">

Now you can add a light by pressing Shift + A while hovering above the model view, going to Light and selecting Sun.

<img class="center" src="/images/pages/dungeons/items-tutorial/add-a-light-3.png" alt="add a light 3" loading="lazy">

Now move and rotate the sun while trying to roughly match the lightning of the default render. You can also move and rotate the model itself to help you out.
**TIP:** You can adjust the strength of your sun on this slider in the right-side menu while having the sun selected:

<img class="center" src="/images/pages/dungeons/items-tutorial/add-a-light-4.png" alt="add a light 4" loading="lazy">

When you're done you should get something that matches the default view and lightning pretty closely:

<img class="center" src="/images/pages/dungeons/items-tutorial/add-a-light-5.png" alt="add a light 5" loading="lazy">

<h3 id="4-set-up-a-camera">4) Set up a camera</h3>

For Blender to actually know what to render, we need to set up a camera.
First, we will enable an add-on that will make handling the camera easier. To do it, go to Edit > Preferences, open the Add-ons tab, find the add-on called "3D View: Stored views" and enable it like so:

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-camera-1.png" alt="set up a camera 1" loading="lazy">

Next, click this little arrow next to the axis cross thing:

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-camera-2.png" alt="set up a camera 2" loading="lazy">

A menu should pop up. Open the View tab and check the Lock Camera to View box.

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-camera-3.png" alt="set up a camera 3" loading="lazy">

Next, select a camera that should already be placed somewhere in your project. It should look like this:

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-camera-4.png" alt="set up a camera 4" loading="lazy">

Now rotate your view around so you get a view that looks the most like the default one. After that open the Stored Views tab, click Initialize and then click Camera to View. This will move the selected camera to your viewpoint.

<img class="center" src="/images/pages/dungeons/items-tutorial/set-up-a-camera-5.png" alt="set up a camera 5" loading="lazy">

Now press Numpad 0 to switch to camera view.

<h3 id="5-configure-output-and-render">5) Configure output and render</h3>

We're almost done! The only thing left to do is to configure the resolution and transparency of the output render.
You can make the output transparent by going to this tab in the menu on the right side, opening the Film tab and checking the Transparent box.

<img class="center" src="/images/pages/dungeons/items-tutorial/configure-and-render-1.png" alt="configure and render 1" loading="lazy">

For the resolution control, first get the default render and see how big it is. (There are usually 2 renders - and yes, you'll be rendering your model twice.)
When you've located the resolution of the default render, go to the tab in Blender immediately below the one you just opened and set the resolution in the first two fields.

<img class="center" src="/images/pages/dungeons/items-tutorial/configure-and-render-2.png" alt="configure and render 2" loading="lazy">

(You can then pan and zoom your view a bit so your model is roughly in the centre of the square.)


Before we get to the render itself, select your sun, go to the tab with the lightbulb and uncheck the Shadow box.

<img class="center" src="/images/pages/dungeons/items-tutorial/configure-and-render-3.png" alt="configure and render 3" loading="lazy">

Now you can finally initiate the render by pressing F12 (fn + F12 on mac).

When the render is finished, you can save it by going to Image > Save as.

<img class="center" src="/images/pages/dungeons/items-tutorial/configure-and-render-4.png" alt="configure and render 4" loading="lazy">

And there you have it! You have made yourself a model and render that is usable in Minecraft: Dungeons!

<img class="center" src="/images/pages/dungeons/items-tutorial/configure-and-render-5.png" alt="configure and render 5" loading="lazy">

---

<p style="text-align: center;"><em>Thank you so much for reading this tutorial, and good luck with your mod!</em></p>