---
title: "Add textures: with commands"
type: "Mods"
date: "02/12/2020"
deprecated: true
---

# Add textures to an **existing** Mod - With Commands:
## Prerequisites:  

- You need to have a [GitHub](https://github.com/) account first.  
- You need to have [`git`](https://github.com/git-guides/install-git) installed on your machine.
- You need to be logged to `git` with your GitHub account, see how [here](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git).

## Step by Step:

1.  Firstly find your Mod repository in our [organization](https://github.com/Faithful-Mods), then find the repository `HTTPS` and use those commands in a shell: 
<img src="{{ site.baseurl }}/images/pages/mods/add-textures-commands/get-repository-https.png" alt="github get https" class="center" loading="lazy">
```shell
  $ git clone <git url>
```
> Note: If the mod repository is not in the [Compliance Mods Organization](https://github.com/Faithful-Mods), check this [file](https://github.com/Faithful-Resource-Pack/JSON/blob/main/mods/mods.json) to see where is the repository located.  

2.  Change your local branch to the one you wants to add changes:
```shell
  $ git checkout <branch>
```
> Note: Be aware to be in the right folder when checking the branch, move to the cloned repository using `cd ./<repository name>`  
> Note: If the branch doesn't exist, create a new one using `git branch <new-branch>` first, the new branch will be based on the actual branch  

3.  Your local repository should now looks like the image below, you can now edit/add textures locally.  
<img src="{{ site.baseurl }}/images/pages/mods/add-textures-commands/folder-example.png" alt="folder result" class="center" loading="lazy">

4.  Once you are done with editing/adding textures, you can commit and push your changes to the online repository:
```shell
  # add all modified files to the commit, you can replace the * with exact name if you want to push only some files
  $ git add * # or: $ git add -A
  # make the commit: (that's a string, "" are required)
  $ git commit -m "commit title here"
  # push it to the given branch: (you need to be logged with your GitHub account and have the rights to push!)
  $ git push -u origin <branch>
```

5.  See changements applied to the GitHub repository, Enjoy!

6.  Some usefull `git` commands:
```shell
  # show the difference between your local files and git ones
  $ git status
  # delete a branch
  $ git branch -d <branch>
  # create & switch to this branch (1 line instead of 2)
  $ git checkout -b <new branch>
  # update from the remote repository
  $ git pull
```
> Please, do not merge branches, never ⚠️