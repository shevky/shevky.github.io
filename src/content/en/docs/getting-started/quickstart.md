---
id: c7fh3nty
lang: en
title: Quickstart
slug: docs/getting-started/quickstart
category: docs
type: documentation
schemaType: page
description: Fastest path from empty folder to a working local site.
tags:
- getting-started
- quickstart
order: 13
pair: pair-docs-getting-started-quickstart
canonical: ~/docs/getting-started/quickstart/
alternate: ~/tr/docs/getting-started/quickstart/
template: page
layout: default
status: published
---

# Quickstart

Get a working Shevky site in under two minutes.

## Prerequisites

- Node.js 18+
- npm

## Commands

```bash
mkdir my-shevky-site
cd my-shevky-site
npm init -y
npm install @shevky/core @shevky/plugin-robots-txt @shevky/plugin-tailwindcss @shevky/plugin-esbuild @shevky/plugin-rss @shevky/plugin-sitemap
npx shevky --init
npm run build
npm run dev
```

## Expected Output

After `npm run build`:

- `dist/` directory is created with generated HTML pages.
- `dist/output.css` exists (Tailwind plugin).
- `dist/output.js` exists (esbuild plugin).
- `dist/robots.txt`, `dist/sitemap.xml`, and feed XML exist (when corresponding plugins are configured).

After `npm run dev`:

- Build runs first, then a static server starts at `http://localhost:3000`.
- Open this URL in your browser to see your site.

## What Just Happened

1. The CLI entry (`shevky.js`) routed to the build script (`core/scripts/build.js`).
2. Build loaded `src/site.json` (configuration) and `src/i18n.json` (translations).
3. Mustache templates were loaded from `src/layouts/`, `src/components/`, `src/templates/`.
4. Plugins from the `plugins` array in `site.json` were dynamically imported.
5. Plugin hooks ran in order: `dist:clean` -> `assets:copy` -> `content:load` -> `content:ready`.
6. Markdown content from `src/content/` was parsed, rendered, and written to `dist/`.
7. The `--dev` flag additionally started `serve@14` to preview the output locally.

## Common Errors

| Error | Fix |
|-------|-----|
| `Cannot find module @shevky/plugin-...` | Install the missing plugin package |
| `src/site.json` missing | Re-run `npx shevky --init` or create the file manually |
| Port 3000 already in use | Stop the conflicting process or run `npm run build` only |

## Related

- [Installation](/docs/getting-started/installation/)
- [Project Structure](/docs/getting-started/project-structure/)
- [Tutorial Step 3: Run Locally](/docs/tutorials/step-3-run-locally/)
