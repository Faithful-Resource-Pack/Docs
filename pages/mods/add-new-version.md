---
title: "Add new Minecraft version"
category: "Mods"
date: "2020-12-02"
deprecated: true
---

# Add a **new Minecraft version** support:

## Prerequisites:

- You need to have a [GitHub](https://github.com/) account first.
- It is recommended to download [GitHub Desktop](https://desktop.github.com/) for easier file and branch management.

## Step by Step:

1.  Firstly, check if the branch already exists, if not create a new one:

	#### **Using GitHub Website:**

	Type the Minecraft version you want to add support for, then click on `Create a branch`.
	<img src="/images/mods/add-new-version/github-add-branch.png" alt="github-add-branch.png" class="center">

	#### **Using GitHub Desktop:**

	1. Click on the `current branch` button, then `New branch`, then type the Minecraft version you want to add support for, if `main` is not selected, click on it, then `create branch`.
	<img src="/images/mods/add-new-version/github-desktop-add-branch-1st-step.png" alt="github-desktop-add-branch-1st-step.png" class="center">
	<br>
	<img src="/images/mods/add-new-version/github-desktop-add-branch-2nd-step.png" alt="github-desktop-add-branch-2nd-step.png" class="center">

	2. Add those files to your new branch:
		- **The pack.png and pack.mcmeta are not needed anymore, because that process is now automated. If you still find them, just delete them.**
		- An `assets` folder with the mod's textures inside, following this path: `assets/<modassetname>/textures/.../<modassetname>`

3. If the default file from the main branch (the file named: `initialcommit`) is present, remove it. Then if you are not a member of our organization, make a pull request (**do not merge the branch: never**) & post a message in our [Discord](https://discord.gg/sN9YRQbBv7).
