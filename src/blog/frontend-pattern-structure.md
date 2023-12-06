---
title: 'My folder structure for frontend projects'
draft: true
---

For some years now, everytime I need to start a new project, I tend to use the
same folder structure. I've being willing to write about it here for a while,
specially since I need to explain it to each new team. So this is my reasoning
on why I structure my frontend projects the way I do.

## The Problem

First, let's play a game. What can we say about the following applications?

```
src/
|-- client/
|   |-- styles/
|   |-- images/
|   `-- ...
|-- common/
|   |-- actions/
|   |-- components/
|   |-- constants/
|   |-- containers/
|   |-- context/
|   |-- helpers/
|   |-- reducers/
|   |-- routes/
|   |-- selectors/
|   |-- services/
|   `-- store/
`-- server/
    |-- html/
    |-- index.jsx
    `-- ...
```

Well... I see that it's a frontend application alright, as it generates HTML on
the server and has some images for the client. I see the
folders `actions`, `reducers`, and `selectors`, and it tells me the application
uses Redux or something like it. Ironically, the `helpers` folder doesn't help
at all with this analysis. Oh! I see `components`, `containers` and `context`
there. Those folders in conjunction with Redux, along with that `index.jsx` file
on the server, might indicate that this is a
React application.

Nice. But there's something missing. Let's try again, but now with a few
different applications. Spoiler: they're frontend applications.

```
# App A
src/
|-- global/
|   |-- authentication
|   |-- layout
|   |-- variables
|   `-- ...              # Omitted for brevity
|-- common/
|   |-- components/
|   |-- helpers/
|   `-- ...              # Omitted for brevity
|-- modules/
|   |-- catalog/
|   |-- player/
|   |-- purchase/
|   |-- recomendation/
|   `-- user/
`-- routes/
    `-- ...              # Omitted for brevity
```

In App A, we see some interesting subfolders in `module/`. Catalog, Purchase and
Recomendation? A online store, for sure. And there's a player too. This is some
kind of online content store. Something like Netflix or BandCamp.

On to the next.

```
# App B
src/
|-- application/
|   `-- ...              # Omitted for brevity
|-- reusable/
|   |-- components/
|   |-- helpers/
|   `-- ...              # Omitted for brevity
|-- features/
|   |-- books/
|   |-- collections/
|   `-- reviews/
`-- pages/
    `-- ...              # Omitted for brevity
```

Ok. Now I see a `books/` feature folder, with `reviews/` on the side.
No `purchase/` in sight, so I'll take a guess and say it's something like the
site Goodreads for people to manage their book collections and reading habits.

Now, the last one.

```
# App C
src/
|-- general/
|   `-- ...              # Omitted for brevity
|-- use-cases/
|   |-- accounts/
|   |-- investiments/
|   |-- credit/
|   `-- ...              # Omitted for brevity
`-- server/
|   `-- ...              # Omitted for brevity
```

Nothing in this world will convince me it is not a banking app.

The keen-eyed of you might have seen by now that other things are missing this
time. Are those applications made with React? Vue? Svelte? We can't tell.

But does it really matter? To me, it doesn't. At least not from a few key
perspectives: maintainability and onboarding.

### TODO

1. Mention Uncle Bob
2. Mention Prag Andy
3. Mention Michael Keelin
4. Mention Kent C Dodds
5. Explain the folders
