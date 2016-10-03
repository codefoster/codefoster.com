---
title: When to Use ViewBoxes and FlexBoxes
tags: []
date: 2016-10-02 16:03:46
---

HTML and CSS is great, but there&rsquo;s at least one thing that has driven web designers mad for ages - layout. We used to use tables and it worked. We knew their weaknesses, but they worked. Then we were told that tables are for tabular data and div elements are for layout, but divs are wretched creatures. To set divs next to each other one had to float them, but then when finished floating had to be explicitly turned off - argh. Also, divs had no notion of filling vertical space or of controlling the vertical placement of anything within it.

So a myriad of web designers resorted to absolute positioning, browser hacks, jQuery UI positioning, or some other means just to get things to go where they ought.

Enter Windows 8.

Windows 8 allows us to design our Metro style apps using HTML and CSS. In doing so, however, it the CSS standards and Microsoft have given us some facilities to finally place things where we want them.

It&rsquo;s not obvious how everything works though so let me give you a boost. If you start with a _Fixed Layout Application_ (for the record, I think it should be called the _Flexible Layout Application_) project template you get the right stuff automatically, but here&rsquo;s an explanation so you have the concept as well.

We&rsquo;re dealing with two entities here: the _WinJS.UI.ViewBox _control and the _-ms-flexbox _css property value (for the display property).

## WinJS.UI.ViewBox

The purpose of the ViewBox is stated in the documentation. It says that it &ldquo;Scales a single child element to fill the available space without resizing it. This control reacts to changes in the size of the container as well as changes in size of the child element. For example, a media query may result in a change in aspect ratio.&rdquo;

The first thing I had a hard time wrapping my head around was the overlap between a ViewBox and a FlexBox. Then I discovered that there really isn&rsquo;t any. The ViewBox control is quite simple. It scales the content that it contains but maintains it&rsquo;s aspect ratio.

It works like this&hellip;

[![](http://codefoster.blob.core.windows.net/site/image/a9cd690247fb44b787c382fd960d8242/boxes_01_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/When-to-Use-ViewBoxes-and-FlexBoxes/2653D2F4/image.png)

Note that it does not work like this&hellip;

[![](http://codefoster.blob.core.windows.net/site/image/eebe2cf17e17461e9902e1148638bc4c/boxes_02_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/When-to-Use-ViewBoxes-and-FlexBoxes/7246E5B3/image.png)

In other words, as it says in the documentation, it _scales_ the contents, but it keeps their _proportions_.

And that&rsquo;s really the end of it. The ViewBox serves this one purpose.

## Flexbox

Now it&rsquo;s time to talk about the flexbox. This is not a WinJS control, but rather an implementation of a CSS3 property. It&rsquo;s not quite a standard property yet because all of the browsers are still implementing it with vendor specific properties and values, but it&rsquo;s close. For Windows 8, we specify a _display _property with a value of _-ms-flexbox_ to indicate flexbox layout.

The purpose and scope of the flexbox is a bit bigger than the ViewBox. Here&rsquo;s what the W3C spec for the CSS Flexible Box Layout Module says &ldquo;In the flexbox layout model, the children of a flexbox can be laid out in any direction, and can &quot;flex&quot; their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated. Nesting of these boxes (horizontal inside vertical, or vertical inside horizontal) can be used to build layouts in two dimensions.&rdquo;

So, like the ViewBox, we still have the concept of the container&rsquo;s content changing in size to fit the container, but this has more to do with a collection of child items.

Additionally, the flexbox offers a lot of properties to specify how it&rsquo;s children are laid out. A quick glance in Blend at the CSS properties on a div in the Flexbox category will enumerate them for you&hellip;

[![](http://codefoster.blob.core.windows.net/site/image/8f697328bd994831abdd44bca0e2abbf/boxes_03_1.png "image")](http://{fix}/image.axd?picture=Windows-Live-Writer/When-to-Use-ViewBoxes-and-FlexBoxes/284B64C1/image.png)

Notice first the -ms vendor specific prefix as I mentioned.

To give a thorough description of the possibilities with these properties, I&rsquo;d be duplicating what&rsquo;s already done quite nicely on the [flexbox page on w3.org](http://www.w3.org/TR/css3-flexbox/), so just go there and read the nitty, gritty detail.

## Differences

The ViewBox is a WinJS control, whereas the flexbox is a CSS property.

The ViewBox always acts on a single child item, but the flexbox can act on multiple child items.

The ViewBox itself changes size to fit it&rsquo;s container as a core feature. The flexbox can be told to scale to 100% either in width or height, but it doesn&rsquo;t have to.

The ViewBox does not extend control over the alignment and scale modes of it&rsquo;s contents, but always does the same thing - scales the child item without changing it&rsquo;s proportion.

## All Together Now

Now that you know how different these controls are, consider them together. If you put a flexbox div inside of a ViewBox, you get a really effective layout tool. Try this for your HTML&hellip;

<pre class="brush: xml;">
&lt;body&gt;
    &lt;div data-win-control=&quot;WinJS.UI.ViewBox&quot;&gt;
        &lt;div class=&quot;flexy&quot;&gt;
            &lt;div class=&quot;item&quot;&gt;A&lt;/div&gt;
            &lt;div class=&quot;item&quot;&gt;B&lt;/div&gt;
            &lt;div class=&quot;item&quot;&gt;C&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;</pre>

With this as the CSS&hellip;

<pre class="brush: css;">
.flexy {
    -ms-flex-align: center;
    -ms-flex-direction: column;
    -ms-flex-pack: center;
    display: -ms-flexbox;
}

.item {
    height: 200px;
    width: 200px;
    border:solid 1px;
    font-size:9em;
}</pre>

What you have now is a flexbox that fills its area well. Look at these simulator screenshots so you can see what this would look like&hellip;

![](http://codefoster.blob.core.windows.net/site/image/95837177f01c4495ac5749febaa9d4a7/boxes_04_1.png)

[more images missing]

XAML is unarguably the most powerful layout engine I&rsquo;ve ever seen, but I really don&rsquo;t feel like there&rsquo;s too much in HTML/CSS that we&rsquo;re missing now with additions like this. It&rsquo;s rather empowering.

Happy layouts!