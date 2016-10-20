---
title: Visual Studio Code
categories: [Productivity]
tags: [visual-studio, ide, programming, developer, code, editor, text]
date: 2015-04-29
permalink: vscode
---

If you haven't watched the first day's keynote from Microsoft's Build 2015 conference, [go do that now](http://buildwindows.com/). It has a few wow moments such as Android and iOS code for building Windows 10 apps, elastic pools for Azure SQL databases, and the amazing HoloLens robot that was a hologram and a real robot in one - amazing!
<!--more-->

One of the pieces of the conference that's going to affect my every day, though is Visual Studio's new, free, light edition called simply Code. Code is what I've been looking for in a code editor - in a text editor even. It will replace a few other apps in my MRU list - Visual Studio Community, Notepad++, and Atom to name a few.

**Console.** code.exe is in your path after your basic install, so from your shell, you can type `code` to run the app from scratch. You can also type `code myfile.txt` and launch into the editing of your file or `code mydirectory` to open it with the explorer pane's context already set to your directory. So my new favorite command is going to be `code .` for opening the current directory in Code. I was looking for some PowerShell magic to make that possible with VS Community, but now I no longer have the need.

**Speed.** It takes about 3 seconds to launch code.exe cold, and iut doesn't appear to take any extra milliseconds to load either a file or a directory.

**Essentials.** Code is just the essentials. It's basically a new perspective on authoring code that hopefully complements Visual Studio. If I'm an enterprise developer with a massive code base and a lot of static analysis, workflow automation, and other tooling built in to my development environment, then I can see running the full editions of Visual Studio. There are a lot of support features, it's plug-in capable, it has excellent GUI Azure tooling. But if I'm working on what I might call more of a scrappy project - a website, a Node.js app, a sample, or whatever - Code is all I need. For some people, I suspect Code will cover 10% of the use cases, but for me, it's more like 90%. And actually, this is only the beginning. Check out what it says in the official docs: "In future previews, as we continue to evolve and refine this architecture, Visual Studio Code will include a public extensibility model that lets developers build and use plug-ins, and richly customize their edit-build-debug experience."

**Languages.** There are a ton of languages supported out of the box. Code recognizes Batch, C#, C++, CSS, Clojure, CoffeeScript, Dockerfile, F#, Go, HTML, Handlebars, Ini, JSON, Jade, Java, JavaScript, Less, Lua, Makefile, Markdown, Objective-C, PHP, Perl, Perl 6, Plain text, PowerShell, Python, R, Razor, Ruby, SQL, Sass, Shell Script (Bash), TypeScript, Visual Basic, XML, and YAML. If that doesn't cover what you're writing, I'd be really interested to know what you're writing!

**Commands.** Hit CTRL + SHIFT + P to open the Command Palette and do most anything you want.

**Autosave.** Code can be configured to autosave your file as you change it like Atom does. Keep in mind, of course, that if you're using file watchers like gulp's .watch() method, this is going to trigger every time you type a character in your code. Autosave is off by default. To turn it on, hit CTRL + SHIFT + P and type auto.

**Search.** You can CTRL + SHIFT + F search over all files in the open folder and it supports regex. It ignores certain folders like node_modules by default since that's the right thing to do.

There's a ton more in Code, but that's all I'm mentioning for now.

I hope you like your new home for code as much as I do so far.

 