---
title: The Flexbox CSS Standard
tags: []
date: 2016-10-02 16:03:46
---

**_Question: what is Microsoft&#39;s position on Flexbox and fallbacks for IE10 and legacy? _**

While I&#39;m not the official voice of Microsoft and am not the smartest Softie in Redmond when it comes to the web standards, I&#39;ll attempt to answer this question anyway.

The official standard for the flexbox style in CSS is documented in exhaustive detail at [W3C](http://www.w3.org/TR/css3-flexbox/). The abstract of this implement is helpful stating that the flexbox is

_&quot;&hellip;a CSS box model optimized for user interface design. In the flex layout model, the children of a flex container can be laid out in any direction, and can &quot;flex&quot; their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated. Nesting of these boxes (horizontal inside vertical, or vertical inside horizontal) can be used to build layouts in two dimensions.&quot; _

I think the official answer is that Microsoft doesn&#39;t have an official position on falling back from flexbox. The <span style="font-family: Consolas;">-ms-flexbox </span>is an implementation by the Trident engine to the flexbox&hellip; end of story. You will, however, find some recommended strategies on the web, and the best I&#39;ve run into so far is the use of <span style="font-family: Consolas;">inline-block </span>for unsupporting browsers.

That said, I&#39;m spending most of my time with Windows 8 apps these days am thus spared the pain (the ever building pain that has yet to reach a crescendo) of writing 12 lines of code to accommodate the various HTML/CSS engines. If I was doing web development for the masses, I think I would decide to avoid the use of flexboxes altogether to ease my pain. I&#39;m not sure what&#39;s worse - an old, hacky solution or multiple solutions to maintain (one of which is still old and hacky).

&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;