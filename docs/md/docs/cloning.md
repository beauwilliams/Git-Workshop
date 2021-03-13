# Cloning with your first repo

With git, being a distributed version control system every time you wish to work on a repository you first are required to clone that repository

Cloning a git repository is essentially like making a "copy", but while it might not be that simple in reality. It's a good enough analogy for now!

The easiest way to get the link to clone a repository is to navigate to the project on GitHub. From there you will see a green "code" button like so


![code-button.png](https://docs.github.com/assets/images/help/repository/code-button.png)

You will have the option to clone with HTTPS, SSH and or even the GitHub CLI tool `gh`

Next open your shell, you can clone a repository with the `git clone` command proceeded by the URL to the project (HTTPS)

# With hub, all you need to remember is the owner/name of the repo. Easy!

![Screen-Shot-2021-03-13-at-10-55-42-am.png](https://i.ibb.co/s6ggPFz/Screen-Shot-2021-03-13-at-10-55-42-am.png)

# With that out of the way let's get to cloning and then writing our first commit!

`git clone https://github.com/beauwilliams/yourfirstcommit`

But what actually happens when we clone a repository? 🤔🤔

- A new local repository is created `git init`
- Configured the specified repo as a remote repo referred to as "origin". `git remote add origin <repo-url>`
- Fetches all of the commits from the remote repo and places them in your local repo `git fetch --all`
- Assuming this is a typical repo (not a bare one) checks out to the master branch `git checkout --track origin/master`


> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
