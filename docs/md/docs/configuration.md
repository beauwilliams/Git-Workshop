# Git Configuration

Your git configuration file is usually kept in your $HOME directory.

For example, on a MacOSX/Linux machine this is stored in ~/.gitconfig

# Set up your username / email address

``` bash
git config --global user.name "[name]"
git config --global user.email "[email address]"
```

# Enable helpful colorization of command line output

``` bash
git config --global color.ui auto
```

# Set your default editor

``` bash
git config --global core.editor "vim"
```

# Check your current git configuration

``` bash
git config --list --show-origin
# Query specific setting
git config user.name
```

# Set 'main' as default branch name from 'master'

```bash
git config --global init.defaultBranch main
```


> :ToCPrevNext prev-label=...Previously, next-label=Up Next...

