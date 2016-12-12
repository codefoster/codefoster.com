---
title: App Art
categories: [Design]
tags: [art, design, creative, ui, ux]
date: 2013-04-15
permalink: appart
alias: post/2013/04/15/appart/
---

One of my favorite steps in the app development lifecycle is the creation of the artwork. I&#39;m not stellar at _creating_ original artwork, but I definitely recognize when things look just right, and sometimes I stumble upon it. I must also have a little bit of marketing in me, because it&#39;s my constant effort to brand things.


The artwork and branding is important, because an app developer must live in a constant state of capturing the user amid so much noise. An app needs to say &quot;here&#39;s precisely what I do and how it adds value to your life&quot;. It takes a lot of design thought and effort to cut through the noise and reach your audience.

Good messages to communicate are: **clean, simple, creative, elegant, and fluid**.

I&#39;d like to walk you through my process of creating artwork for an app called Everyview. Everyview is webcam viewer that attempts to implement well the design principles of Windows 8\. It&#39;s intended to feel like a breath of fresh air. There are plenty of apps for viewing web cams and it&#39;s nothing that can&#39;t be done in the browser too, but it&#39;s seldom a consolidated and elegant experience. As of this writing, Everyview is not yet published to the Windows Store, but by the time you read it, it may be. Try searching for Everyview.

My artwork for Everyview started with the creation of a symbol. The symbol had to represent every image that could possibly come through the eye of a camera and so I simply chose to represent the eye of a camera. I didn&#39;t want to make the app subject to aging by choosing a specific camera though, and I didn&#39;t want to specify a still camera or a video camera. So I created a camera lens. The icon doesn&#39;t determine absolutely that you&#39;re looking down the barrel of a DSLR, an amateur video camera, a high-end video camera, or any other specific model. It&#39;s an agnostic character of a camera.

![](/files/appart_01.png)

Looking into the eye of a camera invokes a bit of a &quot;live&quot; feeling, as if you&#39;re on the air. I chose not to embellish the icon with a lot of gradients and or other attempts to make it look more realistic. As long as it says &quot;camera&quot; to the user, that&#39;s enough. I did, however, ad a lens glare that identifies it without doubt as a camera lens.

Let me show you how I created this image.

I used CorelDRAW because... well, because I always use CorelDRAW. Use your graphics package of choice, but don&#39;t restrict yourself to a bitmap editor. Creating images in a vector-based graphics package has serious benefits and will make exporting to the various required app graphic sizes a breeze. Creating images in a bitmap package will inevitable find you needing a size larger than what you designed for. I recorded a primer on using CorelDRAW and you can access it at [http://aka.ms/coreldrawprimer](http://aka.ms/coreldrawprimer).

Before I show you how I created that image, let me show you how I set up CorelDRAW for creating images for Windows 8\. Choosing File | New in CorelDRAW by default will start you out with a document the size of a piece of paper. CorelDRAW is very good at creating artwork for print, but we&#39;re concerned here more with pixels than we are with inches, so let&#39;s change the defaults and save it for future use.

![](/files/appart_02.png)

I created a preset called Win8 App that uses the base Windows resolution of 1366 x 768 pixels. I also chose a color mode of RGB since the results are to be rendered to a screen rather than a printer. When you&#39;re working with documents of a designated pixel width/height, the resolution I mostly irrelevant.

If you&#39;d like a nice place to start, try downloading the template I created at [/w8tiletemplate](/w8tiletemplate).

Now, with a new document, we can go about creating our camera lens graphic.

## Creating the lens graphic

Create a series of concentric circles like so. You do this by creating the largest and then resizing it with the CTRL key held to resize about the object&#39;s center and hitting the right mouse button when you have your next circle to create a copy.

![](/files/appart_03.png)

Use the second largest to trim the largest by clicking first the second largest and then holding shift and clicking the largest. Then hit the trim button ![](/files/appart_04.png) on the toolbar. Then delete the second largest circle. Setting the fill color of all objects to black and removing the outline color should leave you with something like this...

![](/files/appart_05.png)

That&#39;s nice and simple and we have only to create the lens glare, which is only slightly harder than what we&#39;ve done so far.

Make another couple of circles inside the smallest. I like to give them a red outline (right click on red from the color palette) while I&#39;m working so they&#39;re easily discerned.

![](/files/appart_06.png)

When you draw an ellipse (in this case a circular ellipse) in CorelDRAW, you have an ellipse, which is different from a custom curve. Ellipses have the property that you can grab their little vertex using the shape tool and drag to reduce the ellipse to an arc. Use the shape tool (F10) to do just that and work your way to something like this...

![](/files/appart_07.png)

And then use some trimming and intersecting to end up with this...

![](/files/appart_08.png)

## Designing the tiles

Now it&#39;s time to design yourself some tiles. At a minimum, you&#39;ll need a standard app tile (150 x 150), a small logo (30 x 30), a store logo (50 x 50), and a splash screen (620 x 300). Additionally, you can design a wide logo (310 x 150) and some additional promotional images in case the Store finds your app worthy of being featured. It&#39;s recommended that the wide logo only be used if you&#39;re going to implement a live tile.

Let&#39;s start with the main app tile. Here&#39;s what I came up with for that...

![](/files/appart_09.png)

Obviously, the tile incorporates the symbol we just created, but I also add a stylized app title below that. I chose a fairly bold font, condensed it, used different colors for the words and even shoved them together and created a little notch. Little design choices like this are somewhat arbitrary, but will end up becoming your brand and how people recognize your app. Finally, I added a soft gradient behind the entire title. You have to be careful with gradients in modern apps, but a shallow, gray gradient here seems to add a sort of dreamy, modern, cloud feel to the app.

Next, I&#39;ll elaborate a bit on the standard logo design when creating the wide logo and the splash screen which I tend to make rather similar. Here&#39;s what I came up with.

![](/files/appart_10.png)

Now with more horizontal space than vertical, we stretch the brand elements out left to right and I like to add a little subtitle that describes without a doubt what the purpose of the app is - it&#39;s a _webcam viewer_. Like the notched _v_ in _view_, I notch the _E_ with the camera lens and keep all of the graphics tight and bold.

The last step is the creation of the store and small logos.

## The Store logo

The store logo is used for your apps dedicated detail page in the Windows Store. It&#39;s common practice to just shrink the app tile down from 150 pixels to 50 and call it good, but that&#39;s unfortunate because it&#39;s rare that the app&#39;s main tile will look so good at this size. Take a look at the Bing app&#39;s Store logo captured from its page in the Store...

![](/files/appart_11.png)

You want this image to be even simpler than the main app tile, to use most of the 50 x 50 pixel space, and to have a transparent background.

For my Everyview app, I stuck to the basic, original symbol. In CorelDRAW if you want to render something out a certain size even if the elements inside don&#39;t quite fill up that size, you just create a bounding rectangle the size you want and then give it no fill and no outline. I have rendered this bounding box orange below for visibility only. To export this image, you simple set the bounding box&#39;s outline color to none (invisible), select the entire group (bounding box and symbol together), and then export (CTRL + E) it.

![](/files/appart_12.png)

Here&#39;s how that would be rendered, however.

![](/files/appart_13.png)

Notice a few things about this:

*   The image has been rendered to pixels custom made for the export size chosen (it could be rendered absolutely huge and would still look great)
*   The bounding box is not visible, yet it is responsible for the overall size and shape of the exported image
*   The background is transparent (designated by the checkerboard pattern) but the lens glare is always white
*   The transparency is 24-bit which means it has various levels of transparency around the edges to make it blend perfectly with the background
*   There is a little bit of space around each edge of the symbol
*   The symbol is large enough to capture all the quality we can in this restricted space

## The small logo

The small logo is used to represent your app when the user semantically zooms out of their start screen. Try it and see.

You can use the exact same techniques to create the small logo as you did for the Store logo. The small logo (30 x 30 pixels) is even smaller than the store logo (50 x 50 pixels) so it becomes that much more important to be intentional about simplifying your image.

That&#39;s as far as I&#39;ll take this for now. Of course, you would continue your design effort into the app itself so that the entire effort is unified and consistent.

I&#39;d like to point out one of the advantages to Microsoft design principles that ends up being highlighted by the content of this article. No part of the splash screen or the tiles or even the app itself are contributed to by Windows. The entire space falls under the responsibility of whoever wears the design hat in your organization (even if you are your organization and you wear all the hats!). The app tiles as well as the app&#39;s main design surface because a truly empty canvas and 100% of the pixels are there to deliver your brand, deliver your functionality, and delight your user.

Have fun with this. It&#39;s fun stuff for sure.