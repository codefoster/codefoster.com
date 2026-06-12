---
title: Building Things Using Fusion 360 and JavaScript
categories: [JavaScript]
tags: [cad, api, javascript, maker, api, design, make, 3d]
date: 2016-03-22
---

I like making things.

I used to mostly just make things that show up on the computer screen - software things. Lately, however, I've been re-inspired to make _real_ things. Things out of wood and things out of plastic and metal and fabric and string.

The way I see it, we design things either _manually_ or _generatively_.

By **manual** I mean that I conceive an idea then design and build it step by step. I - the human - am involved every step of the process. Imperative code is manual. Here's some pseudocode to describe what I'm talking about...

```
// step 1
// step 2
// if step 2 value is good then step 3
// else step 4 10 times
```

See what I mean?

I'm not arguing that this sort of code and likewise this sort of technique for building is not _essential_. It is. I am, however, going to propose that it's often not altogether exciting or inspiring. The reason, IMO, is that the entire process is no greater than the individual or organization that implements it. An individual only has so many hours in the day and is even limited in ideas. An organization can grow rather large and put far more time and effort into a problem and obviously generate more extensive results. But the results are always linearly related to the effort input - not so exciting.

By **generative** I mean that instead of creating a _thing_, I create _rules_ to make a thing. The rules may be non-deterministic and the results completely unexpected - even from one run to another. The results often end up looking very much like what we find in nature - the fractal patterns in leaves, the propagation of waves on the water, or the absolute beauty of ice crystals up close.

What's exciting is when an individual or organization puts their time and effort into defining _rules_ instead of defining _steps_. That is, after all, the way our own brains work, and in fact, that's the way the rest of nature works too. It's amazing and awesome and I would venture to say it's even miraculous.

I think a lot of my ideas on the matter parallel and perhaps stem from Stephen Wolfram's book _A New Kind of Science_.

![](/files/f360api_01.png)

Most of the book is about _cellular automata_. The simple way to understand these guys is to think back to [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The game is basically a grid of cells that each have a finite number of states - often times two states: black and white. Initially, the cells in the grid are seeded with a value and then iterations are put into place that may change the state of the cells according to some rules.

The result is way more interesting than the explanation. The cell grid appears to come to life. The fascinating part is that the behavior of the system is usually not what the author intended - it's something emergent. The creator is responsible for a) creating an initial state and b) creating some rules. The system handles the rest. It usually takes a lot of trial and error if the intention is to create something that serves some certain purpose.

Check out Wikipedia's [page on cellular automata](https://en.wikipedia.org/wiki/Cellular_automaton), and specifically look at Gosper's Glider Gun. 

[![](//upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)](/wiki/File:Gospers_glider_gun.gif)

I don't know about you, but I find that completely awesome.

Okay, so when are you going to get to the point of the blog post, codefoster?

Calm down. It's called _build up_. :)

First, let me say that generating graphics in either 2D or 3D is nothing conceptually new. What I like about discovering and learning an API for CAD software, though, is that I can not only generate something that targets the screen, I can generate something that targets the 3D printer or the laser cutter. That's all sorts of awesome!

The example I'm going to show you now is a simple one that I hope will just get your gears turning. You could, by the way, take that literally and generate some gears and get them turning.

If you don't have Fusion 360, go to [fusion360.autodesk.com](http://fusion360.autodesk.com) and download it. If you're a hobbyist, maker, student, startup type you can get it for free.

If you're new to the program, let me suggest [the learning material](http://www.autodesk.com/products/fusion-360/learn-training-tutorials) on their website. It's great.

After you install Fusion 360, the first thing you need to do is launch the program. This API is attended. It requires that you open the program and launch the scripts. I have suggested to the team at Autodesk to research and consider implementing unattended scenarios as well.

Now launch the _Scripts and Add-ins..._ option from the _File_ menu...

![](/files/f360api_02.png)

Don't be confused by the _Add-Ins (Legacy)_ option in the same _File_ menu. That's for an old system that you don't want to use anymore.

That should launch the Scripts and Add-Ins dialog...

![](/files/f360api_03.png)

There are two tabs - Scripts and Add-Ins. They're the same thing except that Add-Ins can be run automatically when Fusion 360 starts and can provide commands that the user can see in their UI and invoke by hitting buttons. Add-Ins ask you to implement an interface of methods that get called at certain times. If you simply click the _Create_ button on the Add-Ins page, it will make you a sample with most of that worked out for you already.

Let's focus on the Scripts tab for now.

You'll see a number of sample scripts in there. Some of them will have the JavaScript icon... ![](/files/f360api_04.png) ...and others will have the Python icon... ![](/files/f360api_05.png)

The Fusion 360 API supports 3 languages: C++, Python, and JavaScript. 

Above those, you'll see the My Scripts area that contains any scripts you have written or imported.

It's not entirely clear at first how this works. Let me explain. If you click Create at the bottom, you'll get a new script written in a strange folder location. It's good because it gives you the right files (a .js file, an .html file, and a .manifest), but it's bad because it's in such an awkward location. The best thing to do in my opinion is to hit create and get the sample code files and then move the files and their containing folder to wherever you keep your code. Then you can hit the little green plus and add code from wherever you want.

One more nuance of this dialog is that if you click the Edit button, Fusion 360 will launch an IDE of _its_ choice. I think this is weird and should be configurable. If I edit a JavaScript file it launches Brackets. I don't use Brackets. I use Visual Studio Code. It doesn't end up being that much trouble, but it's weird.

To edit my code, I just go to my command line to whatever directory I decided to put it in and I type...

```
code .
```

That launches Code with this directory as the root. Here's what I see...

![](/files/f360api_06.png)

There you can see the .html, .js, and .manifest files.

I'm not going to take the screen real estate to walk you entirely through the code. You can see it all [on GitHub](http://github.com/codefoster/f360-bumpmap). But I'll attempt to show you what it's doing at a high level.

Here's the code...

``` html
<style type="text/css">.gist {width:700px !important;}
  .gist-file
  .gist-data {max-height: 500px;max-width: 700px;}
</style>
<script src="https://gist.github.com/codefoster/0b24212710319b681453.js"></script>
```

Let's break that down some.

The `createNewComponent` function is just something I made. That's not a special function the API is expecting or anything. The `run `function _is_, however, a special function. That's the entry point.

Essentially, I'm creating a 20x20 grid, prompting the user to select a body, and then doing a 2D loop to copy the selected body. The position is all done using a transformation that shifts each body into place and then offsets it a certain amount in the Z direction. In this case, I'm just using a random number, but I could very well be feeding data in to this and doing something with more meaning.

Watch this short video as I create a cube and then invoke this script on it...

<video autoplay controls src="/files/f360api_07.mp4" style="width:700px;height:486px"> </video>

So, here is where you just have to sit back and stare at the ceiling and think about what's possible - about all the things you could generate with code.

My example was a basic, linear iterator. Perhaps, however, you want to create something more organic - more generative?

Check out [this example](https://www.youtube.com/watch?v=5wj6zj4-iB0) by Autodesk's own Mike Aubry ([@Michael_Aubry](https://twitter.com/Michael_Aubry)) where he uses Python code to persuade Fusion 360 to build a spiral using the API.

![](/files/f360api_08.png)

That has a bit more polish than my gray cubes!

If you build something, make sure you toss a picture my way [on Twitter](http://twitter.com/codefoster) or something. I'd love to see it.