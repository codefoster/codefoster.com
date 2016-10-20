---
title: PowerShell Profile That Enables Posh Git and Azure
categories: []
tags: []
date: 2015-01-25
permalink: psprofile
---

I know how it goes. You run into an inconvenience such as having to load an extra window, type an extra line, or whatever and you face a quick decision - should I get off the track I'm on and spend some time fixing this workflow or should I just make it work for now and get back to what I'm paid for? It's not an easy call.
<!-- more -->

I've heard it said, if you do something more than once, script it. That rule doesn't normally equate to gains for me. If I can spend 2 minutes twice, that's a win over spending 30 minutes perfecting a script. If I have to do it a few times though, then it certainly starts to pay off. The big wins come when you find someone else that already did it and just plug it in. Win!

## Creating Your PowerShell Profile in OneDrive

Perhaps you've done this already, but I won't assume that. The PowerShell profile is simple a .ps1 file that is executed whenever PowerShell is launched. It's your chance to write some PowerShell script that you want to preclude every session.

Unfortunately, the location of the profile is hard coded. Type `$profile` at your PowerShell prompt and hit enter to see its location. Yours is likely at `C:\Users\{USERNAME}\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`. That can't be changed. Well, actually it can. There's a trick. It's called hard linking.

Hard linked files are essentially a low-level file alias in the Windows operating system. If you set up a hard link from c:\a.txt to c:\b.txt, then when any application requests c:\a.txt, it will get c:\b.txt. You can create a hard link then that points from where PowerShell is _expecting_ you to have your profile, to wherever you want to put it. I put mine in a nice, organized folder in my OneDrive. This way, when I need to reload my system, I don't have to remember to backup my PowerShell profile and restore it again after the reload. I just have to recreate the hard link. That's good because I reload my system a lot. I consider my entire system volatile. Everything I do is either a client application that I can easily reinstall or it's in the cloud. Special thanks to unlimited storage with an O365 subscription!

Here's how to create a hard link from the default location to your OneDrive...

```
fsutil hardlink create $profile "c:\users\{USERNAME}\onedrive\documents\Microsoft.PowerShell_profile.ps1"
```

You can use whatever path and filename you want for that last argument.

By the way, I use the same technique for my .gitconfig file, since it too is expected to be in a certain location. The code for that is...

```
fsutil hardlink create "C:\Users\{USERNAME}\.gitconfig" "C:\Users\jerfost\OneDrive\Documents\gitconfig"
```

## Adding Azure command capabilities

Once you have your profile set up and persisted, you want to sprinkle in some code to make a few things automatic. I'm just going to share the things that I do and hope it helps.

I installed the Azure PowerShell module. You can do the same by following the [instructions in the Azure documentation](http://azure.microsoft.com/en-us/documentation/articles/install-configure-powershell/).

Once you've done that, you get a launch shortcut to launch PowerShell with Azure support. That's great and all, but I already have a shortcut to PowerShell. I don't want a new one.

I actually put my PowerShell shortcut right on my taskbar. It's in the third slot - browser, email, and then PowerShell. That means I can press WIN + 3 and launch or switch to PowerShell. I can also press WIN + SHIFT + 3 and launch a new instance. I can also press WIN + ALT + 3 and open the jump list for it. All sweet. I just need to get my Azure commands available in there. I do that by putting a single line in my profile.

Now I'll tell you how I did this. I went looking into the Azure shortcut that the install of the Azure PowerShell module gave me and looked for the magic line that lit up support for all of the Azure commands.

And here it is...

```
Import-Module "C:\Program Files (x86)\Microsoft SDKs\Azure\PowerShell\ServiceManagement\Azure\Services\ShortcutStartup.ps1"
```

I actually add a bit more so that when my profile is loading I can see what it's working on...

```
#azure functionality
"Loading Azure functionality..."
Import-Module "C:\Program Files (x86)\Microsoft SDKs\Azure\PowerShell\ServiceManagement\Azure\Services\ShortcutStartup.ps1"
```

That's a comment, a little echo to tell me in my console what it's working on next, and then the actual module import.

## Adding Posh Git integration

Next, let's add Posh Git. It's a little more involved.

The first thing to do is [install GitHub for Windows](http://windows.github.com). I don't really use GitHub for Windows that often, but it's the easiest way to install Git, PoshGit, and some other utilities all at once.

Again, after installation, you'll have a Windows shortcut called Git Shell that opens PowerShell with Git integration (including Posh Git which gives nice color coding for repositories, tab completion, etc.). Nice. Except, again, I don't want a separate PowerShell window for when I want to look at repositories. And again, the solution is to put it in my profile.

First, since I'm _code_foster and am usually working on code, I default to my repositories directory (c:\repos)...

```
#start in my dev directory
"Changing directory..."
cd c:\repos
```

Second, I light up the Posh Git features...

```
#install GitHub for Windows and then these will light up Posh Git
"Loading PoshGit..."
. (Resolve-Path "$env:LOCALAPPDATA\GitHub\shell.ps1")
. $env:github_posh_git\profile.example.ps1
```

And finally, I like to customize the colors a bit so they're easier to see and I do that using...

```
#set the Git POSH colors to something easy to see against a blue background
$global:GitPromptSettings.WorkingForegroundColor = [ConsoleColor]::Red 
$global:GitPromptSettings.UntrackedForegroundColor = [ConsoleColor]::Red
```

And again you see my comment and the echo that lets me know at the console what's going on.

## Some More Helpful Functions

There are three more functions in my profile that I want to share with you just to give you a taste of the kinds of things you might want to do here. Here they are...

```
Function get ($uri){
  (Invoke-WebRequest -Uri $uri).Content;
}

Function post ($uri, $body){
  (Invoke-WebRequest -Uri $uri -Body $body -Method Post -ContentType "application/json").Content;
}

Function mcd ($name){
  md $name
  cd $name
}
```

The first two are shortcut ways to do simple web get and post requests. They allow me to do something like `get codefoster.com` and get back the actual HTML from my website. Or I can request something from a webservice and then pipe the resulting JSON to a file. Fun.

The third is something I do a lot - create a directory and then change into it. This allows me to simply type `mcd newdirectoryname` and do it all in one step.

Let me know in the comments if this has been helpful and how you customized your profile in a cool way.