---
id: mh07aohj
lang: en
title: Installation
slug: docs/getting-started/installation
category: docs
type: documentation
schemaType: page
description: Install Shevky core and first-party plugins.
tags:
- getting-started
- installation
order: 12
pair: pair-docs-getting-started-installation
canonical: ~/docs/getting-started/installation/
alternate: ~/tr/docs/getting-started/installation/
template: page
layout: default
status: published
---

# Installation

## 1. Create a Project Directory

```bash
mkdir my-shevky-site
cd my-shevky-site
npm init -y
```

## 2. Install Core and Plugins

Install the core CLI and commonly used plugins:

```bash
npm install @shevky/core \
  @shevky/plugin-robots-txt \
  @shevky/plugin-tailwindcss \
  @shevky/plugin-esbuild \
  @shevky/plugin-rss \
  @shevky/plugin-sitemap
```

Optional plugins for advanced use cases:

```bash
npm install @shevky/plugin-content-bridge @shevky/plugin-open-graph
```

## 3. Bootstrap Starter Files

```bash
npx shevky --init
```

This command (implemented in `core/scripts/init.js`):

- Clones the starter template `fatihtatoglu/shevky-simple-blog` via `degit`.
- Copies `src/` directory and `tailwind.config.js` to your project.
- Installs additional build dependencies (Tailwind, esbuild, marked, etc.).
- Creates a `.gitignore` file.
- Adds `build` and `dev` scripts to your `package.json`.

## 4. Verify CLI Access

```bash
npx shevky --help
```

You should see the help output listing available flags: `--help`, `--version`, `--init`, `--build`, `--dev`.

## Common Setup Errors

| Error | Fix |
|-------|-----|
| `shevky: command not found` | Use `npx shevky ...` instead of `shevky ...` |
| `package.json not found` during init | Run `npm init -y` first in the project directory |
| Tailwind/esbuild missing at build time | Re-run `npm install` and verify `node_modules` exists |

## Related

- [Prerequisites](/docs/getting-started/prerequisites/)
- [Quickstart](/docs/getting-started/quickstart/)
