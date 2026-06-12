---
title: Refresh My Entire Viewmodel, Please
categories: []
tags: [wp7, windows-phone-7]
date: 2012-02-16
---

In case you didn't know (as I didn't until moments ago), if you throw a PropertyChanged event like this:

``` csharp
PropertyChanged(this, new PropertyChangedEventArgs(""));
```

...it means "all of my properties have changed".

The empty string (or Nothing in VB) is responsible for this effect. I have added a Refresh method to my BaseViewModel that does this. Now a simple call to `MyViewModel.Refresh()` will tell my WP7 view that all of its underlying fields have been updated. This is going to come in quite handy for certain cases. I hope this helps you as much as it has me.
