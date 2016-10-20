---
title: Make Git Wait for Code
categories: [Other]
tags: [git, code, visual-studio, vscode, cli, ide, command-line, source-control]
date: 2016-04-15
permalink: waitcode
---

There's a decent chance that you, like me, ended up with Visual Studio Code incorrectly configured as Git's core editor. I'm talking about Windows here.
<!--more-->

Take a look at your .gitconfig file and see what you have configured. You will likely find that in c:\users\&amp;lt;username&amp;gt;\.

Under the [core] section, look for the editor key. What do you have for a value?

If your Visual Studio Code path ends with code.cmd, then it's not correct. It should end with code.exe. And it should have a -w flag. The -w flag tells the launching context to block until the process is terminated. That means that if you run a Git command from the command line that launches Code as a text editor, the command line should be blocked until you're done editing that file and shut down Code.

Let's say, for instance, that you have committed some files and then realize that you forgot one. You could commit it as a new commit, but it makes more sense to tack the change on to the last commit (assuming you haven't pushed your commit up to a shared repo yet!).

To do this, you simply run `git commit --amend` at the command line. This amends your staged files to the last commit. It also launches your default text editor so you can determine if you want to keep the same commit message you elected previously or overwrite it.

This _should_ open your text editor, wait for you to make and save your changes and then shut down your editor before releasing control of the command line and continuing on.

You can simply edit your .gitconfig file to add this configuration, but it's easier to run this...

`git config --global core.editor "'C:\Program Files (x86)\Microsoft VS Code\code.exe' -w"`

...from your command line.

Hope this helps you like it did me. Credit goes to [F Boucheros](http://stackoverflow.com/users/431072/f-boucheros) on [this Stackoverflow post](http://stackoverflow.com/questions/30024353/how-to-use-visual-studio-code-as-default-editor-for-git).