---
id: eoskopxn
lang: en
title: Configuration Reference
slug: docs/reference/configuration-reference
category: docs
type: documentation
schemaType: page
description: Complete reference for site.json with all sections, keys, types, and
  defaults.
tags:
- reference
- configuration
order: 62
pair: pair-docs-reference-configuration-reference
canonical: ~/docs/reference/configuration-reference/
alternate: ~/tr/docs/reference/configuration-reference/
template: page
layout: default
status: published
---

# Configuration Reference

Configuration is loaded from `src/site.json` by `config.load()` in `base/src/config.js`. Root type: `ShevkyConfig` (`base/src/config.d.ts`).

## `identity`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `author` | `string` | `"<name> <surname>"` | Author name for meta tags |
| `email` | `string` | `"<name>@<surname>.net"` | Public contact email |
| `url` | `string` | `"http://localhost:3000"` | Canonical site URL |
| `themeColor` | `string` | `"#5a8df0"` | Theme color meta tag |
| `social.rss` | `boolean` | `false` | Show RSS link |
| `social.github` | `string` | `""` | GitHub profile URL |
| `social.linkedin` | `string` | `""` | LinkedIn profile URL |
| `social.x` | `string` | `""` | X/Twitter URL |
| `social.facebook` | `string` | `""` | Facebook URL |
| `social.instagram` | `string` | `""` | Instagram URL |
| `social.youtube` | `string` | `""` | YouTube URL |
| `social.tiktok` | `string` | `""` | TikTok URL |
| `social.substack` | `string` | `""` | Substack URL |
| `social.medium` | `string` | `""` | Medium URL |
| `social.devto` | `string` | `""` | Dev.to URL |
| `social.stackoverflow` | `string` | `""` | Stack Overflow URL |
| `social.mastodon` | `string` | `""` | Mastodon URL |

## `seo`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `defaultImage` | `string` | `""` | Fallback OG/Twitter image |
| `includeCollections` | `boolean` | `false` | Include collection URLs in sitemap |
| `includePaging` | `boolean` | `false` | Include pagination URLs in sitemap |
| `footerTagCount` | `number` | `8` | Tags shown in footer |

## `analytics`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `enabled` | `boolean` | `false` | Master analytics toggle |
| `gtmId` | `string` | `""` | Google Tag Manager ID |
| `gaId` | `string` | `""` | Google Analytics ID |
| `clarityId` | `string` | `""` | Microsoft Clarity ID |
| `metaPixelId` | `string` | `""` | Meta Pixel ID |

## `features`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `search` | `boolean` | `false` | Enable global search |
| `postOperations.enabled` | `boolean` | `false` | Enable post interactions |
| `postOperations.like` | `boolean` | `false` | Like action |
| `postOperations.dislike` | `boolean` | `false` | Dislike action |
| `postOperations.comment` | `boolean` | `false` | Comment action |
| `postOperations.share.enabled` | `boolean` | `false` | Share buttons |
| `postOperations.share.whatsapp` | `boolean` | `false` | WhatsApp share |
| `postOperations.share.x` | `boolean` | `false` | X/Twitter share |
| `postOperations.share.linkedin` | `boolean` | `false` | LinkedIn share |
| `postOperations.share.facebook` | `boolean` | `false` | Facebook share |
| `postOperations.share.copy` | `boolean` | `false` | Copy link |

## `markdown`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `highlight` | `boolean` | `false` | Syntax highlighting via highlight.js |

## `content`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `pagination.pageSize` | `number` | `10` | Items per listing page |
| `pagination.segment.tr` | `string` | `"sayfa"` | Turkish pagination URL segment |
| `pagination.segment.en` | `string` | `"page"` | English pagination URL segment |
| `languages.default` | `string` | `"tr"` | Default language |
| `languages.supported` | `string[]` | `["tr", "en"]` | Supported languages |
| `languages.canonical` | `Record` | `{ tr: "/", en: "/en/" }` | Canonical path per language |
| `collections.includeContentFile` | `boolean` | `false` | Include full file data in collections |

## `build`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `minify` | `boolean` | `false` | Minify HTML/CSS/JS output |
| `debug` | `boolean` | `false` | Enable debug logging |
| `pageBufferLimit` | `number` | `20` | Pages buffered before disk flush |
| `outputAliases` | `Array<{from, to}>` | `[]` | Post-build path aliases |
| `contentRootDirectories` | `string[]` | `[".well-known"]` | Directories copied to dist root |

## `robots`

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `allow` | `string[]` | `["/"]` | Allowed crawler paths |
| `disallow` | `string[]` | `[]` | Disallowed crawler paths |

## `ui`

Open-ended `Record<string, unknown>` passed to templates as `site.ui`.

## `plugins`

Array of npm package names (or relative paths) loaded by `PluginRegistry.load()`.

## `pluginConfigs`

Plugin settings keyed by plugin runtime `name`:

- `shevky-rss`: `feedFilename`, `feedTtl`, `feedItemCount`, `includedSchemaTypes`, `includedCategories`
- `shevky-sitemap`: `sitemapFilename`
- `shevky-content-bridge`: `sources[]`, `maxItems`, `output`
- `shevky-open-graph`: `twitterSite`, `defaultTwitterCard`, `defaultImage`, `force`, `siteName`, `publisherType`, `exposePageMeta`, `enableSearchAction`, and more

## Config Resolution

`config.get(key)` order: top-level key -> `pluginConfigs[key]` -> built-in fallback.

## Related

- [Configuration Guide](/docs/guides/configuration/)
- [Important Types](/docs/reference/important-types/)
