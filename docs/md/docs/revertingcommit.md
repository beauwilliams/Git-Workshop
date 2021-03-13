# Reverting Your Commits

Whoops we made a mistake!

Let's say for example that you committed a file that contains an API key. Or perhaps you committed the wrong files all together

Maybe you forgot to set up your .gitignore and a bunch of cruddy files got committed and pushed and you project is a mess now (looking at you npm) 😆

# Git has our back. Given the way it saves snapshots. We can easily revert to a previous commit like so

``` bash
# Reset the local copy to a previous commit
git reset --hard <ID#Of_Commit>

# Force push the local copy to the remote repository
git push --force
```

# We also have the following options as well..

# Return to the last committed state
``` bash
git checkout -F | git reset --hard (you cannot undo a hard reset)
```

# Revert the last commit

``` bash
git revert HEAD (Creates a new commit)
```
# Revert specific commit

```bash
git revert $id (Creates a new commit)
```

# Fix the last commit
```bash
git commit -a --amend (after editing the broken files)
```

# Checkout the ID version of a file
```bash
git checkout <ID><file>

```

> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
