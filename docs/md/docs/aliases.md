# Git Aliases

There are two (perhaps more!) but mainly two ways to set up aliases for your git on your shell.

# Option 1, using a bash alias

## Stop the dreaded error pushing to remote when making your first push. Never again!
```bash
alias gp='git push -u origin HEAD'
```

## Push your local changes. Quick!!!
```bash
function acp() {
git add .
git commit -m "$1"
git push -u origin HEAD
}

```

## Create a new repo in a single command with readme and remote repository set up
``` bash
function gitnewrepo() {mkdir $1 && cd $1 && git init && hub create && touch README.md && echo "# " $1 >> README.md && git add . && git commit -m "init" && git push -u origin HEAD;}
```


# Option 2 Using a global git alias (place in your global .gitconfig)

## Add a nice alias for log (no newlines)
```bash
git config --global alias.l "log
    --graph
    --pretty=oneline
    --abbrev-commit
    --decorate"
git l
```

## Easily undo the last changes you made with a new git undo command
```bash
git config --global alias.undo 'reset HEAD~1 --mixed'
```

## View your last commit
```bash
git config --global alias.last 'log -1 HEAD --stat'
```

## Get a list of your git aliases
```bash
git config --global alias.gl 'config --global -l'
```

> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
