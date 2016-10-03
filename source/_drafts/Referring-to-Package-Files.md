---
title: Referring to Package Files
tags: []
date: 
---

When you&rsquo;re working with a Windows 8 project in VS2012, you have some number of project files in your Solution Explorer. You have HTML files, CSS files, JavaScript files, images, and perhaps some XML or JSON or TXT files - something like that.

If, in the course of executing logic in your app, you need to access these files, there are a number of ways and you should know when you might use what and why...; that&rsquo;s as opposed to being incapacitated or stabbing in the dark.

## Option 1 - relative or ms-appx reference

Your first option is to refer to the file using a relative or an _ms-appx _reference.

You&rsquo;re working with a web app here, so remember that if you&rsquo;re sourcing an image on an HTML page, you can include a relative link like _myimage.png_ to refer to an image of that name in the same location as that HTML file.

Remember that _ms-appx _is a scheme analogous to the _http_ in _http://_, but instead of referring to the _hyper text transfer protocol _(the transfer protocol of the Interweb) it refers to the current package. If you&rsquo;re making a breakfast cereal inventory app (don&rsquo;t ask me how I came up with that as an example, but I think it&rsquo;d sell!) then _ms-appx:// _is the scheme to use to access your app&rsquo;s assets and  _ms-appx:///cereals.xml _would refer to the cereals.xml file. This doesn&rsquo;t give you a benefit over a relative link, though.

And wait...; hold the phone. Why did we use three slashes? That&rsquo;s simple. It&rsquo;s because we want to refer the current package self as opposed to any referenced packages within the current package. Actually, _ms-appx:///cereals.xml _is equivalent to _ms-appx://{packageid}/cereals.xml _where {packageid} is the package identifier from the manifest file.

## Option 2 - WinJS.xhr()

The first option is likely your best choice if you&rsquo;re referencing declaratively from within an HTML file. Your second option and the one you&rsquo;ll likely use when you&rsquo;re working imperatively within JavaScript is to hit the local asset using _xhr_. The _WinJS.xhr_ method takes a URL and returns gives you its word (a promise) that it will return with a response and will call your then/done when it&rsquo;s back.

The response from your xhr call might be some JSON data, some XML, an HTML document, or just some random text. Anyway, you get to decide what happens with it.

## Option 3 - installedLocation

The third option is one most recent one that I discovered and I like it.

If you look at the _Windows.ApplicationModel.Package _class, you&rsquo;ll see that you can access the current package using the _current_ method. If you look at the current package, you&rsquo;ll see that you have an _installedLocation _property. And if you look at that installedLocation, you&rsquo;ll see that you have a _getFileAsync _method.

The _getFileAsync_ method returns (via a promise) a StorageFolder, and that folder contains all of the files in your project. Tada!

One good example of a use of this method is [the online documentation for the setHtmlFormat method](http://msdn.microsoft.com/en-us/library/windows/apps/windows.applicationmodel.datatransfer.datapackage.sethtmlformat.aspx) that hangs off of DataPackage.

## Conclusion

As always, it&rsquo;s possible there are even more ways to skin the cat than I&rsquo;ve enumerated. These are the three I know. I hope it&rsquo;s helpful.

Happy reflecting!