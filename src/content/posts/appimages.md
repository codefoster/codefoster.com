---
title: App Images
categories: [Windows]
tags: [icons,tiles,graphics]
date: 2014-08-04
---

There's an array of images that you need to create before you can call your app complete.

Images to represent your app are very important, because they're often the first thing a potential user sees and the first opportunity to convince them your app will add value to their day.


The best resource I know on the subject is [Choosing your app images](http://msdn.microsoft.com/en-us/library/windows/apps/Hh846296.aspx) on MSDN.

On that page, you'll find a table that enumerates all of the images you need to create including...

*   The **store logo** is displayed in the [details section of the app listing page](http://msdn.microsoft.com/en-us/library/windows/apps/hh694057.aspx#store_listing_details), it's base (100% scale) size is 50x50 and it's actually going to show over a 70x70 square so there will be a 10 pixel border around it. Your BackgroundColor (which you specify in the manifest) is used for the color of that border.
*   The **square 150x150 logo** is often the default tile on the start screen, though it is possible to designate a different size for your default tile.
*   The **square 30x30 logo** does not end up showing as a tile on the start screen. Instead, this image is used in various other places in Windows when many apps are displayed as very small icons. You can see it by swiping up from the start screen and showing all apps, and you can also see it when you Alt + Tab to switch apps.
*   The **wide 310x150 logo **is a start screen tile and is good for apps that need a little more room for live tile content. If your app has a wide tile then your users will have a chance to choose _wide_ from the start screen.
*   The **square 310x310 logo **is a mongo tile on the start screen. I use this when I have a very prominent app that has live content that I look at very often such as news or financial data.
*   The **square 70x70 logo **is the small tile on the start screen. I use this when I don't care about any live content coming down and only want a means of launching an app. I'm the guy whose start screen looks like graph paper :)
*   The **badge logo **is what people see next to the badge notification on their lock screen (if they've elected for your app to be on their lock screen).
*   Finally, the **splash screen **is the relatively large image that shows for a brief period while your app is being launched. You want to be careful to make this a good experience for the user. We don't mind waiting a little for an app to start up, but we like to know what our system is doing.

Remember that for all of these images, you should provide all of the various scales. That means that for the square 150x150 tile, you should actually create and specify (in your manifest) a 120x120 (80%), a 150x150 (100%), a 210x210 (140%), and a 270x270 (180%). If you skip this, you miss out on a huge opportunity to make your app look great on various screen resolutions. Basically, don't skip this :)

Additionally, you must have screenshots of your app in order to successfully submit it to the Store, and you _should_ have promotional images in case your app is found to be worthy of promotion.

By the way, the screenshots that you provide must be taken from your actual running app, but the _first_ one is different. For the first screenshot, you have a chance to create a marketing screen that really gives your app a visual punch and makes people want to download it. Again, if your app is chosen for promotion, this first screenshot is going to be used along with a 150x150 logo.