---
id: lxrn9cxe
lang: en
title: Configuration Guide
slug: docs/guides/configuration
category: docs
type: documentation
schemaType: page
description: Practical guidance for editing site.json and pluginConfigs safely.
tags:
- guides
- configuration
order: 31
pair: pair-docs-guides-configuration
canonical: ~/docs/guides/configuration/
alternate: ~/tr/docs/guides/configuration/
template: page
layout: default
status: published
---

# Configuration Guide

Shevky reads `src/site.json` during build startup via `config.load()` in `base/src/config.js`. All configuration fields have built-in fallback defaults.

## Core Principles

- Keep `site.json` as valid JSON (no trailing commas, no comments).
- Prefer explicit values over relying solely on defaults.
- Put plugin settings in `pluginConfigs`, not mixed with global config.
- Put plugin package names in `plugins`.

## High-Impact Sections

### `identity`

Controls canonical site metadata used across meta tags, RSS, sitemap, and robots generation.

Key fields: `author`, `email`, `url`, `themeColor`, `social`.

> **Important:** `identity.url` drives canonical URLs in RSS feeds, sitemap, robots.txt, and OG metadata. Set this to your production URL before building for deployment.

### `content`

Controls language behavior and content listings.

Key fields:
- `languages.default`, `languages.supported`, `languages.canonical` - multi-language routing
- `pagination.pageSize`, `pagination.segment` - listing pagination
- `collections` - custom collection definitions for tags/categories/series

### `build`

Controls output behavior:
- `minify` - enables HTML/CSS/JS minification
- `debug` - enables verbose build logging and debug payloads
- `pageBufferLimit` - pages held in memory before flushing (default: 20)
- `outputAliases` - post-build path mappings (e.g., `~/404/` -> `~/404.html`)

### `plugins`

List plugin package names exactly as installed in npm:

```json
"plugins": [
  "@shevky/plugin-robots-txt",
  "@shevky/plugin-tailwindcss"
]
```

### `pluginConfigs`

Store plugin runtime settings keyed by the plugin's `name` field (the runtime name, not the npm package name):

```json
"pluginConfigs": {
  "shevky-rss": { "feedFilename": "feed.xml" },
  "shevky-open-graph": { "siteName": "My Site" }
}
```

## Safe Change Workflow

1. Edit `src/site.json`.
2. Run `npm run build`.
3. Inspect `dist/` output and build logs.
4. Run `npm run dev` and verify pages in browser.

## Common Mistakes

| Mistake | Consequence | Fix |
|---------|------------|-----|
| Plugin in `pluginConfigs` but missing from `plugins[]` | Config is ignored; plugin never loads | Add to both places |
| Wrong package name in `plugins[]` | Plugin load warning; build continues without it | Use exact npm package name |
| Incorrect `identity.url` | Wrong canonical/sitemap/feed/OG URLs | Set to actual production URL |
| Mismatched `pluginConfigs` key | Plugin reads `null` config | Key must match plugin's `name` export |

## Related

- [Configuration Reference](/docs/reference/configuration-reference/) - complete field-by-field reference
- [CLI Usage](/docs/guides/cli-usage/)
