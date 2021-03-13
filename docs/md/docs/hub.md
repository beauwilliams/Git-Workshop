# Hub, The GitHub CLI Tool


Described as "a command line tool that wraps git in order to extend it with extra features and commands that make working with GitHub easier."

With hub installed, you can speed up the process of creating a new repo with the `hub create` command.

You can install `hub` with your favourite package manager.

Additionally you can clone a new repo with just the name (no need for the https://GitHub...) using for example `hub clone github/hub`


# Here is a sweet little trick using some bash script to create a new repo and push it from your local machine in one command.

It mirrors creating a repo on the GitHub website, but also saves having to `git clone` 😀

``` bash
function gitnewrepo() {mkdir $1 && cd $1 && git init && hub create && touch README.md && echo "# " $1 >> README.md && git add . && git commit -m "init" && git push -u origin HEAD;}
```
> :Buttons
> > :CopyButton


> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
