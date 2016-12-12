---
title: The Counter Principles of Metro Style Design
categories: [Design]
tags: [ui,ux,ui/ux,art,graphics]
date: 2012-05-30
permalink: counterprinciples
alias:
- post/2012/05/30/the-counter-principles-of-metro-style-design.aspx
- post/2012/05/30/The-Counter-Principles-of-Metro-Style-Design/
- The-Counter-Principles-of-Metro-Style-Design/
---

Likely you&#39;ve read the [Metro style design principles](http://msdn.microsoft.com/en-us/library/windows/apps/Hh781237.aspx), but you haven&#39;t seen the counter principles yet (because I made them up). Here we go...


# 1\. Show Shame in Mediocrity

To really show shame in mediocrity, just look at about 80% of the apps in any major app marketplace. These apps may get a users attention with a catchy title or a promise to solve some problem, but then they fail to add any value to anyones life. Even if they are not devoid of functional value they fail to provide any user joy.

*   Ignore the little things
*   Do something different in every little user interaction so you can keep them on their toes
*   Embrace chaos
*   Deviate slightly from the grid so the user _knows_ something is wrong even though that can&#39;t see it

# 2\. Flow Like Peanut Butter

To be clear, peanut butter doesn&#39;t flow. Even creamy peanut butter doesn&#39;t flow. To meet this counter principle, perform actions synchronously, use while loops that peg the processor, and only use the UI thread.

*   Add some offset between the user&#39;s finger and the registered touch point
*   No transitions or animations... all straight cuts
*   Add boring graphics and boring interactions.
*   Embrace lag and jitters

# 3\. Be Faux Analog

It&#39;s 2012, but give the user a solid 1994 experience by rendering an actual real-life scene and hope they&#39;ll figure out which drawer their word processor is in. Even though there&#39;s no actual need for a spiral binding, let&#39;s add one. It&#39;s nostalgic.

*   Show a desk or a lobby or some other loose analogy to your navigation model
*   Firmly draw your limits at real life paradigms and scenarios
*   Expand on the success of Microsoft Bob<sup>&amp;copy;</sup>

# 4\. Do Less With More

Pack that screen. You have millions of pixels at your disposal. You can use some for navigation, some for commanding, and if there&#39;s room left over you can even include your user&#39;s content.

*   Assure that users can orient themselves to your views within 7.5 minutes
*   Adhere to a strict 45 button limit per view
*   Give users a sense of adventure as they discover your application

# 5\. Die Alone

*   Assume the user is only concerned with doing whatever it is that your app does.
*   Assume they don&#39;t have friends to share your content with.
*   Assume they don&#39;t need to find anything of your content
*   Assume the user what&#39;s to do one thing at a time... always... ever... only