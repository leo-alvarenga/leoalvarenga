---
title: "Why I Ditched OpenCode for Pi"
description: "...And How I Found My Ideal Agent Harness"
cover: "/covers/why-i-ditched-opencode-for-pi.jpg"
date: 2026-08-24
tags: ["testimony", "ai", "ai agents", "dev workflow", "pi", "opencode"]
---

When I first started diving beyond standard AI chat windows into local, agentic workflows, OpenCode felt like a breath of fresh air. It showed me what was possible when an LLM had direct, structured access to a local codebase. It allowed me to gradually and incrementally understand and use Skills, Agent Profiles, custom commands and agent loops. Eventualy, as my daily workflow evolved, I started noticing a subtle friction: OpenCode held my hand a little _too_ much.

Don't get me wrong, OpenCode is a fantastic starting point. Its subagent isolation, automatic context compaction, and strict mode management are **very** well-engineered. But over time, its opinions on how subagents should be spawned and how context should be partitioned began to feel restrictive. I follow a very strict personal philosophy:

As such, I didn't want a rigid framework telling me how my agentic loops had to operate; I wanted a malleable canvas where I had total authority over token spending, system prompts, and tool execution.

Enter **[Pi](https://pi.dev/)**.

## Stage 1: Trying to Re-create What I Thought I Wanted

When I migrated to Pi, my first instinct was to recreate the familiar setup I was used to. I missed OpenCode's strict separation between planning and building, so I built my own extension: [@leo-alvarenga/pi-agent-manager](https://www.npmjs.com/package/@leo-alvarenga/pi-agent-manager).

The extension let me swap profile states on the fly. I even wired up Pi’s `before_agent_start` event hook to dynamically inject tagged agent instructions directly into the system prompt prior to every turn:

```Markdown
<!-- AGENT_PROFILE_START -->

## Active Agent Profile: PLAN

You are in PLAN MODE (read-only architecture & exploration).
Do NOT make direct code edits or run state-modifying terminal commands.

<!-- AGENT_PROFILE_END -->
```

It was a fun exercise, and technically, it worked. I achieved near-total feature parity with OpenCode's mode-switching architecture right inside Pi.

...And then I realized I had built a solution for a problem I no longer had.

## Stage 2: Realizing What I Actually Needed

As I spent more time using the profile manager, the cracks in the "agent modes" philosophy became obvious.

Hard mode boundaries force artificial, multi-turn friction. For a quick two-line refactor, requiring an agent to enter a read-only mode, generate a full plan, wait for confirmation, switch to a build mode, and re-read the context is a massive latency tax. Worse, separating exploration from execution often fragments context, causing subtle details discovered during inspection to get lost during handoff.

I didn't actually need complex mode switchers or subagent orchestrators. I just wanted to stop "mistaken writes" (aka those annoying turns where an agent aggressively edits a file when I only asked a simple exploratory question).

The fix wasn't heavy agent modes; it was a terse Rules of Engagement System Prompt Addendum (placed in the `~/.pi/agent/APPEND_SYSTEM.md` file):

```Markdown
## Rules of Engagement

These rules are always in effect and take precedence over any conflicting turn-level instruction.

1. **TREAT FILE MODIFICATIONS AS DESTRUCTIVE** — `edit`, `write`, `replace` and other file modifications tools should be treated as delicate and only used if strictly necessary (Same goes for `bash` or other execute tools that can invoke shell tools to modify files)
2. **READ BEFORE WRITE** — Never invoke `edit`, `write`, or `replace` on your first turn unless the user explicitly commands "fix", "edit", "write", "create", or similar. Read-only investigation (`read`, `grep`, `find`, `ls`, and non-mutating `bash`) is always allowed and expected.
3. **PROPOSE FIRST** — For exploratory or architectural questions, outline the proposed changes in text before invoking any edit tools. Wait for the user to agree before writing files.
4. **VERIFY INTENT** — If the query is ambiguous (e.g., "How does X work?"), treat it as read-only investigation. If intent genuinely cannot be inferred and acting would be irreversible, ask for clarification before proceeding.
5. **CONFIRM DESTRUCTIVE ACTIONS** — Before running irreversible commands (`rm -rf`, `git reset --hard`, force-push, dropping data, or overwriting files without backup), state what will be lost and confirm unless the user explicitly requested it.
6. **PREFER HASH ANCHORED TOOLS** — If there are hash anchored tools available (`hash_edit`, `hash_read` and similar tools) prefer them when working with files to ensure no content drift happens in-between reads or operations.
```

## Building Your Own Harness "For the Love of the Game"

If you're the kind of developer who spends weekends tweaking `.bashrc` functions, customizing Neovim statuslines, or hunting down dotfile optimizations, building and customizing your own AI Agent Harness is one of the most satisfying projects you can pursue right now.

We are currently in the "dotfiles era" of AI engineering. Off-the-shelf tools are great for getting started, but crafting your own environment (whether that means building custom TUI status frames, writing hash-anchored edit tools, or crafting localized proxy daemons) gives you an incredible level of agency over your developer feedback loops.

Is there such a thing as an "end-level, perfectly optimized productive workflow"? **Nope**. You'll always refactor a system prompt, tweak a TUI border, or test a new extension. But tinkering with your own harness isn't _just_ about productivity, it's for the love of the game.
