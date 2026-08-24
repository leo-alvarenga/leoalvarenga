---
title: "Why your Choice of tools matter"
description: "My personal views on how to chose and configure the tools you (should) use"
cover: "/covers/why-your-choice-of-tools-matter.jpg"
date: 2026-08-16
tags: ["opinion", "dev workflow"]
---

Lately, I’ve been reflecting on why I chose the specific tools that shape my daily workflow. The prevailing trend these days is to grab heavy, "batteries-included" solutions—only to end up using less than 10% of what they actually offer.

My view is simple: your tools should adapt to the way you think and work, not force you to mold yourself to them. As developers, we're privileged to have access to such a vast ecosystem of software, and we should take full advantage of that freedom.

## My Philosophy on Personal Work Tools

I view my toolchain (whether it’s Neovim, Tmux, OpenCode, or Pi) as a dynamic extension of my own thought process. Tools are meant to serve my momentum, never to act as obstacles or "pebbles in my shoes". The moment a tool forces artificial friction, limits my ability to customize a workaround, or dictates how I _ought to_ work without letting me shape it, it ceases to be the right tool for me.

I live by a simple motto:

> _I’d rather spend a few hours after work or on a weekend "fleshing out" my dotfiles than deal with slow downs, down times, or frustration with my tools while I’m working._

Here is how that philosophy translates across my core stack:

- **Malleability Over Prescribed Conventions**: Tools like Neovim, Tmux, and Pi thrive because they are minimal cores designed to be molded. In Pi, for instance, if I don't like how a TUI renders, I can rewrite entire TUI components; if I want to adjust how agent system prompts are injected, I can intercept the lifecycle hooks (`before_agent_start`). The tool _yields_ to the developer, not the other way around

- **Friction as a Bug**: When OpenCode’s opinionated subagent and mode mechanics started creating unnecessary multi-turn latency and context fragmentation, it became a "pebble in my shoe". The purist approach isn't about rejecting complex features; it's about eliminating unnecessary friction. Replacing rigid agent modes with a few lines worth of Rules of Engagement in the system prompt gave me the exact same safety from "mistaken writes" with zero overhead

- **Invest in the Foundation**: Tweaking a Lua config, writing a custom TypeScript extension for Pi, or refining terminal multiplexer keybindings isn't wasted time—it’s an investment in flow state. Solving a recurring 5-second annoyance on Sunday saves hours of mental fatigue over the course of a year

- **The "Dotfiles Era" of AI**: We've entered a phase where AI harnesses shouldn't be treated as static, black-box IDEs. Your agent harness is just as personal as your text editor or terminal environment. If an AI tool doesn't let you tweak its prompt boundaries, inspect its token usage, or gate its tool execution, it lacks the flexibility required for a truly optimized workflow

This philosophy isn't limited to personal projects or fully open dotfile setups. Even when working within corporate boundaries or restricted environments, understanding the underlying mechanics of your tools empowers you to design elegant, compliant workarounds instead of settling for daily friction.
