# Removing files from git

Git provides a command `git rm`

It works the same as the `rm` command but will remove the file from your git repository.

# We committed a sensitive file. Can we easily delete it from view?

So you have made a boo boo. Worse still you have committed a secret file with an API key. What do?

# Just change the API key / password. No.. seriously.

Alright so we can't do that for whatever reason. Now what?

# There is no single easy way to achieve this, but the below is quite an effective method to do so

```bash
# First thing you do is change the visibility of the repo. So, if it's a public repo, make it private. This way, you're sure no one else sees the file while you're working on deleting it.

cd my-repo

# Then run the following command. You have to include the path to the file and not just the file name. replacing config/secretFile.json with the path to the file you want to be removed. In my case, secretFile.json is inside of a folder named config.

git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch config/secretFile.json" \
  --prune-empty --tg-name-filter cat -- --all

# Note: The command above deletes the file from your local repository too, so ensure you have copied the content to a notepad or whatever you use before running the command.

# Then create and add your file to .gitignore so you don't accidentally push it to GitHub again. You can do that with

echo "name-of-your-file" >> .gitignore
git add .gitignore
git commit -m 'add file to .gitignore'

# Once you are satisfied with your changes, you can then push them to GitHub

git push origin --force --all

#And that's it! Your repo history is clean without any trace of your sensitive file.
```


> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
