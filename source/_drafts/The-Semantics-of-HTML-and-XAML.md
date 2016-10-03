---
title: The Semantics of HTML and XAML
tags: []
date: 
---

I had a question from a developer in my community and I decided to respond via a blog post.

I have taken liberty to distill and rephrase the question as follows...;

_HTML is less verbose than XAML, but it's often times harder to figure out what's going on with a bunch of div's on the page. How do you determine by looking at your HTML what's going on with the styling? Shouldn't it be more like XAML - easy to read?_

What we're talking about here fundamentally is called semantics.

Let's dig in.

### Readable UI Code

We're developers. We write code for a living. The designers of the coding languages we use have to strike a fine balance. The code has to be read by computers and humans, and I'm not sure if you're aware, but the two are more different than they are alike.

These days, compiler technology has advanced to the point where we're able to make almost any code understandable by computer, so we're left with the bigger challenge - the human.

A developer should not just be able to read and write the code. He should enjoy it. He should feel as though, even if the language hardly resembles his spoken language, that it is still an expression and extension of his thoughts and the implementation of his logic.

Occasionally, we write user interface code and we target eye balls. With UI, the attempt to is show something that a user can quickly understand and interact with. Its importance can hardly be overstated. Actually, in light of world affairs, I can't exactly call it critical, but in determining the degree to which users enjoy a platform or enjoy using your app, it certainly is.

Other times, the code we write simply targets results. That web service operation comes back with an answer. That's all. As long as it comes up with the right answer, we couldn't care less how it does it.

In this article, I'm going to focus on UI code.

### HTML

The UI language of the web is HTML. It has been for a couple of decades. Talk about ubiquity! Pretty much every device in existence has the ready capability of interpreting HTML (most often, obviously, it's the browser).

For apps, there's not nearly so much ubiquity. The UI language of most devices is proprietary. Generally, they're more powerful than earlier versions of HTML, but pretty much on par with HTML5.

### XAML

Such is the case with XAML. XAML is the UI language of Windows platforms.

XAML looks somewhat like HTML with all kinds of anglies (<>) everywhere, and the analogy is a direct one. In both cases, what we're trying to accomplish is to instantiate (or declare) an interface. We're not trying to implement any business logic.

### Two Reasons for the Readability

As I see it, there are two main reasons that XAML tends to be easier to read. The first is the language itself. The second is the tendency for developers to conjoin element instantiation with layout and styling. Let's discuss both of these...;

### XAML is More Semantic

As I mentioned earlier, HTML is [over 20 years old](http://en.wikipedia.org/wiki/HTML), while XAML is [less than 10](http://en.wikipedia.org/wiki/Windows_Presentation_Foundation). Plus, HTML has evolved with the help of a vast community of individuals and organizations, while XAML has been directed by a single organization with input from developers.

Consequently, HTML has been a semantic disaster. The UI elements defined by HTML have evolved along with the overall function of HTML. HTML was originally designed to mark up documents and give them some presentation meaning - think bold text, block quotes, borders, etc. HTML is presently chartered with providing full-fledged application UI capabilities.

So, in HTML, you have often seen the same element (the div) used for many nested levels of generic containers.

Recently, HTML5 has added tags to improve its semantics, but few of them actually indicate the layout or style of elements in the document.

### Separation of Instantiation and Styling

An now for the second major reason that that XAML tends to be easier to read than HTML.

When we define UI, we're doing two things essentially - we're creating UI elements and then we're laying them out and styling them.

In HTML, the role of instantiating elements is usually separate from the role of laying them out and styling them. The HTML does the instantiating and the CSS does the layout and style.

A typical XAML document, on the other hand includes both roles. It's certainly possible and usually recommend as good practice to separate styles, but more often they are all done in the same file.

### An Example

Look at the HTML and XAML in the following simple example. Both do approximately the same thing. They render 3 boxes side by side across the page next to one another. 

<div>
<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width: 50%;">

**HTML**

			</td>
			<td style="width: 50%;">

**XAML**

			</td>
		</tr>
		<tr>
			<td style="vertical-align: top;">

<div>

			  <div></div>

			  <div></div>

			  <div></div>

			</div>

			</td>
			<td>

<Grid>

			  <StackPanel Orientation="Horizontal">

			    <Rectangle Width="100" Height="100"/>

			    <Rectangle Width="100" Height="100"/>

			    <Rectangle Width="100" Height="100"/>

			  </StackPanel>

			</Grid>

			</td>
		</tr>
	</tbody>
</table>
</div>

In this example, it's easy to see the difference between the languages.

The HTML is using a div with div's, and a div does not elude to its graphical intent. In other words, it does not convey layout, but only structure and containment.

From the HTML, we can tell that we have a container that has three child containers, and that's all we can tell.

The XAML, on the other hand, conveys quite a bit of layout as well as structure. In it, we can tell that we're going to have a horizontal arrangement of size 100 boxes.

As I mentioned already, a person can pull the styling out of a XAML document to create a separation. Likewise, one can add the styling in to an HTML file. It's not as easy or elegant with XAML to create a divide, and it's not as easy or elegant with HTML to join them. It's a difference in the nature of the languages.

### Implications

We've established something about the difference in nature between HTML and XAML, so where does that leave us?

I think that leaves us with two impressive UI languages that are each suited to assist with different scenarios and different developer preferences.

HTML is better at...;

*   creating a UI that works just about anywhere
*   creating a responsive UI that adapts to various display conditions
*   providing concise, generic UI syntax that can adapt and specifies no display characteristics explicitly

XAML is better at...;

*   bringing the next developer to look at your code up to speed quickly
*   solid, pixel perfect, and predictable control over layout
*   practically unlimited possibilities for importing custom doohickies, gadgets, and thingies

### Conclusion

So, is XAML more semantic than HTML? Yes.

Why? Because that's the way it's been designed and the way it's evolved.

Is it possible to express HTML as semantically as XAML? Not quite. It's possible to embed styling into HTML and make it more verbose, but it is fundamentally less semantic.

Are HTML's semantic deficiencies a bad thing? Maybe. XAML fans certainly get a lot of enjoyment ridiculing it, but it has its advantages - mainly in its ability to separate style and maintain a generic document structure.

Hope that helps. Thanks for listening.