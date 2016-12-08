---
title: Open Existing Node.js Project in Visual Studio
categories: []
tags: []
date: 2014-11-24
permalink: existingnode
---

Working on a coding project inside of Visual Studio is hugely helpful. VS does so many things to support the developer, that I myself (and millions of others) define it as indispensable. Whether I&#39;m writing C# or JavaScript, I still want to do it in Visual Studio.
<!-- xmore -->

I have a lot of Node.js code on my box and occasionally I&#39;ll get into a situation when I have an existing Node.js project (one that I didn&#39;t create initially using Visual Studio), and I want to open it in VS.

When you create a new Node.js project in Visual Studio, it gives you the basic files - app.js, package.json, and README.md - and then it gives you a .njsproj file. That&#39;s the file that lights VS up with all of the additional help that&#39;s specific to Node.js. That&#39;s the file we essentially need to create in an existing project, but how? It&#39;s not exactly a new project, but according to Visual Studio&#39;s definition, it&#39;s not an existing project either.

I&#39;ll show you how. But first, you have to have Visual Studio (I&#39;m running the free [Visual Studio Community 2013 with Update 4](http://www.visualstudio.com/downloads/download-visual-studio-vs)) and the [Node.js Tools for Visual Studio](https://nodejstools.codeplex.com/).

First, open Visual Studio and choose File | New Project...

![](/files/existingnode_01.png)

Under the Templates section you should be able to expand a JavaScript section and then choose Node.js.

On the right, you will see a big list of project templates, and notice the second one (it&#39;s the second on my list at least) - _From Existing Node.js code_. That&#39;s the one. Hit it.

![](/files/existingnode_02.png)

The values in the 3 boxes on the lower end of the box - Name, Location, and Solution Name - by the way, are used to populate default values on subsequent screens, but you&#39;ll have a chance to change them. I recommend you put the name of your project in the Name field and the path to it in the Location.

Then hit OK.

![](/files/existingnode_03.png)

The first wizard screen prompts you for the location of your existing Node.js project. If you populated the Location field on the New Project screen, then this will already be set. The rest of this screen is self-explanatory.

![](/files/existingnode_04.png)

The wizard next guesses what is the entry point. If it&#39;s not right then point it to the right one.

![](/files/existingnode_05.png)

Finally, you need to indicate the name of the .njsproj file, and again it&#39;s going to pull a default from the New Project screen if you filled that out.

![](/files/existingnode_06.png)

And there you have it. You&#39;ve essentially gotten a .njsproj file created where it should be. If you created this new project from the File menu like I did in my example, then your new Node.js project is inside of an unsaved solution file, so when you close Visual Studio or the solution, it&#39;s going to prompt you to save it. The other approach - if you already had a solution - would be to open it, right click the solution file, and then choose New Project from the context menu.

Have fun with Node.js! 