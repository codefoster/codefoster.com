---
title: Things a Web Developer Should Have Memorized
tags: []
date: 2016-10-02 16:03:46
---

![](http://codefoster.blob.core.windows.net/site/image/b68d3ab9d66641be9a741f29d451ca96/http_1.png)

Web development involves the use of a lot of technologies and languages implemented according to a lot of standards. It&#39;s not exactly the most cohesive stack and I would attribute that to its long and democratic evolution as well as its very broad acceptance and implementation.

At the end of the day, though, it leaves us web developers with a lot of information to wrap our heads around. It helps me to keep a bit of a reference sheet on the parts that I look up often, and even be sure that some of it is firmly committed to memory - my own L2 cache, if you will, to avoid even a glance at the reference sheet.

Here are some of the things on&nbsp;my reference sheet in case you find them helpful too. I&#39;m thinking this will be a good canon of _things a beginning web developer should learn_ as well.

# URI Scheme

We take URI&#39;s for granted, but we usually just take the simple form for granted and might see derivatives as proprietary hacks. In fact, the primary spec for URI&#39;s is pretty robust and a lot of the derivatives you might run across are entirely valid. I helps to spend a second considering the full form and having a glance at a few examples so you&#39;ll know how to recognize a valid URI.

&lt;scheme name&gt; : &lt;hierarchical part&gt; [ ? &lt;query&gt; ] [ # &lt;fragment&gt; ]

The&nbsp;complete example that is given on Wikipedia is helpful here...

`foo://username:password@example.com:8042/over/there/index.dtb?type=animal&amp;name=narwhal#nose`

In this example, we&#39;ve got a scheme name of _foo_. By the way, I&#39;ve also heard this called the _protocol_. The one you see all the time is _http_.

We have a username and password of _username:password_. I use this commonly for passing credentials in to an FTP connection. Keep in mind there is no protection at all of this password. It&#39;s passed in clear text and you should pretty much count these public credentials if you&#39;re going to use it.

The domain, then, is _example.com _followed by a semi-colon and the port number, the full path, an optional&nbsp;question mark symbol (?) and query string, and an optional pound symbol (#) and fragment identifier.

There&#39;s a lot more good information about URI schemes (and a few other topics :)&nbsp;in&nbsp;[this&nbsp;Wikipedia article](http://en.wikipedia.org/wiki/URI_scheme).

# HTTP Request Methods

The HTTP request methods, which many like to call _verbs_, are a set of directives we get to pick from when we&#39;re making a request to a web server. The directive tells the server something about the nature of our request, our agreement on the format and content of the request, and our expectation of the response. The list of verbs in rough order by popularity would be a good thing to commit to memory if you haven&#39;t already. They are GET, POST, PUT, DELETE, PATCH, HEAD, TRACE, OPTIONS, and CONNECT. They are by convention capitalized and that makes it funny when you choose to shout them in the middle of an otherwise normal sentence.

If you can only memorize two of these, make them GET and POST which I would guess comprise about 98.5% of the HTTP requests currently flying around the internet.

**GET.** A request. A question. An attempt to convince the server to give me a representation of a given resource. If I ask for [http://mydomain.com/mydocument.html](http://mydomain.com/mydocument.html) via GET, I&#39;m asking for the contents of the document itself to be sent to me.

**POST.** A request, but not so much a question. A POST is&nbsp;a way to submit new data to an existing resource (a collection for example). It&#39;s very commonly used&nbsp;to receive form data.

If you want to play around with creating web requests and hurling them toward unsuspecting servers, I recommend downloading and installing [Fiddler by Telerik](http://telerik.com/fiddler). Fiddler makes it very easy to compose requests, analyze the results, replay requests, and tons more.

# HTTP Status Codes

Memorizing the status codes is quite important. You never know when you&#39;re going to be paired programming and get a 204 response back from a web service. In that moment, it&#39;s going to be you against your partner and no matter how fast you&#39;re able to get [this ](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)Wikipedia article, it&#39;s going to be much too late for your reputation. For the record, has a 204 come back before I wrote this article, I would have been subject to the shame.&nbsp;So make up some flash cards, hand them to your spouse and say &quot;quiz me&quot;. Use the full list from Wikipedia, but for the sake of completeness, a few of the important ones are listed below.

It&#39;s certainly a bare minimum that you memorize the categories of status codes, which are...

1XX Informational

2XX Success (yay!)

3XX Redirection

4XX Client Error (it&#39;s your fault)

5XX Server Error (it&#39;s their fault)

If you get a 600 code, there&#39;s really something wrong.

And here are a few of the codes that codefoster deems common or important...

100 Continue

200 OK

301 Moved Permanently

401 Unauthorized

403 Forbidden

404 Not Found

# HTTP Header Fields

HTTP header fields are all of the things you get to sprinkle into your web request to be more specific about what you&#39;re attempting to do with that request. And then they&#39;re also sprinkled into the response back from the server. Most client SDKs that wrap HTTP calls provide the headers as a collection. This is basically so you can avoid writing regular expressions, and avoiding writing regular expressions is sort of the whole point of being a software developer I think.

There&#39;s obviously way to many possible header fields to memorize, but I&#39;ve found myself going back and looking up some of these a dozen times, which is far less efficient than just take a little time to commit the common ones to memory. You can get the complete (if that&#39;s possible) list of fields on [the Wikipedia article](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields), but here&#39;s what I recommend for learning the HTTP header fields that will be the most valuable for you. Use an HTTP sniffer like the one I mentioned already - Fiddler - and watch the requests and responses that are sent and received for some common traffic such as when you&#39;re simply browsing the web or when you&#39;re calling web services. Then make a list of all of the request headers and response headers you see go by and look them up on [that Wikipedia article](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields) I mentioned and understand and memorize each.

# HTML Header Information

There&#39;s plenty to memorize within the context of the web platform languages - HTML, CSS, and JavaScript, but I won&#39;t enumerate all of those here. I will, however list some HTML header information that I think is sort of cross-concern and would be helpful to have in your head.

Put all of the various HTML DOCTYPE formats out of your mind and simply memorize the one simple one that HTML5 gives us - that is...

&lt;! DOCTYPE html&gt;

It&#39;s by no means a complicated line, but for some reason I found it hard to memorize. I guess it&#39;s due to how infrequently I actually have to write it and the strange syntax - &lt;! prefix, no closing tag or self-closing tag, upper case _DOCTYPE _and lower case _html_.

You can look at the meta tags that are still popular such as _keywords _and _description_, but honestly I don&#39;t think there are many more. The use of meta tags is declining I believe, and even the use of keywords and description - despite their purpose for improving SEO (search engine optimization) - supposedly has little to no effect.

Well, I hope this is helpful to have this information in one spot. Now, do what it takes to make sure that one spot is in your brain instead on this blog post.