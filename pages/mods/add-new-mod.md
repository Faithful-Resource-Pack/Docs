---
title: 'Mods: Add a new Mod'
---
{% assign organization_name = 'Compliance-Resource-Pack' %}
{% assign github_organization_url = 'https://github.com/' | append: organization_name | append: '/' %}
{% assign organization_website_repo_name = 'Website' %}
{% assign organization_website_repo_url = github_organization_url | append: organization_website_repo_name %}
{% assign project_name = 'Compliance Mods' %}

# Add an entirely **new** Mod:

## Prerequisites:

> You need to have a [GitHub](https://github.com/) account first.
> It is recommended to download [GitHub Desktop](https://desktop.github.com/) for easier file and branch management.

1.  If you want to add a new mod to our project, firstly check the mod list in our [GitHub](https://github.com/Faithful-Mods) by typing the name of the mod or its assets folder name.

    ![github research]({{ site.baseurl }}/images/pages/mods/add-new-mod/github-research.png)
2.  If the mod does not have any repository, then create a repository in your `own` profile, the repository needs to have the same name as the `assets` folder file (ex: `Actually Additions` mod repository would be named: `actuallyadditions`).

    ![new repo img]({{ site.baseurl }}/images/pages/mods/add-new-mod/new-repo-img.png)
3.  Keep the `main` branch with only one file: `initialcommit` **(without any extension)** and make a new branch for each supported Minecraft version

    > If you made your repository before the 1st October 2020, rename your `master` branch to `main`.
    > [Discover Why?](https://www.zdnet.com/article/github-to-replace-master-with-main-starting-next-month/)

    ![branches list : main (default) + mc versions]({{ site.baseurl }}/images/pages/mods/add-new-mod/branches-list.png)

    > The `main` branch needs to be set as the **default branch**! Do not merge the branch to the main branch!

4.  Upload your textures in each branch (see how [here](/help-us/add-new-version)), use the same `pack.png` as the {{ project_name }} logo. You also need to add a `pack.mcmeta` following this setup:

        {
        	"pack":{
        		"pack_format": 3,
        		"description": "{{ project_name }}"
        	}
        }

    > The `"pack_format"` can be found [here]({{ github_organization_url }}{{ organization_website_repo_name }}/blob/master/data/versions.json) (make a pull request if outdated).

5.  Your repository now should look like this:

    ![final result]({{ site.baseurl }}/images/pages/mods/add-new-mod/final-result.png)

    > **You need to create an `assets` folder and place your textures inside!**

6.  Then make a pull request on the website repository modifying [this file]({{ organization_website_repo_url }}/blob/master/data/mods.json) following this setup:

        [
          {
            ... another mod ...
          },
          {
            "name": {
              "displayName": "Example Mod",   // Name with capital & spaces
              "aliases": [ "ExampleMod" ]     // Any other names the mod has, leave empty if none
            },
            "versions": [                     // Supported versions
              "1.12.2",
              "1.11.2",
              "1.8.9"
            ],
            "curse": "example-mod",           // Name of the CurseForge URL: https://www.curseforge.com/minecraft/mc-mods/example-mod
                                              // Set it to "none" if there is not a CurseForge page
            "orgRepo": "examplemod"           // The name of the repository of the pack
        	                                  // Replace the line with this if it isn't in our organisation: "extRepo": "https://github.com/your-name/examplemod"
          },
          {
            ... another mod ...
          }
        ]

    > **Please add the following in an alphabetical order**

7.  **Final step:** if your pull request is merged, you will receive an invitation to be a member of the {{ project_name }} organization. From there, you will be able to move your repository inside our organization (don't forget to modify the `mods.json` file with the new repository: replace the `extRepo` line with `orgRepo`).
