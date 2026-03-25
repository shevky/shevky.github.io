---
id: u6rlq18r
lang: en
title: RSS Plugin
slug: docs/extend/plugins/plugin-rss
category: docs
type: documentation
schemaType: page
description: Generates per-language RSS 2.0 feeds during builds.
tags:
- extend
- plugins
- rss
- feeds
order: 104
pair: pair-docs-extend-plugins-plugin-rss
canonical: ~/docs/extend/plugins/plugin-rss/
alternate: ~/tr/docs/extend/plugins/plugin-rss/
template: page
layout: default
status: published
---

# RSS Plugin

## Purpose

Generates per-language RSS 2.0 feeds from published content files. Supports configurable feed filename, TTL, item count limits, schema type filtering, and category filtering.

## Location

- Package: `@shevky/plugin-rss`
- Main: `plugin-rss/main.js` (~313 lines)
- Runtime name: `shevky-rss`

## Lifecycle Hooks

| Hook | Implemented |
|------|:-----------:|
| `content:ready` | ✓ |

## How It Works

During `content:ready`:

1. Reads plugin config via `ctx.config.get("shevky-rss")`.
2. Filters `ctx.contentFiles` by: validity, publication status, schema type (default: `post`, `job-post`), and optional category filter.
3. Groups filtered entries by language.
4. For each language, builds RSS 2.0 XML with:
   - Channel metadata (title, link, description, language, copyright, etc.)
   - Atom self-link and alternate language feed links
   - Individual items with title, link, guid, pubDate, description (CDATA), author, categories
5. Writes feeds to `dist/feed.xml` (default language) and `dist/{lang}/feed.xml` (other languages).

## Configuration

Read from `pluginConfigs["shevky-rss"]`:

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `feedFilename` | `string` | `"feed.xml"` | Output filename |
| `feedTtl` | `number` | `1440` | Feed TTL in minutes |
| `feedItemCount` | `number` | unlimited | Max items per feed |
| `includedSchemaTypes` | `string[]` | `["post", "job-post"]` | Schema types to include |
| `includedCategories` | `string[]` | all | Optional category filter |

## Dependencies

- `@shevky/base` - `i18n`, `plugin`, `format` (for escaping, date formatting, URL resolution)
- No external dependencies.

## Risks and Limitations

- **XSL stylesheet reference:** Includes `<?xml-stylesheet href="/assets/rss.xsl"?>` - this file must exist in the project's assets directory.
- **Atom namespace mixing:** Uses `atom:link` within RSS 2.0, which is valid but non-standard.
- **Copyright text:** Generates English or Turkish copyright text based on language detection.

## Related

- [Sitemap Plugin](/docs/extend/plugins/plugin-sitemap/) - similar content:ready pattern
