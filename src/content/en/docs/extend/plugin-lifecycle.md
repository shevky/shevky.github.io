---
id: qpa32afx
lang: en
title: Plugin Lifecycle
slug: docs/extend/plugin-lifecycle
category: docs
type: documentation
schemaType: page
description: Hook execution order, per-hook context, and runtime timing.
tags:
- extend
- lifecycle
order: 52
pair: pair-docs-extend-plugin-lifecycle
canonical: ~/docs/extend/plugin-lifecycle/
alternate: ~/tr/docs/extend/plugin-lifecycle/
template: page
layout: default
status: published
---

# Plugin Lifecycle

## Load Phase

Before build execution, `PluginRegistry.load()` in `core/registries/pluginRegistry.js`:

1. Resolves the package path from the project root using `exec.resolve()`.
2. Dynamically imports the plugin module.
3. Validates the plugin object: must be a non-null object with a non-empty `name` string.
4. Rejects duplicates by `name`.
5. Caches in a `Map<string, PluginInstance>`.
6. If the plugin has a `load(ctx)` function, calls it with `{ config, paths }`.

## Build Hook Phase

During the build (`core/scripts/build.js`), hooks execute in this fixed order:

1. **`dist:clean`** - `dist/` has been cleared and recreated. Generate files that need to exist before content processing.
2. **`assets:copy`** - Static assets have been copied. Run asset pipelines (CSS/JS compilation).
3. **`content:load`** - Markdown files have been loaded into `ContentRegistry`. Inject additional content via `ctx.addContent()`.
4. **`content:ready`** - Collections (tags, categories, series) have been built. Generate files based on the full content set (RSS, sitemap).

## Page Meta Phase

**`page:meta`** is triggered from `buildPageMetaWithPlugins()` during page rendering. It runs once per content file and receives:

- `frontMatter` - the page's front matter object
- `derivedFrontMatter` - enriched front matter
- `lang`, `slug` - page identity
- `pageMeta` - current metadata (mutable)
- `setPageMeta(meta)` - callback to replace page metadata
- `pages` - full collection data

## Execution Order Within Hooks

Plugins are iterated in the order they appear in the `plugins` config array. The `PluginEngine` iterates the `Map` via `for...of`, preserving insertion order.

## Hook Context Summary

| Hook | `contentFiles` | `addContent` | `pages` | `footerPolicies` | `contentIndex` | `frontMatter` | `setPageMeta` |
|------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `dist:clean` | - | - | - | - | - | - | - |
| `assets:copy` | - | - | - | - | - | - | - |
| `content:load` | ✓ | ✓ | - | - | - | - | - |
| `content:ready` | ✓ | - | ✓ | ✓ | ✓ | - | - |
| `page:meta` | - | - | via runtime | - | - | ✓ | ✓ |

## Failure Semantics

- A `throw` inside a hook handler is caught by `PluginEngine.execute()`.
- The error is logged via `log.err()`.
- The remaining plugins for that hook continue executing.
- The build continues to the next stage.

This means a single plugin failure does not break the build, but plugin output may be incomplete.

## Related

- [Plugin System Overview](/docs/extend/plugin-system-overview/)
- [Plugin API Reference](/docs/extend/plugin-api-reference/)
