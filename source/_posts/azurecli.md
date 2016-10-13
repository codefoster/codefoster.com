---
title: The Azure CLI
categories: []
tags: []
date: 2001-01-01
permalink: azurecli
---

At the time of this writing, there are two Azure portals you can use.

To get to the main, full-featured, current Azure portal, you browse to [manage.windowsazure.com](http://manage.windowsazure.com) in any modern browser, and it looks like this...

![](http://codefoster.blob.core.windows.net/site/image/6fe5378de74d462db95cee253024d1e8/azurecli_currentportal_1.png)

The new portal is already available for you to play with and get familiar with, and it's a good thing too since it takes quite a bit of getting used to. Once you grok it, though, I'm pretty sure you'll like it better. You get to the new portal by browsing to [portal.azure.com](http://portal.azure.com). Here's what it looks like...

![](http://codefoster.blob.core.windows.net/site/image/e075549328c54e129f0c2b0390c803a0/azurecli_newportal_1.png)

Both of these are works of modern, web art and very functional in my opinion. I love the current portal, and now that I'm accustomed to it, I love the new portal as well.

But I would like to get to the place where I have little to no need for the portals. I would like to instead to be utterly dependent on the command line.

I started some time back on the PowerShell command interface for Azure and it's very well made. I had a hard time getting to it though. I suppose it was the long commands - the PowerShell syntax. Although it's quite descriptive and offers good tab completion and documentation, I still found it a chore and kept at my work in the portal.

I had a glance some time ago at the node tooling for Azure as well, but didn't really give it a fair shake. Now I'm shaking it like crazy and really excited. Check out some of these things you can do...

## Check out which Ubuntu images I can use for creating a VM...

The following will generate a list of Azure VM images and allows me to pipe to a regular expression to pull out just the stable (LTS) Ubuntu images of a certain version (14.04.1). It's also possible to add a `--json `property to the request and get this data back in JSON format.

`azure vm image list | grep 'Ubuntu.*14_04_1.*LTS'`'

![](http://codefoster.blob.core.windows.net/site/image/471723c931ce4b8c8d6aa68c46b496dc/azurecli_vmlist_1.png)

## Create an Ubuntu Linux VM from one of those images...

Once I've chosen the image I want to start with, I simple call the following to create a new VM in the West US region. I add the `-e` parameter to add ssh capability so I can ssh into the machine when it's finished.

`azure vm create -l 'West US' VM_NAME b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu_DAILY_BUILD-trusty-14_04_1-LTS-amd64-server-20141110-en-us-30GB codefoster -e`

![](http://codefoster.blob.core.windows.net/site/image/489881b54d394d0d88017854f31ff9c1/azurecli_newubuntuvm_1.png)

Now let's fetch a list of my VM's and see the new mynewubuntumachine in there...

![](http://codefoster.blob.core.windows.net/site/image/cb3fa416071c4a88b7a7ea950e6c8ffb/azurecli_thereitis_1.png)

By the way, if you're like me and like staying in the command line interface, try installing [Cygwin](http://cygwin.com/). It runs great in PowerShell and allows me immediately after creating this VM to ssh into it like so...

![](http://codefoster.blob.core.windows.net/site/image/dd162627c66849ecad2acb0702b4e001/azurecli_ssh_1.png)

I'd rather that machine not start charging me for compute, so let's shut it down and make it free (except for a little bit of storage... pennies)...

![](http://codefoster.blob.core.windows.net/site/image/106d3e42b67646d0a6dd802cd784b093/azurecli_stopit_1.png)

That's better.

What else can we do with the azure-cli? Oh, man. Glad you asked. Let's create a quick Azure Mobile Service, add a table, and then use some PowerShell candy to start writing and reading records.

## Creating a Mobile Service...

First, we create the service like the following where gg4p4pzmfi is simply the name of my particular SQL Server. I already have it, so I may as well use that instead of creating a new one. My service is actually going to be called "cfms".

`azure mobile create --sqlServer gg4p4pzmfi cfms`

![](http://codefoster.blob.core.windows.net/site/image/d6c0774de7414f66960899b6cd2a8823/azureclie_createcfms_1.png)

Then we create a table. Let's just punt and call it _widgets_. In order to show interactions with the table via simple HTTP commands, I'm going to open up the insert and read permissions so I don't have to create authentication headers in my HTTP calls...

`azure mobile table create cfms widgets -p read=public,insert=public`

![](http://codefoster.blob.core.windows.net/site/image/2fe8abc13ed84d43b4afcff6bd3e015c/azureclie_createtable_1.png)

And there we have a service with a table ready for us. Now, in case you've never noticed, PowerShell natively allows us to use `curl `to do web requests, but curl is not really installed. Instead it's a simple alias to the Invoke-WebRequest method in PowerShell. I chose to write the following functions into my PowerShell profile so it's always available to me...

`Function get ($uri)

{

  (Invoke-WebRequest -Uri $uri).Content;

}`

`Function post ($uri, $body)

{

  (Invoke-WebRequest -Uri $uri -Body $body -Method Post -ContentType "application/json").Content;

}`

So now we can write a record into our new widgets table like so...

`post [http://cfms.azure-mobile.net/tables/widgets](http://cfms.azure-mobile.net/tables/widgets) '{"name":"widget 1"}'`

![](http://codefoster.blob.core.windows.net/site/image/be6203dbe18449d3a1a8a25a313c2ab2/azureclie_post_1.png)

Do notice that the response we got back from this post included the actual inserted object complete with the GUID that Azure Mobile Services tacked on to it. In case you're not already familiar with Mobile Services, you should also take note that we didn't schematize this table when we created it. Instead, we simply created an object with a _name_ property and let Mobile Services handle that for us.

Now, a get from the same table should show us our _widget 1_ record, and in fact it does...

![](http://codefoster.blob.core.windows.net/site/image/49aedf70e3e24fddb287efb7aac85a3e/azureclie_get_1.png)

I love how simple and elegant a solution this is.

There's obviously a whole lot more we can do with azure-cli that I won't take the time to detail. But there's one more thing you should see - the inline help. For any command, simply tack on -h and you will get good information about the various possible parameters you can use. It's contextual too. If you type `azure -h`, you'll see all of the high level options for the azure-cli tool, whereas if you type `azure vm -h`, you'll see specific commands for working with VM's.

The azure -h is great for giving you an overview of what the tool will do.

I hope you have as much fun with this as I have already.

To get started, visit [this page ](http://azure.microsoft.com/en-us/documentation/articles/xplat-cli/)to see instructions on installing the tooling.