---
title: Implementing the Settings Contract
categories: []
tags: []
date: 2001-01-01
permalink: settings
---

I presented at a developer camp in Redmond recently on the subject of implementing Windows 8 contracts. You can find the [video on Channel 9](http://channel9.msdn.com/Events/Windows-Camp/Windows-8-Developer-Camp-Redmond/WIN8-CAMP-05). Unfortunately, I didn't have enough time to cover the implementation of the Settings contract, so I want to cover that now in the attached screencast.

The Settings contract is an important one, since almost every app known to mankind has some user preferences or options to store. In previous Windows development, the convention was to put options like this into the Tools | Options menu item, but there are plenty of examples of apps that chose to find another place for it.

In Windows 8, the sanctioned place to put your user's settings is in the Settings pane. This is the pane the user gets when he does one of the following...

*   swipes from the right to access the Charms and then chooses the Settings charm
*   presses Win + I

The Settings place should hold things like...

*   account management (login/logout)
*   preferences
*   app version information
*   help
*   and so on

The pane is divided into settings that you (the developer) have control over and those that you do not. Everything below the horizontal line is system level and unavailable for change. Above the line, the Permissions entry is owned by Windows, but you are responsible for any more. Your settings entries might be: _Settings_, _Help_, _About_, _Permissions_, or they might be _Account Control_, _Sound Settings_, _Video Settings_, _Permissions_.

<s>I hope the included screencast helps you ramp up quickly on how to do this in HTML/JS. If you have any questions, leave a comment. Thanks.</s> [screencast removed]