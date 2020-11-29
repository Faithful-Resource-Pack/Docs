---
title: 'Mods: Add a new MC version'
---
{% assign organization_name = 'Compliance-Resource-Pack' %}
{% assign github_organization_url = 'https://github.com/' | append: organization_name | append: '/' %}
{% assign organization_website_repo_name = 'Website' %}
{% assign organization_website_repo_url = github_organization_url | append: organization_website_repo_name %}

# Add a **new Minecraft version** support:

## Prerequisites:

> You need to have a [GitHub](https://github.com/) account first.
> It is recommended to download [GitHub Desktop](https://desktop.github.com/) for easier file and branch management.

1.  Firstly, check if the branch already exists, if not create a new one :

    #### GitHub:

    Type the Minecraft version you want to add support for, then click on `Create a branch`.

    ![github add branch](https://i.imgur.com/KpRCljE.png)

    #### GitHub Desktop:

    Click on the `current branch` button, then `New branch`, then type the Minecraft version you want to add support for, if `main` is not selected, click on it, then `create branch`.

    ![github desktop add branch 1st step](https://i.imgur.com/Gow5arC.png)![github desktop add branch 2nd step](https://i.imgur.com/PJtANzD.png)

2.  Add those files to your new branch:

    *   `pack.png`

        ![pack.png](https://compliancepack.net/image/icon/compliance_mods.png)
    *   `pack.mcmeta` with this inside:

            {
            	"pack":{
            		"pack_format": 3,
            		"description": "Compliance Mods"
            	}
            }

        > The `"pack_format"` can be found [here]({{ organization_website_repo_url }}/blob/master/data/versions.json) (make a pull request if outdated).

    *   An `assets` folder with the mod's textures inside, following this path: `assets/<modassetname>/textures/...</modassetname>`

3.  If the default file from the main branch (the file named: `initialcommit`) is present, remove it. Then if you are not a member of our organization, make a pull request (**do not merge the branch: never**) & post a message in our [Discord](https://discord.com/invite/QF2CAX7).
