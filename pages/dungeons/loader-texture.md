---
title: "Loader Texture"
category: "Dungeons"
date: "2020-08-09"
archived: true
---

<h1> How to customize the loader cube from Minecraft Dungeons</h1>

## Sources
All needed files for this tutorial can be found [here](https://github.com/Faithful-Resource-Pack/Faithful-Dungeons-32x/tree/dungeons-latest/Tools/loader).

## Requirements
- [Blender](https://www.blender.org/)
- [Python 3.8+](https://www.python.org/)
    - And Pillow module
- [Unreal Engine 4](https://www.unrealengine.com/) version 4.22.x

## Step by step: Blender
> Huge Thanks for [@CCCode](https://github.com/EvenTorset) for creating this model

1. Open `LoadingSpinnerBlock.blend` with Blender
2. Drag the green bar at the bottom at the beginning of the animation
<img class="center" src="/images/dungeons/loader-texture/1.png" alt="green bar">

3. Go to the `Shading` tab at the top of the screen
<img class="center" src="/images/dungeons/loader-texture/2.png" alt="shading tab">

4. Click on the blank face of the block in front of you (you get a green outline surrounding it)
<img class="center" src="/images/dungeons/loader-texture/3.png" alt="block green outline">

5. In the bottom slide, in the Orange Area, click on the cross & import a new texture:
    A. <img style="padding-left: 10px;" src="/images/dungeons/loader-texture/4.png" alt="import texture 1"><br>
    B. <img style="padding-left: 10px;" src="/images/dungeons/loader-texture/5.png" alt="import texture 2"><br>
    C. <img style="padding-left: 10px;" src="/images/dungeons/loader-texture/6.png" alt="import texture 3"><br>

6. Drag the green slider until a new face
    - Remake the previous step & this one until all faces are done
    - <p class="red-text">⚠️ The second side of the animation got 2 orange tabs: this is because the animation file uses a non-euclidean cube, there are 2 textures for 1 face.</p>
    > Optional: You can go to the `Texture Paint` tab & press the space bar to see your texture on the model.

7. Return to the `Layout` tab, and in the bottom right, change the output path
  <img class="center" src="/images/dungeons/loader-texture/7.png" alt="output path">

8. Finally: at the top left, click on render, then render the animation, all screenshots should be in where you set the output path.
  <img class="center" src="/images/dungeons/loader-texture/8.png" alt="render animation">

## Step by step: Python
### Install Pillow:
As said before, you will need the Pillow module, install it (if you haven't already installed it).
1. Press `Windows` + `R` then type `cmd` then `enter`
2. Write this command: `pip install pillow` then press `enter`
    <img class="center" src="/images/dungeons/loader-texture/9.png" alt="pip install command">

3. Once you have installed python & Pillow and that you have all the screenshots (with the right name), you can simply double click the `Merge.py` script to get the texture atlas.
    <strong class="red-text">⚠️ The script needs to be in the same file as screenshots took by Blender.</strong>

## Step by step: Unreal Engine 4

1. You need to put the `loader.png` file in this folder: `UE4Project\Content\UI\Materials\LoadingScreens\Misc`
2. Open your `Dungeons.uproject` from `UE4Project/`
3. Find the file in your project and open it:
    <img class="center" src="/images/dungeons/loader-texture/10.png" alt="open file">

4. Then you have to change settings on the right tab:
    - Compression Settings → BC7
    - Mip Gen Settings → NoMipmaps
    - Texture Group → UI
    <img class="center" src="/images/dungeons/loader-texture/11.png" alt="settings">

<p class="center"><em>Everything should be good, you now just have to package your files using the <a href="https://github.com/Dokucraft/Dungeons-Mod-Kit">Dokucraft Tool</a></em></p>
