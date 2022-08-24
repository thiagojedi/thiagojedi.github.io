---
layout: '../../layouts/BlogPost.astro'
title: Using Redux on Islands
pubDate: 26/08/2022
draft: true
---

So. I've been trying to wrap myself around the Island Pattern/Architecture for some time now. The last piece of the puzzle was state management and how to get the islands to comunicate, a bridge if you will. And I think I found it.

## New land on sight

The _Islands Architecture_ was first introduced by the Etsy architect [Katie Sylor-Miller][twitter01] and later spread by Jason Miller [on his blog][developit01]. It's fairly new concept but it's all the rage right now with modern framworks like [Astro][astro01] and others.

The concept by itself is very simple and is very similar to the _microfrontends_ pattern, with the webpage being static html (the sea) with few pockets of interactivity (the islands). Each island is self contained, which enables them to be load independently from the others.

## Fresh knowledge

One of the last entries in the "Islands Frameworks" was [Fresh][deno01] by the devs of [Deno][deno02], using the [Preact][preact01] component library, which makes the pattern very simple:

- A folder for the static content: **routes/**
- A folder for the dynamic content: **islands/**

All the components imported in the routes' files will be rendered to static html unless it's from the island folder.

[deno01]: http://fresh.deno.dev
[deno02]: http://deno.land
[twiiter01]: https://twitter.com/ksylor
[developit01]: https://jasonformat.com/islands-architecture/
[preact01]: https://preactjs.com