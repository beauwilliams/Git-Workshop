# Rebasing with Git

As an alternative to merging, git offers another way to (for lack of a better word 😆) merge your branches

Except this is like a special kind of merge. Unlike the previous slide. Where we end up with a *merge commit*

With rebasing, we finish off with a single trunk. This type of workflow is often called "Trunk based development"


# What merging looks like

![merge](https://wac-cdn.atlassian.com/dam/jcr:e229fef6-2c2f-4a4f-b270-e1e1baa94055/02.svg?cdnVersion=1501)

# What rebasing looks like

![Rebase](https://wac-cdn.atlassian.com/dam/jcr:5b153a22-38be-40d0-aec8-5f2fffc771e5/03.svg?cdnVersion=1501)

# Let's see it in action!


![Screen-Shot-2021-03-13-at-11-33-18-am.png](https://i.ibb.co/4mYwh6J/Screen-Shot-2021-03-13-at-11-33-18-am.png)


# But why might we want to use rebase instead of merging?

- A cleaner commit history
- a cleaner project history

# Sounds good! Then why might we want to use merging?

- It's verbose
- What is the point of a VCS if you delete commits?
- Computers can handle plenty of information, ready for when you need it. Why delete commits?
- Rebasing can potentially destroy or significantly screw up your project if you are not careful
- You miss out on merge commit history, which might come in handy later on
- Unless you have a reason to be rebasing, it's of trivial benefit to your project

# Okay but I really want to use rebase..

**Do it interactively then! This can save you a lot of hassle down the track**

``` bash
git rebase -i master
```

> :ToCPrevNext prev-label=...Previously, next-label=Up Next...
