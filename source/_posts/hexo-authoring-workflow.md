---
title: The Authoring Workflow in Hexo
categories: [Blogging]
tags: [writing]
date: 2016-12-17 20:30:01
---

In [hexo](http://hexo.io), there&#39;s a really nice workflow for creating a new post. There are [docs](https://hexo.io/docs/writing.html) on this, but who needs docs when we&#39;ve got bloggers, right?

First, in the main project, make sure the `/scaffolds/draft.md` is the way you like it. Here&#39;s mine…

``` md
---
title: {{ title }}
categories: []
tags: []
---
```

Notice how the date is excluded. If you&#39;re writing a draft post, you don&#39;t know when you&#39;ll publish it yet, so you likely want to leave that off. It gets populated automatically a little later. Read on.

Then make sure your `/scaffolds/post.md` is the way you like it. Here&#39;s mine...

``` md
---
title: {{ title }}
categories: []
tags: []
date: {{ date }}
---
```

It looks just the same, but there&#39;s a date there.

Now here&#39;s what my workflow looks like every time I create a new blog post.

1. At the command line type `hexo new draft foo`
1. Switch to Visual Studio Code (or your markdown editor of choice)
1. Edit the `foo.md` file that should be in your `/source/_drafts` folder
1. Back at the command line type `hexo publish foo`

When you created the initial draft, it created in the `_drafts` folder which doesn&#39;t get generated, so it&#39;s not going to make it to your website yet.

When you published it, hexo moved the markdown file from `_drafts` over to `_posts` and added the current date and time.

I think that&#39;s a slick workflow and I&#39;m very happy with it.