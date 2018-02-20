---
layout: post
title: "Relational NoSQL with MongoDB"
category: blog
image: /blog/images/sql.png
---

I had this conversation with a colleague of mine, who is a SQL Server DBA.
She said she knows almost nothing about "NoSQL" but believed "it's the future!".
Here I am to tell you that, if you know relational databases, you already know some basic MongoDB, one of the most used NoSQL databases out there.
Maybe you are ready for the future!

## The _scary_ world of NoSQL

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
Today you may go ahead and create a relational database with a `Movies` table for our catalog, like this one:

{:.table.table-striped.table-sm}
|id |title                          |year   |publish_date   |studio_fk  |
|-  |-                              |-      |-              |-          |
| 1 |"Justice League"               |2017   |2018-02-10     |1          |
| 2 |"Deadpool"                     |2016   |2017-10-19     |3          |
| 3 |"Wonder Woman"                 |2017   |2017-09-19     |1          |
| 4 |"Captain America: Civil War"   |2016   |2017-09-19     |2          |

Along with a `Studios` table.
Indexes, foreign keys, normalization and stuff.
You know the drill.
Let's not think about it for now.

I already told you MongoDB uses JSON-like syntax to store data, not tables.
So, how, say, the "Deadpool" entry would look like?

```js
{
    "_id": 2,
    "title": "Deadpool",
    "year": 2016,
    "publish_date": Date("2017-10-19"),
    "studio": {
        "name": "21th Century Fox",
        "logo": "url_to_fox_logo.png"
    }
}
```

_Wow! Not that different!_

You did see the pattern, right?
There do are some odd stuff, but mostly the columns' names are translated to JSON `fields` and the values are atributted accordingly.

Other thing in common in this case is that the `_id` acts like a Primary Key: it must exist and its value must be unique.
If you don't provide it when inserting an entry, the database generates one for you.

_So, there is a PK. Are there indexes too?_

Yes, there are.
The indexes are defined for every collection of documents called... well... `collections`!
And collections act pretty much like tables.
The only real difference is that you do not need to specify the schema of the data.
If the index can't find the key it treats it as `null` or forbides you to insert the document, depends on how you created the index.
[Pretty much like in SQL Server.][sta01]

_Nice! And the studio thing there in the end?_

Oh! I almost forgot it! If you need to [denormalizate][wik04] your data, for performance (or even sanity) reasons, you may embed another document inside your own, and even query it.

## Speaking of queries

How can you ask for data in this database?
I'll start with the SQL syntax again.

If you need the list of the movie titles from the "Warner" studio, in the reverse order of publish date, you'll write something like this:

```sql
SELECT title, publish_date
FROM dbo.Movies AS movie
JOIN dbo.Studios AS studio ON movie.studio_fk = studios.id
WHERE studio.name='Warner'
ORDER BY publish_date DESC

-- See? I know some SQL too! :D
```

Let's translate it to the language MongoDB understand, which happens to be JavaScript.

```js
var filter = {"studio.name": "Warner"};
var projection = {"title": 1, "publish_date": 1, "_id": 0};
var order = {"publish_date": -1};

db.movies.find(filter, projection).sortBy(order);
```

Notice the similarities!
The `db.movies` means we are dealing with the `movies` collection in current db, just like the `FROM` clause.
The `filter` acts like the `WHERE`, with a little help of the denormalization here.
The `SELECT` clause is converted to a `projection` json object.
The `ORDER BY` goes inside the `sortBy` method, with the `-1` indicating the descending order.

The main difference in this example is that you need to explicity indicate the `_id` field should not be retrieved with a `"_id": 0` in the `projection`, as the default is that it's always retrieved.

## Equal but not the Same

There's a lot common in both database systems, but what's really different in MongoDB?
Besides the data structure and the query language, there are a few things that the developers of MongoDB decided to keep aside.
Mostly because, in their vision, those features make it dificult to deal with distributed data the way they do.

The biggest one I think is the absence of Transactions.

That's why many developers and dba's make use of embed documents when designing a MongoDB database.
Of course, when you use embed documents, there's a limit for the document size, and sometimes it may cause some updates absurdly complex and slow.
I recommend to use it with caution.
There's a great tutorial on [how to create transaction-like operations][mon02] in the MongoDB docs, so you may "normalize" your data across collections and treat some complex updates on more than one document.

## Summing it up

Let's see what we know now:

* The JSON documents in MongoDB are basically SQL entries with `{}`
* Collections are like Tables
* `_id` is an obrigatory PrimaryKey
* When querying MongoDB we use all the elements from a SQL query, but written in JavaScript.
* There are no Transactions

That's the basic.
I hope you'll feel more confortable to search more info about NoSQL databases after knowing that it's not that different.
Maybe it will help you to improve your SQL skills and mindset.
Who knows?

I used MongoDB as an example because of those similarities.
If you want to know more databases, with other paradigms, I recommend the book [Seven Databases in Seven Weeks][pra01].

And that's a wrap.
May the Force be with you.

_Thanks to my colleague and friend [Mariana Sampaio][mar01] for reviewing this post_

[mon01]: https://www.mongodb.com/
[mon02]: https://docs.mongodb.com/manual/core/write-operations-atomicity/
[pra01]: https://www.amazon.com.br/Seven-Databases-Weeks-Modern-Movement/dp/1934356921
[sta01]: https://stackoverflow.com/a/20687291/5150453
[wik01]: https://en.wikipedia.org/wiki/CAP_theorem
[wik02]: https://en.wikipedia.org/wiki/Graph_database
[wik03]: https://en.wikipedia.org/wiki/Key-value_database
[wik04]: https://en.wikipedia.org/wiki/Denormalization
[mar01]: https://br.linkedin.com/in/mariana-serni-sampaio-9bb110116