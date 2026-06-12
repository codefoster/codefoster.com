---
title: The Git Add Patch Command
categories: [Code]
tags: [github,git,source-control]
date: 2016-12-15
---

When you're using Git for your version control, each commit should be *atomic* and *topical*. That is, it should contain related changes and nothing _but_ related changes.

You don't commit something broad in scope like "changed all the necessary files to implement feature 712". That's what a branch is for. Instead, you commit something like "added fetch() method call to the orders page". That's likely just one small part of feature 712. A whole bunch of commits end up implementing the feature. 

But what about when you're working away like crazy on your code base and you end up changing a single file in two different places and these two changes relate to different commits? Most people just go ahead and roll the changes into the same commit. Not ideal.

The hard way to do this right is to delete one change, stage and commit, and then paste the change back in.

There's an easier way though. It's called a _patch add_, but I like to call it a _partial add_. `git add -h` will show you the `-p` argument and inform you that it allows you to "select hunks interactively". As much as that sounds like an online dating service for women, its actually just a really easy way from the command line to stage _portions_ of a file and not the entire file.

Let's say we start with this file...

``` js
//foobar.js
function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}
```

Now let's say I end up editing both of the functions in that file, but these changes are unrelated to one another. I simply changed `foo` to `foo foo` and `bar` to `bar bar`. Let's look first at using the command line to take care of business here, and then we'll try it with Visual Studio Code.

Here's the changed file contents...

``` js
//foobar.js
function foo() {
    console.log('foo foo');
}

function bar() {
    console.log('bar bar');
}
```

## Command Line
Type `git diff`...

```
C:\scratch\foobar [master]> git diff
diff --git a/foobar.js b/foobar.js
index 10aef9d..4c282ce 100644
--- a/foobar.js
+++ b/foobar.js
@@ -1,8 +1,8 @@
 function foo() {
-    console.log('foo');
+    console.log('foo foo');
 }

 function bar() {
-    console.log('bar');
+    console.log('bar bar');
 }
```

Now to actually start the staging command, we type `git add foobar.js -p` and get the same diff along with these interactive options...

```
Stage this hunk [y,n,q,a,d,/,s,e,?]?
```

There are actually a few more options than what are listed there too. You can type `?<enter>` to get help on what those mean, but to spare time they are...

Command | Action
--- | ---
y | stage this hunk
n | do not stage this hunk
q | quit; do not stage this hunk or any of the remaining ones
a | stage this hunk and all later hunks in the file
d | do not stage this hunk or any of the later hunks in the file
g | select a hunk to go to
/ | search for a hunk matching the given regex
j | leave this hunk undecided, see next undecided hunk
J | leave this hunk undecided, see next hunk
k | leave this hunk undecided, see previous undecided hunk
K | leave this hunk undecided, see previous hunk
s | split the current hunk into smaller hunks
e | manually edit the current hunk
? | print help

Which to choose? Well, the diff that we see on the screen shows _both_ changes. That's too much. So we want to press `s` to split this hunk. That gives us...

```
Stage this hunk [y,n,q,a,d,/,s,e,?]? s
Split into 2 hunks.
@@ -1,5 +1,5 @@
 function foo() {
-    console.log('foo');
+    console.log('foo foo');
 }

 function bar() {
Stage this hunk [y,n,q,a,d,/,j,J,g,e,?]?
```

...where now only one of the changes remains and we have our same interactive prompt.

The change we're looking at is entirely related and should be in a single commit (along with possibly some other files). So we press `y` to stage it and then `q` to quit and we're finished.

## Visual Studio Code
Now let's do the same thing using Visual Studio Code. This and a few other git-enabled IDE's are smart enough to let you do a patch add. VS Code doesn't call it a _patch add_ though. It calls it _staging selected lines_, which actually makes good sense.

Start with the same file and changes, and view the changed file in VS Code and you should see...

![](/files/addpatch_01.png)

Now just put your cursor anywhere within the first change in the pane on the right and then find the little ellipse (`...`) on the top right corner of the window. From there choose _Stage Selected Lines_.

![](/files/addpatch_02.png)

And then if you look in the Git panel, you'll see that the `foobar.js` file has been staged but it also has changes that have not yet been staged.

![](/files/addpatch_03.png)

Whether you used the command line or Visual Studio Code to stage that first change and commit, you can just go about staging and committing the rest of the file as you normally would.

The end.