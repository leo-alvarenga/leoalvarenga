---
title: "Building with Astro"
description: "Why I rebuilt this site with Astro and what sold me on it."
date: 2025-02-14
tags: ["astro", "web", "typescript"]
---

This site used to be heavier than it needed to be. Astro changed that.

## Static by default

Every page ships as plain HTML. No framework runtime unless a component needs one.
That means faster loads and less JavaScript on the wire.

## Content collections

Posts like this one are just Markdown files on disk, typed by a schema:

```ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({ title: z.string(), date: z.coerce.date() }),
});
```

Simple, typed, and easy to reason about — exactly how I like my tools.
