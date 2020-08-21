        <item>
            <title>Troubleshooting Your EF Code First Mapping</title>
            <link>http://codefoster.wordpress.com/2012/02/03/troubleshooting-your-ef-code-first-mapping/</link>
            <pubDate>Fri, 03 Feb 2012 22:10:18 +0000</pubDate>
            <dc:creator>jeremyrfoster</dc:creator>
            <guid isPermaLink="false">http://codefoster.wordpress.com/?p=34</guid>
            <description></description>
            <content:encoded><![CDATA[Entity Framework Code First is a dream come true.

Here's the scenario. You're a developer and a you create a great set of objects and relationships between them that perfectly expresses the structure of your prospective application. You want to just tell your code to go ahead and create a new database (or map to an existing one) that matches your model and allows you to store the data?

So you do this with EFCF and all is well. Except that occasionally you tweak your model and run into a mapping error and all is not well. EF has a hard time communicating to you what exactly is wrong and can give some pretty obscure exception messages, and you can spend a lot of time (personal experience) tracking down what you've done wrong.

The error I just ran into is this one: "Type Address_Country is not defined in namespace PEP.CIM.Entities.Mapping (Alias=Self)." Huh? I know that I just tried to create a Country navigation property on my Address entity so I have a general idea of where my error might be, but after a double check of my code I can't see how it's any different from my other relationships that are working fine. So what's the problem?

I stumbled upon a great way to troubleshoot these kinds of issues, though... the Entity Framework Power Tools (at CTP1 as I type). I have used this tool countless times to reverse engineer a database into good-lookin' C# code, but today I used it for something else. When the tool is installed (and you have EF referenced in your project!), you can right click on your context and get a few options under the Entity Framework menu item.

<a href="http://codefoster.files.wordpress.com/2012/02/efpt1.png"><img class="aligncenter size-full wp-image-36" title="EFPT" src="http://codefoster.files.wordpress.com/2012/02/efpt1.png" alt="" width="580" height="273" /></a>

In my case, I was able to use View Entity Data Model XML and then look through the resulting XML for the Address_Country relationship. I fairly quickly discovered that I had NavigationProperty elements for my Address_Country but I didn't have a coresponding Association (as I did for my working relationships). This lead me back to my fluent mapping statement...
<pre>HasRequired(t =&gt; t.Country).WithMany(t =&gt; t.AddressesByAdrCountryCdvId).HasForeignKey(t =&gt; t.AdrStateProvinceCdvId); HasRequired(t =&gt; t.State).WithMany(t =&gt; t.AddressesByAdrCountryCdvId).HasForeignKey(t =&gt; t.AdrStateProvinceCdvId);</pre>
where I discovered that I had made a grievous copy paste error. As you can see, I'm attempting to add mappings for Country and State, but it's all wrong. Each is mapping AddressesByAdrCountryCdvId and AdrStateProvinceCdvId. Here's the way it should look...
<pre>HasRequired(t =&gt; t.Country).WithMany(t =&gt; t.AddressesByAdrCountryCdvId).HasForeignKey(t =&gt; t.AdrCountryCdvId); HasRequired(t =&gt; t.State).WithMany(t =&gt; t.AddressesByStateProvinceCdvId).HasForeignKey(t =&gt; t.AdrStateProvinceCdvId);</pre>
Now that's better! Now not only does my build succeed, but my unit tests all pass as well.

It also may help to use the same technique to View Entity Data Model DDL SQL and see what SQL would be generated to create your tables and constraints.

I hope this helps you find mapping issues in your code first projects. Happy coding.]]></content:encoded>
            <excerpt:encoded><![CDATA[]]></excerpt:encoded>
            <wp:post_id>34</wp:post_id>
            <wp:post_date>2012-02-03 14:10:18</wp:post_date>
            <wp:post_date_gmt>2012-02-03 22:10:18</wp:post_date_gmt>
            <wp:comment_status>open</wp:comment_status>
            <wp:ping_status>open</wp:ping_status>
            <wp:post_name>troubleshooting-your-ef-code-first-mapping</wp:post_name>
            <wp:status>publish</wp:status>
            <wp:post_parent>0</wp:post_parent>
            <wp:menu_order>0</wp:menu_order>
            <wp:post_type>post</wp:post_type>
            <wp:post_password></wp:post_password>
            <wp:is_sticky>0</wp:is_sticky>
            <category domain="post_tag" nicename="code-first"><![CDATA[code first]]></category>
            <category domain="post_tag" nicename="ef"><![CDATA[ef]]></category>
            <category domain="post_tag" nicename="entity-framework"><![CDATA[entity framework]]></category>
            <category domain="category" nicename="instructional"><![CDATA[Instructional]]></category>
        </item>
