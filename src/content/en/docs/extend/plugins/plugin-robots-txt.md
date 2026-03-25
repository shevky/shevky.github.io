---
id: 3j61svop
lang: en
title: Robots Txt Plugin
slug: docs/extend/plugins/plugin-robots-txt
category: docs
type: documentation
schemaType: page
description: Generates robots.txt during builds.
tags:
- extend
- plugins
- robots
order: 101
pair: pair-docs-extend-plugins-plugin-robots-txt
canonical: ~/docs/extend/plugins/plugin-robots-txt/
alternate: ~/tr/docs/extend/plugins/plugin-robots-txt/
template: page
layout: default
status: published
---

# Robots Txt Plugin

## Purpose

Generates a `robots.txt` file in the `dist/` directory during builds, configuring web crawler access rules and linking to the sitemap.

## Location

- Package: `@shevky/plugin-robots-txt`
- Main: `plugin-robots-txt/main.js`
- Runtime name: `shevky-robots-txt`

## Discovery and Registration

Listed in `site.json` -> `plugins` as `"@shevky/plugin-robots-txt"`. Loaded by `PluginRegistry.load()`. No `load()` initializer.

## Lifecycle Hooks

| Hook | Implemented |
|------|:-----------:|
| `dist:clean` | ✓ |
| `assets:copy` | - |
| `content:load` | - |
| `content:ready` | - |
| `page:meta` | - |

## How It Works

During `dist:clean`, the handler:

1. Reads `ctx.config.identity.url` and strips trailing slashes for the base URL.
2. Reads `ctx.config.robots.allow` and `ctx.config.robots.disallow` arrays.
3. Builds a text file with `User-agent: *`, `Allow:`, `Disallow:` directives.
4. Appends `Sitemap: {baseUrl}/sitemap.xml`.
5. Writes to `dist/robots.txt` via `ctx.file.write()`.

## Configuration

Uses `robots` section from `site.json`:

```json
"robots": {
  "allow": ["/"],
  "disallow": ["/draft/"]
}
```

No plugin-specific config in `pluginConfigs` - reads directly from the global `robots` config section.

## Dependencies

- `@shevky/base` only. No external dependencies.

## Risks and Limitations

- **Hardcoded sitemap path:** Always references `sitemap.xml`. If the sitemap plugin uses a different filename, the reference will be wrong.
- **No validation:** Does not check that allow/disallow paths are well-formed.
- **Single User-agent:** Only generates rules for `User-agent: *`.

## Related

- [Plugin System Overview](/docs/extend/plugin-system-overview/)
- [Sitemap Plugin](/docs/extend/plugins/plugin-sitemap/)
