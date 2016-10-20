---
title: Visual Studio 11 Ninja Skills
categories: []
tags: []
date: 2012-04-03
permalink: vsninja
---

This post is taken from a local presentation I did on April 2, or rather my presentation was taken from this post. One or the other is true, and so is the other.
<!-- more -->

As developers, we all aspire to be proverbial ninjas and we all love our tooling. If you don't fit in those categories, then ask yourself whether you're a developer or just on your way to project management.

This post and presentation are going to be highly distilled [I'm a big whisky fan]. In the distillation process, a mixture containing alcohol is heated until the pure alcohol turns to gas, rises, and is captured. I consider technology distillation a huge part of my job, so let's boil out the pure essence and capture it. In fact, I'll use the word _essence_ or _essential_ quite a lot.

I'll walk you first through some essential Windows keyboard shortcuts that no power user in my opinion can live without. Then I'll take you on a highlighted walk through Visual Studio 11 (Beta) &ndash; again, just the essence. And finally, I'll do the same thing with ReSharper 7 (EAP) from JetBrains.

## Essential Windows Shortcuts

First, I'm going to share with you some essential Windows shortcuts. These are the ones that I think you must have in your pocket. Even if you're a Visual Studio rock star, if you don't have these Windows shortcuts, you're inhibited.

[WIN + SHIFT + LEFT/RIGHT] Move current window to an alternate monitor

[WIN + LEFT/RIGHT] Move current window to left/right half of the current screen

[WIN + 0-9] Launch the corresponding application from your task bar or switch to or flip through instances of the application

[WIN + SHIFT + 0-9] Launch a new instance of the corresponding application

[WIN + ALT + 0-9] Reveal the context menu and jump list for the corresponding application

[MIDDLE MOUSE (WHEEL) CLICK] Close a tab or launch a hyperlink in new tab. The tab close functionality becomes very handy and is supported in most tabbed applications.

[WIN + C] (Windows 8) Opens the Charms bar on the right allowing you to search, share, etc. There are many Windows 8 shortcuts for doing each of the functions in the Charms bar, but if you remember this one shortcut you can access most all of them.

See &ndash; essence &ndash; you don't need to be overwhelmed with shortcut keys. You only need a few and you should have some pretty good window management skills. You can launch Visual Studio or launch a second instance of Visual Studio or launch the jump list for your Windows Explorer application so you can choose your _development_ folder with all your projects. Okay, let's move on.

Practice the keyboard shortcuts in this post. Actually practice them. You're naturally blind to your own areas of poor keyboarding skills and productivity. Practice will reveal and improve them and save you time and real money.

##  

## First... what's new in Visual Studio 11 ([link](http://msdn.microsoft.com/en-us/library/bb386063(v=VS.110).aspx))

There's a lot of information about this already out on the web, so I'll just offer highlights and some consolidation via links. Here are the biggest and most relevant features IMHO:

*   [HTML, CSS, and JS editor improvements](http://msdn.microsoft.com/en-us/realdevelopment/VS11TrainingCourse_AspNetAndVisualStudio)
*   [Windows Metro Style Apps](http://msdn.microsoft.com/en-us/library/bb386063(v=VS.110).aspx#BKMK_Metro)
*   [Design in Execution/Interactive Mode in Blend](http://blogs.msdn.com/b/somasegar/archive/2011/09/13/expression-blend-for-html.aspx)
*   [Windows 8 Simulator and DOM Explorer](http://blogs.msdn.com/b/visualstudio/archive/2011/09/29/first-look-at-windows-simulator.aspx)
*   [Page Inspector](http://msdn.microsoft.com/en-us/hh553496)

Some of those links to go training courses on MSDN... not documentation... training courses. In my experience, it's easy to read documentation, but you take home a lot more of the information if you take the time to walk through a tutorial or a lab or a training course.

You can find more VS11 training courses [here](http://msdn.microsoft.com/en-us/hh440511).

## Visual Studio Navigation

<span style="color: rgb(0, 0, 0);">[CTRL + ALT + L] Open the Solution Explorer &ndash; face it, you need to get to that Solution Explorer rather often. Do it with a keystroke instead of a click.</span>

<span style="color: rgb(0, 0, 0);">[CTRL + ,] Navigate</span> To... &ndash; the grand daddy of all keyboard shortcuts in VS if I can be so bold. Looking for something in your solution? You'll likely find it here. Navigate to searches for all code symbols and file names and it uses a "contains" string search pattern and camel case. So CTRL + , and then "WL" will find you the WriteLine method you were looking for as well as the WLFoo.cs file.

[CTRL + ;] Search Solution Explorer &ndash; filters the files and symbols that appear in Solution explorer by your query. It should be called Filter Solution Explorer because it doesn't take you off to some search results. It just hides everything from SE that doesn't match your query.

[CTRL + Q] Quick Launch &ndash; if you're looking for a command that you know is somewhere in the vast see of commands in the Tools | Options dialog, try CTRL + Q. Try "line numbers" for example.

[CTRL + F] Find &ndash; this one grew up from the incremental search that jumped you directly to the next query result on your current page. Now it's all grown up and can do just about everything that the Find in Files dialog does. The only exception is that CTRL + F always just highlights and navigates you to your results, whereas (see next shortcut)...

[CTRL + SHIFT + F] Find in Files &ndash; ...as I was saying. Whereas Find in Files actually gives you your results in the Find Results pane.

[CTRL + SHIFT + UP/DOWN] Find more instances in file &ndash; another winner in my book. This is an easy one to type. Use it when your mind says, "I wonder where else on the page I used this variable." I like that it not only finds the other symbols for you, but it highlights them as well.

[F8 / SHIFT + F8] Find next search result, error, reference, etc. &ndash; it's slow to mouse down to the find results or to your build errors and double click on each one. Instead just hit F8 and blaze through them. Use F8 to back up when you miss your exit (don't try this on the interstate).

[CTRL + - / CTRL + SHIFT + -] Navigate back and forward &ndash; "Where was that code? I was just looking at it."

## Editing

[SHIFT + ALT + ENTER] Full screen &ndash; don't forget this one. Now you can set up all of the supporting windows you want in VS, and when you want them all to go away so you can concentrate on your code, BAM!

[SHIFT + ALT + ARROWS] Block editing &ndash; this one never fails to surprise a few near-ninjas. I think it's because they say, "Oh yeah, I know what block highlighting is, " and they miss the latest greatest part. Not only can you hold ALT and select a block of text (to delete it for instance), but try this. Try just putting your cursor at the beginning of a line, holding SHIFT and ALT, and then pressing the down arrow a few times. Your cursor extends down. Now type. You can type on all of the lines at once. This works in the middle of a block of code too. You can paste something into there from the clipboard too.

[CTRL + SHIFT + V] Paste from clipboard ring &ndash; copy something, copy something else, copy something else. In most of Windows, your first and second somethings are gone &ndash; replaced by the last thing you copied right? Not so in VS. Now hit CTRL + SHIFT + V three times and you'll see how this one works.

[CTRL + SHIFT + L] Delete current line &ndash; I have seen developers use all kinds of antics to delete an entire line. Most are quite a waste of precious seconds and some are downright silly. CTRL + SHIFT + L does it in a snap regardless of where on the line(s) your cursor happens to be. See the next shortcut for a follow on.

[SHIFT + DEL] Cut current line &ndash; this one is like the former except it's FAR easier to reach on the keyboard and it puts the deleted line(s) on the clipboard. I changed this shortcut to do the same as CTRL + SHIFT + L.

# ReSharper (aka R#)

## The Uber Essential

[CTRL + SHIFT + R] Refactor this &ndash; this one is used for all kinds of stuff. You can extract a method, inline variables, or convert a method to a property. Spend some time placing your cursor on methods, properties, classes, etc. and hit this shortcut to bring up a list of all of the possible ways to refactor it.

[ALT + ENTER] Quick Fix &ndash; when R# has highlighted something either with a squiggly underline or by some other means and you have placed your cursor on it, hitting ALT + ENTER brings up the quick fix menu which is the recommended way to resolve the issue. Choosing the recommendation obviously puts it into effect.

[ALT + ` ] Navigate To &ndash; this is R#'s version of Navigate To (unlike VS's CTRL + ,) This one navigates to symbols related to one one you're on. If you're on a class and hit this, you will have the option to navigate to its base type or derived types for instance. Most or all of the options in the list have a shortcut of their own, but if you can remember this one shortcut for navigating then you can get to any of them.

## The Merely Essential

[ALT + PGUP/PGDN] Go to previous / next highlight - when R# suggests things, it draws a colored marker in the small bar that is rendered just right of your scroll bar. Each of these is a highlight. You can configure what sorts of things appear here and what their severity is. This shortcut jumps from one to the next or previous. Using ALT + PGDN and ALT + ENTER is a really fast way to go through all of the issues in your page and correct or ignore them.

[CTRL + SHIFT + ENTER] Complete Statement (aka Smart Enter) &ndash; this one is useful when you know you're done with your line of code, but you haven't yet typed all of the smiles and mustaches or the closing semicolon. It enters all of these for you and returns to the next line.

[CTRL + R, R] Rename &ndash; this one is available under the CTRL + SHIFT + R menu as well. It's similar to Visual Studio's built in ability to smart rename, but it goes a bit further and it's really good at suggesting symbol names. It's even able to find references to the symbol you're renaming in code comments and ask you if you want them to be changes as well.

[ALT + INS] Insert code &ndash; depending on your context this shortcut inserts code for you. If you're in a class and you hit it for instance, one of the options will be to insert a constructor for that class. The dialog boxes that pop up are full of great options, but you can also blaze by them to elect for default functionality.

## Navigation

[CTRL + T, CTRL + SHIFT + T, SHIFT + ALT + T] Go to Type, File, Symbol &ndash; I mention it here because it has it's place, but I like VS's built in [CTRL + ,] better than these. It's hard to remember whether what I'm looking for is a filename or a symbol and hard to remember which shortcut to use. The pause to remember is too much for me and I usually go for the comma.

[SHIFT + ALT + L] Locate in Solution Explorer &ndash; this is a wonderful shortcut that accompanies [CTRL + ALT + L] which is the VS native shortcut to focus on your Solution Explorer. This one locates the current file in the Solution Explorer though. There is an option to always have the Solution Explorer track which file you're on, but this is disorienting to me and I'd rather just jump to it when I want it. I use this one all the time.

[ALT + DOWN/UP] Go to next/previous member &ndash; great for when you're just getting the lay of the land, this one allows you to jump one method at a time sort of like how the CTRL key jumps by one word at a time. It's faster than reaching for the scroll wheel in most cases.

[ALT + HOME / END] Go to Base / Derived Types &ndash; use this to traverse the inheritance tree in both directions. If you're headed down the tree and there are multiple derived types then a quick menu pops up and lets you pick which one you're interested in. This is very fast and helpful.

[SHIFT + ALT + F12] Go to Usage &ndash; this appears to duplicate the functionality of the VS native SHIFT + F12 command which finds references, but there are some strong differences. First, it's finding usages instead of references which plays great with TDD (Test Driven Development). This means that if I've used a type somewhere then it will appear even if I haven't defined that type yet. Another strong difference is that the results appear in a context menu instead of in the Find References pane of VS making it much faster to choose your target.

## Editing

[CTRL + ALT + LEFT/RIGHT] Extend/Shrink Selection &ndash; I'd love to buy a beer for the guy that made this one. Selecting text with the mouse is one of the slowest things I see developers do. Using the CTRL and SHIFT keys is much quicker, but even that will cause significant delays. Wherever the cursor is, if I "extend" the selection, it will modify the selection to the next logical level. Perhaps something like: the variable, the statements right side, the entire statement, the entire method body the statement is in, the entire method including declaration, etc. And of course "shrinking" does the converse. This in combination with some quick CTRL + X, CTRL + C, CTRL + V (tell me you know those ones!!) makes for some lightning fast editing.

[CTRL + SHIFT + ALT + UP/DOWN] Move code up/down &ndash; holding down the whole suite of modifier keys (CTRL, SHIFT , and ALT) might require a few fingers, but remember &ndash; the mouse takes your whole hand! Combine them with an up, down, left, or right, and you can move the selected code around on the screen in a very intelligent way. You'll have to try it to see what I mean.

That's all for now. There are a billion more, but this is just the essence. Practice and advance beyond your samurai skills to full on ninja!