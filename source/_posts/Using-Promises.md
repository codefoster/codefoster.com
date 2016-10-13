---
title: Using Promises
categories: []
tags: []
date: 2001-01-01
permalink: 
---

If you're developing Windows 8 apps using JavaScript, then you're likely familiar with the WinJS.Promise object. You can hardly get by without using one, because a lot of the API in WinJS and WinRT is asynchronous and for JavaScript apps they return a Promise.

I'm going to share with you what I have learned about promises so far in increasing order of sophistication.

## Consuming a Promise

Everybody and their uncle is going to use this one. If you need to make a call to WinJS.xhr() for instance, you're going to get a WinJS.Promise in return. They're quite easy to deal with actually and you may already know this.

When you get a promise from a method, you simply hang a .then or a .done method off of it and provide a function that you want to run when the asynchronous method is complete.

``` js
WinJS.xhr({url:"http://someuri.com/service"})
    .done(function(xhr) {
        //do something here
    });
```

The call to .xhr comes back really quickly and you and your code go about your day even though the service hasn't responded yet. Then when the service finally does come back to you, everything inside the done method runs. The promise that .xhr returns contains a payload as well. That's why we're able to declare our done function with _function(xhr)_ and then access whatever it is the service returned.

So this is super handy for keeping our UI fast and fluid. But let's move past merely consuming promises and get a bit more advanced.

## Passing a Promise

You've seen how to consume a promise so that you can avoid a blocking call to a relatively long running or potentially long running method call. Sometimes you want to write a method yourself that calls an asynchronous method and you want to give your method caller the ability to call it asynchronously.

In this case, all you have to do is return the promise given to you by the asynchronous method you're calling. So, for example, let's wrap the example call to .xhr above with our own method call...

``` js
function myMethodAsync() {

    //may want to do some stuff here

    return WinJS.xhr({url:"http://someuri.com/service"})
        .done(function(xhr) {
            //do something here
        });
}
```

There we go. Now I can call myMethodAsync (and by the way, adding _Async_ to the method name is a convention to indicate that it is an asynchronous method) like this...

``` js
myMethodAsync()
    .done(function(xhr) {
        // do something here
    });
```

And notice that I can still specify the xhr parameter for my done function and access the payload.

That's how we pass along a promise from one asynchronous method to another. Sometimes, however, you need to start from scratch and create your own promise.

## Creating a Promise

If I want to create my own method and allow callers to call it asynchronously then I need to return to them a promise. That's simply the pattern in JavaScript.

Creating a promise is pretty easy, but you need to understand the concept because sometimes things can start to feel messy and it's really helpful to understand what's going on (not that I do entirely yet).

In Windows 8 JavaScript development we have the WinJS.Promise. You create it like this...

``` js
new WinJS.Promise(function(c,e,p) {
    //function body
});
```

The c, e, and p are parameters that are themselves functions. Within the function body, then, I can actually call c() when I want to complete the promise, call e() when I want to report an errant case, or call p() when I want to report progress.

Study this method I wrote that makes sure a file exists and if it doesn't then it creates it...

``` js
function assureFileAsync() {
    return new WinJS.Promise(function (c, e, p) {
        if (fileExists("applicationData.json"))
            c();
        else
            appdata.roamingFolder.createFileAsync("applicationData.json")
                .then(function (file) {
                    return Windows.Storage.FileIO.writeTextAsync(
                        file, JSON.stringify(starterData)
                    );
                })
                .done(function () { c(); });
    });
}
```

There are a few things going on here, so let's dissect.

First, I did use the Async suffix to indicate to the caller that this is going to be an asynchronous method. I create and return a new WinJS.Promise and the bulk of the logic here exists in the function declaration for that promise.

If a file called "applicationData.json" exists (fileExists is another function I wrote), then we don't need to do anything and this promise should be considered complete, so we simply call c(). If we wanted our promise to carry a payload (like the xhr method does), then we could put that here by calling c(myResult). In this case, however, we don't need that.

If the file does not exist, then we want to create it. Notice that this creation is itself an asynchronous call and in the .then there's even another one. Finally, _after_ we have made certain the file exists and contains my starterData, then we call the c() to indicate that this promise is complete.

There's plenty more insinuated by this, but I'm going to leave it there for now in the interest of simplicity.

## Saving a Promise

Now this trick I just figured out recently and it's very handy.

Let's say that in one part of my code I want to do something (call it Action A) that may take some time, and then in another place I want to do something else (call it Action B) but Action B should not occur until Action A has successfully completed.

I could let Action B call Action A asynchronously because then I could hang the .then or .done on that call. Sometimes, though, I don't want Action B to be the initiator.

Let's look at a more concrete example. This is the case where I ended up discovering this pattern.

When my application loads I want to load all of the data from file. When you user lands on the home page, I want to show the loaded data. Obviously I can't show the user the data until it's loaded, but I want to initiate the data load in the app's activated event not in the home page.

So here's what we do. We initiate the data load from the app's activated event and save the resulting promise somewhere where it will be accessible to the home page. I just added it dynamically onto the WinJS.Application object (not sure if that's recommended or not, but it works great :) Then from the home page, we simply access that object and hang a .done on it. Easy.

Here's the data load call from my app activated event...

``` js
WinJS.Application.dataLoadedPromise = Data.initializeAsync();
```

...and here's where I want to start work on my home page data, but only after the data is loaded...

``` js
var hubItemsList = new WinJS.Binding.List();
WinJS.Application.dataLoadedPromise.done(function () {
    getHubItemsAsync()
    ...
```

Now getHubItemsAsync (itself another asynchronous call, but that's coincidental) will only get called once the dataLoadedPromise is complete.

## Conclusion

There's much more to promises that I didn't include here - for brevity in part, but also because I haven't discovered it yet, but keep an eye on this blog. As I turn over new leaves, I'll post it here - I promise.