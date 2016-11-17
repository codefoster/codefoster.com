---
title: Snippets Overview in VS11 and ReSharper
categories: []
tags: []
date: 2012-04-04
permalink: snippets
---

Following is an overview of getting started with Snippets. This will be the overview from 30,000 feet. If you want to get into the nitty gritty how-to then follow my links. As with all of my posts these days, this one will reference VS11 which is still in beta. Most of the concepts are the same for VS2010.
<!-- xmore -->

I would like to convince you that climbing the snippet learning curve is worth it because the view from the top is spectacular. In order to be convinced, you&#39;re going to have to believe that you&#39;ll save time. Here&#39;s a brief comparison to help you believe...

``` html
<table border="0" cellpadding="2" cellspacing="0" style="width: 561px;">
	<colgroup>
		<col style="width: 300px;" />
		<col style="width: 100px;" />
		<col style="width: 100px;" />
	</colgroup>
	<thead>
		<tr style="font-weight: bold;">
			<td valign="bottom">Operation</td>
			<td valign="bottom">Keystrokes (Typing)</td>
			<td valign="bottom">Keystrokes (Template)</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td valign="top">Create a new hyperlink (HTML)</td>
			<td valign="top">15</td>
			<td valign="top">6</td>
		</tr>
		<tr>
			<td valign="top">Create a simple one cell table (HTML)</td>
			<td valign="top">40</td>
			<td valign="top">5</td>
		</tr>
		<tr>
			<td valign="top">Empty using statement (C#)</td>
			<td valign="top">13</td>
			<td valign="top">2</td>
		</tr>
		<tr>
			<td valign="top">Try catch block</td>
			<td valign="top">30</td>
			<td valign="top">4</td>
		</tr>
	</tbody>
</table>
```

I&#39;m not exactly sure why Snippets in Visual Studio are so daunting for so many, but they are. I personally put off using them for a long time because creating and using them wasn&#39;t just a "bam bam done" deal.

First, there&#39;s the fact that the snippets are XML files, so you have to figure out the schema and what elements are expected. Then there&#39;s the idea that Snippets are particular to languages. Then they need to be saved into a certain folder (C:\Users\<username>\Documents\Visual Studio 11\Code Snippets\Visual C#\My Code Snippets).

But once I took a few minutes to dig in and see how they work, I realized that they&#39;re not difficult, and although the learning curve is steep, it&#39;s also short and I think the power and configurability of Snippets necessitates it.

Let&#39;s start off with some facts:

*   Snippets are a way of saving typing and thus time (they also encourage more consistent code)
*   Visual Studio offers <span style="text-decoration: underline;">Snippets</span>
*   ReSharper offers <span style="text-decoration: underline;">Live Templates</span> which use a completely different technology to solve the same exact problem
*   If ReSharper is installed and configured for IntelliSense then you can use <span style="text-decoration: underline;">both</span> VS Snippets and R# Live Templates... this is my recommended configuration *
*   Snippet Designer is a free plug-in for Visual Studio that helps you write Snippets
*   Snippet Designer does not yet work in VS11 Beta

* in HTML/XML files, VS automatically creates closing tags for opening tags that you type. You can turn this off by going to Tools | Options | Text Editor | HTML | Formatting | Auto insert close tag.

## Visual Studio &ndash; Snippets

Snippet functionality in VS is robust for certain. If it lacks anything, it&#39;s ease of use and even that&#39;s subjective. The process is to create a code snippet file &ndash; that is an XML file with a .snippet extension, drop it in the My Code Snippets folder, and then go to town with it. I obviously skipped over some details though, so just look at the _Walkthro__ugh &ndash; Creating a Code Snippet _link below for more.

## Snippet Designer

I would say that if you want to or have to (because maybe your employer is cheap and doesn&#39;t want to spring for R# licenses) stick with native snippets, you should at least go get the Snippet Designer. It&#39;s free, so if your employer doesn&#39;t have a group policy against installing free tools, then go get it from the link below, and if they do then consider a new employer or send them my way and I&#39;ll give them some financial justification with my 100 level economics that they won&#39;t be able to argue against.

[Snippet Designer](http://snippetdesigner.codeplex.com/) is a free plug-in for Visual Studio that makes it easier to create and modify your code snippets. One of the best features is the ability to just highlight a block of code you&#39;ve already written by conventional means, right click it, and choose to turn it into a snippet.

You can create or edit a snippet in Snippet Designer by either opening a .snippet file or by choosing New File in Visual Studio. It uses a custom editor in VS so you can stay in the same environment. Behind the scenes, Snippet Designer is just editing the snippet XML.

The bummer is that Snippet Designer doesn&#39;t work in VS11 yet. Sheesh, you&#39;d think we&#39;re still in beta or something!

## ReSharper &ndash; Live Templates

R# extends and enhances the Snippets in VS. If you allow R# to handle your IntelliSense (recommended), then you get the best of bot world &ndash; VS snippets and R# templates.

The two biggest advantages to R# templates over VS snippets are:

*   the "macros" you can attach to place holders in templates and
*   the ease with which you can save your templates in the solution (for you only), in the solution (for everyone that uses the solution), or on your computer (to be used across multiple solutions)

For in-depth help with templates see [ReSharper Templates](http://www.jetbrains.com/resharper/webhelp/Templates__Index.html) in ReSharper&#39;s online documentation.

##  

## Resources

[Walkthrough- Creating a Code Snippet](http://msdn.microsoft.com/en-us/library/ms165394(v=vs.110).aspx "Walkthrough- Creating a Code Snippet")

[Visual C# Code Snippets](http://msdn.microsoft.com/en-us/library/z41h7fat(v=vs.110).aspx)

[Best Practices for Using Code Snippets](http://msdn.microsoft.com/en-us/library/dh6380ay(v=vs.110).aspx)

[Code Snippets Schema Reference](http://msdn.microsoft.com/en-us/library/ms171418(v=vs.110).aspx)

[Snippet Designer](http://snippetdesigner.codeplex.com/)

[ReSharper Templates](http://www.jetbrains.com/resharper/webhelp/Templates__Index.html)