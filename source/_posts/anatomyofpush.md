---
title: Anatomy of a Push Notification
categories: [App Development]
tags: [mobile,mobile development,notifications,toast,push server]
date: 2012-11-15
permalink: anatomyofpush
alias:
- post/2012/11/15/anatomyofpush.aspx
- post/2012/11/15/anatomyofpush/
---

I can hardly stand _not_ knowing how something works under the hood. More often than not, I&#39;d rather have a working knowledge of a system than the convenience or function of the system itself. It&#39;s why I chased degrees in Computer Electronics and Computer Engineering in the first place. I don&#39;t know so much about all of the fancy things that engineers put into processors and primary system boards these days, but I&#39;m relieved to have at least a fundamental understanding of a control bus, a machine clock, a MOSFET, an assembly program, and the higher level software abstractions. But I digress...

What I want to talk about right now is the anatomy of a push notification message. I was intimidated by the subject when I was first introduced to it, but I&#39;ve climbed on top of the general concept now and feel confident enough to post on the matter.

I do have to say that I&#39;m pretty excited about the convenience of Windows Azure Mobile Services (WAMS) abstractions over the process, but I don&#39;t want to use it blindly without understanding what it&#39;s doing under the hood. I&#39;m going to start with a review of the process and players in a typical push notification. You can find this diagram and an overview of the process [here](http://msdn.microsoft.com/en-us/library/windows/apps/hh913756.aspx).

![](/files/anatomyofpush_01.png)

The green is _you_ and the blue is _Microsoft_. You are writing an app and you are responsible for a cloud service to communicate with WNS.

In my typical attempt to make complex sound easy, I&#39;m going to walk you through this process.

# Steps 1-3. Your app asks Windows for a channel.

You ask Windows for a channel, Windows asks WNS (this happens transparent to you), and then Windows gives you a channel. This channel is just a string. Here&#39;s a sample URI with an ellipse since it&#39;s actually much longer.

`https://bn1.notify.windows.com/?token=AgYAAABrcyAqFeh...wfOG5%2bD4TCeHU%3d`

By the way, the channel that Windows gives you also includes an expiration time which may be helpful.

# Step 4. Your app sends this URI to your cloud service

You can use whatever means you choose, but I would hope that you&#39;d find a smart and secure way to do that. A potential attacker would have to get this URI and also your Package Security Identifier and Client Secret in order to start sending malicious app notifications, but still.

# Step 5. Your cloud service asks WNS (Microsoft&#39;s server) for an access token and then triggers a push

Here&#39;s where the bulk of the "magic" happens. Your service does two HTTP calls. The first gets it an access token (which you&#39;ll likely want to cache), and the second (and subsequent) initiates a push to your app. WNS knows where your app is because of the URI that you sent it.

Here are examples of those two raw HTTP messages...

## First message

```
POST /accesstoken.srf HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Host: https://login.live.com
Content-Length: 211

grant_type=client_credentials&amp;client_id=**ms-app%3a%2f%2fS-1-15-2-2972962901-2322836549-3722629029-1345238579-3987825745-2155616079-650196962**&amp;client_secret=**Vex8L9WOFZuj95euaLrvSH7XyoDhLJc7**&amp;scope=notify.windows.com
```

It&#39;s just a simple POST to `login.live.com/accesstoken.srf`. The `client_id` is actually the Package Security Identifier (SID) that you get from your developer dashboard at [http://dev.windows.com](http://dev.windows.com), and the `client_secret` is the Client Secret that you find in the same place.

The response to a successful access token request is something like...

```
HTTP/1.1 200 OK
Cache-Control: no-store
Content-Length: 422
Content-Type: application/json
{
  "access_token":"EgAcAQMAAAAALYAAY/c+Huwi3Fv4Ck10UrKNmtxRO6Njk2MgA=",
  "token_type":"bearer"
}
```

With that, your service has what it needs to submit notifications to be pushed to your app.

## Second message

Your service has the access token and that&#39;s all it needs to issue requests for WNS to push to your app.

Here&#39;s a push message that changes the text on your tile...
```
POST **https://bn1.notify.windows.com/?token=AgYAAABrcyAqFeh...wfOG5%2bD4TCeHU%3d** HTTP/1.1
Content-Type: **text/xml**
X-WNS-Type: **wns/tile**
Authorization: Bearer **EgAcAQMAAAAALYAAY/c+Huwi3Fv4Ck10UrKNmtxRO6Njk2MgA=**
Host: bn1.notify.windows.com
Content-Length: 32
<tile><visual><binding template="TileSquareText03"><text id="1">Message sent from push</text></binding></visual></tile>
```

Notice a few things about this message...

*   Just like the request for an access token, this is a secure post to https
*   The message is sent to the channel URI
*   You can find valid values for the Content-Type and X-WNS-Type headers [here](http://msdn.microsoft.com/en-us/library/windows/apps/hh465435.aspx)
*   The Authorization header always has that word Bearer, a space, and then the access token received from the first call

# Step 6. WNS sends the notification to your app

This step is all on WNS and Windows and you don&#39;t have to do anything except for verify that the process worked.

And there you have it. You can find numerous services that wrap this process for you and make it easy, but now you know the guts of what&#39;s going on under the hood. It&#39;s not exactly something you want to try to explain to your mom, but it&#39;s not exactly quantum physics either.