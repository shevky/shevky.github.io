---
id: rnwh57lf
lang: en
title: 'Step 4: Build for Production'
slug: docs/tutorials/step-4-build-for-production
category: docs
type: documentation
schemaType: page
description: Produce production-ready static output and validate generated artifacts.
tags:
- tutorials
- build
order: 24
pair: pair-docs-tutorials-step-4-build-for-production
canonical: ~/docs/tutorials/step-4-build-for-production/
alternate: ~/tr/docs/tutorials/step-4-build-for-production/
template: page
layout: default
status: published
---

# Step 4: Build for Production

## Prerequisites

- Completed [Step 3](./step-3-run-locally/)

## Commands

Enable minification by editing `src/site.json`:

```json
"build": { "minify": true, "debug": false }
```

Set `identity.url` to your production domain:

```json
"identity": { "url": "https://yourdomain.com" }
```

Run the production build:

```bash
npm run build
```

Inspect the output:

```bash
find dist -maxdepth 2 -type f | sort
```

## Expected Output

- Fresh static files under `dist/`.
- HTML is minified when `build.minify` is `true`.
- CSS bundle: `dist/output.css` (Tailwind plugin, also minified).
- JS bundle: `dist/output.js` (esbuild plugin, minified with sourcemap).
- SEO files: `dist/robots.txt`, `dist/sitemap.xml`, `dist/feed.xml`.

## What Just Happened

The build lifecycle executed in this order:

1. `ensureDist()` - clears and recreates `dist/`.
2. `dist:clean` hook - robots.txt generated.
3. Static assets copied from `src/assets/`.
4. `assets:copy` hook - Tailwind CSS and esbuild run.
5. Markdown content loaded from `src/content/`.
6. `content:load` hook - external content injection point.
7. Collections built (tags, categories, series).
8. `content:ready` hook - RSS and sitemap generated.
9. Pages rendered and written to `dist/`.

## Common Errors

| Error | Fix |
|-------|-----|
| Missing `output.css` or `output.js` | Verify `src/css/app.css` and `src/js/app.js` exist and plugins are listed |
| Wrong language/path in output | Check `content.languages` and canonical settings |
| Old files persist in output | Build clears `dist/` automatically; if issues persist, delete `dist/` manually |

## Related

- [Step 5: Deploy](/docs/tutorials/step-5-deploy/)
- [Production Build](/docs/deploy/production-build/)
