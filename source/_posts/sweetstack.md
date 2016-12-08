---
title: One Sweet Stack
categories: []
tags: []
date: 2012-06-21
permalink: sweetstack
---

Following is a mongo post. A huge post. A massive amount of information. The general recommendation is that blog posts should be short, but rules are made to be broken. You can&#39;t tame me. I&#39;m like a wild stallion. So here is a huge blog post.
<!-- xmore -->

Last Saturday at the Seattle Code Camp I delivered a presentation I called One Sweet Stack which showed how to start with a SQL Azure database (though it would work with any relational database really), connect to it using Entity Framework, and extend it as OData with WCF Data Services.

I chose this stack because...

*   I come from corporations that have existing database solutions. These aren&#39;t modern, green-field databases of the myriad of flavors. These are classic, tried-and-true, and very much relational. I&#39;m as excited as the next guy all of the modern ways to persist data, but don&#39;t think for a minute that the relational database story is obsolete. Far from it.
*   I love using Entity Framework. I get a little jolt of excitement when I instantiate a DbContext or call SaveChanges(). Geeky? Of course.
*   I think that WCF DS is oft overlooked and recently especially in light of WebAPI (which is also a great product). I&#39;m a fan of designing a database, mapping it through an ORM, and providing an elegant API (whether it&#39;s internal or external) with so little code that I can write it from scratch in a 1 hr session (including explanations).
*   Windows 8 thrills me even more than EF.

I&#39;m hoping to convey virtually all of the content from the presentation here, so it will be a heavy post. Consider it a reference post and come back to it if/when you need it.

The source code for this project is attached. You can find it at the bottom of this post.

## First, the database...

So, as I said, I started with a SQL Azure database.

You connect to a SQL Azure database using a regular connection string just like any other database, so it will be a no-brainer for you to read this and apply it to a SQL Server on premises or even a MySQL or an Oracle database.

My database is a simple schema. It&#39;s just a table of a few attractions that one will find on the island of Kauai, Hawaii and one related table of categories those attractions fall into (i.e. waterfall, scenery, flora, etc.). Here&#39;s a diagram...

![](/files/sweetstack_01.png)

(my diagram by the way was done using [asciiflow.com](http://www.asciiflow.com/)... very geeky indeed)

In the attached zip file, you&#39;ll find KauaiAttractionsAzureScript.sql that you can use to create this database on your own Azure (or local if you&#39;d rather) instance. Just create the database first and then run the script in the context of your new database. If you want to run through this whole exercise connecting to your own database, however, I would highly recommend it. It would be good practice.

## Next, setting up the solution...

Follow these mundane steps to get over the snoozer that is creating projects, adding references, and importing packages...

1.  Create a new solution in VS2012
2.  Add a new Windows Class Library using C# (call it SweetStack.Entities)
3.  Add a new WCF Service Application using C# (SweetStack.Service)
4.  Add a new Cloud project using C# (SweetStack.Cloud)
5.  Add a new Unit Test Project using C# (SweetStack.Tests)
6.  Add a new Navigation App for JavaScript Windows Metro style (SweetStack.Metro)
7.  Add a reference to SweetStack.Entities to the .Service and the .Tests projects
8.  Add the .Service project as a web role to the .Cloud project
    1.  In the .Cloud project right click Roles
    3.  Add | Web Role Project in Solution...
    4.  Choose the .Service project
9.  Add the latest version of Entity Framework (currently 5.0.0-rc) to the .Entities, .Services, and .Tests projects
10.  Add the latest version of Microsoft.Data.Services (currently 5.0.1) to the .Services project

## Next, creating the .Entities project...

We have our database already in place, and now we want to create an Entity Framework context that will allow us to access our database using code.

Instead of creating an EF model (.edmx file), we are going to reverse engineer the database to POCO classes. Why? Because it&#39;s rad. That&#39;s why. First thing you need to do is install the Entity Framework Power Tools Beta 2 (from Tools | Extensions and Updates in VS2012).

Once that is done, you can right click on your .Entities project and choose Entity Framework | Reverse Engineer Code First. Then enter your connection string information. Remember to check the "Remember my password" box so that it will save your credentials into your connection string for later.

So the tooling should have created a bunch of .cs files in your .Entities project. You not only get POCO classes for each of your database tables, you also get one for the context. That&#39;s the one that derives from DbContext. You also get a folder with a map file for each entity.

All of this is beautiful and I&#39;ll tell you why. You now have a direct 1:1 relationship between your code and your database, but you also have the complete freedom to modify the mappings so that the two don&#39;t necessarily match. If your data architect, for instance, called the database table "first_name" and you&#39;d rather that be called FirstName in your code, then just change that property but keep the mapping to "first_name". You can even ignore certain properties or add new ones that don&#39;t have a mapping. Furthermore, classes that DO have database mappings can be mixed with other classes that do NOT have mappings. It&#39;s all up to you.

## Next, let&#39;s test it...

It&#39;s hard to see a Windows class library work without writing a test for it. In the .Tests project write a simple test that looks something like this...

``` csharp
[TestMethod]
public void TestMethod1()
{
    var context = new SweetStack.Entities.Models.KauaiAttractionsContext();
    Assert.IsTrue(context.Attractions.Any());
}
```

Before you can run the test, copy the `<connectionstrings>` element from the app.config, create a new app.config in the .Tests project (right click Add New Item...), and then paste the <connectionstrings> element into the app.config for .Tests.

That test should pass if you haven&#39;t mucked anything up already.

## Next, time to create the .Service...

This one just FEELS like it&#39;s going to take a while. Low and behold, however, I bet I could do it in less than 37.5 seconds (not that I&#39;ve timed myself). Do this...

1.  Delete (from the .Service project) the IService1.cs and Service1.cs files that you got for free (even though you didn&#39;t ask for them :)
2.  Right click the .Service project and add a new item... add a WCF Data Service called Entities.svc
3.  Once your file is created, check out the class name and see how it derives from DataService<T> but the T is undefined. Fill that in with SweetStack.Entities.Models.KauaiAttractionsContext
4.  Now uncomment the line in the InitializeService method that says SetEntitySetAccessRule and in the quotes just specify an asterisk ("*"). You can change the EntitySetRights.AllRead to .All if you like, but we won&#39;t be writing any data in this tutorial anyway, so it doesn&#39;t matter so much.
5.  Copy the <connectionstrings> element from the app.config of the .Entities project into the web.config of your .Service project
6.  Put your hands down... you&#39;re done!

Set your .Service project to the startup project and run it. You should get a browser that looks like this...

![](/files/sweetstack_02.png)

Note: if you get a list of files instead, just click on the Entities.svc first.

## Next, we let&#39;s see what we&#39;ve got...

What you&#39;re looking at there is a GEN-YOU-WINE OData feed. That&#39;s exciting. OData rocks. Not only do you get all of your entities extended through OData, but you get type information about them and you get their relationships with each other. Also, you can ask an OData feed for XML or for JSON and it will say "Yes, sir/ma&#39;am."

Fire up Fiddler and hit that service root URL appending each of the following and see what you get for responses (also add "Accept: application/json;odata=verbose" to the headers in Fiddler to request JSON). Issue the following commands against your service and behold the results...

``` html
<table border="0" cellpadding="2" cellspacing="0" style="width: 825px;">
	<tbody>
		<tr>
			<td valign="top" width="351">_{root service URL}?$top=1_</td>
			<td valign="top" width="472">selects just the first entity.</td>
		</tr>
		<tr>
			<td valign="top" width="351">_{root service URL}?$select=Id,Name_</td>
			<td valign="top" width="472">fetches all entities, but projects them to lighter JSON objects by only including the Id and Name properties.</td>
		</tr>
		<tr>
			<td valign="top" width="351">_{root service URL}?$filter=Location%20eq%20&#39;North&#39;_</td>
			<td valign="top" width="472">gives you entitites that have a Location value of "North".</td>
		</tr>
		<tr>
			<td valign="top" width="351">_{root service URL}?$filter=substringof(&#39;Falls&#39;,Name)%20eq%20true"_</td>
			<td valign="top" width="472">gives you only entites with the word "Falls" in their Name</td>
		</tr>
		<tr>
			<td valign="top" width="351">_{root service URL}?$select=Name&amp;$orderby=Name_</td>
			<td valign="top" width="472">selects just the Name property and sorts it</td>
		</tr>
		<tr>
			<td valign="top" width="351">_{root service URL}?$expand=Category_</td>
			<td valign="top" width="472">this one brings in the related Category entity... this a significant point and a differentiator from flat GET web service operations. Look at the JSON message in the response with and without this URL property.</td>
		</tr>
	</tbody>
</table>
```

If that doesn&#39;t turn your crank then you should check your Geek card... it might be expired.

## Next, we go Metro...

We&#39;re ready to consume our data. We&#39;re going to be working here with an HTML/JS Metro application which makes it reasonable brainless to consume JSON. Here we go...

I had you create your Metro app from the navigation template, so you should have a _pages_ folder (assuming your using Visual Studio 2012 as opposed to Visual Studio 11). In there you have home.html, home.css, and home.js. Those three files are all we&#39;re going to concern ourselves with for now.

In the .html file, you need to create a ListView and define an item template and a header template (because we want our items to appear in groups). Here&#39;s what that would look like...

``` html
<div id="itemtemplate" data-win-control="WinJS.Binding.Template">
    <div data-win-bind="onclick:click">
        <img data-win-bind="src:ImageUrl" />
        <div data-win-bind="innerText:Name"></div>
    </div>
</div>
<div id="headertemplate" data-win-control="WinJS.Binding.Template">
    <div data-win-bind="innerText:category"></div>
</div>
<div id="list" data-win-control="WinJS.UI.ListView"></div>
```

Then in the .css file add the following so that our images are the right size and our ListView is tall enough to show two rows...

``` css
.homepage section[role=main] {
    margin-left: 120px;
}

.homepage #list {
    height: 100%;
}

    .homepage #list img {
        width: 280px;
        height: 210px;
    }
```

Finally, in the .js file we need to add just a little bit of code. I&#39;ll just drop it all on you and then explain each section. Put this inside the page&#39;s _ready_ method...

``` js
var attractionsListGrouped = new WinJS.Binding.List().createGrouped(
    function (i) { return i.Category.Name; },
    function (i) { return { category: i.Category.Name }; }
);

var list = document.querySelector("#list").winControl;
list.itemDataSource = attractionsListGrouped.dataSource;
list.itemTemplate = document.querySelector("#itemtemplate");
list.groupDataSource = attractionsListGrouped.groups.dataSource;
list.groupHeaderTemplate = document.querySelector("#headertemplate");

WinJS.xhr({
    url: "http://onesweetstack.cloudapp.net/Entities.svc/Attractions?$expand=Category",
    headers: {"Accept":"application/json;odata=verbose"}
    }).then(function(xhr) {
        JSON.parse(xhr.response).d.forEach(function (i) {
            i.click = function (args) { WinJS.Navigation.navigate("/pages/attraction/attraction.html", i); }
            i.click.supportedForProcessing = true;
            attractionsListGrouped.push(i);
        });
    });
```

The first part (`var attractionsListGrouped...`) creates a new `WinJS.Binding.List` that groups the items by their `.Category.Name`. This necessitates that we bring our Attraction entities down with that `$expand` property included to get the related Category, but that&#39;s easy so we worry not.

The next part imperatively sets the item and header templates and the data sources of both the items and the groups. This can be done before our list has even been populated with any items. In fact, we need to do it that way because the call we make to get the items is asynchronous and we need that list that we&#39;re binding to to exist before we even get back from that call.

The last part is the _xhr_ call. You can see the syntax. The xhr expects an object within which we&#39;re specifying the url and a custom header. The function we pass in to the subsequent .then is going to run _after_ we get back from the xhr call. At that point, we can look at the response, parse it as JSON, and then for each item, push it into our list. This list is a WinJS.Binding.List which means that it is essentially _observable_ and will tell the UI when updates have been made so it can change accordingly. So when our items are fetched and filled in, the user will see them pop into the ListView in his view.

## Tangent about application/JSON;odata=verbose...

Remember how we added _application/JSON;odata=verbose_ to our headers for the xhr call? Why would we do that? It&#39;s because we&#39;re using the prerelease version of WCF DS, and the existing OData JSON syntax has been dubbed "verbose" to make room for some awesome new methods for expressing rich, typed, interrelated OData while keeping the payload light, light, light. More on that at a later time.

## Conclusion

Attached you&#39;ll find the complete source code. Hope it helps you learn Windows 8 development and I hope you get your first app done soon and are rewarded with huge royalty checks :)

And that does it for this walk through. It was a marathon post, so if you&#39;re read this far email me your mailing address and I&#39;ll send you a gift in the mail. I&#39;m betting I won&#39;t be troubled to send too many gifts :) (offer expires the end of June 2012)

[OneSweetStackLive.zip (9.90 mb)](/bcms-media/Files/Download?id=737b79eb-74d2-41a3-a90e-a35200ddf2dd)