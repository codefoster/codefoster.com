---
title: Deploying TypeScript Projects to Azure from GitHub Using Continuous Deployment
tags: []
date: 2016-10-02 16:03:46
---

I&#39;m working on a fun project called Waterbug. You can peek or play at [github.com/codefoster/waterbug](http://github.com/codefoster/waterbug).

Waterbug is an app that collects data as you row on a [WaterRower](http://www.waterrower.com) and visualizes it in an [Angular 2.0](http://angular.io) app.

It&#39;s a fun app because it uses a lot of modern stuff. Modern stuff is usually the fun stuff, and that&#39;s why it&#39;s always nice to be working on a [greenfield project](https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjjj4b2hMHMAhUO2GMKHTS6AYIQFggcMAA&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGreenfield_project&amp;usg=AFQjCNHt9ZMyc4v_k0ZTE7IyXOBBTOfUyA&amp;sig2=-GGq36iBYcMBQo6NPXF4Tw).

So, like I mentioned, one of the components of this app uses Angular 2.0\. Angular is itself written in [TypeScript](http://typescriptlang.org), and you&#39;re strongly encouraged to write your Angular 2.0 apps using TypeScript. You don&#39;t&nbsp;_have_&nbsp;to, but at least in my opinion, you&#39;d be crazy not to.

TypeScript is awesome.

TypeScript makes everything more terse, more elegant, and easier to read, and it allows your tooling ([Visual Studio Code](https://go.microsoft.com/fwlink/?LinkID=534107) is my editor of choice) to reason about your code and thus help you out immensely.

The important thing to remember about TypeScript and the reason I think for it&#39;s rapid uptake is that it&#39;s not a different language that compiles to JavaScript. It&#39;s a _superset_ of JavaScript. That means you don&#39;t throw any of your existing work away. You just start sprinkling in TypeScript where it benefits you. If you&#39;re like me though, it won&#39;t be long before you&#39;re addicted to using it everywhere.

When you&#39;re working on a TypeScript project, you write in .ts files and those get [transpiled](https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwiSk4frhcHMAhUI72MKHXJaCEoQFggcMAA&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSource-to-source_compiler&amp;usg=AFQjCNFo9xhdBjlOru4lIfDTsrFZAk4Lgg&amp;sig2=WbQXPH65kx5wRegPY4Xq4A&amp;bvm=bv.121099550,d.cGc)&nbsp;from .ts files to .js files.

Herein lies our first question.

**Should we check those .js files (and also the .js.map files that are created by default) into our code repository (GitHub in my case)?**

The answer is&nbsp;_no_.

The .js code is derivative and does not belong in source control. Source control is for&nbsp;_source_&nbsp;files. The .ts files are our source files in this case.

If you start checking your .js files into source control, you&#39;re inevitably going to end up with .ts files and their associated .js files out of sync. Hair pulling will surely ensue.

I&#39;ve gone one step further and determined that I don&#39;t even want to look at my .js files in my editor.

In Visual Studio Code, I can go to File | Preferences | Workspace Settings, which opens (or creates if necessary) my projects .vscode\settings.json file. Then I can sprinkle in a little magic dust and tell Code that I&#39;m not so concerned with .js and .js.map files and I&#39;d just rather they not show up in my File Explorer pane or in my global search results.

Here&#39;s the magic dust...

<script src="https://gist.github.com/codefoster/31892cd43692b9d56fb7e0e8d51540a1.js"></script>

If, however, you don&#39;t check your .js files into GitHub, then when you [configure Azure to do continuous deployment from GitHub](https://azure.microsoft.com/en-us/documentation/articles/app-service-web-arm-from-github-provision/), it&#39;s not going to pull in any .js files and that&#39;s what your users&#39; browsers really need to make the site run.

So this is where some people say &quot;Oh, blasted! I&#39;ll just check my .js files in and call it done&quot;.

True that works, but it also incurs technical debt. Don&#39;t do it. It&#39;s not worth it. Stick to your philosophical guns and don&#39;t make choices like this. It may cost a little more up front to figure out the right way, but you&#39;ll be glad later.

**So, where and when _should_&nbsp;the .ts files get transpiled?**

The answer is that they should get transpiled _in Azure_&nbsp;and it should happen _each time there&#39;s a deployment_.

Now, let&#39;s dig in and figure out how to do this.

If you do a little research, you&#39;ll find that when you wire Azure up to look at GitHub, it does a pull of the code every time you push to the configured branch. Then it runs a default deployment script if you haven&#39;t specified otherwise.

To run some code for each deployment, you simply customize this deployment script. You do that by adding two files to the root of your project: .deployment and deploy.cmd. You could just create these files manually, of course, but it&#39;s better to generate them. That way you have the latest recommended default script and it specifically made for the type of application you&#39;re running.

To generate the default deployment script, you first need to have the Azure Xplat CLI tool installed, which is a breeze. Just do `npm install -g azure-cli`. If you already have it and haven&#39;t updated it for a while, then run `npm up -g azure-cli`.

After you have the azure-cli tool, you need to login to your Azure subscription. This is a lot easier than it used to be.

Simply type `azure login`. That will generate a little code for you and then ask you to go to a website, login, and enter your code. From that point forward, you&#39;re able to access&nbsp;_your_&nbsp;Azure goodies from your command line. CLI FTW!

Once you get that, just go to the root of your website project (at the command line) and then run...

`azure site deploymentscript --node`

This will create the .deployment and deploy.cmd files.

Okay, now we just have to customize the deploy.cmd file a bit.

If your deployment script looks like mine, then there&#39;s a part that looks like this...

`:: 3\. Install npm packages

IF EXIST &quot;%DEPLOYMENT_TARGET%\package.json&quot; (

&nbsp; pushd &quot;%DEPLOYMENT_TARGET%&quot;

&nbsp; call :ExecuteCmd !NPM_CMD! install --production

&nbsp; IF !ERRORLEVEL! NEQ 0 goto error

&nbsp; popd

)`

That script runs `npm install` to install your npm dependencies. It adds the `--production` flag to indicate that developer dependencies should be skipped since this is not a dev box - it&#39;s the real deal!

Just after an npm install, you&#39;re ready for the meat of the matter. It&#39;s time to turn all of your .ts files into .js files.

To accomplish this, I added this just after step 3...

`:: 4\. Compile TypeScript

echo Transpiling TypeScript in %DEPLOYMENT_TARGET%...call :ExecuteCmd node %DEPLOYMENT_TARGET%\node_modules\typescript\bin\tsc -p &quot;%DEPLOYMENT_TARGET%&quot;`

The first line is obviously a comment.

The echo shows what&#39;s going on in the console so you can find it in the log files and such.

The last line calls :ExecuteCmd (which is a function that comes with the default deployment script) and asks it to run TypeScript&#39;s commandline compiler (tsc) using node and pointing it to the deployment target. The deployment target is the /site/wwwroot directory that contains your site. The command explicitly uses the tsc command that&#39;s in the deployment target&#39;s node_modules\typescript\bin folder. That should be there because we have typescript defined as one of the projects dependencies in the package.json. Therefore the npm install from a few lines up should have installed typescript. Another strategy would be to install typescript globally, but I opted for this method.

And that&#39;s really all there is to it. I like to jump over to my SCM site (&lt;mysite&gt;.scm.azurewebsites.net) and go to Debug Console | PowerShell to see the actual files on the site and make sure the .js files were generated.

If you look in the list of deployments in your Azure portal, you can actually double-click on the latest deployment and then click on View Log to see the console output that was captured when this deployment script ran...

![](http://codefoster.blob.core.windows.net/site/image/6a10bd6849564ccda0f95b41f92fc751/tscazure_viewlog_1.png)

In the log, you can see our echo and that the transpilation process has occurred. Don&#39;t worry about the errors that are thrown. Those are expected and didn&#39;t stop the process from completing.

![](http://codefoster.blob.core.windows.net/site/image/3ee80a5fc5624c9696e95a29632a6cdc/tscazure_success_1.png)