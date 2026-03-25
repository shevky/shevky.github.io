---
id: 1rfrlzk9
lang: en
title: Plugin System Overview
slug: docs/extend/plugin-system-overview
category: docs
type: documentation
schemaType: page
description: How Shevky discovers, loads, and executes plugins through lifecycle hooks.
tags:
- extend
- plugins
- architecture
order: 51
pair: pair-docs-extend-plugin-system-overview
canonical: ~/docs/extend/plugin-system-overview/
alternate: ~/tr/docs/extend/plugin-system-overview/
template: page
layout: default
status: published
---

# Plugin System Overview

Shevky uses a **hook-driven plugin model**. Plugins are npm packages that export a definition object. The core discovers them from configuration, dynamically imports them, and invokes their hook handlers at defined build lifecycle points.

## Discovery

Plugins are listed in `src/site.json` under the `plugins` key:

```json
"plugins": [
  "@shevky/plugin-robots-txt",
  "@shevky/plugin-tailwindcss",
  "@shevky/plugin-rss"
]
```

## Registration Contract

A plugin must default-export an object matching this shape:

```js
export default {
  name: "my-plugin",       // unique identifier
  version: "0.0.1",        // semantic version
  hooks: { ... },          // hook handlers
  load: (ctx) => { ... },  // optional initialization
};
```

The formal TypeScript type is `PluginDefinition` in `base/src/plugin.d.ts`.

## Hook Lifecycle

The build pipeline executes hooks in this order:

| Order | Hook | When | Best For |
|-------|------|------|----------|
| 1 | `dist:clean` | After `dist/` is created | Generating dist-level files (robots.txt) |
| 2 | `assets:copy` | After static assets are copied | CSS/JS compilation (Tailwind, esbuild) |
| 3 | `content:load` | After Markdown files are loaded | Injecting external content (`addContent`) |
| 4 | `content:ready` | After collections are built | Generating feeds, sitemaps, SEO metadata |
| 5 | `page:meta` | Per page during rendering | Page-level metadata enrichment |

Hooks 1-4 run once per build. Hook 5 runs once per rendered page.

## Runtime Context

Every hook handler receives a context object with:

- `config` - full site configuration with `get(key)` for plugin-specific config
- `log` - logging functions (`info`, `warn`, `err`, `debug`, `step`)
- `file` - `read`, `write`, `exists`
- `directory` - `read`, `exists`, `create`
- `path` - `combine`, `resolve`, `name`
- `paths` - project directories (`root`, `src`, `dist`, `content`, etc.)
- `i18n` - internationalization helpers

Hook-specific additions:

| Hook | Extra Context |
|------|--------------|
| `content:load` | `contentFiles`, `addContent()` |
| `content:ready` | `contentFiles`, `pages`, `footerPolicies`, `contentIndex` |
| `page:meta` | `frontMatter`, `derivedFrontMatter`, `lang`, `slug`, `pageMeta`, `setPageMeta()` |

## Plugin Configuration

Plugins read their settings from `pluginConfigs` in `site.json`:

```json
"pluginConfigs": {
  "shevky-rss": { "feedFilename": "feed.xml", "feedTtl": 1440 }
}
```

Accessed at runtime via `ctx.config.get("shevky-rss")`. The key must match the plugin's exported `name` field.

## Error Behavior

- Plugin loading errors are caught and logged; the build continues without the failed plugin.
- Hook execution errors are caught and logged; remaining plugins and build stages continue.
- Implication: builds can succeed while plugin output is incomplete. Check build logs.

## Related

- [Plugin Lifecycle](/docs/extend/plugin-lifecycle/) - detailed hook timing and context
- [Plugin API Reference](/docs/extend/plugin-api-reference/) - contract types
- [Your First Plugin](/docs/extend/your-first-plugin/) - hands-on tutorial
- [Plugin Catalog](/docs/extend/plugins/) - first-party plugin documentation
