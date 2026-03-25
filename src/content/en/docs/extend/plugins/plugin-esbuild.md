---
id: ximijiln
lang: en
title: Esbuild Plugin
slug: docs/extend/plugins/plugin-esbuild
category: docs
type: documentation
schemaType: page
description: Bundles JavaScript with esbuild during builds.
tags:
- extend
- plugins
- esbuild
- javascript
order: 103
pair: pair-docs-extend-plugins-plugin-esbuild
canonical: ~/docs/extend/plugins/plugin-esbuild/
alternate: ~/tr/docs/extend/plugins/plugin-esbuild/
template: page
layout: default
status: published
---

# Esbuild Plugin

## Purpose

Bundles JavaScript from `src/js/app.js` into `dist/output.js` using esbuild. Supports minification, source maps, and dead code elimination.

## Location

- Package: `@shevky/plugin-esbuild`
- Main: `plugin-esbuild/main.js`
- Runtime name: `shevky-esbuild`

## Lifecycle Hooks

| Hook | Implemented |
|------|:-----------:|
| `assets:copy` | ✓ |

## How It Works

During `assets:copy`:

1. Resolves source (`{root}/src/js/app.js`) and output (`{root}/dist/output.js`) paths.
2. Checks source file exists (warns and skips if missing).
3. Constructs esbuild args: `--bundle --format=esm --target=es2018`.
4. When `build.minify` is true, adds: `--minify`, `--drop:debugger`, `--drop:console`, `--ignore-annotations`, `--sourcemap`.
5. Runs via `exec.executeNpx()` from the plugin root directory.

## Build Output Settings

| Setting | Value |
|---------|-------|
| Bundle | Yes |
| Format | ESM |
| Target | ES2018 |
| Sourcemap | Only when minifying |
| Console/debugger removal | Only when minifying |

## Dependencies

- `@shevky/base` - `io`, `exec`, `plugin`
- `esbuild` ^0.27.3 - bundled as a dependency

## Risks and Limitations

- **Hardcoded source path:** Expects exactly `src/js/app.js`.
- **Runs via npx:** Requires esbuild to be available in the plugin's dependency tree.
- **No custom config:** Does not support esbuild plugins or user-provided configuration.

## Related

- [TailwindCSS Plugin](/docs/extend/plugins/plugin-tailwindcss/) - similar asset compilation pattern
