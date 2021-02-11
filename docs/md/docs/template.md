# Setting Up A Commit Template

A commit template helps to write better commits that are more concise and standardised.

Typically a commit may contain a header, a body and a footer.

*For example*

![Screen-Shot-2021-02-11-at-10-26-29-pm.png](https://i.ibb.co/BzgCFg4/Screen-Shot-2021-02-11-at-10-26-29-pm.png)

**The key point to note here is that the** `#` **symbol denotes a comment**

So for the below commit template, it is only an outline, and can include any text that you like.

Feel free to customise this template and make it your own 😀


### You can find the instructions and link to this file in this Dotfiles repository, which is a neat way to back up your configuration files using GitHub
> :Buttons
> > :Button label=Instructions, url=https://github.com/beauwilliams/Dotfiles/tree/master/Git


```md | Commit Template

# ----------------------------------------------------------
# Header - type(scope): Brief description
# ----------------------------------------------------------
#    * feat             A new feature - SemVar PATCH
#    * fix              A bug fix - SemVar MINOR
#    * BREAKING CHANGE  Breaking API change - SemVar MAJOR
#    * docs             Change to documentation only
#    * style            Change to style (whitespace, etc.)
#    * refactor         Change not related to a bug or feat
#    * perf             Change that affects performance
#    * test             Change that adds/modifies tests
#    * build            Change to build system
#    * ci               Change to CI pipeline/workflow
#    * chore            General tooling/config/min refactor
# ----------------------------------------------------------


# ----------------------------------------------------------
# Body - More description, if necessary
# ----------------------------------------------------------
#    * Motivation behind changes, more detail into how
#      functionality might be affected, etc.
# ----------------------------------------------------------


# ----------------------------------------------------------
# Footer - Associated issues, PRs, etc.
# ----------------------------------------------------------
#    * Ex: Resolves Issue #207, see PR #15, etc.
# ----------------------------------------------------------
```
> :Buttons
> > :CopyButton


### For brevity, here are the steps you will need to follow to get set up!

To add the template to your global git config enter the following:

```
git config --global commit.template path/to/your/file.txt
```

*Now whenever you’re making a commit, instead of the typical git commit -m "A brief commit message", just enter git commit to open your default editor with the template in place. You’ll automatically have a guide to choose conventions from to create a structured message.*

The “header” of the commit message notes the type of the commit as docs and a brief description that does not exceed 60 characters to ensure readability (the commented lines are 60 characters long and act as guides for when to use a line break). The “body” optionally elaborates on the changes made, and the “footer” optionally notes any issue/PR the commit is related to. The final message will simply look like this:

*The final message will look like this*

```
docs: Update README with contributing instructions

Adds a CONTRIBUTING.md with PR best practices, code style
guide, and code of conduct for contributors.

Closes #9
```
### Vim Setup

*If you use Vim or Neovim, and you want to speed up the process even more, you can add this to your git config:*

```
# Neovim
git config --global core.editor "nvim +16 +startinsert"

# Vim
git config --global core.editor "vim +16 +startinsert"
```

This sets the default editor to Neovim (or Vim), and places the cursor on line 16 in Insert Mode as soon the editor opens. Now whenever you’re committing, when you type git commit, Neovim opens the template, places your cursor, and accepts typing input immediately. Also note that you can still use git commit -m "Your message" exactly as you did before, but the configuration will default to the template setup when you just type git commit.


> :ToCPrevNext
