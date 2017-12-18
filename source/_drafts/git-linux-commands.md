---
title: You Already Have That Linux Command in Windows
categories: [Linux]
tags: [linux,git,ssh,scp]
date: 2017-12-06 19:33:55
---

I do a lot of work with Windows as well as with Linux, and I have a little trick that I've shared 100 times and finally decided to drop into a blog post for posterity.

So often, I'm working with groups of Windows developers trying to access Linux VM's in Azure or Raspberry Pi's running Raspbian and I ask them to `ssh` into the server.

>Note: `ssh` is not just a tool, it's a verb, and I concur with [@shanselman](http://twitter.com/shanselman) who has declared that it's correct pronunciation is much like the sound made by a downhill skier - a sort of "shoosh". Now you know, so pass it on.

Unfortunately, many of those Windows developers commence to open PuTTY - a graphical tool for doing serial or terminal communication. If you're opening a graphical tool for doing CLI work, there's an inbalance in the force. You should be far more intimate with your systems terminal or command line tool and that tool should allow you to ssh.

So how do you ssh from Windows? There are a number of ways, but if you have Git for Windows installed, you probably already can if you just do one simple thing.

Git for Windows installs by default into `C:\Program Files\Git`. If you look in that folder, you'll find `\usr\bin`. And if you look in there, you'll find a whole ton of Linux commands, and one of those commands is `ssh`.

If I remember correctly, these commands are actually the Cygwin Win32 ports of most of Linux's commands. 

So to start using all of those commands, all you have to do is add `C:\Program Files\Git\usr\bin` to your system path.

**Method 1: edit the system environment variables**

Go to Start and type "environment" and then choose to "Edit the system environment variables". Then hit the Environment Variables button, find the Path variable in either your User or System Variables, and edit it to include `C:\Program Files\Git\usr\bin`. Now restart any terminals and type `ssh` to test.

**Method 2: add the path in your PowerShell profile**

The method I actually use to get these commands into my path is a bit different. I add a command to my PowerShell profile. The advantage is that my profile is already sync'ed to my OneDrive account so it persists across reinstalls of Windows. So I don't have to remember to edit my path after I reload my computer.

To do this, go to your terminal of choice and use your editor of choice to edit your `$profile`. I would type `code $profile` to use Visual Studio Code to edit it.

Then add this line somewhere in there...

``` powershell
$env:Path += ";C:\Program Files\Git\usr\bin"
```

Again, test this by restarting your terminal and simply calling `ssh`.