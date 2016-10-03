---
title: 'Blend: Design, Execute, Interact'
tags: []
date: 2016-10-02 16:03:46
---

This is likely apparent to anyone that has already ventured into Windows 8 development using Blend for Visual Studio 11, but if you haven&rsquo;t ventured in yet for some reason&hellip; like say you&rsquo;re busy actually getting work done! I know how that goes. I was recently in industry trying to meet deadlines and didn&rsquo;t have much opportunity to look at new technology.

So allow me to quickly highlight an incredible feature in Windows 8 development &ndash; specifically in Blend for Visual Studio 11.

## Why Use Blend?

First of all, why and when should you open Blend? For a long time, Blend was downright offensive to me as a developer. I was and still am a Visual Studio guy. I don&rsquo;t want another IDE offering in parallel to confuse and divide me! But now I&rsquo;ve accepted the two tools as very different and each very powerful in their own role.

Some people will almost always use Visual Studio. Remember that the Express version is completely free. How do you know if you&rsquo;re one of these people? Simple. Look down. Are you wearing one of these t-shirts right now?

[![image](http://codefoster.blob.core.windows.net/site/image/f85fc0c07145434f82d01fcda6acff7e/Blend-Design-Execute-Interact_01_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/4FEC5549/image.png)

If so then chances are you&rsquo;re a geek and Visual Studio may be your primary if not your exclusive tool.

Are you wearing something more like this?

[![image](http://codefoster.blob.core.windows.net/site/image/832a93644d9a4ae2a5589237d783e904/Blend-Design-Execute-Interact_02_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/2BF32DF3/image.png)

If so then you may call Blend your home and ask a geekier friend to write the actual code for you. If you&rsquo;re like me, you might wear many hats (and shirts) and be able to geek out in the code and the design tools.

## Design, Execute, Interact

But right now I want to show you something that is exclusive to Blend. That is its ability to execute your application live as you design it and its ability to even give you interaction with the application and why you need that.

[![image](http://codefoster.blob.core.windows.net/site/image/311d4c3015394060a630f6d2c9ed3273/Blend-Design-Execute-Interact_03_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/5783AC55/image.png)

The figure above is what it looks like when you&rsquo;re designing an application in Blend. The interesting tidbit of note is that those recipes you see in the design pallet are not declared in the HTML. They exist as JavaScript arrays in the data.js file and as images of food (yum) stored in the images folder.

Blend here is executing the application, running the JavaScript, and rendering the recipes accordingly on the screen. So just this is pretty awesome. Remember in Expression Blend days of old when we loaded sample data so we (designer role) could get an idea of what things looked like. Those are bygone days, my friend.

In this mode, we can actually grab one of the images (even though they&rsquo;re being rendered live!) and resize it (see next figure) - effectively modifying the size of the image element in the item template utilized by the ListView control that forms this list.

[![image](http://codefoster.blob.core.windows.net/site/image/2ef3ce3f5b2c43ae92d8c52f188aba93/Blend-Design-Execute-Interact_04_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/761A4AA6/image.png)

But what about when you want to do some design on a different page. Say we want to resize the recipe image on its detail page as well. If we were actually executing this application, we would touch on the recipe to get to this page. But remember that we are actually executing this application. We just have to tell Blend that we want to interact with it. And to do that you hit the Interactive Mode icon ([![image](http://codefoster.blob.core.windows.net/site/image/82adf8f81f3045edaedf7fecdaa523fd/Blend-Design-Execute-Interact_08_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/701F5B73/image.png)) on the right side of the tab well. This hides all of Blend&rsquo;s panes and puts you in a mode where input is passed on to the application (see next figure).

[![image](http://codefoster.blob.core.windows.net/site/image/a6d1f07efcdc49fea2563ed88a2bbaad/Blend-Design-Execute-Interact_05_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/3225CAB5/image.png)

Now a click on a recipe takes you to the item&rsquo;s detail page&hellip;

[![image](http://codefoster.blob.core.windows.net/site/image/564e8fe1e88c495eb82e0016c533c0f2/Blend-Design-Execute-Interact_06_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/3F292BE3/image.png)

You can now click on the Interactive Mode icon again to turn it off&hellip;

[![image](http://codefoster.blob.core.windows.net/site/image/0c16e62166d1450e983a2b0d18bee0a8/Blend-Design-Execute-Interact_07_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/Design-in-Execution/0B3E5947/image.png)

&hellip;and now you&rsquo;re ready to do some design on this page.

That&rsquo;s all for now. Let the power and potential that is Blend sink deep. Now use it to create an awesome app.

Happy Blending!