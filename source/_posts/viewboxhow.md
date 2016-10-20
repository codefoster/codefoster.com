---
title: How the WinJS.UI.ViewBox Actually Works
categories: []
tags: []
date: 2001-01-01
permalink: viewboxhow
---

I just learned something about the WinJS.UI.ViewBox and wanted to share.

I have known for some time _what_ the ViewBox does, but I recently learned how it does it.
<!-- more -->

First, let me reiterate what the ViewBox does. I compared its functionality to the FlexBox in my [When to Use ViewBoxes and FlexBoxes](/boxes) post. The ViewBox itself snaps to the size of the container it is in and resizes its child (without changing its aspect ratio) to fit.

How does it actually do that? It's pretty cool. It does it with a CSS transform. If you create a ViewBox and then look at the DOM Explorer, you'll see something like this...

``` html
<body>
  <div class="win-viewbox" data-win-control="WinJS.UI.ViewBox">
    <div style="transform-origin: left top; transform: translate(171px, 0px) scale(1);">
      <p>Content goes here</p>
    </div>
  </div>
</body>
```

Notice a few things about this generated code. First, notice the inline style attribute on the second div. It's not on the ViewBox itself, but rather on its first (and only) child. The values indicate that the div should be translated 171px from the left. The ViewBox has calculated the shape of my screen (1366 x 768 in this case) and the shape of that only child div (1024 x 768), and determined that it needs to scoot over to the right 171 pixels in order to center it within the screen.

Now I snap my app and then check out the DOM Explorer again and here's what I have...

``` html
<body>
  <div class="win-viewbox" data-win-control="WinJS.UI.ViewBox">
    <div style="transform-origin: left top; transform: translate(0px, 264px) scale(0.3125);">
      <p>Content goes here</p>
    </div>
  </div>
</body>
```

So there you have it. In order to arrange the child div in the center of the snap view, it's going to need to translate (move) it down 264 pixels and shrink it to 31% (0.3125) of its original size.

I could have continued not knowing the _how_ of this, but I'll sleep better tonight knowing it.