---
title: Configuring a Custom Domain Using Namecheap and Azure Web Apps
categories: [Azure]
tags: [namecheap, azure, dns, domain, domain-names, web]
date: 2015-08-07
permalink: namecheap
---

Namecheap.com is a domain registrar that treats me very well. Domain registration and DNS records is a strange world that I don't understand very deeply, so I appreciate a registrar that makes things clear and keeps it fairly simple.
<!--more-->
If you've created a website in Azure and you're not opting to use Azure's recently announced domain registration service, but have instead registered your domain using Namecheap, then this post is for you. Actually, this post is for _me_ since I always forget a step or two and need this as a reference. But you can use it too.

**Step 1\. Register your domain with Namecheap.** I don't have any trouble with this step and I'm going to assume you won't either. If you do need help, look for support on namecheap.com. For the purposes of this article, I'm going to assume the domain is tweetmonkey.io since that's one that I recently created.

**Step 2\. Create your web app on Azure.** Again, this is sort of out of scope for this article, but it's not hard.

**Step 3\. Point your Namecheap domain to Azure.** This is where we tell Namecheap to point to Azure. It's not hard, but it's just not always easy to remember.

1.  Log in to your Azure web app using portal.azure.com, go to Settings, then Custom Domains and SSL, then Bring External Domains, then copy the IP address. We'll need that soon.
2.  Now log in to namecheap.com, go to manage your domains, and choose the domain you want to forward.
3.  Click All Host Records on the left

	![](/files/namecheap_01.png)

There are two host records that should already exist. One has a prefix of @ and one has a prefix of www.

1.  For the @ record, paste the IP address into the _IP Address/URL_ field. Make sure the record type is still _A (Address)_. Change the TTL to _1800_.
2.  For the www record, enter your given Azure address such as _tweetmonkey.azurewebsites.net_. That's always prefix you chose for your Azure web app and then _.azurewebsites.net_. Make sure it's a _CNAME (Alias)_ record type and enter _1800_ for the TTL.
3.  Under subdomain settings, add _awverify_ into the first field, _awverify.tweetmonkey.azurewebsites.net_ into the second, and drop down and choose _CNAME (alias)_ for third. Again enter _1800_ in the TTL field.

Here's what it should look like...

![](/files/namecheap_02.png)

**Step 4\. Check your DNS propogation.** Now Namecheap has been forwarded, but you likely can't continue yet, and that's because it can take up to 30 minutes for this change to propagate across the internet. I like to go to [http://www.dnsunlimited.com/propagation_check](http://www.dnsunlimited.com/propagation_check) every 30 seconds or so (actually, I'm more patient than that) and doing a CNAME search for _www.tweetmonkey.io_ and _awverify.tweetmonkey.io_. As soon as you see a response value of _tweetmonkey.azurewebsites.net_ or _awverify.tweetmonkey.azurewebsites.net_ respectively, I know the propagation is done and I'm ready for the next step.

**Step 5\. Add your domain to Azure.** Now that the entire internet knows about your change, you're ready to configure it in Azure. Go back to that same Azure portal location that you did in step 3a and under _domain names_ add your root domain and your www prefix - tweetmonkey.io and www.tweetmonkey.io. Azure will check your CNAME records to be sure you are authorized to use this domain (we wouldn't want people able to redirect domains willy nilly!), and since you checked the propagation of your CNAME records in step 4, it should pass. Save your changes.

![](/files/namecheap_03.png)

**Step 6\. Test, drop the mic, and exit stage right.** After step 5, you should immediately be able to open your browser of choice and hit either your root or your www. site. Hope it works for you.

Keep in mind that you may choose to get all sorts of fancy with your domain prefixes. You may choose to have your root domain (tweetmonkey.io in this case) go to the same place as your www prefix and then point your api prefix to a separate Azure web app that you made with Web API and then perhaps you could create an admin prefix that takes users to a different web app still. In any case, I think you qualify as an official webmaster now!

Code speed to you!

 