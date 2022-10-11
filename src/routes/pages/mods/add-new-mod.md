---
title: "Add new Mod"
type: "Mods"
date: "11/04/2021"
deprecated: false
---

# Add an entirely **new** Mod:

## Prerequisites:

- You need to have a [GitHub](https://github.com/) account first.  
- It is recommended to download [GitHub Desktop](https://desktop.github.com/) for easier file and branch management.

## Step by step: 

*  If you want to add a new mod to our project, firstly check the mod list in our [GitHub](https://github.com/Faithful-Mods) **and** on our [Faithful Website](https://faithfulpack.net/mods) by typing the name of the mod or its assets folder name.

<img src="/images/pages/mods/add-new-mod/github-research.png" alt="github-research.png" class="center" loading="lazy">

> ℹ️ **Info**  
> See [here](/pages/mods/add-textures) if the mod repository already exists.

*  If the mod does not have any repository, then create a repository in your **own** profile (if you have access to the Faithful Mods organisation, then create it there), the repository needs to have the same name as the `assets` folder file (ex: `Actually Additions` mod repository would be named: `actuallyadditions`).

<img src="/images/pages/mods/add-new-mod/new-repo-img.png" alt="new-repo-img" class="center" loading="lazy">

*  Keep the `main` branch empty (you can add a `readme.md` / `license.md` stuff but **no textures** on that branch) and make a new branch for each supported Minecraft version.

<img src="/images/pages/mods/add-new-mod/branches-list.png" alt="branches-list" class="center" loading="lazy">

> ⚠️ **Warning**  
> - The `main` branch needs to be set as the **default branch**! Do not merge others branches to the main branch!  
> - Only textures files should be inside minecraft branches, `readme.md` & `license.md` files shouldn't be there!  

> ℹ️ **Info**  
> - [If you made your repository before the 1st October 2020, rename your `master` branch to `main`](https://www.zdnet.com/article/github-to-replace-master-with-main-starting-next-month/)  
> - If you want to license your work, please consider a license that follow the [Faithful License](https://www.faithfulpack.net/license)

* Upload your textures in each branch (see how [here](/pages/mods/add-textures)).

* Your repository now should look like this:

<img src="/images/pages/mods/add-new-mod/final-result.png" alt="final-result" class="center" loading="lazy">  


> ℹ️ **Info**  
> - You need to create an `assets` folder and place your textures inside!
> - The `pack.png` and `pack.mcmeta` are not needed anymore, because that process is now automated.

* Final step: ask Juknum#0001 on the [Faithful Discord](https://discord.gg/sN9YRQbBv7) to add the mods to the website
