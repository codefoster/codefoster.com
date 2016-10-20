---
title: Moving Desktop and Downloads to OneDrive
categories: [Productivity]
tags: [onedrive, productivity, windows, tip, life-hacks, downloads, desktop, cloud, cloud-storage]
date: 2015-09-23
permalink: desktoptoonedrive
---

The fierce competition between online storage providers has led to where we are today. Today a consumer can store their entire life in the cloud. Okay, "their entire life" might be an exaggeration, but you know what I mean.
<!--more-->

Do you have multiple terabytes of family photos, videos, and email archives? Yeah, me too. How would you feel if you lost them? Pretty rotten. Me too.

Maybe you already know the concepts behind basic system backups, but I'll share some things here for context.

You can protect against a hard drive crash by backing up your valuables to a separate drive. That will dramatically reduce your chance of failure from a faulty drive, a lost laptop, an accidental format, or someone hacking into your system and deleting everything. It won't, however, protect you from a fire, natural disaster, or perhaps a burglary. In that case, you need an offsite backup.

An offsite backup can be a little hard drive that you drop everything on and hand to a friend. And not that sketchy friend... someone you trust.

Unless your friend lives in another state, however, even this measure isn't going to protect you from what I like to call the meteorite scenario. The meteorite in my scenario could be replaced by an earthquake, tornado, flood, or whatever else mom nature likes to bring your way wherever you live. Not that nature likes to bring meteorites my way here in Seattle. In fact, I've never seen a meteorite enter the atmosphere over the Emerald City, but I digress. To protect against the meteorite scenario, you need cloud backup.

Cloud backup is a bit more than just a fancy offsite backup. When you get your files to the cloud, you're counting on a professional and commoditized backup strategy. You're counting on the fact that your cloud provider assumes an extremely high potential value on the documents in question and creates multiple backup copies themselves to assure they don't end up with a huge number of extremely dissatisfied customers.

It's not without risk. It's entire possible that any of the major cloud providers could completely goof up and lose your files. It's a remote possibility, but the risk is there.

So in my opinion, the ultimate setup is as follows.

You keep all of your documents in your cloud storage provider of choice. I like OneDrive.

You sync _some_ of your documents on each of your devices, but you sync _all_ of your documents on one device with a hard drive that can handle it. You be sure that one master device - perhaps a desktop PC at home in your closet - is always on and thus syncing changes down from the cloud as you modify things from your various devices.

With that configuration, you have all of your documents locally and in the cloud. It's all live too and doesn't require an intermittent backup strategy.

Now more to the point.

If you're running Windows, you have the concept of the _system folders_. These are the folders like Documents, Pictures, Videos, Desktop, and Downloads. They're special folders in that they are not just a file container, but they're also a concept. You want to store files in your Documents folder, but you may want to configure what that folder is called or where it is, and you want applications to not have to worry about where it is.

It's similar to what happened to the paradigm of printers. A long time ago in this very galaxy, applications used to be responsible for printing. If you were an application developer, you had to create printer drivers. Now you just sort of toss your document over the wall to the operating system and say "I want to print to that one" and the _common_ printer drivers are invoked.

It's like that with the Documents system folder. An application might default to saving in your Documents folder regardless of where you the user have deemed that folder to live.

Perhaps you know already how to configure your Documents folder location. If not, here's how...

![](/files/desktoptoonedrive_01.png)

So you just right click on the Documents folder in Windows Explorer (here I'm finding it in my Quick Access list on the left) and choose Properties.

Then you go to the Location tab and change the path. To move your documents to the cloud you simply configure a path that is somewhere in your OneDrive folder (by default in c:\users\{user}\OneDrive).

![](/files/desktoptoonedrive_02.png)

The result of this change is that now when most any application on your computer saves a document - say a letter to grandma, your tax returns, or whatever - it puts it in the Documents folder (the concept) which you have configured to be in your OneDrive. So that tax return is going to be synced to the cloud and all of your other devices.

Now even more to the point.

Many people don't know that you can do the same thing with your _all_ of your system folders including your Desktop and your Downloads folders.

It goes like this.

You may not yet have a folder in your OneDrive for Desktop and Downloads, so create them. Don't put them inside your Documents folder. Just put them right on the root of your OneDrive file store. I did this on onedrive.com in my browser. Whenever I want to explicitly do something to my OneDrive files _on the server_ I do it in the browser and essentially bypass the sync tool built into Windows.

Now, just like you did for your Documents folder, you go to Properties and then the Location tab and you change the path to your newly created folders in OneDrive. Mine are...

*   c:\Users\jeremy\OneDrive\Desktop
*   c:\Users\jeremy\OneDrive\Downloads

![](/files/desktoptoonedrive_03.png)

And that will do it.

Now when you download a file from internet using Microsoft Edge and it defaults to the Downloads folder and then you have to reload your machine, you don't have to think about what's in your Downloads folder and whether you want to back it up. It's already done. And if you're the type to save the really important tasks that you want to be front-of-mind to your desktop it's the same thing. By the way, you know that guy at work with a thousand icons on his desktop? Don't be that guy. :)

<span style="line-height: 1.6em;">The whole goal here is to cloud enable our devices - making them as stateless as possible. You know you're cloud enabled when a complete OS reload takes 30 minutes and you're done.</span>

There you go. Happy downloading.