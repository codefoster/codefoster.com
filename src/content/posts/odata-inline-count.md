---
title: Inline Count in the OData Spec
categories: []
tags: [instructional, learning, odata]
date: 2012-02-15
---

When it comes time to tackle a new (to you) technology, how do you begin? Do you read others' experiences from blogs? Wait for screencast instructions from a site like Pluralsight?

There are a lot of ways to learn, but I'm reminded of the value of just going back to the spec. Sometimes the author of the blog article you're reading is in your same boat trying to learn, and going directly to the spec, you might get to bypass a lot of wasted trial and error cycles.

I've spent a lot of time in the HTML5 spec the last while, and somewhat recently also the OData spec (which you can find at odata.org). I've read a lot of blogs and seen a lot of videos on the subject of OData, but when I finally found my way to the actual spec, I was pleased to find a very concise and obviously thorough coverage of the topic.

One of the little things I learned which has big implications for me is the ability to specify a query option called `$inlinecount`. With this query option specified, an OData query will bring back a count of all entities in the queried collection (applied after any filters) even if some limiting options such as paging or `$top` are included.

Take, for example, the following query...

```
http://services.odata.org/OData/OData.svc/Products?$inlinecount=allpages&$top=10&$filter=Price gt 200
```

The query should find the first 10 products whose price is greater than 200. If you're retrieving these products to be displayed in a web page, however, and you need to worry about paging and you need to tell the pager how many pages to render, you're going to need to know the **total **number of products that with a price greater than 200 even though this query only asks for the top 10 (don't use _$top_ for your paging, BTW, there's a better way). The inclusion of inlinecount, in this query dictates the inclusion of the following element in the response...

``` xml
<m:count>24</m:count>
```

With this additional information about the submitted query's results, your pager now knows to render 3 pages (of 10).

Notice that the `Price gt 200` filter did get applied before the result for inlinecount was calculated, so we did not receive back an inline count of all product entities.

This is certainly just a shallow glance at the topic. If you want more in-depth information about OData or about the inlinecount query option, you should go straight to the [spec](http://www.odata.org/developers/protocols/overview) :)
