---
title: Open Existing Node.js Project in Visual Studio
categories: []
tags: []
date: 2001-01-01
permalink: 
---

Working on a coding project inside of Visual Studio is hugely helpful. VS does so many things to support the developer, that I myself (and millions of others) define it as indispensable. Whether I'm writing C# or JavaScript, I still want to do it in Visual Studio.

I have a lot of Node.js code on my box and occasionally I'll get into a situation when I have an existing Node.js project (one that I didn't create initially using Visual Studio), and I want to open it in VS.

When you create a new Node.js project in Visual Studio, it gives you the basic files - app.js, package.json, and README.md - and then it gives you a .njsproj file. That's the file that lights VS up with all of the additional help that's specific to Node.js. That's the file we essentially need to create in an existing project, but how? It's not exactly a new project, but according to Visual Studio's definition, it's not an existing project either.

I'll show you how. But first, you have to have Visual Studio (I'm running the free [Visual Studio Community 2013 with Update 4](http://www.visualstudio.com/downloads/download-visual-studio-vs)) and the [Node.js Tools for Visual Studio](https://nodejstools.codeplex.com/).

First, open Visual Studio and choose File | New Project...

![](http://codefoster.blob.core.windows.net/site/image/c133f3af12954cbeb3d6ca4fa3a13751/existingnode_newproject_1.png)

Under the Templates section you should be able to expand a JavaScript section and then choose Node.js.

On the right, you will see a big list of project templates, and notice the second one (it's the second on my list at least) - _From Existing Node.js code_. That's the one. Hit it.

![](http://codefoster.blob.core.windows.net/site/image/8a0bd0a180aa41fdb644ad73f43b9a9b/existingnode_thatone_10.png)

The values in the 3 boxes on the lower end of the box - Name, Location, and Solution Name - by the way, are used to populate default values on subsequent screens, but you'll have a chance to change them. I recommend you put the name of your project in the Name field and the path to it in the Location.

Then hit OK.

![](http://codefoster.blob.core.windows.net/site/image/58ede40316e24c77acee820a7f8329ea/existingnode_path_1.png)

The first wizard screen prompts you for the location of your existing Node.js project. If you populated the Location field on the New Project screen, then this will already be set. The rest of this screen is self-explanatory.

![](http://codefoster.blob.core.windows.net/site/image/d1b2173be6f245728b96ea0d019f05d9/existingnode_startfile_1.png)

The wizard next guesses what is the entry point. If it's not right then point it to the right one.

![](http://codefoster.blob.core.windows.net/site/image/857259309e1f4a43ae2ee222ee3186e1/existingnode_projectfile_1.png)

Finally, you need to indicate the name of the .njsproj file, and again it's going to pull a default from the New Project screen if you filled that out.

![](http://codefoster.blob.core.windows.net/site/image/825f2b612cc3435eb76b938b370d7cfd/existingnode_beforesave_1.png)

And there you have it. You've essentially gotten a .njsproj file created where it should be. If you created this new project from the File menu like I did in my example, then your new Node.js project is inside of an unsaved solution file, so when you close Visual Studio or the solution, it's going to prompt you to save it. The other approach - if you already had a solution - would be to open it, right click the solution file, and then choose New Project from the context menu.

Have fun with Node.js!

 