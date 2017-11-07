---
title: NPM Link
categories: [Node.js]
tags: [code, node, npm, productivity]
date: 2017-11-02 19:19:08
---

My buddy Jason Young ([@ytechie](http://twitter.com/ytechie)) asked a question the other day that reminded me of a Node trick I learned sometime ago and remember getting pretty excited about.

First, let's define the problem.

If you are working on a Node project and you want to include an npm package as a dependency, you just install it, require it, and then do a fist pump. 

If, however, you are in one of the following scenarios...

* You find a great package on npm, but it's not _exactly_ what you want, so you fork it on GitHub and then modify it locally.

* You are working on a _new_ awesome sauce npm package, but it's not done yet. But you want to include it in a node project to test it while you work on it.

...then you're in a pickle.

The pickle is that if in your consuming app, you've done a `npm install my-awesome-package` then that's the version from the public registry.

The question is, how do you use a local version.

There are (at least) two ways to do it.

The first is to check your project (the _dependency_ npm package that you've forked or you're working on) in to GitHub and then install it in your _consuming_ project using `npm install owner/repo` where owner is your GitHub account. BTW, you might want to `npm remove my-awesome-package` first to get rid of the one installed from the public registry.

This is a decent strategy and totally appropriate at times. I think it's appropriate where I've forked a package and then want to tell my friend to try my fork even though I'm not ready to publish it to npm yet.

I don't want to expound on that strategy right now though. I want to talk about npm's `link` command ([documentation](https://docs.npmjs.com/cli/link)).

The concept is this. 1) You hard link the _dependency_ npm package into your global npm package store, and 2) you hard link that into your _consuming_ project.

It sounds hard, but it's dead simple. Here's how...

1. At your command line, browse to your _dependency_ package's directory.
1. Run `npm link`
1. Browse to your _consuming_ project's directory.
1. Uninstall the existing package if necessary using `npm remove my-awesome-package`
1. Finally, run `npm link my-awesome-package`

You'll notice that the link isn't instant and that will cause you to suspect that it's doing more than just creating a hard link for you, and you're right. It's doing a full package install (and a build if necessary) of the project.

The cool part is that since the project directory is hard linked, you can open `my-awesome-package` in a new IDE instance and work away on it and when you run the _consuming_ project, you'll always have the latest changes.

And that's that. I use this trick all the time now that I know it. Before I knew it, you'd see version counts like 1.0.87 in my published packages because I would roll the version and republish after every change. Oh, the futility!

The inverse is just as easy. When the latest `my-awesome-package` has been published to npm and you're ready to use it, just visit your consuming package and run `npm unlink my-awesome-package` and then `npm install my-awesome-package`. Then go to your dependency package and simply run `npm unlink`. Done.