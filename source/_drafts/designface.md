---
title: Advanced Design on a 3D Face with Fusion 360
categories: [Maker]
tags: [3d,hardware,iot,design,modeling]
date: 2017-06-26
permalink: designface
---

I'd like to share a Fusion 360 trick with you.

> Fusion 360, in case you don't know, is a parametreic 3D design software package that makes it easy to make stuff. If your design (or parts of your design) are simple solid shapes, you can 3D print them, but it also helps just to have whatever you're making modeled so you can animate it, share it, and even collaborate on designing it.

The trick is creating a design on any face by exporting the face to your vector graphics editor of choice. I'm going to use Inkscape for this blog - which is not my vector graphics editor of choice necessarily - but it's free and it is capable of opening and saving .dxf files, which we'll need to do. For the record, I'm using Affinity Designer for vector art as of late, but it does not yet support .dxf. If only. Otherwise, it's great software.

The entire reason I sought to find out how to do this is because 2D drawing functionality in Fusion 360 is unsurprisingly limited. It is, afterall, a _3D_ design package. If you, like me, have some experience with doing illustration in a vector program like Adobe Illustrator, CorelDRAW, Inkscape, or Affinity Designer then you'll find the _sketching_ system in Fusion severely limiting.

I don't even _wish_ Fusion 360 were capable of advanced drawing. I'd rather it allow me to use my own software for drawing, so that it can concentrate (not that software is capable of concentrating) on turning those drawings into real life things.

So here are the steps.

I've recorded this process on my CodeChat podcast as well, so head over to codefoster.com/codechat/XXXX if you're a visual learner.

##STEP 1: Design a Thing
You have to start somewhere. Likely you already have in mind what you want to create and what you need to draw on it, but if you don't then just make something simple like this...

{picture of my 3D shape}

I designed that by creating a cube and then filleting two edges on the top.

{picture of filleting the edges}

This object is technically a _body_ and contains _faces_. Any of the flat faces can be sketched on, and that's required for this. If you're looking to draw on a curved surface (using a process known as mapping) then you're reading the wrong blog, because I don't know if that's possible in Fusion 360 or if so how to do it.

So let's proceed to step 2 and create a sketch on a face.

##STEP 2: Create a Sketch on a Face
I chose the large face with one end rounded as my design face.

{picture of my chosen face}

We start a sketch by clicking the Create Sketch button and then choosing this face.

##STEP 3: Export the Sketch as a DXF
You can export individual elements of a sketch (lines, curves, etc.) or you can export the entire sketch. Let's do the latter by right clicking on the sketch in the object browser at left and choosing `Save as DXF`. Easy.

{image of right clicking the sketch and choosing}

##STEP 4: Open with DXF in Your Graphics Software
Now you open Inkscape or whatever else you're using and you open (may be import in your software)

##STEP 5: Draw Your Art

##STEP 6: Convert Text to Curves

##STEP 7: Delete the Envelope

##STEP 8: Save as DXF
using mm for units

##STEP 9: Import DXF into Your Fusion 360 Sketch

##STEP 10: Clean Up
And just to round out this tutorial into _10_ easy steps - which sounds way better than _9_ easy steps, let's go ahead and clean up any stray artifacts that may have come over in the conversion process.