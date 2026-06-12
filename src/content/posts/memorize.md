---
title: Things a Web Developer Should Have Memorized
categories: [Other]
tags: []
date: 2014-11-05
---

Web development involves the use of a lot of technologies and languages implemented according to a lot of standards. It's not exactly the most cohesive stack and I would attribute that to its long and democratic evolution as well as its very broad acceptance and implementation.

At the end of the day, though, it leaves us web developers with a lot of information to wrap our heads around. It helps me to keep a bit of a reference sheet on the parts that I look up often, and even be sure that some of it is firmly committed to memory - my own L2 cache, if you will, to avoid even a glance at the reference sheet.

Here are some of the things on my reference sheet in case you find them helpful too. I'm thinking this will be a good canon of _things a beginning web developer should learn_ as well.

# URI Scheme
We take URI's for granted, but we usually just take the simple form for granted and might see derivatives as proprietary hacks. In fact, the primary spec for URI's is pretty robust and a lot of the derivatives you might run across are entirely valid. I helps to spend a second considering the full form and having a glance at a few examples so you'll know how to recognize a valid URI.

```
<scheme name> : <hierarchical part> [ ? <query> ] [ # <fragment> ]
```

The complete example that is given on Wikipedia is helpful here...

```
foo://username:password@example.com:8042/over/there/index.dtb?type=animal&amp;name=narwhal#nose
```

In this example, we've got a scheme name of `foo`. By the way, I've also heard this called the _protocol_. The one you see all the time is `http`.

We have a username and password of `username:password`. I use this commonly for passing credentials in to an FTP connection. Keep in mind there is no protection at all of this password. It's passed in clear text and you should pretty much count these public credentials if you're going to use it.

The domain, then, is `example.com` followed by a semi-colon (`:`) and the port number (`8042`), the full path (`/over/there/index.dtb`), an optional question mark symbol and query string (`?type=animal&amp;name=narwhal`), and an optional pound symbol and fragment identifier (`#nose`).

There's a lot more good information about URI schemes (and a few other topics :) in [this Wikipedia article](http://en.wikipedia.org/wiki/URI_scheme).

# HTTP Request Methods
The HTTP request methods, which many like to call _verbs_, are a set of directives we get to pick from when we're making a request to a web server. The directive tells the server something about the nature of our request, our agreement on the format and content of the request, and our expectation of the response. The list of verbs in rough order by popularity would be a good thing to commit to memory if you haven't already. They are GET, POST, PUT, DELETE, PATCH, HEAD, TRACE, OPTIONS, and CONNECT. They are by convention capitalized and that makes it funny when you choose to shout them in the middle of an otherwise normal sentence.

If you can only memorize two of these, make them GET and POST which I would guess comprise about 98.5% of the HTTP requests currently flying around the internet.

**GET.** A request. A question. An attempt to convince the server to give me a representation of a given resource. If I ask for [http://mydomain.com/mydocument.html](http://mydomain.com/mydocument.html) via GET, I'm asking for the contents of the document itself to be sent to me.

**POST.** A request, but not so much a question. A POST is a way to submit new data to an existing resource (a collection for example). It's very commonly used to receive form data.

If you want to play around with creating web requests and hurling them toward unsuspecting servers, I recommend downloading and installing [Fiddler by Telerik](http://telerik.com/fiddler). Fiddler makes it very easy to compose requests, analyze the results, replay requests, and tons more.

# HTTP Status Codes
Memorizing the status codes is quite important. You never know when you're going to be paired programming and get a 204 response back from a web service. In that moment, it's going to be you against your partner and no matter how fast you're able to get [this](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes) Wikipedia article, it's going to be much too late for your reputation. For the record, had a 204 been returned to me before I wrote this article, I would not have known it and would have been appropriately ashamed.

So make up some flash cards, hand them to your spouse and say "quiz me". Use the full list from Wikipedia, but for the sake of completeness, a few of the important ones are listed below.

It's certainly a bare minimum that you memorize the categories of status codes, which are...

Code | Meaning
--- | ---
1XX | Informational
2XX | Success (yay!)
3XX | Redirection
4XX | Client Error (it's your fault)
5XX | Server Error (it's their fault)

If you get a 600 code, there's really something wrong.

And here are a few of the codes that codefoster deems common or important...

Code | Meaning
--- | ---
100 | Continue
200 | OK
301 | Moved Permanently
401 | Unauthorized
403 | Forbidden
404 | Not Found
418 | I'm a little teapot (no joke... [look it up](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes))

# HTTP Header Fields
HTTP header fields are all of the things you get to sprinkle into your web request to be more specific about what you're attempting to do with that request. And then they're also sprinkled into the response back from the server. Most client SDKs that wrap HTTP calls provide the headers as a collection. This is basically so you can avoid writing regular expressions, and avoiding writing regular expressions is sort of the whole point of being a software developer I think.

There's obviously way to many possible header fields to memorize, but I've found myself going back and looking up some of these a dozen times, which is far less efficient than just take a little time to commit the common ones to memory. You can get the complete (if that's possible) list of fields on [the Wikipedia article](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields), but here's what I recommend for learning the HTTP header fields that will be the most valuable for you. Use an HTTP sniffer like the one I mentioned already - Fiddler - and watch the requests and responses that are sent and received for some common traffic such as when you're simply browsing the web or when you're calling web services. Then make a list of all of the request headers and response headers you see go by and look them up on [that Wikipedia article](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields) I mentioned and understand and memorize each.

# HTML Header Information
There's plenty to memorize within the context of the web platform languages - HTML, CSS, and JavaScript, but I won't enumerate all of those here. I will, however list some HTML header information that I think is sort of cross-concern and would be helpful to have in your head.

Put all of the various HTML DOCTYPE formats out of your mind and simply memorize the one simple one that HTML5 gives us - that is...

``` html
<! DOCTYPE html>
```

It's by no means a complicated line, but for some reason I found it hard to memorize. I guess it's due to how infrequently I actually have to write it and the strange syntax - `<!` prefix, no closing tag or self-closing tag, upper case `DOCTYPE` and lower case `html`.

You can look at the meta tags that are still popular such as `keywords` and `description`, but honestly I don't think there are many more. The use of meta tags is declining I believe, and even the use of keywords and description - despite their purpose for improving SEO (search engine optimization) - supposedly has little to no effect.

Well, I hope this is helpful to have this information in one spot. Now, do what it takes to make sure that one spot is in your brain instead on this blog post.