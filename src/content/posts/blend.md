---
title: Blend - Design, Execute, Interact
categories: [Design]
tags: [ide,visual studio,developer tools]
date: 2012-04-16
alias: blend-design-execute-interact/
---

This is likely apparent to anyone that has already ventured into Windows 8 development using Blend for Visual Studio 11, but if you haven't ventured in yet for some reason... like say you're busy actually getting work done! I know how that goes. I was recently in industry trying to meet deadlines and didn't have much opportunity to look at new technology.

So allow me to quickly highlight an incredible feature in Windows 8 development &ndash; specifically in Blend for Visual Studio 11.

## Why Use Blend?

First of all, why and when should you open Blend? For a long time, Blend was downright offensive to me as a developer. I was and still am a Visual Studio guy. I don't want another IDE offering in parallel to confuse and divide me! But now I've accepted the two tools as very different and each very powerful in their own role.

Some people will almost always use Visual Studio. Remember that the Express version is completely free. How do you know if you're one of these people? Simple. Look down. Are you wearing one of these t-shirts right now?

![](/files/blend_01.png)

If so then chances are you're a geek and Visual Studio may be your primary if not your exclusive tool.

Are you wearing something more like this?

![](/files/blend_02.png)

If so then you may call Blend your home and ask a geekier friend to write the actual code for you. If you're like me, you might wear many hats (and shirts) and be able to geek out in the code and the design tools.

## Design, Execute, Interact

But right now I want to show you something that is exclusive to Blend. That is its ability to execute your application live as you design it and its ability to even give you interaction with the application and why you need that.

![](/files/blend_03.png)

The figure above is what it looks like when you're designing an application in Blend. The interesting tidbit of note is that those recipes you see in the design pallet are not declared in the HTML. They exist as JavaScript arrays in the data.js file and as images of food (yum) stored in the images folder.

Blend here is executing the application, running the JavaScript, and rendering the recipes accordingly on the screen. So just this is pretty awesome. Remember in Expression Blend days of old when we loaded sample data so we (designer role) could get an idea of what things looked like. Those are bygone days, my friend.

In this mode, we can actually grab one of the images (even though they're being rendered live!) and resize it (see next figure) - effectively modifying the size of the image element in the item template utilized by the ListView control that forms this list.

![](/files/blend_04.png)

But what about when you want to do some design on a different page. Say we want to resize the recipe image on its detail page as well. If we were actually executing this application, we would touch on the recipe to get to this page. But remember that we are actually executing this application. We just have to tell Blend that we want to interact with it. And to do that you hit the Interactive Mode icon...

![](/files/blend_05.png)

...on the right side of the tab well. This hides all of Blend's panes and puts you in a mode where input is passed on to the application (see next figure).

![](/files/blend_06.png)

Now a click on a recipe takes you to the item's detail page...

![](/files/blend_07.png)

You can now click on the Interactive Mode icon again to turn it off...

![](/files/blend_08.png)

...and now you're ready to do some design on this page.

That's all for now. Let the power and potential that is Blend sink deep. Now use it to create an awesome app.

Happy Blending!