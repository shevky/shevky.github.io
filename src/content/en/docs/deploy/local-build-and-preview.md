---
id: cbcbk0b8
lang: en
title: Local Build and Preview
slug: docs/deploy/local-build-and-preview
category: docs
type: documentation
schemaType: page
description: Build static output and preview it locally before deployment.
tags:
- deploy
- local
order: 41
pair: pair-docs-deploy-local-build-and-preview
canonical: ~/docs/deploy/local-build-and-preview/
alternate: ~/tr/docs/deploy/local-build-and-preview/
template: page
layout: default
status: published
---

# Local Build and Preview

## Purpose

Verify production-like output locally before publishing to a hosting platform.

## Commands

Build output:

```bash
npm run build
```

Preview with Shevky dev command:

```bash
npm run dev
```

Or preview static output directly with any static server:

```bash
npx serve dist
```

## Validation Checklist

- Open the homepage and at least one content page.
- Confirm CSS and JS bundles load without 404 errors.
- Check generated support files exist: `dist/robots.txt`, `dist/sitemap.xml`, `dist/feed.xml`.
- Verify canonical URLs in the HTML source match expected values.

## Common Issues

| Issue | Fix |
|-------|-----|
| Port conflict on 3000 | Stop conflicting process or use `npx serve dist -l 8080` |
| Missing CSS/JS bundles | Verify `src/css/app.css` and `src/js/app.js` exist and plugins are listed |
| Stale content | Build clears `dist/` automatically; delete manually if needed |

## Related

- [Production Build](/docs/deploy/production-build/)
- [Deploy Options Overview](/docs/deploy/deploy-options-overview/)
