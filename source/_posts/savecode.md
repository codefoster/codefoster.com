---
title: Saving Your Code Settings and Snippets
categories: [Productivity]
tags: [settings, snippets, vscode, code, gist, github]
date: 2016-06-30
permalink: savecode
---

I finally realized why I wasn&#39;t investing a lot of thought or time on my Visual Studio Code snippet library. It&#39;s transient.
<!-- xmore -->

I looked up where the user settings are being saved - `C:\users\<me>\AppData\Roaming\Code\User`.

Well, that&#39;s a bit of a crock. It&#39;s 2016\. I want everything saved to my OneDrive folder so I can do a reload without considering the various settings files I&#39;ll have to back up and restore. What, am I a caveman?

I searched VS Code and my registry and didn&#39;t see an obvious (I only have about 2.5 minutes to spend on tasks like this) way to customize the path, so I did what any developer in this modern era would do. I posted [a question](http://stackoverflow.com/questions/38113230/how-to-save-vs-code-settings-and-snippets-files-in-another-location/38113640#38113640) on StackOverflow.

And in true SO form, I got an answer back very quickly. Well, it wasn&#39;t exactly an answer, but close. [DAXaholic](http://stackoverflow.com/users/1830293/daxaholic) responded that there is an extension for VS Code that may fit the bill.

It&#39;s called _[Visual Studio Code Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)_ by [Shan Khan](https://marketplace.visualstudio.com/search?term=publisher%3A%22Shan%20Khan%22&amp;target=VSCode). You can install it in Visual Studio Code by going to your command palette (`CTRL+P`) and typing `ext install code-settings-sync`.

Now, I had to spend a few synapses on this strategy for saving settings. The way Shan set this up it saves your settings, snippets, launch, and keybindings to your GitHub account as gists. Creative, Shan.<span style="line-height: 20.8px;"> It&#39;s not exactly the same as having my settings and snippets saved to my OneDrive, but I kinda like it. I do have to manually upload everything, and by manual I only mean that I have to execute the `Sync: Update/Upload Settings` command in Code. And then when I reload or slide over to a new work machine I have to `Sync: Download Settings`.</span>

<span style="line-height: 20.8px;">I sort of like, however, storing bits of code in my GitHub Gists repository.</span>

<span style="line-height: 20.8px;">One advantage is that I could easily share my settings with the world. By default, the extension creates the gist as secret. I don&#39;t like secrets though, so I can just edit that gist on gist.github.com and hit the Make Public button.</span>

![](/files/savecode_01.png)

<span style="line-height: 20.8px;">And now I can share [the link](https://gist.github.com/codefoster/0a4de2f26b9fdd1b393c424029d5f512)</span> with you<span style="line-height: 20.8px;">. Very cool. And that&#39;s a live link too so that every time I add an awesome new snippet, you can see it. Now, I just have to remember not to put any secret keys in my settings or snippets :)</span>

<span style="line-height: 20.8px;">Anyway. I thought this was very cool. Kudos to Shan Khan on the cool extension.</span>

<span style="line-height: 20.8px;">Happy coding.</span>