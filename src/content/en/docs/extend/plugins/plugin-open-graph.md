---
id: hk6fgnaj
lang: en
title: Open Graph Plugin
slug: docs/extend/plugins/plugin-open-graph
category: docs
type: documentation
schemaType: page
description: Generates OG, Twitter Card, and JSON-LD structured data.
tags:
- extend
- plugins
- open-graph
- seo
order: 107
pair: pair-docs-extend-plugins-plugin-open-graph
canonical: ~/docs/extend/plugins/plugin-open-graph/
alternate: ~/tr/docs/extend/plugins/plugin-open-graph/
template: page
layout: default
status: published
---

# Open Graph Plugin

## Purpose

Generates Open Graph (`og:*`), Twitter Card (`twitter:*`), and JSON-LD structured data for every content file and rendered page. The most complex plugin in the ecosystem, with schema-specific structured data for 10+ page types.

## Location

- Package: `@shevky/plugin-open-graph`
- Main: `plugin-open-graph/main.js`
- Sub-modules: `plugin-open-graph/src/` (pipeline, meta, helpers, constants, structured/)
- Runtime name: `shevky-open-graph`

## Lifecycle Hooks

| Hook | Implemented | Purpose |
|------|:-----------:|---------|
| `content:ready` | ✓ | Build metadata for all content files in bulk |
| `page:meta` | ✓ | Build/update metadata per page at render time |

This is the **only plugin implementing two hooks** and the only one using `page:meta`.

## How It Works

### `content:ready` Hook

Iterates all `ctx.contentFiles`, for each valid file:
1. Extracts front matter target.
2. Builds page metadata (canonical URL, OG title/description/image, Twitter card, JSON-LD).
3. **Mutates the front matter object** to inject `og`, `twitter`, `structuredData`, and `pageMeta` fields.

### `page:meta` Hook

For individual pages during rendering:
1. Reads `ctx.frontMatter` and `ctx.derivedFrontMatter`.
2. Builds page metadata.
3. Calls `ctx.setPageMeta(meta)` to provide the render engine with SEO data.

### Schema-Specific JSON-LD

Uses a strategy pattern in `src/structured/index.js` to dispatch by schema type:

| Schema Type | JSON-LD Type | `og:type` |
|-------------|-------------|-----------|
| `post` | Article | `article` |
| `job-post` | JobPosting | `website` |
| `job-listing` | ItemList + JobPosting | `website` |
| `home` | WebSite + CollectionPage | `website` |
| `about` | AboutPage | `website` |
| `contact` | ContactPage | `website` |
| `help` / `faq` | FAQPage | `website` |
| `press` | WebPage | `website` |
| `not-found` | WebPage (noindex) | `website` |
| `collection` | CollectionPage | `website` |
| default | WebPage | `website` |

## Configuration

Read from `pluginConfigs["shevky-open-graph"]`:

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `twitterSite` | `string` | `""` | Twitter `@username` for `twitter:site` |
| `defaultTwitterCard` | `string` | `"summary_large_image"` | Default card type |
| `defaultImage` | `string` | `""` | Fallback OG/Twitter image |
| `force` | `boolean` | `false` | Overwrite existing OG values |
| `siteName` | `string` | `""` | `og:site_name` override |
| `publisherType` | `string` | `"person"` | `"person"` or `"organization"` |
| `exposePageMeta` | `boolean` | `true` | Expose pageMeta on front matter |
| `enableSearchAction` | `boolean\|null` | `null` | Add SearchAction to WebSite schema |
| `contact` | `object\|null` | `null` | Contact info for ContactPoint |

Additional keys for advanced schema: `jobCategoryTokens`, `jobUrlTokens`, `localityCountryTokens`, `faqItemsPaths`, `newsItemsPaths`, `questionCount`, `jobValidThroughDays`, `searchActionTarget`, `searchActionQueryInput`.

## Dependencies

- `@shevky/base` - `plugin`, `format`, `i18n`
- No external dependencies.

## Risks and Limitations

- **Largest plugin:** ~3000+ lines across all files. High complexity and maintenance burden.
- **Mutates shared state:** Directly writes to content file front matter objects, affecting all subsequent plugins and the render pipeline.
- **Duplicated URL logic:** Contains its own canonical URL resolution rather than delegating to MetaEngine.
- **Module-level mutable state:** Maintains `runtimeI18n`, `runtimeCollections`, and `runtimePluginConfig` variables that must be refreshed per invocation.
- **Heuristic schema detection:** Can produce false positives for unusual content metadata patterns. (Inferred from rule density in `helpers.js`.)

## Related

- [Plugin API Reference](/docs/extend/plugin-api-reference/)
- [Plugin Lifecycle](/docs/extend/plugin-lifecycle/)
