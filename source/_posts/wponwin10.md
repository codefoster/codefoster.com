---
title: Windows Phone Emulator on Windows 10 TP Build 9926
categories: [Other]
tags: [windows-phone,visual-studio,ide]
date: 2015-02-04
---

After upgrading to Windows 10 Technical Preview Build 9926, I found myself unable to run the Windows Phone Emulator either from the Developer Power Tools or by executing a phone app from Visual Studio 2013.
I found a forum post online that showed how to resolve it. Here it is.

Open the Hyper-V Manager

![](/files/wponwin10_01.png)

Now click on Virtual Switch Manager on the right under Actions...

![](/files/wponwin10_02.png)

And then choose the Windows Phone Emulator Internal Switch from the list of switches and hit Remove. Don&#39;t worry, a new one will be automatically created for you the next time you try to connect to the emulator in Visual Studio.

![](/files/wponwin10_03.png)

Now launch Visual Studio as an administrator...

![](/files/wponwin10_04.png)

And try again to execute a Windows Phone project. The emulator took quite a while for me to open up, but it eventually did and worked great.
Hope this helps someone.