---
title: Microsoft's Vendor Specific CSS Prefixes
categories: []
tags: []
date: 2001-01-01
permalink: cssprefix
---

Much of my audience, I'll presume, has at least some familiarity with CSS.

If you have none, then let me simply say that CSS is basically a big, flat list of style and layout properties that are grouped together into rules and determined to affect certain portions of an HTML document.

I like to draw the analogy to the classic word processor, because pretty much everyone has experience with a word processor. When you're working on a letter to grandma and you want to emphasize that you **don't like nuts in your brownies**, you might choose to bold that text, right? So you first _select_ the important words and then you _affect_ them with a bold command.

CSS works like that. You write _selectors_ that identify certain parts of your UI and then you define properties and values that _affect_ them.

Most of the available CSS properties are governed by a standards body - the [W3C](http://www.w3c.org). They are a consortium of companies with a vested interest in web technologies that put their heads together and decide on the best way to do things. They decide things like "hey, let's do away with the <b> tag and use a <strong> tag instead because it's more semantic". All of the other smart guys in the room say "good idea!" and then they spend 18 months going through the paperwork to make the standard final. That's a bit of exaggeration laced with cynicism perhaps, but it is frustrating sometimes that the W3C can't turn the ship quicker. It's a big ship. I'll give them that.

Once you've selected your target HTML elements with a well formed CSS selector, you go about choosing properties, and in Visual Studio that leaves you somewhere like this...

![](http://codefoster.blob.core.windows.net/site/image/265f5b7eca514738a9e1453fd6084e2c/cssprefix_01_1.png)

...that is, Intellisense gives you an enormous list of CSS properties. _All_ of them. And it pretty much has to. There's not really a way for the tooling to know which properties you might apply. More strongly typed UI frameworks define which properties can be applied to which UI elements, but in the world of HTML and CSS, you can apply anything to anything. It may not do anything or it may do something different, but you're free to do it.

If you scroll to the top of that Intellisense list, you see this...

![](http://codefoster.blob.core.windows.net/site/image/d103d687daed4ce8806db59d81062104/cssprefix_02_1.png)

...that is, a bunch of properties that are prefixed with -ms-. That means that these are Microsoft specific properties. We actually call them vendor specific and the syntax (a dash, a vendor code, and another dash) is part of the standard, and it's a good one in my opinion. It means that vendors will forever be free to do custom stuff and it will be readily apparent to everyone that it's not necessarily part of the standard.

When you see a vendor specific prefix it means one of three things:

*   the property is simply a feature or extension of a Microsoft product (usually Internet Explorer) and is not defined in the standard
*   the property is part of a CSS spec that has not been run through all of its paperwork yet
*   the property is part of a CSS spec that is final, but the feature is only partially implemented so far

I found it helpful to look through the many Microsoft vendor specific properties and see what they do. It gave me an idea of where IE is relative to the standards (it's doing pretty good these days by the way) and also an idea of what I can do when I'm targeting an IE browser only (such as when I'm building a Windows app using JavaScript). I'd like to enumerate them for you, because they aren't necessarily easy to find. My first search brought properties compatible with Windows Mobile 6.5\. Oops!

Here's the complete list as of today with links to documentation. Do keep in mind that the list is rather time-sensitive and very subject to change. Also, know that some of these are not required for later versions of Internet Explorer, but are still supported for backward compatibility.

*   [-ms-accelerator](http://msdn.microsoft.com/en-us/library/ie/ms530713(v=vs.85).aspx)
*   -ms-behavior
*   [-ms-block-progression](http://msdn.microsoft.com/en-us/library/ie/dd229917(v=vs.85).aspx)
*   [-ms-content-zoom-chaining](http://msdn.microsoft.com/en-us/library/ie/hh771889(v=vs.85).aspx)
*   [-ms-content-zooming](http://msdn.microsoft.com/en-us/library/ie/hh771891(v=vs.85).aspx)
*   [-ms-content-zoom-limit](http://msdn.microsoft.com/en-us/library/ie/jj127330(v=vs.85).aspx)
*   [-ms-content-zoom-limit-max](http://msdn.microsoft.com/en-us/library/ie/jj127331(v=vs.85).aspx)
*   [-ms-content-zoom-limit-min](http://msdn.microsoft.com/en-us/library/ie/jj127332(v=vs.85).aspx)
*   [-ms-content-zoom-snap](http://msdn.microsoft.com/en-us/library/ie/hh771893(v=vs.85).aspx)
*   [-ms-content-zoom-snap-points](http://msdn.microsoft.com/en-us/library/ie/hh771895(v=vs.85).aspx)
*   [-ms-content-zoom-snap-type](http://msdn.microsoft.com/en-us/library/ie/hh771895(v=vs.85).aspx)
*   [-ms-content-zooming](http://msdn.microsoft.com/en-us/library/ie/hh771891(v=vs.85).aspx)
*   [-ms-filter](http://msdn.microsoft.com/en-us/library/ie/ms530752(v=vs.85).aspx)
*   [-ms-flow-from](http://msdn.microsoft.com/en-us/library/ie/hh771897(v=vs.85).aspx)
*   [-ms-flow-into](http://msdn.microsoft.com/en-us/library/ie/hh771899(v=vs.85).aspx)
*   [-ms-grid-column](http://msdn.microsoft.com/en-us/library/ie/hh772242(v=vs.85).aspx)
*   [-ms-grid-column-align](http://msdn.microsoft.com/en-us/library/ie/hh772245(v=vs.85).aspx)
*   [-ms-grid-columns](http://msdn.microsoft.com/en-us/library/ie/hh772246(v=vs.85).aspx)
*   [-ms-grid-column-span](http://msdn.microsoft.com/en-us/library/ie/hh772248(v=vs.85).aspx)
*   -ms-grid-layer
*   [-ms-grid-row](http://msdn.microsoft.com/en-us/ie/hh772254(v=vs.94).aspx)
*   [-ms-grid-row-align](http://msdn.microsoft.com/en-us/library/ie/hh772256(v=vs.85).aspx)
*   [-ms-grid-rows](http://msdn.microsoft.com/en-us/library/ie/hh772258(v=vs.85).aspx)
*   [-ms-grid-row-span](http://msdn.microsoft.com/en-us/library/ie/hh772260(v=vs.85).aspx)
*   [-ms-high-contrast-adjust](http://msdn.microsoft.com/en-us/library/ie/hh771863(v=vs.85).aspx)
*   [-ms-hyphenate-limit-chars](http://msdn.microsoft.com/en-us/library/ie/hh771865(v=vs.85).aspx)
*   [-ms-hyphenate-limit-lines](http://msdn.microsoft.com/en-us/library/ie/hh771867(v=vs.85).aspx)
*   [-ms-hyphenate-limit-zone](http://msdn.microsoft.com/en-us/library/ie/hh771869(v=vs.85).aspx)
*   [-ms-hyphens](http://msdn.microsoft.com/en-us/library/ie/hh771871(v=vs.85).aspx)
*   [-ms-ime-mode](http://msdn.microsoft.com/en-us/library/ie/ms530767(v=vs.85).aspx)
*   [-ms-interpolation-mode](http://msdn.microsoft.com/en-us/library/ie/ms530822(v=vs.85).aspx)
*   [-ms-layout-grid](http://msdn.microsoft.com/en-us/library/ie/ms530771(v=vs.85).aspx)
*   [-ms-layout-grid-char](http://msdn.microsoft.com/en-us/library/ie/ms530772(v=vs.85).aspx)
*   [-ms-layout-grid-line](http://msdn.microsoft.com/en-us/library/ie/ms530773(v=vs.85).aspx)
*   [-ms-layout-grid-mode](http://msdn.microsoft.com/en-us/library/ie/ms530774(v=vs.85).aspx)
*   [-ms-layout-grid-type](http://msdn.microsoft.com/en-us/library/ie/ms530775(v=vs.85).aspx)
*   -ms-line-break
*   [-ms-overflow-style](http://msdn.microsoft.com/en-us/library/ie/hh771902(v=vs.85).aspx)
*   -ms-perspective
*   -ms-perspective-origin
*   -ms-perspective-origin-x
*   -ms-perspective-origin-y
*   -ms-progress-appearance
*   [-ms-scrollbar-3dlight-color](http://msdn.microsoft.com/en-us/library/ie/ms531153(v=vs.85).aspx)
*   -ms-scrollbar-arrow-color
*   -ms-scrollbar-base-color
*   [-ms-scrollbar-darkshadow-color](http://msdn.microsoft.com/en-us/library/ie/ms531156(v=vs.85).aspx)
*   -ms-scrollbar-face-color
*   -ms-scrollbar-highlight-color
*   [-ms-scrollbar-shadow-color](http://msdn.microsoft.com/en-us/library/ie/ms531159(v=vs.85).aspx)
*   -ms-scrollbar-track-color
*   [-ms-scroll-chaining](http://msdn.microsoft.com/en-us/library/ie/hh772034(v=vs.85).aspx)
*   [-ms-scroll-limit](http://msdn.microsoft.com/en-us/library/ie/jj127336(v=vs.85).aspx)
*   [-ms-scroll-limit-x-max](http://msdn.microsoft.com/en-us/library/ie/jj127337(v=vs.85).aspx)
*   [-ms-scroll-limit-x-min](http://msdn.microsoft.com/en-us/library/ie/jj127338(v=vs.85).aspx)
*   [-ms-scroll-limit-y-max](http://msdn.microsoft.com/en-us/library/ie/jj127339(v=vs.85).aspx)
*   [-ms-scroll-limit-y-min](http://msdn.microsoft.com/en-us/library/ie/jj127340(v=vs.85).aspx)
*   [-ms-scroll-rails](http://msdn.microsoft.com/en-us/library/ie/hh772035(v=vs.85).aspx)
*   [-ms-scroll-snap-points-x](http://msdn.microsoft.com/en-us/library/ie/hh772036(v=vs.85).aspx)
*   [-ms-scroll-snap-points-y](http://msdn.microsoft.com/en-us/library/ie/hh772037(v=vs.85).aspx)
*   [-ms-scroll-snap-type](http://msdn.microsoft.com/en-us/library/ie/hh772038(v=vs.85).aspx)
*   [-ms-scroll-snap-x](http://msdn.microsoft.com/en-us/library/ie/hh772039(v=vs.85).aspx)
*   [-ms-scroll-snap-y](http://msdn.microsoft.com/en-us/library/ie/hh772040(v=vs.85).aspx)
*   [-ms-scroll-translation](http://msdn.microsoft.com/en-us/library/ie/hh973361(v=vs.85).aspx)
*   [-ms-text-align-last](http://msdn.microsoft.com/en-us/library/ie/ms531163(v=vs.85).aspx)
*   [-ms-text-autospace](http://msdn.microsoft.com/en-us/library/ie/ms531164(v=vs.85).aspx)
*   -ms-text-justify
*   [-ms-text-kashida-space](http://msdn.microsoft.com/en-us/library/ie/ms531173(v=vs.85).aspx)
*   -ms-text-overflow
*   -ms-text-size-adjust
*   [-ms-text-underline-position](http://msdn.microsoft.com/en-us/library/ie/ms531176(v=vs.85).aspx)
*   -ms-touch-action
*   [-ms-touch-select](http://msdn.microsoft.com/en-us/library/ie/hh975292(v=vs.85).aspx)
*   -ms-transform
*   -ms-transform-origin
*   -ms-transform-origin-x
*   -ms-transform-origin-y
*   -ms-transform-origin-z
*   [-ms-user-select](http://msdn.microsoft.com/en-us/library/ie/hh781492(v=vs.85).aspx)
*   -ms-word-break
*   -ms-word-wrap
*   [-ms-wrap-flow](http://msdn.microsoft.com/en-us/library/ie/hh772045(v=vs.85).aspx)
*   [-ms-wrap-margin](http://msdn.microsoft.com/en-us/library/ie/hh772042(v=vs.85).aspx)
*   [-ms-wrap-through](http://msdn.microsoft.com/en-us/library/ie/hh771900(v=vs.85).aspx)
*   [-ms-writing-mode](http://msdn.microsoft.com/en-us/library/ie/ms531187(v=vs.85).aspx)
*   -ms-zoom
*   -ms-zoom-animation

	 