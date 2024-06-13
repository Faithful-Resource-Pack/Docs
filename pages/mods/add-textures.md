---
title: "Add textures"
category: "Mods"
date: "2020-12-02"
deprecated: true
---

# Add textures to an **existing** Mod

## Prerequisites

- You need to have a [GitHub](https://github.com/) account first.
- You **need** to have downloaded [GitHub Desktop](https://desktop.github.com/) for easier file and branch management.

## Step by Step

1. Firstly find your Mod repository in our organization, then clone it by clicking the green button `Code` and selecting `Open with GitHub Desktop`.
> If the mod repository is not in the [Faithful Mods Organization](https://github.com/Faithful-Mods), check this [file](https://api.faithfulpack.net/v2/mods/raw) to see where is the repository located <kbd>CTRL</kbd> + <kbd>F</kbd> is the best way to find it.
> If you can't find the repository, it may not exist yet, refer to [this](/pages/mods/add-new-mod) article then.

<img src="/images/pages/mods/add-textures/github-clone.png" alt="github clone repository" class="center" loading="lazy">

2. Select a file path to clone it on your computer (you can place it everywhere)
<img src="/images/pages/mods/add-textures/github-desktop-clone.png" alt="github desktop asking new cloned repository path" class="center" loading="lazy">

3. Then select the branch version for which you want to add textures (if the branch doesn't exist yet, see [here](/pages/mods/add-new-version)). Your local repository will update itself to the branch content (it has the content of the `main` branch by default → if you cloned the repository from the main branch).
<img src="/images/pages/mods/add-textures/github-desktop-select-branch.png" alt="github desktop choosing branch mc version" class="center" loading="lazy">

4. Then go to your local repository folder and move your new/modified files in the `assets/` folder (like in any default resource pack).
<img src="/images/pages/mods/add-textures/folder-example.png" alt="local repository" class="center" loading="lazy">

> We recently made `pack.png` & `pack.mcmeta` dynamically generated, so they are no longer used and can be removed if they are still in the repository.

5. When you have placed all new files into the `assets/` file, go back to GitHub Desktop and you will see all new files on the left tab:

- ![(+)](/images/pages/mods/add-textures/file-added.png) File added
- ![(o)](/images/pages/mods/add-textures/file-modified.png) File modified
- ![(-)](/images/pages/mods/add-textures/file-deleted.png) File deleted
- ![(→)](/images/pages/mods/add-textures/file-moved.png) File moved

6. You can now add a title and a description to your commit (on the bottom left in GitHub Desktop) and press `Commit to <branch>`.
<img src="/images/pages/mods/add-textures/github-desktop-commit.png" alt="github desktop commit" class="center" loading="lazy">

7. Finally: click on the `Push origin` button to send your commit to GitHub. You can now make a post in our [Discord](https://discord.gg/sN9YRQbBv7) to make an announcement about what you changed!
<img src="/images/pages/mods/add-textures/github-desktop-push.png" alt="github desktop push commit" class="center" loading="lazy">
