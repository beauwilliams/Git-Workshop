# Backing up your dotfiles/configurations to GitHub

One of the other great uses for GitHub is as a place to back up and share your [dotfiles](https://github.com/beauwilliams/Dotfiles)

# Don't make the same mistake I did! Back up those damn files 😆

There are a variety of ways to back up your dotfiles.

The simplest is to create a repository names `Dotfiles` on GitHub.

Simply commit and add any dotfiles you wish to back up (e.g your .bashrc or .vimrc or .gitconfig)

# Further automate backing up of your dotfiles using a shell script place in your path, or set up as an alias

**PLEASE NOTE: This is just one of MANY ways to back up your dotfiles. But this is basic and good for a beginner**

## Create a <name>.sh file. I call this one mergecheatsheets.sh
``` bash
#!/bin/bash

# A script to merge my cheatsheets to my git backup repo

cp -a /Users/admin/.cheatsheet/. /Users/admin/Git_Downloads/Dotfiles/Cheatsheets/
echo "merging cheatsheets"
```
## Create an alias in your shell to call that shell script

```bash
alias mergecheatsheets="~/.cheatsheet/merge-cheatsheets.sh"
```

## Restart or source your shell configuration and then run your new command!

![Screen-Shot-2021-03-13-at-1-29-39-pm.png](https://i.ibb.co/64c2qFv/Screen-Shot-2021-03-13-at-1-29-39-pm.png)

## Finally, head to your dotfile repository and push the new changes to back them up

> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
