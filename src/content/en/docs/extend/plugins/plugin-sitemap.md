---
id: hbmnma87
lang: en
title: Sitemap Plugin
slug: docs/extend/plugins/plugin-sitemap
category: docs
type: documentation
schemaType: page
description: Generates sitemap.xml with pagination and collection support.
tags:
- extend
- plugins
- sitemap
- seo
order: 105
pair: pair-docs-extend-plugins-plugin-sitemap
canonical: ~/docs/extend/plugins/plugin-sitemap/
alternate: ~/tr/docs/extend/plugins/plugin-sitemap/
template: page
layout: default
status: published
---

# Sitemap Plugin

## Purpose

Generates a `sitemap.xml` file containing URLs for all published content, optional paginated listing URLs, and optional collection URLs. Supports URL deduplication and lastmod tracking.

## Location

- Package: `@shevky/plugin-sitemap`
- Main: `plugin-sitemap/main.js` (~363 lines)
- Runtime name: `shevky-sitemap`

## Lifecycle Hooks

| Hook | Implemented |
|------|:-----------:|
| `content:ready` | ✓ |

## How It Works

During `content:ready`:

1. Collects content entries from `ctx.contentFiles` - one `<url>` per published page.
2. If `config.seo.includePaging` is enabled, generates additional URLs for paginated listing pages (e.g., `page-2`, `page-3`).
3. If `config.seo.includeCollections` is enabled, generates URLs for collection pages (tags, categories, series) using `content.collections` config definitions.
4. Merges and deduplicates all entries by URL, keeping the most recent `lastmod`.
5. Sorts by lastmod descending.
6. Renders and writes `dist/sitemap.xml`.

## Configuration

Plugin-specific config from `pluginConfigs["shevky-sitemap"]`:

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `sitemapFilename` | `string` | `"sitemap.xml"` | Output filename |

Global config keys that affect sitemap generation:

| Key | Effect |
|-----|--------|
| `seo.includeCollections` | Include collection page URLs |
| `seo.includePaging` | Include pagination URLs |
| `content.pagination.pageSize` | Items per page for pagination URL counting |
| `content.pagination.segment` | Localized pagination URL segment (e.g., `"page"`, `"sayfa"`) |
| `content.collections` | Collection definitions with `types` and `slugPattern` |

## Collection URL Generation

Collections are defined in `content.collections`:

```json
"collections": {
  "tags": {
    "types": ["tag"],
    "slugPattern": { "en": "tag/{{key}}", "tr": "etiket/{{key}}" }
  }
}
```

The plugin iterates `ctx.pages` (collection data), matches collection types, and generates URLs using the slug pattern.

## Dependencies

- `@shevky/base` - `i18n`, `plugin`, `format`

## Risks and Limitations

- **Duplicated URL logic:** Reimplements `buildContentUrl()` internally rather than using the core MetaEngine. URL logic changes in core may not be reflected.
- **Single sitemap:** Does not generate a sitemap index for very large sites (>50,000 URLs).
- **Collection config shape:** Depends on a specific `content.collections` structure with `types` and `slugPattern`.

## Related

- [RSS Plugin](/docs/extend/plugins/plugin-rss/) - similar content:ready pattern
- [Robots Txt Plugin](/docs/extend/plugins/plugin-robots-txt/) - references the sitemap
