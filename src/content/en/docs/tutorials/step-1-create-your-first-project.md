---
id: 95kqc3ic
lang: en
title: 'Step 1: Create Your First Project'
slug: docs/tutorials/step-1-create-your-first-project
category: docs
type: documentation
schemaType: page
description: Create a new Shevky project, install dependencies, and bootstrap starter
  files.
tags:
- tutorials
- setup
order: 21
pair: pair-docs-tutorials-step-1-create-your-first-project
canonical: ~/docs/tutorials/step-1-create-your-first-project/
alternate: ~/tr/docs/tutorials/step-1-create-your-first-project/
template: page
layout: default
status: published
---

# Step 1: Create Your First Project

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
```

## Expected Output

After these commands complete:

- `package.json` has `build` and `dev` scripts added automatically.
- `src/` directory is created with starter content, templates, layouts, and components.
- `tailwind.config.js` is copied to the project root.
- `.gitignore` includes `node_modules/` and `dist/`.

## What Just Happened

- You installed the Shevky CLI (`@shevky/core`) and baseline build plugins.
- The `--init` flag triggered `core/scripts/init.js`, which cloned a starter template via `degit` from `fatihtatoglu/shevky-simple-blog`.
- Starter files were copied into your project and npm scripts were configured.
- Your project now matches Shevky's expected runtime structure.

## Common Errors

| Error | Fix |
|-------|-----|
| `package.json not found` during init | Ensure `npm init -y` ran in the same folder |
| Init fails with network/degit errors | Check internet connectivity and retry |
| Missing plugin packages later at build | Re-run the `npm install ...` command above |

## Related

- [Step 2: Configure](/docs/tutorials/step-2-configure/)
- [Project Structure](/docs/getting-started/project-structure/)
