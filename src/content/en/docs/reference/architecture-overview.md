---
id: s5zrrvt9
lang: en
title: Architecture Overview
slug: docs/reference/architecture-overview
category: docs
type: documentation
schemaType: page
description: User-facing architecture summary of how Shevky works internally.
tags:
- reference
- architecture
order: 61
pair: pair-docs-reference-architecture-overview
canonical: ~/docs/reference/architecture-overview/
alternate: ~/tr/docs/reference/architecture-overview/
template: page
layout: default
status: published
---

# Architecture Overview

## Package Structure

Shevky is organized as a multi-package system:

| Package | Role |
|---------|------|
| `@shevky/base` | Shared utilities: config, i18n, io, log, format, exec, plugin contract |
| `@shevky/core` | CLI, build pipeline, engines, registries, content model |
| `@shevky/plugin-*` | Optional build extensions loaded from project config |

Dependency direction: plugins depend on `base`; core depends on `base`; core dynamically imports plugins at build time.

## Runtime Entry Points

- CLI binary: `core/shevky.js` (hashbang Node.js script)
- Dispatcher: `core/scripts/main.js` (routes `--build`, `--dev`, `--init`, etc.)
- Build pipeline: `core/scripts/build.js` (`execute()` function)

## Build Lifecycle

The build pipeline in `core/scripts/build.js` executes these stages:

1. Clear and recreate `dist/`.
2. Execute `dist:clean` plugin hook.
3. Copy static assets from `src/assets/`.
4. Execute `assets:copy` plugin hook.
5. Load Markdown content from `src/content/`.
6. Execute `content:load` plugin hook.
7. Build menus and content collections (tags, categories, series).
8. Execute `content:ready` plugin hook.
9. Render pages (per-page `page:meta` hook, then Mustache + Markdown -> HTML).
10. Flush pages to `dist/`.
11. Apply output aliases.

## Internal Components

### Engines

| Engine | File | Purpose |
|--------|------|---------|
| PluginEngine | `core/engines/pluginEngine.js` | Hook execution with per-hook context |
| RenderEngine | `core/engines/renderEngine.js` | Mustache + Markdown rendering, HTML transforms |
| MenuEngine | `core/engines/menuEngine.js` | Navigation menu building |
| MetaEngine | `core/engines/metaEngine.js` | URL resolution, site metadata, alternate links |

### Registries

| Registry | File | Purpose |
|----------|------|---------|
| PluginRegistry | `core/registries/pluginRegistry.js` | Dynamic import and caching of plugins |
| ContentRegistry | `core/registries/contentRegistry.js` | Content loading, deduplication, collection building |
| TemplateRegistry | `core/registries/templateRegistry.js` | Mustache template loading by type |
| PageRegistry | `core/registries/pageRegistry.js` | Buffered page output |

### Data Flow

1. Markdown files -> `ContentRegistry` -> `ContentFile` objects
2. Templates -> `TemplateRegistry` -> Mustache strings
3. Content + templates -> `RenderEngine` -> HTML strings
4. HTML -> `PageRegistry` -> `dist/` files

Plugins can inject content (`content:load`), process content (`content:ready`), and enrich page metadata (`page:meta`).

## Extension Points

- Plugin hooks: `dist:clean`, `assets:copy`, `content:load`, `content:ready`, `page:meta`
- Custom collections via `content.collections` config
- Output aliases via `build.outputAliases`
- Content root directories via `build.contentRootDirectories`

## Related

- [CLI Reference](/docs/reference/cli-reference/)
- [Configuration Reference](/docs/reference/configuration-reference/)
- [Plugin System Overview](/docs/extend/plugin-system-overview/)
