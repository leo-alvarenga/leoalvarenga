---
title: "Graphs and Blast Beats"
description: "Why I built a new little tool, why I keep staring at IEM frequency graphs, and why I wanted to stare at them properly"
date: 2026-10-07
tags: ["audio", "iem", "side project", "react"]
cover: "/covers/iems.jpg"
tldr: "I built a new little tool to stare properly at Frequency Response Graphs and compare IEMs and Headphones side by side: <a href='https://iems.leoalvarenga.dev'>IEM Graph Visualizer</a>"
---

I own five pairs of IEMs and one pair of planar headphones. By audiophile standards, that's modest. By normal-person standards, it's already a bit much.

It's the music's fault.

A lot of what I listen to is _hostile_ to cheap gear. Death metal, slam, goregrind, djent. Put on _Dying Fetus_ or _Cannibal Corpse_ and you get double-kick blast beats sitting right on top of a drop-tuned bass line, both fighting for the same 200–500 Hz range. If the driver can't keep up, the kicks stop being kicks and turn into one warm, vaguely rhythmic smear. Then I'll switch to a _Ponto Nulo no Céu_ acoustic track and want the opposite: every pick attack crisp, every slap on the guitar body landing like a small drum, the strings decaying cleanly instead of getting choked off. And Tool or Deftones want both, in the same song, with room to breathe in between.

No single IEM does all of that. Which is how you end up with a handful.

## The Red Lion problem

My Tangzu Wan'er Red Lion is lovely. Warm, smooth, forgiving. _Metallica_ sounds great on it. _Dying Fetus_ sounds like it was recorded inside a duvet or under a heavy blanket, while _Lamb of God_'s Randy Blythe sounds like his vocals are coming out of the bass guitar.

The TRN Dolphin fixed that for me. Still warm-_ish_, still fun, but the bass is tighter and the kick drum comes back as a separate instrument. The Salnotes Zero goes too far the other way (gorgeous on acoustic picking, a bit anemic when the drop-A chugs kick in), and the Truthear Gate is the reference I fall back on when I can't tell whether it's the gear or the master that's off.

Here's the thing, though: you can get a pretty good idea about most of that before buying anything. It's all on the graph.

## Graphs, and why I wanted my own viewer

Frequency response graphs are the closest thing this hobby has to a spec sheet that means something. Reviewers measure IEMs (or headphones) on standardized ear simulators (IEC 60318-4 couplers, the 711-style rigs) and publish the curves. Most of those curves live in the [squig.link](https://squig.link) ecosystem, where each reviewer runs their own graph tool on their own subdomain.

It's a great resource. It's also fragmented. Comparing an IEM measured by one reviewer with one measured by another means juggling tabs, and the UI is very much "built by audio nerds for audio nerds" (affectionately).

So I built [IEMs Graph Visualizer](https://iems.leoalvarenga.dev). Pick IEMs from any [squig.link](https://squig.link) reviewer, overlay them, throw a target curve behind them, done.

## How it works

There's no backend. No scraper, no database, no cron job. It's a static Vite + React app on GitHub Pages that reads [squig.link](https://squig.link) directly from your browser, the same way [squig.link](https://squig.link)'s own pages do.

That part took some poking around, because [squig.link](https://squig.link) doesn't have a documented API. It turns out it doesn't need one:

1. `squig.link/squigsites.json` lists every reviewer site and the databases each one hosts.
2. Each database has a `phone_book.json`: brands, models, and the file name of every measurement.
3. Each measurement is two plain text files, `<name> L.txt` and `<name> R.txt`. Just frequency and SPL pairs, one per line.
4. Each site's `config.js` says which frequency and level that reviewer normalizes to.

Yes, number 4 is a JavaScript file. Yes, I read it with a regex:

```ts
const db = parseInt(text.match(/default_norm_db\s*=\s*(\d+)/)?.[1] ?? "60");
const hz = parseInt(text.match(/default_norm_hz\s*=\s*(\d+)/)?.[1] ?? "500");
```

I'm not proud of it. It works, and if a site doesn't have the values, it just falls back to [squig.link](https://squig.link)'s default (500 Hz at 60 dB).

Normalization is the part people underestimate. Two curves measured at different volumes are useless side by side; one just looks "more" everywhere. So every curve gets shifted until its reference frequency lands on the reference level, and only then do they share a chart.

Left and right channels are fetched in parallel. If both come back, they're averaged. If one 404s (it happens _way_ more than you'd think), the app uses whichever survived and marks the series as L or R, so you know you're looking at one earpiece and not the pair.

Target curves were the one thing I gave up on fetching live: they kept failing in creative ways, not to mention the hassle I had to go through to filter out duplicate target curves. Ultimately, I bundled 17 of them as static files: Harman IE 2019, the 5128 diffuse-field variants, Crinacle's 2023 target, the Etymotic one, and a handful more.

Everything else is boring on purpose. React Query caches the catalog and every measurement, so flipping between comparisons doesn't refetch anything. The whole comparison (IEMs, target, highlighted region) lives in the URL, so sharing it is just copying a link. There's a PNG export for when you want to post a graph somewhere. And there's a region highlighter that shades a band like mid-bass (80–300 Hz) or presence (4–6 kHz) and can zoom the chart into it, which is honestly the feature I use the most. Most of my arguments with myself happen between 80 and 500 Hz.

## What the graph won't tell you

A frequency response graph doesn't show "speed." People (me included, a few paragraphs ago) talk about drivers being fast or slow, and some of that is real. A lot of it, I suspect, is just how much mid-bass is piled up and how much lower treble is there to define the attack. The graph shows you the second part. It can't show you the first.

It also won't show you fit. A coupler isn't your ear canal, and your eartips change things more than most people want to admit. I run Dunu S&S tips on almost everything because they keep the sound consistent between sessions, and that consistency matters more to me than any 2 dB bump on a chart; plus, they are ridiculously comfortable (for me).

So use the graph to rule things out, not to fall in love.

It's live at [iems.leoalvarenga.dev](https://iems.leoalvarenga.dev) and the code is on [GitHub](https://github.com/leo-alvarenga/iem-visualizer). Load the IEMs you already own, zoom into 80–300 Hz, and check whether the graph agrees with your ears. Mine mostly do. Mostly.
