# Stashing your git changes

One of the powerful features of git, is the ability to `stash` your changes

The great benefit of stashing, is that it allows you to multitask effectively!

For example, you are working on this great new feature, all of a sudden there is a crisis! The API your customers used suddenly stops working. You are required to go and fix it up immediately. What do we do with the work we have made on our new feature? We stash it!

# So let's do it!

``` bash
# Check your current changes
git status
# Stash them
git stash
# Checkout of your feature branch
git checkout <otherbranch>
# ....fix the bug on the other branch once
# When done we check back into our <featurebranch>
git checkout <featurebranch>
# Reapply the changes from earlier using pop
git stash pop
# Check the changes were reapplied
# git status
```

# With `SVN` this type of workflow was difficult. It caused developers to commit unfinished work to the master repo. Not good!

There is a whole bunch more you can do with `git stash` check out this Atlassian guide to
[learn more!](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)

> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
