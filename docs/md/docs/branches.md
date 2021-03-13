# Creating Branches with Git

![Branch Diag](https://wac-cdn.atlassian.com/dam/jcr:746be214-eb99-462c-9319-04a4d2eeebfa/01.svg?cdnVersion=1501)

What are git branches? Essentially like a tree branch!

But this is a special tree. This tree not only branches, but later on down the track is capable of merging (or rebasing!) those branches back to its main trunk

*Okay, maybe an arborist can chime in here.. but afaik tree branches don't usually merge back together* 😆

# Why might we want to create a branch?

Writing code directly to your main repository can be dangerous. Especially when you are working in a large team, where many sub-teams work on many different features!

The brilliant part of branches is that you can check out a branch to work on for example a new feature. You can let your users test that branch.

Once all is well and the new feature works as expected you can then merge it. Simple!

# How to create a new branch from your git repository

Using the `git branch` command

### List the current branches on your local repo

``` bash
git branch --list OR just git branch
```

### List current branches in the remote repo
``` bash
git branch -a
```

### Create a new branch
``` bash
git branch <branchname>
```
### Delete a branch (safely)
``` bash
git branch -d <branchname>
```

### Force delete a branch, ignoring un-merged changes (unsafe)

``` bash
git branch -D <branchname>
```

# With GitHub, you can do a whole bunch of cool things interactively with your branches

For example, easily rename your master branch to main!

![Screen-Shot-2021-03-13-at-10-53-46-am.png](https://i.ibb.co/F362sP4/Screen-Shot-2021-03-13-at-10-53-46-am.png)


> :ToCPrevNext prev-label=...Previously, next-label=Up Next..
