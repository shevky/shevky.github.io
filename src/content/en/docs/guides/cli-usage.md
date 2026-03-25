---
id: e93lfc36
lang: en
title: CLI Usage
slug: docs/guides/cli-usage
category: docs
type: documentation
schemaType: page
description: How to use Shevky CLI commands and what each mode does.
tags:
- guides
- cli
order: 32
pair: pair-docs-guides-cli-usage
canonical: ~/docs/guides/cli-usage/
alternate: ~/tr/docs/guides/cli-usage/
template: page
layout: default
status: published
---

# CLI Usage

The CLI entry point is `shevky`, provided by `@shevky/core` via its `bin` field in `package.json`.

## Running Commands

Always use `npx` from the project root:

```bash
npx shevky <flag>
```

Or use the npm scripts added by `--init`:

```bash
npm run build   # equivalent to: npx shevky --build
npm run dev     # equivalent to: npx shevky --dev
```

## Available Commands

### Help

```bash
npx shevky --help
```

Shows all available options and project links.

### Version

```bash
npx shevky --version
```

Prints the Shevky version string.

### Initialize Project

```bash
npx shevky --init
```

Bootstraps a starter project: clones template files, installs dependencies, updates `package.json` scripts.

### Build

```bash
npx shevky --build
```

Runs the full static site build: loads config, compiles templates, loads content, runs plugin hooks, renders pages, writes output to `dist/`.

### Dev

```bash
npx shevky --dev
```

Runs the full build first, then starts a local static server at `http://localhost:3000` using `serve@14`.

## Default Behavior

If no flag is provided, the CLI prints the help text.

## Note on Watch Mode

A `runWatch()` function exists in `core/scripts/main.js` but is not exposed as a CLI flag in the current version. (Inferred from source comparison between `main.js` and `cli.js`.)

## Related

- [CLI Reference](/docs/reference/cli-reference/) - detailed flag documentation
- [Troubleshooting](/docs/guides/troubleshooting/)
