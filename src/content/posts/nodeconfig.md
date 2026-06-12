---
title: Beautiful Cascading Node Config
categories: [Node.js]
tags: [args, config, developer-joy, javascript, node, typescript]
date: 2018-05-17 12:00:00
---

> FYI, this is a repost. I lost this post's source markdown and just recreated it for posterity.

I just learned something, which instantly makes it a good day.

I’ve been on the lookout for a really good pattern in Node.js projects to allow a user to…

1. Define configuration variables in a JSON config file (not flat environment variables!)

1. Allow them to override the configuration variables with command line arguments

1. Make the command line arguments work like any good, modern CLI with double dash full names (i.e. `--foo bar`) or single dash aliases (i.e. `-f bar`)

1. Let the dev know if their code isn’t working because a certain configuration variable hasn’t been set

Here’s what I have now.

``` js
let config = require('./arguments.json');
const commandLineArgs = require('command-line-args')

//override config with command line options  
let args = [
    { name: 'argumentA', alias: 'a', required: true },
    { name: 'argumentB', alias: 'b', required: true },
    { name: 'argumentC', alias: 'c' }
];
config = { ...config, ...commandLineArgs(args) };

//throw errors if any required arguments are missing
args.filter(a => a.required && !config[a.name]).forEach(a => {
    throw new Error(`A ${a.name} argument must be provided either in a device.json file or as a command line argument.`);
})
```

So, the `arguments.json` file that we bring in is a place we can define arguments permanently so they don’t have to be included on the command line.

Then we pull in a dependency on the `command-line-args` package. I was delighted to discover that this package works exactly like I expected it too. For each argument, we can give it a long name (i.e. `argumentA`) and a short name (i.e. `a`). Finally, I added the `required` property myself, which I’ll show you in a second.

Next, I coerce these two sources of configuration values using a spread operator. I talked a lot more about spread operators in my [Level Up Your JavaScript Game! - Other ES6 Language Features](http://codefoster.com/levelup-es6) post. The order of these two spread objects is such that it will take the values in my file first, but then override them with command line arguments if they exist.

Finally, I added another little trick that wasn’t built in to the `command-line-args` package (although I think it should be). I added the ability to make certain arguments required, and if not to throw an error so the user knows exactly why things don’t work.

That’s all!