---
title: Web API or WCF... Which Way to Go?
categories: []
tags: []
date: 2001-01-01
permalink: webservicesforward
---

Have you noticed the overlap between WCF and Web API? I did.

And not only have I noticed it, but I've watched both of the frameworks change so that the overlap between them evolved, and I've done my fair share of speculating about what the potential paths forward are and when to use which.
<!-- xmore -->

Overall, the story with WCF and Web API is a convergent and not a divergent one. The teams at Microsoft are completely unified and so is the strategy. Nevertheless, the two frameworks exist as does the overlap and developers' various solutions using one, the other, or some combination, so a little discussion on the matter might be helpful. A smidgen of official guidance on the subject is available from Microsoft's developer network in an article called [WCF and ASP.NET Web API](http://msdn.microsoft.com/en-us/library/jj823172(v=vs.110).aspx), but it is by no means wordy and leaves a lot of architectural concepts and decisions to you, the developer.

I'll try to be more specific and prosaic on the matter, but I won't obviously be able to make any decisions for you, especially where existing solutions are already in place. I can, however, let you know a bit more about where Microsoft is on the matter and where I am as well and you can use your own noodle and your own intimate knowledge of your problem space to make the best decision. After all, that's what they pay you for, right?

After reading this brilliant discourse on the topic, I highly suggest you take the time to watch Daniel Roth at TechEd North America 2013 present [Serious Web Services](http://channel9.msdn.com/Events/TechEd/NorthAmerica/2013/DEV-B209#fbid=). You'll walk away from that an expert.

## Guidance... Choose Web API (if you can)

Here's where I advise you start - if you can choose Web API, choose it. You can choose Web API if the following are true for you...

*   **You can stick to the HTTP protocol.** HTTP is a layer above TCP. That means that is uses TCP, but it adds some stuff. In adding some stuff it makes the communication just a tiny bit slower. Here's a typical envelope for an HTTP request...

```
GET /mypath/myendpoint HTTP/1.0
From: [someuser@mydomain.com](mailto:someuser@mydomain.com)
User-Agent: HTTPTool/1.0
```

...and for a response...

```
HTTP/1.0 200 OK
Date: Tue, 23 Sept 2014 23:00:00 GMT
Content-Type: text/plain
Content-Length: 21

{response:'hi there'}
```

The round trip in total is not that large, but if you're talking about 10's of thousands of messages then it might become a consideration. Using HTTP messaging is hugely convenient in a number of ways - not the least of which is the practically instant compatibility with a lot of client systems. Everyone these days speaks HTTP with a wide variety of helper classes out there. If you're in JavaScript you have jQuery's ajax(), WinJS's xhr(), and likely about 7,820 more. If you're in C# you have the HttpClient helper class. Even if you don't have any helpers, composing a text message like the sample above wouldn't be rocket science (unless of course you're in the aerospace industry).

WCF can speak HTTP, but it can speak a number of other protocols as well. The cool part is that all of the work you do to define your entities and your operations is independent of the transport protocol too. That means you can talk HTTP to some clients and straight TCP to others. That's a big advantage.

If you know, however, that you can get away with _only_ talking HTTP, then read on and keep on considering Web API.

*   **You don't have a requirement to support SOAP.** HTTP is an envelope on TCP. SOAP (Simple Object Access Protocol) is another envelope on that - on top of HTTP. And it's a significant one too. Look at this SOAP message. Yowzer! And this is the best case scenario. Actual implementations usually end up with a lot more piled on top.

```
POST /mypath/myservice.asmx HTTP/1.1
Host: api.mydomain.com
Content-Type: text/xml; charset=utf-8
Content-Length: **length**
SOAPAction: [http://mydomain.com/MyAction](http://mydomain.com/MyAction)
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <MyAction xmlns="http://domain.com/">
      <GUID>string</GUID>
      <content>string</content>
      <paramsXML>string</paramsXML>
    </MyAction>
  </soap:Body>
</soap:Envelope>
```

As you may spot immediately, SOAP is XML, so besides its inherent, relative verbosity, it is also subject to the verbosity of XML. When you have to `<thing>`wrap all the things`</thing>`, they start to get pretty long, n'est pas? SOAP is the foundation of the WS* stack - a suite of standards to determine _one_ way to implement web services. The problem is the WS* stack is pretty thorough and pretty pervasive in the enterprise. So if you're an enterprise developer trying to introduce some agility to your group, you may run up against the constraint of having to speak SOAP.

*   **You don't need Reliable Messaging, WS-Transactions, or any of the other WS* junk. **Web API implements web services using a variety of primitive and largely preexisting protocols such as HTTP, WebSockets, and SSL, so you don't get the various higher level protocols such as RM or WS-Transaction. You don't get the power of those protocols, but you also avoid the headache in my opinion. I have always felt the process of implementing such protocols was relegated either to suspicious black magic libraries or pain staking implementation ceremony.

There may be more, but those are the basic constraints I can come up with on a moment's notice.

## OData

It seems like everyone is talking about the raw and simple HTTP REST JSON approach, and that's great, but there are a couple of other approaches to consider. One of them is a shaking of even the HTTP protocol. You can accomplish that by embracing web sockets. You can implement an entire API using Signal R and it would surely be very fast and very impressive. Another alternative is to keep the HTTP envelope but get more specific with your data format specification by embracing OData. A client can look at any OData set of data with standard tools or code because they're always formatted the same. Additionally, OData allows me to query my data with clever URL strings so I only get back the data I want. OData is nifty. Here's a simple HTTP request to an OData resource...

```
GET /mypath/widgets?$filter=name eq Widget1&amp;$select=id HTTP/1.0
```

This is a simple GET to an OData resource (a collection of widgets it appears) that will take only the _id_ column of the widget with the name "Widget1". So that is going to return a microscopic result that looks something like...

```
{"id":17}
```

I used to consider it a strong advantage of WCF that I was able to create a WCF Data Service (a simple class inheritance), point it to a compliant data service (such as an EF DbObjectContext), and presto I had a full OData implementation of my dataset. It's a great party trick (depending on the party), but Web API has matured to the point where the same solution (a very useful OData feed from a dataset) takes hardly any more effort and has the added advantage that it uses scaffolding so my service implementation is not hidden behind the fa&ccedil;ade of the WCF DataService class. Additionally, (and of critical importance) the WCF team has put [some guidance ](http://blogs.msdn.com/b/odatateam/archive/2014/03/27/future-direction-of-wcf-data-services.aspx)out there that WCF Data Services is not the way forward. They've done a commendable job of implementing the basics of OData v4 to alleviate as many workplace constraints as possible, and I'm hearing, guessing, and hoping that they'll do an equally commendable job of supporting existing namespaces and implementations, but it's a sunset moment for WCF-DS.

That's all I have on the subject for now, but feel free to engage me and the community via comments below.

Thanks to the following sites for info and inspiration...

[http://www.dotnet-tricks.com/Tutorial/webapi/JI2X050413-Difference-between-WCF-and-Web-API-and-WCF-REST-and-Web-Service.html](http://www.dotnet-tricks.com/Tutorial/webapi/JI2X050413-Difference-between-WCF-and-Web-API-and-WCF-REST-and-Web-Service.html)

[http://en.wikipedia.org/wiki/SOAP](http://en.wikipedia.org/wiki/SOAP)

[http://en.wikipedia.org/wiki/Web_services_protocol_stack](http://en.wikipedia.org/wiki/Web_services_protocol_stack)

[http://en.wikipedia.org/wiki/WS-Transaction](http://en.wikipedia.org/wiki/WS-Transaction)

 