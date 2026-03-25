---
id: 6xdjjmvm
lang: en
title: Production Build
slug: docs/deploy/production-build
category: docs
type: documentation
schemaType: page
description: Produce deterministic deployable output for production hosting.
tags:
- deploy
- production
order: 42
pair: pair-docs-deploy-production-build
canonical: ~/docs/deploy/production-build/
alternate: ~/tr/docs/deploy/production-build/
template: page
layout: default
status: published
---

# Production Build

## Recommended Settings

In `src/site.json`, set production-appropriate values:

```json
{
  "build": { "minify": true, "debug": false },
  "identity": { "url": "https://yourdomain.com" }
}
```

## Commands

```bash
npm run build
```

Optional artifact packaging:

```bash
tar -czf dist.tar.gz dist
```

## What the Build Produces

The build pipeline executes these stages:

1. Clean and recreate `dist/`
2. Run `dist:clean` plugin hook (e.g., robots.txt)
3. Copy static assets from `src/assets/`
4. Run `assets:copy` plugin hook (CSS/JS compilation)
5. Load and parse Markdown content
6. Run `content:load` hook (external content injection)
7. Build collections, menus, and indices
8. Run `content:ready` hook (RSS, sitemap generation)
9. Render all pages with Mustache templates
10. Minify HTML output
11. Flush pages and apply output aliases

## Output Verification

Check that:

- HTML pages exist at expected language/slug paths.
- Canonical URLs reflect your production domain.
- All enabled plugin outputs exist (`robots.txt`, `sitemap.xml`, `feed.xml`).
- CSS and JS bundles are minified.

## Related

- [Local Build and Preview](/docs/deploy/local-build-and-preview/)
- [Tutorial Step 4](/docs/tutorials/step-4-build-for-production/)
