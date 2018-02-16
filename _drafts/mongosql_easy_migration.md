---
layout: post
title: "Relational NoSQL with MongoDB"
category: blog
excerpt_separator: <!--more-->
---

I had a conversation with a colleague of mine, who is a SQL Server <acronym title="Database administrator">DBA</acronym>.
She said she knows almost nothing about "NoSQL" but believed "it's the future!".
Here I am to tell you that, if you know relational databases, you already know some basic MongoDB, one of the most used NoSQL databases out there.

<!--more-->

## The ~~scary~~ world of NoSQL

So, what is NoSQL after all?
I don't want to go all clichè and tell you about the [CAP Theorem][ref01] and so on.
You'll read it and be more confused.
Let's just say that a NoSQL is a database that may not use a SQL language to search in tables.
Yeah, let's call it a tableless database for now.

There are a lot of NoSQL db's around with diferent data structures that are used for especific problems.
Like graphs db's for networks of links, peoples, cities; or key-value db's used for caching.
And document-oriented db's, like the [MongoDB][mon01].

MongoDB uses JSON "documents" to 

[ref01]: https://en.wikipedia.org/wiki/CAP_theorem 
[mon01]: https://www.mongodb.com/