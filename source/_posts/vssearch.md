---
title: So Many Ways to Search in Visual Studio 11
categories: []
tags: []
date: 2012-03-29
permalink: vssearch
---

There's more than one way to skin a cat and more than one way to do a search in Visual Studio. There are 5 (that I know of, comment if you know of another) to be precise.
<!-- xmore -->

## Navigate To (CTRL + ,)

Search for a file, object, object member, etc. anywhere in your project. For instance, if you know that you have something in your app called Widget, but it's just too much to think about where exactly you put it, then just hit CTRL + , and type "widget" and you'll get results for the class itself along with any other members with the word widget and any object members.

## Search in Solution (CTRL + ;)

This one is new to VS11 (actually, you may have used it with the Productivity Power Tools in VS2010) and allows you to filter your Solution Explorer to show only files that match your query. It's especially helpful in my opinion for filtering out anything except for a certain file type. Querying for ".js" for instance will get rid of anything except for JavaScript files.

## Quick Launch (CTRL + Q)

This one was in previous releases of Visual Studio, but it wasn't as prominent and was often overlooked. I use Quick Launch to quickly find that option that's buried somewhere in Tools | Options but I know it's going to take me about 4 minutes and 25 seconds to find exactly where. Take line numbers for instance. Now why line numbers are not turned on my default is absolutely beyond me, but turning them in used to be an arduous process on a normal day and all but impossible at the end of the day, or on Monday, or before coffee, or with a slight headache. Now you just hit CTRL + Q and type "line numbers" and you're in good shape.

## Find (CTRL + F)

Also introduced with Productivity Power Tools and then brought native into VS11, Find is best used for finding text in the current file (although it will search multiple files as well). It's a quick way to search and has the added benefit of highlighting all results for you.

## Find in Files (CTRL + SHIFT + F)

Although able to search only in the context of the current document, this command is most often used for finding files across the solution or project. I like to dock this dialog in the lower right pane with Properties so that I always know where it's going to be and I can keep it up across multiple searches.