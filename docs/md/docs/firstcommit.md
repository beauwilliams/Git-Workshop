# Writing your first commit

# Clone from GitHub repo
``` bash
git clone https://github.com/beauwilliams/yourfirstcommit
cd yourfirstcommit
```

# Make a new file
``` bash
echo "My first commit!" > commit.txt
```
# Get the output of git status, commit.txt is untracked
``` bash
git status
```
# Stage the new file
``` bash
git add commit.txt

# OR add all untracked files at once using the . operator
git add .
```

# Verify commit has been staged with git status, commit.txt is "to be committed"
``` bash
git status
```
# Commit the changes in your staging area to the repository
``` bash
git commit -m "Added commit.txt. My first commit :D"
```
# Push the local changes to the remote server
``` bash
git push
```

# Get your commit history
``` bash
git log
```

> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
