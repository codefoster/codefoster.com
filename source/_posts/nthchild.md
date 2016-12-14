---
title: 'CSS Tip: nth-child and nth-of-type Pseudoclasses'
categories: [HTML/CSS]
tags: [pseudoclass]
date: 2012-08-23
permalink: nthchild
---

Let&#39;s say we have the following HTML…

``` html
<ul class="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
</ul>
```

That&#39;s not difficult. It&#39;s a `ul` (unordered list) which is by default rendered with bullets, although you&#39;ve got full control over how exactly you want it to render. In this case, we have 6 items. Simple. And here&#39;s how it should render in an empty Windows 8 app (with the default dark theme)…

Now what if we wanted every item to be yellow? Go ahead and think about how you&#39;d do it before you look at my answer.

Here it is…

``` css
.list li {
    color: yellow;
}
```

That&#39;s easy enough. Now what if we wanted to give every other item a dark blue background? Well, there are at least four ways I can think of to do that. I&#39;ll include all four.

The following two are equivalent and will highlight every other line starting with the first…

``` css
.list li:nth-child(2n-1) {
    color: yellow;
}

.list li:nth-child(odd) {
    color: yellow;
}
```

The first rule contains a formula and the second simply contains the word `odd`. This `nth-child` is called a _pseudo-class_ because we didn&#39;t have to manually decorate every other `li` tag with a class in order to select them. Instead, we use a pseudo-class. Much easier.

The `nth-child` pseudo-class uses a formula that is always of the form: `an+b`. Essentially, CSS is going to plug a set of positive integers starting with 0 into the `n` in that equation. The result will be a set of integers. CSS will omit the negative and zero values and use the resulting positive integers to determine which items should be matches.

Our `2n-1` formula then would evaluate to an integer set that looked like `[-1,1,3,5,7,9,…]`. CSS would then ignore the -1 and apply this style to the 1st, 3rd, and 5th elements. Because highlighting every other row is likely a very common case, CSS defines the odd keyword to simplify matters.

The following two are also equivalent and will highlight every other line starting with the second…

``` css
.list li:nth-child(2n) {
    color: yellow;
}
.list li:nth-child(even) {
    color: yellow;
}
```

Again, the first is an equation and the second is a keyword. The set of positive integers `[0,1,2,3,4,5,…]` would get evaluated in that equation to `[0,2,4,6,8,10,…]`. The 0 would be ignored, and the 2nd, 4th, and 6th list items would have the style applied. Here&#39;s the result…

Here are some other, more advanced uses of the `nth-child` pseudo-class…

Formula | Result
---     | ---
`3n`    | Every 3rd element
`10n`   | Every 10th element
`-n+7`  | The first 7 elements
`n`     | All elements (pointless)
`n+4`   | All elements starting with the 4th
`2n+3`  | Every other element starting with the 3rd

And if you want to see some more, go to [Useful :nth-child Recipes](https://www.google.com/url?q=https://css-tricks.com/useful-nth-child-recipies/&sa=U&ved=0ahUKEwiuqZPB_vLQAhVQwGMKHTf_AM0QFggFMAA&client=internal-uds-cse&usg=AFQjCNEV-cas1Btuoh8_rbK1SS7UOupbYA) on [CSS Tricks](http://css-tricks.com.

So there you have it. That&#39;s nth-child. Pretty handy, eh?

Now let&#39;s look at nth-of-type and see how it differs from nth-child. Consider the following HTML now…

``` html
<div class="list">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <div>Child Div 1</div>
    <div>Child Div 2</div>
    <p>Paragraph 3</p>
    <p>Paragraph 4</p>
    <p>Paragraph 5</p>
    <p>Paragraph 6</p>
</div>
```

Now we have a `div` that has mixed child types. It has some `p` elements and some child `div` elements.

When we attempt to apply the same blue style to the second div using our `nth-child` syntax…

``` css
.list div:nth-child(2) {
    color: yellow;
}
```

We don&#39;t get the desired effect. Nothing will be highlighted. See, the `nth-child` pseudo-class is indicating that our target element has to be the 2nd child, but it&#39;s not. It&#39;s the second _div_, but it&#39;s not the second _child_. To specify that we&#39;re looking for the second _div_, we use `nth-of-type` like this…

``` css
.list div:nth-of-type(2) {
    color: yellow;
}
```

And that brings us to the end of the post. If you have any questions or comments, please feel free to leave them below.