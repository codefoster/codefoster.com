---
title: Extensible Code
categories: [Other]
tags: [editor, add-ons, extensions, developer, code, extensibility, visual-studio, ide]
date: 2015-11-24
permalink: vscodeextensions
---

## Visual Studio Code has extensions!

The bells ring, the confetti flies, the fans go wild!
<!--more-->

The two things we all wanted from Code was...

1.  to [see it go open source](/vscodeopen)
2.  to get extensions.

If you were following the [user voice page for Code](https://visualstudio.uservoice.com/forums/293070-visual-studio-code) like I was, you'd have seen way more votes for extensions than for any other feature. The size of the vote count made it look like not having extensions was a total deal breaker and for many folks I talked to... it was.

Well, now it's here!

It's here in full force. Not only are extensions available, but there are already a whole lotta cool extensions available in the [online gallery](https://marketplace.visualstudio.com/#VSCode). There were about 60 a couple days before launch - a metric that jumped over 20 points by the time Sean McBreen was showing off ([here](https://channel9.msdn.com/events/Visual-Studio/Connect-event-2015/Visual-Studio-Code-Extensions) and [here](https://channel9.msdn.com/events/Visual-Studio/Connect-event-2015/032)) the announcement at the [Connect() conference](https://channel9.msdn.com/Events/Visual-Studio/Connect-event-2015). And there are obviously a lot more now just a few weeks later.

Getting extensions is like getting three wishes from a genie in a bottle and for your first wish requesting unlimited wishes. Code is a great tool, but with extensions, you can make it do most anything you want.

Some of the great things about Code extensions are...

- **they're easy to write.** To run and test an extensions, Code launches an instance of itself. It's a bit like Inception that way. Then you can just play with your extension as it currently is and be sure it's behaving as you designed.

- **they run in a different process.** When you start up Code, it's okay if you have 38,329,420 installed, because they're not loading synchronously in the same process as your main editor. Granted 38M+ extensions is going to bog something down and I think you'll have a hard time finding that many unique extensions in the  marketplace any time soon, but my point is that you don't have to worry about the performance impact of installing your favorite few.

- **they can be written in either raw JavaScript or in TypeScript**, and generating them is quick and easy using [Yeoman](http://yeoman.io) (which by the way is _awesome!_).

- **publishing them is just about the easiest thing in the whole world.** It's literally one command - nay, one _short_ command... `vcse publish`

## My Favorite Extensions So Far

I haven't found the time to install every extension (who has that kind of time?!), but here are three of my favorites so far...

### [MDTools](https://marketplace.visualstudio.com/items/seanmcbreen.MDTools)

Markdown (.md) files are really handy. If you're not familiar with markdown files, just think of them as a cross between text files and HTML files. Text files are nice because they are very readable. Markdown files are readable still but they give us the ability to easily bring in rich content like hyperlinks, images, and formatting. One of the great additions to markdown is the ability to indicate spans or blocks of code and even in some cases to specify the code language and get great formatting.

So it's no surprise that markdown files have become the standard for creating documentation and meta text for code repositories. Developers work with markdown a lot and it's exciting to have a bit of help.

The MDTools extension allows you to do a lot of those little things to a selected block of text. You can convert to upper case, lower case, or title case, you can HTML encode or decode, and you can even convert to ASCII art - an extremely fun use case! To activate these tools, install the extension, restart the editor, select some text, and then use the ALT + T keyboard shortcut.

<video autoplay="" controls="" src="/files/vscodeextensions_01.mp4"> </video>

There's a lot more the MDTools extension can do to, so check it out.

### [Quick Snippet](https://marketplace.visualstudio.com/items/mousetraps.quicksnippet)

Quick Snippet is a great idea for an extension by my colleague Sara Itani ([@mousetraps](http://twitter.com/mousetraps)). See my interview of Sara on [episode 048](/codechat/048) of my podcast [CodeChat](/codechat). It allows a developer to highlight a block of text they've written and quickly and easily create a snippet out of it. In my experience, it takes a little bit of discipline to create snippets today to save time tomorrow. This extension excites me because it removes some of the friction and makes snippet creation fast. Now I can save time on saving time!

![](/files/vscodeextensions_02.png)

### [Twitter](https://marketplace.visualstudio.com/items/austin.a-vscode-twitter)

This one's just cute and fun and shows off the power and versatility of extensions in Code. The Twitter extension let's you read and even write

![](/files/vscodeextensions_03.png)

![](/files/vscodeextensions_04.png)

## Create Your Own

Now here's the real winning tip. You don't have to just check every week to see if someone has created your new doodad yet. You can just build it yourself!

If you're wondering if it's hard, it's not. If I can make an extension, you can.

Watch this. I'm going to build the hello world extension from start to finish in just over a minute. Granted I sped it up a little and skimmed over the long running npm install bits, but still. You can see that it's an easy process. Note: this assumes you have Node.js and Visual Studio Code installed already.

<video autoplay="" controls="" src="/files/vscodeextensions_05.mp4"> </video>

If that went just a little bit too fast for you, you can get the complete tutorial by going to [code.visualstudio.com/docs/extensions/example-hello-world](https://code.visualstudio.com/docs/extensions/example-hello-world), and for a bunch more information about getting started creating Code extensions, go to [code.visualstudio.com/docs/extensions/overview](https://code.visualstudio.com/docs/extensions/overview).

My team has put together a bunch of different videos and blog posts to sum up the announcements from Connect(). You can see the rest of them by visiting [Jerry Nixon](http://twitter.com/jerrynixon)'s post [Inside the Code: What's New with Visual Studio](http://blog.jerrynixon.com/2015/12/inside-code-whats-new-with-visual-studio.html?CR_CC=200731423).