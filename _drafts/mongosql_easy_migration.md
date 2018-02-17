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

So, what is NoSQL?

_I know! I know! It's all about JSON and stuff!_

Well... no.
I mean, not really.
The difference is more in the way you retrieve data than the way it is stored.

There are a lot of NoSQL db's around with diferent data structures that are used for especific problems.
Like [graphs][wik02] for networks of links, peoples, cities; or associative arrays (or KV, [key-value][wik03]) used for caching.
And there are the document-oriented db's that uses syntax like XML or JSON to handle data, [MongoDB][mon01] is one of them.

The thing they have in common is that they tend to avoid use classic "Structured Query Language" for retrieving data.
**N**ot **o**nly **SQL**, they say.

_But is it too different from SQL?_

It may be. 
They favor other syntaxes because they're better suited for its data structure or use case.*
So if you have a KV structure, you only need the key to search the value, no projection needed.

That's not the case for MongoDB.

<small>\* There are some differences in distributing data, network partition and other stuff like the [CAP Theorem][wik01]. But I don't want to go there today.</small>

## The same concepts, different structure

Imagine we have a Video On Demand (a.k.a. VOD) application for superhero movies.
Today you may go ahead and create a relational database with a `Movie` table for our catalog, like this one:

|id |title                          |year   |publish_date   |studio_fk  |
|-  |-                              |-      |-              |-          |
| 1 |"Justice League"               |2017   |2018-02-10     |1          |
| 2 |"Wonder Woman"                 |2017   |2017-09-19     |1          |
| 3 |"Captain America: Civil War"   |2016   |2017-09-19     |2          |
| 4 |"Deadpool"                     |2016   |2017-10-19     |3          |

Along with a `Studio` table.
Indexes, foreign keys, normalization and stuff.
You know the drill.
Let's not think about it for now.

I already told you MongoDB uses JSON-like syntax to store data, not tables.
So, how, say, the "Deadpool" entry would look like?

```js
{
    "_id": 4,
    "title": "Deadpool",
    "year": 2016,
    "publish_date": Date("2017-10-19"),
    "studio": {
        name: "21th Century Fox",
        logo: "url_to_fox_logo.png"
    }
}
```

_Wow! Not that different!_

Did you see the pattern, then?
There do are some odd stuff, but mostly the columns' names are translated to JSON `fields` and the values are atributted accordingly.

Other thing in common in this case is that the `_id` acts like a Primary Key: it must exist and its value must be unique.

_So, there is a PK. Are there indexes too?_

Yes, there are.
The indexes are defined for every collection of documents called... well... `collections`!
And collections act pretty much like tables.
The only real difference is that you do not need to specify the schema of the data.
If the index can't find the key it treats it as `null` or forbides you to insert the document, depends on how you created the index.

_Nice! And the studio thing there in the end?_

So... If you need to [denormalizate][wik04] your data, for performance (or even sanity) reasons, you may embed another document inside your own, and even query it.

## Speaking of queries

How can you ask for data in this database?
I'll start with the SQL syntax again.

If you need the list of the movie titles from the "Warner" studio, in the reverse order of publish date, you'll write something like this:

```sql
SELECT title, publish_date FROM movies
WHERE studio_fk in (SELECT TOP(1) id FROM studio WHERE name='Warner')
ORDER BY publish_date DESC

-- See? I know some SQL too! :D
```

Let's translate it to the language MongoDB understand, which happens to be JavaScript.

```js
db.movies.find({"studio.name": "Warner"}, {"title": 1, "_id": 0}).sortBy({"publish_date": -1});
```

or, if you want to be organized:

```js
var filter = {"studio.name": "Warner"};
var projection = {"title": 1, "publish_date": 1, "_id": 0};
var order = {"publish_date": -1};

db.movies.find(filter, projection).sortBy(order);
```

Notice that the `SELECT` clause is converted to a `projection` json object; the `ORDER BY` goes inside the `sortBy` method, with the `-1` indicating it's descending; and the `WHERE` is the `filter`, with a little help of the denormalization.


[mon01]: https://www.mongodb.com/
[wik01]: https://en.wikipedia.org/wiki/CAP_theorem 
[wik02]: https://en.wikipedia.org/wiki/Graph_database
[wik03]: https://en.wikipedia.org/wiki/Key-value_database
[wik04]: https://en.wikipedia.org/wiki/Denormalization