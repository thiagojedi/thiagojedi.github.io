---
title: "TypeScript: When it's a bad idea?"
tags: typescript ts english
image: /images/typescript.png
lang: en-US
---

I'm a huge advocate that knowing when not to use a tool is as important as
knowing when to use it. That's why, when someone try to sell me a new tech I go
ahead and ask: Ok, where's the catch? This is my answer to that question about
TypeScript.

## JavaScript with types? Wtf?!

Right. You've been away from the ["JavaScript land"][js01] in the last couple
years. You may have missed the recent growth of [TypeScript][ts01]. The idea
behind this language from Microsoft is that static typing would help IDEs and
code editors perform better with JavaScript, enabling it to be a better language
for really large projects.

"JavaScript that scales", as they say.

What sets TypeScript apart from most static typed languages is that its type
system is structural and optional. The former means you don't need all the
members of the object your function receives, only the ones it cares. Is like a
static duck typing. The later means you can relax, write pure JavaScript and add
type notation only where you feel it's needed. It's architect, Anders Hejlsberg,
calls this concept ["gradual typing"][ts02].

_Wait! If this static duck typing is so great, why it's optional?_

Well, because it solves one type of problems but brings others with it (pun
intended). Let me tell you when not to use them and stay with pure JS.

## Tests

You should have guessed when I told you not all problems are solved by static
types. If that was true, there would be no sense in have unit tests in languages
like Java or C#. Sure, parameters in TS compiler like `strictNullChecks` saves
you from a lot of headaches (have you tried `x >= 0` when `x` is `null`?), but
there's still the need for tests, including for type errors.

The thing is that TypeScript compiles (transpiles?) to JavaScript. This means
most of the time your code will run in an ecosystem that doesn't have the same
safeguards you have while developing. The best way to guarantee your code won't
have problems is testing it in the target language.

## Existing Code

Do not rewrite code unless you really need to.

If you already have an existing project, it's well tested, you should focus in
developing new features and fixing bugs, not reinventing the wheel. Most of the
time starting from scratch is just waste of resources.

TypeScript can live side by side with JavaScript code, be it at file level or
project level. There's a compiler option called `allowJs` that is self
explanatory. So, if you think your project really needs the advantages of static
type checking, you may start using it in new modules.

Every project has that one module written by that former colleague who's nowhere
to be found and nobody knows how but it Just Works&trade;. Don't touch it.

## Small projects

Let's say you had the idea to create a small NodeJS program that lists your
video folder and renames all the files from a name pattern like "TvShow - 2x14"
to "TvShow S02E14". I think you can do that in a single `rename_episodes.js`
file with less than 100 line of code.

It's pretty small, don't you think? No external dependencies, you can make it to
work only with you current folder structure and you probably won't use it
anywhere else. Unless you're writing that script to learn TypeScript, the
process of annotate the types and compiling will annoy you more than help you.

The same goes for client-side code: Working with simple DOM handling, form
validation, or code that doesn't need the new features from "ESnext". You don't
need a new language, use what the browsers run.

Remember that HTML attributes may not be the types you expect and the static
typing might [confuseyour debugging][js02].

![A code in typescript](/images/typescript.png)

## Conclusion

The bottom line is: where JavaScript is strong, keep it there. Do not change
your team's development process just because it's the new trend and all the cool
kids are using this or that. Especially if that team consists of only you.

You don't need to change your code to get most of the advantages enabled by
TypeScript thanks to community projects like [DefinitelyTyped][ts03], that
publishes definition files (equivalent to header files from C++) for existing JS
libraries.

TS was created for a particular case and it's ok if you're not its target user.
And if you are, know that you can change at you own pace. There's a great
[migration guide][ts04] that may help get there.

Be wise. And may the Force be with you.

---

So. Beginning with this post, I'll write all my technical posts in english. As
for the posts about career will write in portuguese. I'm doing it to better
reach the intended target readers.

I'm also deactivating the comment session, as nobody used it and was kinda
buggy. Any questions, you may find me on twitter.

Cya.

[js01]: https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f 'How it feels to learn javascript in 2016'
[js02]: https://blog.jayway.com/2016/05/06/typescript-web-and-the-illusive-type-safety-advantage 'TypeScript, web and the illusive type-safety-advantage'
[ts01]: https://www.typescriptlang.org "TypeScript's official page"
[ts02]: https://www.youtube.com/watch?v=O5uaIwM-7pU  '.NET Rocks! #1460 - TypeScript and Beyond with Anders Hejlsberg'
[ts03]: http://definitelytyped.org/ 'DefinitelyTyped project page'
[ts04]: https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide  'TypeScript React Conversion Guide'
