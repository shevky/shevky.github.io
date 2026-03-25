---
id: oh5iu99d
lang: en
title: Important Types
slug: docs/reference/important-types
category: docs
type: documentation
schemaType: page
description: Key TypeScript type contracts across the Shevky packages.
tags:
- reference
- types
order: 64
pair: pair-docs-reference-important-types
canonical: ~/docs/reference/important-types/
alternate: ~/tr/docs/reference/important-types/
template: page
layout: default
status: published
---

# Important Types

All types are defined in hand-written `.d.ts` files. This page maps the types that define runtime contracts between core and plugins.

## Configuration Types (`base/src/config.d.ts`)

| Type | Description |
|------|-------------|
| `ShevkyConfig` | Root configuration shape with all sections |
| `ConfigApi` | Config object with `load(path)` and `get(key)` methods |
| `SeoConfig` | SEO defaults (defaultImage, includeCollections, etc.) |
| `AnalyticsConfig` | Analytics provider IDs |
| `FeaturesConfig` | UI feature toggles |
| `PostOperationsConfig` | Post interaction controls |
| `ShareOptions` | Per-network share button toggles |
| `MarkdownConfig` | Markdown renderer options |
| `PaginationConfig` | Page size and localized segments |
| `ContentConfig` | Pagination, languages, collections |
| `BuildConfig` | Minify, debug, buffer limits, aliases |
| `IdentityConfig` | Author, email, URL, theme, social |
| `SocialIdentityConfig` | Social media account URLs |
| `RobotsConfig` | Allow/disallow paths |

## Plugin Contract Types (`base/src/plugin.d.ts`)

| Type | Description |
|------|-------------|
| `PluginDefinition` | Plugin shape: `{ name, version, hooks, load? }` |
| `PluginHook` | Enum of lifecycle hook values |
| `PluginHooks` | Partial record mapping hook names to handlers |
| `HookHandler` | `(ctx: PluginContext) => Promise<void> \| void` |
| `PluginContext` | Full context with config, log, file, directory, path, paths, contentFiles |
| `BasePluginContext` | Context without `paths` |
| `PluginLoadContext` | Minimal context: `{ config, paths }` |
| `PluginPaths` | Project directories (root, src, dist, content, etc.) |
| `SchemaType` | Union: `"post" \| "job-post" \| ... \| "policy"` |
| `CollectionType` | `"tag" \| "category" \| "series"` |

## Content Types (`base/src/plugin.d.ts`)

| Type | Description |
|------|-------------|
| `ContentHeaderLike` | Front matter field shape |
| `ContentBodyLike` | Body content wrapper |
| `ContentFileLike` | Combined content file for plugin interaction |
| `ContentSummaryLike` | Summary projection (id, title, date, etc.) |

## Utility API Types

| Type | File | Description |
|------|------|-------------|
| `IoApi` | `base/src/io.d.ts` | File, directory, path, URL operations |
| `ExecApi` | `base/src/exec.d.ts` | Process execution and module resolution |
| `I18nApi` | `base/src/i18n.d.ts` | Internationalization helpers |
| `FormatApi` | `base/src/format.d.ts` | Formatting and type guard utilities |
| `LogApi` | `base/src/log.d.ts` | Logging interface |

## Core Types (`core/types/index.d.ts`)

| Type | Description |
|------|-------------|
| `ProjectPaths` | All project directory paths |
| `PluginInstance` | Loaded plugin runtime object |
| `PluginExecutionContext` | Extended context for hook execution |
| `ContentFileLike` | Content file shape for core |
| `CollectionEntry` | Content summary with collection type |
| `CollectionsByLang` | `Record<string, Record<string, CollectionEntry[]>>` |
| `FooterPolicy` | Footer policy link |
| `FrontMatter` | `Record<string, any>` |
| `Placeholder` | Markdown component placeholder |

## Plugin-Specific Types

| Type | Package | Description |
|------|---------|-------------|
| `RssPluginConfig` | plugin-rss | Feed filename, TTL, item count |
| `SitemapPluginConfig` | plugin-sitemap | Sitemap filename |
| `ContentBridgeConfig` | plugin-content-bridge | Sources, maxItems, output |
| `ContentBridgeSource` | plugin-content-bridge | Fetch, mapping, per-source config |
| `ContentBridgeFetchConfig` | plugin-content-bridge | URL, method, headers, pagination |
| `ContentBridgePagination` | plugin-content-bridge | Mode, params, cursors |
| `ContentBridgeMapping` | plugin-content-bridge | Front matter, content, sourcePath mapping |

## Known Type Mismatch

In `core/types/index.d.ts`, `PluginInstance.load` is typed as required. In the runtime (`core/registries/pluginRegistry.js`), `load` is treated as optional (`if (instance.load)`). This matters if you rely on strict type checking.

## Related

- [Plugin API Reference](/docs/extend/plugin-api-reference/)
- [Configuration Reference](/docs/reference/configuration-reference/)
- [Glossary](/docs/reference/glossary/)
