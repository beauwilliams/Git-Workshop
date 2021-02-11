<h1 style="text-align:center;"> Git vs SVN </h1>
<p style="text-align:center;"><img src="https://germguy.files.wordpress.com/2016/09/whats-the-big-deal-2.gif" alt="Logo"></p>

## The big difference

Git is decentralised. It uses a different server-client architecture. Every developer has a full local copy of the repository locally on their workstation.

## Caveats

Git however naturally is naturally unable to handle bigger files compared to a centralised system such as SVN. Large source files and binaries are too big for Git.

## Benefits

On the upside, Git handles branching far more effectively. With Git, branching is so powerful it has enabled developers to become more productive than they were with SVN.

Git branches enable developers to easily employ the *Fork & Pull* pattern, allowing them to work on multiple tasks in parrallel without having to commit unfishished code to the main codebase.

Typically with centralised architectures such as SVN, developers may need to commit their unfinished code to the main codebase so that they can, for example, checkout to fix an urgent bug. This often creates problems for large teams where bugs, features and requests are frequent.

## Other reasons to use Git

This is why Git is such a popular open source protocol, amongst other reasons too such as:

- Main codebase always has only quality code
- Easier to experiment with code given Git has fast and light local branching capability
- Staging area allows for developers to review and modify their commits before adding to the main codebase `$git add`
- Allows for more custom development workflows
- Hashed with SHA1 checksum, helps prevents malicious or accidental modifications to the code
- Performance improvements by storing references and reusing them when files are not updated
- Stores a full snapshot of a changed file, as compared to just the changes made to it
- Every clone of a Git repository is a complete and full copy i.e another Git repository
- Popular nowadays
- Open Source 💝

> :ToCPrevNext
