# Ignoring Files with Git using a .gitignore


What's a dotfile? It's a file with a 'dot' in front of it!

The dotfile convention was created by developers as a standard way to store and hide configuration files from regular users

You can create a .gitignore dotfile, *either in your repo (per project) or globally (for all projects)*

# Why might we want to use a .gitignore?

Often, for example when you are building a java application, there are many files that are created, that are not relevant to the project itself.

For example .class files, are compiled java bytecode, they have no place being committed to a shared repository! It's not the actual code.


Another common reason (not a particularly smart one however, but works!) is to prevent the sharing of a secret file i.e a API key for your project.
For one man teams (is that even a team? 😆) this might be acceptable. But for larger teams, realistically you should be using a secrets management tool such as HashiCorp vault. NOTE: Your DevSecOps guy will get mad at you if you recommend env variables as they can be exposed in transit. Just saying!

``` bash
# Check that you do not already have a global .gitignore file
git config --get core.excludesfile
# Create a global .gitignore
git config --global core.excludesFile '~/.gitignore'
```

``` bash
# Create a per project .gitignore file
cd my-project
touch .gitignore
# Create a file we will ignore. Will NOT be included when running git add. for example
touch ignoreme.please
echo "ignoreme.please" > .gitignore
git add.
git commit -m "adding gitignore"
git push
```
# Get started with writing your own Git Ignore by using the templates provided below!

[GitHub - github/gitignore: A collection of useful .gitignore templates](https://github.com/github/gitignore)

> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
