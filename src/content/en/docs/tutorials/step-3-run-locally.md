---
id: llkk1yvb
lang: en
title: 'Step 3: Run Locally'
slug: docs/tutorials/step-3-run-locally
category: docs
type: documentation
schemaType: page
description: Build and preview your site locally using Shevky dev mode.
tags:
- tutorials
- local-dev
order: 23
pair: pair-docs-tutorials-step-3-run-locally
canonical: ~/docs/tutorials/step-3-run-locally/
alternate: ~/tr/docs/tutorials/step-3-run-locally/
template: page
layout: default
status: published
---

# Step 3: Run Locally

## Prerequisites

- Completed [Step 2](./step-2-configure/)
- `src/site.json` and `src/content/` exist

## Commands

```bash
npm run dev
```

Alternative direct invocation:

```bash
npx shevky --dev
```

## Expected Output

- Build runs first - you will see log output for each stage.
- `dist/` is generated with HTML pages.
- Terminal prints: `Serving dist on http://localhost:3000`.
- Open this URL in your browser to browse the generated site.

## What Just Happened

The `--dev` flag in `core/scripts/main.js` does two things:

1. Runs the full build via `_build.execute()`.
2. Starts `serve@14` on the `dist/` directory.

This is a static preview - there is no hot module replacement. To see changes, stop the server, rebuild, and restart.

## Common Errors

| Error | Fix |
|-------|-----|
| `EADDRINUSE` / port conflict | Stop the process using port 3000, then rerun |
| `Template not found` errors | Confirm layout/template files exist in `src/templates/` and `src/layouts/` |
| No content pages | Add at least one valid Markdown file with front matter under `src/content/` |

## Related

- [Step 4: Build for Production](/docs/tutorials/step-4-build-for-production/)
- [Troubleshooting](/docs/guides/troubleshooting/)
