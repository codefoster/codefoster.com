---
title: The Place for Styles in HTML and XAML
categories: []
tags: []
date: 2001-01-01
permalink: placeforstyles
---

I got a question from the community.

_When working on a Windows app, how do you get a complete list of the style properties that apply to any given HTML element?_
<!-- xmore -->

The short answer is _you don&#39;t_. And that&#39;s not a Windows thing, it&#39;s an HTML/CSS thing.

With a language like XAML/C#, you have properties that apply to certain elements because of the way everything works behind the scenes. It&#39;s all strong typed and inherited, so when you start typing the name of a property, Visual Studio is able to look into the typing system and see which properties apply and suggest them via Intellisense.  But with HTML/CSS, the CSS properties don&#39;t belong to certain elements. Instead _any_ property can be applied to _any_ element and it&#39;s up to the browser (hopefully adhering to the standards) to implement what happens. Some are obviously ignored. It doesn&#39;t make any sense, for instance, to set the _font_ of an _image_, so the image element will simply ignore it. This is not really a big problem in my experience. You come to realize which properties have which effect on which element at the same time that you learn what the properties are and what they do. And they&#39;re mostly intuitive. But we can thank the openness and democratic nature of HTML/CSS for the matter.

The best way to get a complete list of CSS in my opinion is to bookmark [aka.ms/iedevcenter](http://aka.ms/iedevcenter) and then visit that and click on _CSS_ under the _Develop_ section.

And the second part of the question was...

_Why is it never a good idea to inline style properties when using HTML/CSS. After all, in XAML, we often write the properties right there in the declaration of each element._

The fact is that in both HTML and XAML, you can choose to add your styles inline (that is, within the element in the HTML page), or at the page level (in a <style> tag in HTML or in a page resource in XAML), or elsewhere (in a separate style sheet). And in both languages, it&#39;s advisable to define your properties _as abstractly as possible._ Some people say "never use inline styles" (in fact, I wouldn&#39;t be surprised if you&#39;ve heard me say that), but actually, inline styling may have it&#39;s place. It&#39;s just too easy to create bad architecture once you start inlining things, so you should start on the other side... with styles elsewhere. Then if there&#39;s a style that _truly_ only applies to a single page, it should be defined on that page. Then if there&#39;s a style that _truly_ needs to overwrite what the page has determined for it, then you can define it inline.

Hope that helps.