---
title: Move to Hexo
categories: [Blogging]
tags: []
date: 2016-12-16
---

I just finished migrating all of the content on codefoster.com over to my **fifth** blog engine!

To date, I've run codefoster.com on [Wordpress](https://wordpress.com/), [BlogEngine.net](http://dotnetblogengine.net/), [Lemoon](http://www.lemoon.com/), [BetterCMS](http://www.bettercms.com/), and now [Hexo](http://hexo.io).

Hexo, unlike the others, is a static site generator. That means that the work of building pages out of content is done as a build step before the site gets deployed, and the deployed site is actually just a bunch of HTML files. That makes it fast, secure, and searchable. You may have heard of [Jekyll](http://jekyllrb.com/) - a quite popular site generator that works much the same.

When I first heard about static site generators some time ago, I was actually quite skeptical, but the idea started attracting me more and more. Then when I discovered that Hexo uses Node.js, I decided to give it a shot. I love node. 

Hexo was easy to get started with. I went to [hexo.io](http://hexo.io) and started learning about all of its capabilities to make sure it would cover my needs, which are...

- **Need 1: Easy Authoring.** I was never as big a fan of Windows Live Writer as so many others were. It just felt like too much behind-the-scenes magic happening. In a static site generator, you author in markdown. A markdown file is a simple text file that uses simple codes for formatting instead of HTML mark_up_ which is rather robust. For example, instead of using `<b>strong type!</b>` to bold a word, you use `**strong type!**`. Furthermore, instead of a table looking like...

    ``` html
    <table>
      <thead>
        <td>H1</td>
        <td>H2</td>
      </thead>
      <tbody>
        <tr>
            <td>A1</td>
            <td>A2</td>
        </tr>
        <tr>
            <td>B1</td>
            <td>B2</td>
        </tr>
      </tbody>
    </table>
    ```

    It looks like this...
    ``` md
    H1 | H2
    --- | ---
    A1 | A2
    B1 | B2
    ```
    The best markdown when you write on developer topics like I do is the backtick (\`). If you use single backticks inline like \`let x = 10;\`, you get inline text that's formatted like code like `let var x = 10;`. If you surround an entire code block with three backticks, you get an entire code block, and if you add a language code (js, csharp, html, etc.) after the opening backticks, you even get correct color syntax for that language.

- **Need 2: Custom Web Magic.** I'm a web guy, and my blog is an authoring platform _on the web_, so I should be able to write HTML (even though I'm authoring in markdown), sprinkle in custom CSS, and add JavaScript at will.
    Markdown inherently permits inline HTML. It neither complains nor modifies it. Same with embedded `<style>` blocks or references to `css` files. It also allows me to pull in JavaScript that will run client-side.

- **Need 3: Themes and Plugins.** I like web design, but I like it more when it's done for me and I can just tweak it to my liking. There are a lot of really good [themes for Hexo](http://hexo.io/themes). I also like being able to extend the functionality of my site quickly and easily with plugins. Hexo has [plugins](http://hexo.io/plugins) too.
    I am using the [chan](https://github.com/denjones/hexo-theme-chan) theme for codefoster.com right now, but of course it would be trivial to switch.
    Installing themes and plugins is as simple as a familiar `git clone` command. You pull down the files from GitHub, you may need to add a little bit of configuration in your site's `_config.yml` file, and you're good to go.

- **Need 3: Alias support.** I think there's a lot of value in a good, short URL. The URL for this post, for instance, is simply `codefoster.com/movetohexo` as opposed to a URL that a lot of blogging platforms will default to that might be more like `codefoster.com/2016/12/14/Other/Move-to-Hexo`. That's easier to remember, easier to share, easier to type, and easier to look at.
    Since, like I mentioned, I've changed blog platforms 4 times, I have a number of legacy URLs that are important to maintain. Some of the platforms forced the longer format. Sometimes I just didn't know how to configure it to be shorter. Regardless, I need to redirect people. I need to redirect them from the old slug to the new.
    I also need to redirect folks from short URLs in my domain to external websites. For instance, if you go to [codefoster.com/codechat/codegalaxies](http://codefoster.com/codechat/codegalaxies), you'll jump out of my domain to Channel 9 to watch an interview I did there.
    Hexo allows both of these redirects with easy configuration. This functionality is available, actually, thanks to a plugin called [hexo-generator-alias](https://github.com/hexojs/hexo-generator-alias).

- **Need 4: Local Authoring and Local Serving.** I want to be able to work on blog posts whether I'm connected to internet or not, and I want to be able to visualize the results quickly and easily.
    Hexo allows me to run the `server` command to create a local server for my files in watch mode, so I can see the changes in my browser very shortly after making them in my IDE.

All in all, I'm thrilled with my choice of platform and am looking forward to figuring out more of the capabilities.

Drop a comment in the thread below (just opened up [guest commenting](/guestcomments) by the way) if you have feedback, if you have another blog engine that you use and love, or certainly if you're using Hexo too and want to share some advice.

Happy blogging! 

## ADDENDUM 1 (2016-12-16)
Someone pointed out that it would be good to share how I migrated my content from my old blog to Hexo. Great idea.

If you browse to hexo.io/plugins and search for "migrate" you'll see that there are migrators for:
- Blogger (`hexo-migrator-blogger`)
- GitHub Issues (`hexo-migrator-github-issue`)
- Joomla (`hexo-migrator-joomla`)
- RSS (`hexo-migrator-rss`)
- Wordpress (`hexo-migrator-wordpress`)

I was using a little-known, ASP.NET-powered blog engine called BetterCMS that was actually quite wonderful, although I think I made it clear that I wanted something lighter. There's obviously not a migrator for BetterCMS, but I did have an RSS feed, so I used that.

I was beyond pleased with the results. I was actually a bit shocked at how simple it was to run and how effective it was in migrating the majority of my content to markdown.

To migrate using the RSS migrator (and I assume the process with the other migrators is much the same), I simply ran at the command line from the root directory of my hexo site `npm install hexo-migrator-rss` and then `hexo migrate rss http://codefoster.com/rss`. I didn't use the optional `--alias` argument, but if it works as designed it would have been a good idea, because I spent a considerable amount of time doing it manually afterward. The `--alias` argument is supposed to add `alias: ` tags to the top of each post that allows existing blog URLs to be redirected to their new URL.

There was quite a bit of work to do in my markdown files after migration, but all of it was very much expected. It surrounded my code blocks with backticks, but I had to determine where I wanted inline code and where I wanted to use three backticks and a language designation to get a code block. I also discovered that the language designations are rather important since without them, the tool that formats your code either has to format it as generic code (fixed width font) or spend considerable cycles attempting to detect the language.