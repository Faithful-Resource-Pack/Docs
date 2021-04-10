---
title: "Add a new Mod"
type: "Mods"
---
{%- assign organization_name = 'Compliance-Resource-Pack' -%}
{%- assign github_organization_url = 'https://github.com/' | append: organization_name | append: '/' -%}
{%- assign organization_website_repo_name = 'Website' -%}
{%- assign organization_website_repo_url = github_organization_url | append: organization_website_repo_name -%}
{%- assign project_name = 'Compliance Mods' -%}

# Add an entirely **new** Mod:

## Prerequisites:

- You need to have a [GitHub](https://github.com/) account first.  
- It is recommended to download [GitHub Desktop](https://desktop.github.com/) for easier file and branch management.

## Step by step: 

1.  If you want to add a new mod to our project, firstly check the mod list in our [GitHub](https://github.com/Compliance-Mods) **and** on our [Compliance Website](https://compliancepack.net/mods) by typing the name of the mod or its assets folder name.
<img src="{{ site.baseurl }}/images/pages/mods/add-new-mod/github-research.png" alt="github-research.png" class="center">
> See [here]({{ site.baseurl }}/pages/mods/add-textures.html) if the mod repository already exists.

2.  If the mod does not have any repository, then create a repository in your `own` profile (if you have access to the Compliance Mods organisation, then create it there), the repository needs to have the same name as the `assets` folder file (ex: `Actually Additions` mod repository would be named: `actuallyadditions`).
<img src="{{ site.baseurl }}/images/pages/mods/add-new-mod/new-repo-img.png" alt="new-repo-img" class="center">

3.  Keep the `main` branch with only one file: `initialcommit` **(without any extension)** and make a new branch for each supported Minecraft version, _don't forget to delete the initialcommit **in branches you have created**._  
<img src="{{ site.baseurl }}/images/pages/mods/add-new-mod/branches-list.png" alt="branches-list" class="center">
> The `main` branch needs to be set as the **default branch**! Do not merge others branches to the main branch!  
> If you made your repository before the 1st October 2020, rename your `master` branch to `main`. ([Discover Why?](https://www.zdnet.com/article/github-to-replace-master-with-main-starting-next-month/))  

4.  Upload your textures in each branch (see how [here]({{ site.baseurl }}/pages/mods/add-textures.html)).

5.  Your repository now should look like this:
- **The pack.png and pack.mcmeta are not needed anymore, because that process is now automated.**
<img src="{{ site.baseurl }}/images/pages/mods/add-new-mod/final-result.png" alt="final-result" class="center">  
> **You need to create an `assets` folder and place your textures inside!**

6.  Then make a pull request on the website repository modifying [this file]({{ organization_website_repo_url }}/blob/master/data/mods.json) following this setup:
```json
[
	{
		// another mod
	},
	{
		"name": {
			// Name displayed on https://compliancepack.net/mods
			"displayName": "Example Mod",
			// Can be left empty if there is no aliases
			"aliases": [ "(EM)", "Example Mod 2" ]
		},
		// Supported versions
		"versions": [
			"1.12.2",
			"1.7.10"
		],
		/*
		* OPTIONAL: can be deleted if none
		* End of the CurseForge URL: 
		* Ex: https://www.curseforge.com/minecraft/mc-mods/example-mod -> example-mod
		*/
		"curse": "example-mod",
		
		/*
		* ONLY ONE OF THEM: depends where the repository is located
		* Inside Compliance Mods Organization -> orgRepo
		* Everywhere else -> extRepo: https://github.com/{{ username }}/{{ repository }}
		*/
		"orgRepo": "examplemod"
		"extRepo": "https://github.com/{{ username }}/{{ repository }}"
	},
	{
		// another mod
	}
]
```
> **Please add the following in an alphabetical order** ⚠️  