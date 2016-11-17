---
title: Getting Windows Device Info
categories: []
tags: []
date: 2001-01-01
permalink: deviceinfo
---

I have plenty of experience in the C# space with accessing Windows API, but I&#39;m still finding it rather novel and delightful to do the same thing in JavaScript. The fact that I can do something like...
<!-- xmore -->

``` js
Windows.Devices.Enumeration.DeviceInformation
```

...is just slick. That&#39;s all. There&#39;s no interop&#39;ing, no dll loading, no service calls. WinRT just delivers it to my front door and doesn&#39;t even make me sign.

Recently, I went looking for how to enumerate the devices currently recognized by the system and found it to be quite nice and thought I&#39;d share.

I started by creating a ListView and an item template in the HTML and imperatively binding that to a WinJS.Binding.List in my JavaScript file. In the interest of being DRY, I won&#39;t walk through that process, but you can see the concept [here](netflixstage1).

With a ListView and a WinJS.Binding.List in place and with the two hooked together, we&#39;re ready to just fetch our device information and push it into the List. I&#39;ll just lay out all the JS code at once and then explain. Perhaps it will be self-explanatory.

``` js
Windows.Devices.Enumeration.DeviceInformation.findAllAsync().done(function (devices) {
    devices
        .filter(function (d) { return d.name.length > 0 &amp;&amp; d.isEnabled; })
        .distinct(function (d) { return d.name; })
        .forEach(function (d) {
            d.getGlyphThumbnailAsync().then(function(thumbnail) {
                if (thumbnail &amp;&amp; thumbnail.size > 0) {
                    devicesList.push({
                        imageUrl: URL.createObjectURL(thumbnail, { oneTimeOnly: false }),
                        name: d.name
                    });
                }
            });
        });
});
```

If you follow me much, you likely know that my code tends to be rather dense. I like using the horizontal space that God (and Visual Studio) gave me instead of wearing out my enter key and your scroll wheel. So there are a few things going on in this relatively short snippet.

First, I&#39;m calling into Windows.Devices.Enumeration.DeviceInformation and calling findAllAsync(). That will asynchronously return all of the devices found on the system.

.done() is how we proceed with the results of an asynchronous call in case you haven&#39;t seen that before, and we have a chance to capture the async _payload_ (in this case a bunch of devices) by specifying a _devices_ paramter.

Next, I&#39;m calling a few array functions.

The _filter_ function takes a lambda function and in this case I&#39;m only concerned with devices that have a name and are enabled.

The _distinct_ function is my own. If you want the code for that one, leave me a comment. It reduces the array to only those with unique entries, and it gives you an opportunity to specify what you mean by "unique$rdquo;. In this case, I&#39;m saying that two devices are distinct if their name values are distinct.

Then I do a fancy _forEach_ on the array. Notice how all of these array functions themselves return arrays making it convenient to chain functions together. The forEach function simply calls the provided function on each of the items in the list. No more (or far fewer at least) awkward _for_ iterations. Yay!

In this forEach function, I&#39;m doing another async call - this time to retrieve the Windows 8-style, super fancy glyph graphic to represent the device (hint: you can also call _getThumbnailAsync()_ to get a boring, old-style, full color, supposedly realistic icon for each device.

When the call returns, I create an anonymous object shaped like the data that my template is expecting and push it into my WinJS.Binding.List. Just like that.

A little bit of CSS work later we have something that looks like this...

![](/files/deviceinfo_01.png)

If you have any questions, just leave a comment and I&#39;ll approve and respond as soon as I can.

Happy device enumerating!