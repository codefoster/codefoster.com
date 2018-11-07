---
title: You Already Have That Linux Command in Windows 
categories: [Linux]
tags: [linux,scp,ssh]
date: 2018-04-13
---

I do a lot of work with Windows and Linux, and I have a little trick that I’ve shared 100 times IRL and finally decided to drop into a blog post for posterity.

So often, I’m working with groups of Windows developers trying to access Linux VM’s in Azure or Raspberry Pi’s running Raspbian and I ask them to `ssh` into the server.

>Note: ssh is not just a tool, it’s a verb, and I concur with @shanselman who has declared that it’s correct pronunciation is much like the sound made by a downhill skier - a sort of “shoosh”. Now you know, so pass it on.

Unfortunately, many of those Windows developers commence to open PuTTY - a graphical tool for doing serial or terminal communication. If you’re opening a graphical tool for doing CLI work, there’s an inbalance in the force. Something is terribly wrong. You should be far more intimate with your system’s terminal or command line tool and that tool should allow you to ssh.

So how do you ssh from Windows? There are a number of ways, but if you have Git for Windows installed, you probably already can if you just do one simple thing.

Git for Windows installs by default into `C:\Program Files\Git`. If you look in that folder, you’ll find `\usr\bin`. And if you look in there, you’ll find a whole ton of Linux commands, and one of those commands is `ssh`.

If I remember correctly, these commands are actually the Cygwin Win32 ports of most of Linux’s commands. 

So to start using all of those commands, all you have to do is add `C:\Program Files\Git\usr\bin` to your system path.

### Method 1: edit the system environment variables

Go to Start and type “environment” and then choose to “Edit the system environment variables”. Then hit the Environment Variables button, find the Path variable in either your User or System Variables, and edit it to include `C:\Program Files\Git\usr\bin`. Now restart any terminals and type `ssh` to test.

### Method 2: add the path in your profile

The method I actually use to get these commands into my path is a bit different. I add a command to my PowerShell profile (`C:\Users\jerfost\OneDrive\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`), but if you use bash you could do the same thing in your `.bashrc` or `.profile`.

The advantage to doing this in my profile instead of using Windows’ UI for editing my path is that I can keep my profile saved in cloud storage so it persists across reinstalls of Windows. So I don’t have to remember to edit my path after I reload my computer.

To do this in PowerShell, go to your command line and use your editor of choice to edit your `$profile`. I would type `code $profile` to use Visual Studio Code to edit it.

Then add this line somewhere in there…

``` powershell
$env:Path += ";C:\Program Files\Git\usr\bin"
```

Again, test this by restarting your terminal and simply calling `ssh`. Now try `scp` and `touch` and `ls`. Yay! But `ls` already worked for you you say? That’s because PowerShell has a bunch of built in aliases, and `ls` is an alias for `dir`. So the functionality is similar, but not exactly the same.

There are a bunch of these aliases, in fact. You can see the full list [here](http://ilovepowershell.com/2011/11/03/list-of-top-powershell-alias/). I recommend adding the following lines to your PowerShell profile to remove these aliases and unlock the real (well, *almost* real) Linux commands…

``` powershell
If(Test-Path alias:curl) { Remove-Item -Path alias:curl } #remove alias that shadows use of real curl
If(Test-Path alias:rm) { Remove-Item -Path alias:rm } #remove alias that shadows use of real rm
```

Enjoy!