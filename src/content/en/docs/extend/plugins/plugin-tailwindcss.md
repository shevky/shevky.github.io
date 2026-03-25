---
id: hot5rtut
lang: en
title: TailwindCSS Plugin
slug: docs/extend/plugins/plugin-tailwindcss
category: docs
type: documentation
schemaType: page
description: Compiles Tailwind CSS during builds.
tags:
- extend
- plugins
- tailwind
- css
order: 102
pair: pair-docs-extend-plugins-plugin-tailwindcss
canonical: ~/docs/extend/plugins/plugin-tailwindcss/
alternate: ~/tr/docs/extend/plugins/plugin-tailwindcss/
template: page
layout: default
status: published
---

# TailwindCSS Plugin

## Purpose

Compiles Tailwind CSS from the project's `src/css/app.css` into an optimized `dist/output.css` during builds. Supports minification when `build.minify` is enabled.

## Location

- Package: `@shevky/plugin-tailwindcss`
- Main: `plugin-tailwindcss/main.js`
- Runtime name: `shevky-tailwindcss`

## Lifecycle Hooks

| Hook | Implemented |
|------|:-----------:|
| `assets:copy` | ✓ |

## How It Works

During `assets:copy`:

1. Resolves three paths: `{root}/tailwind.config.js`, `{src}/css/app.css`, `{dist}/output.css`.
2. Validates that both the config and source files exist (warns and skips if missing).
3. Locates the Tailwind CLI binary - checks project `node_modules/.bin/tailwindcss` first, then falls back to the plugin's own `node_modules/.bin/tailwindcss`. Uses `.cmd` suffix on Windows.
4. Executes the Tailwind CLI: `-c {config} --input {source} --output {dist}`.
5. Appends `--minify` when `ctx.config.build.minify` is true.

## Configuration

No plugin-specific config. Relies on:

- `tailwind.config.js` at project root
- `src/css/app.css` as the CSS entry point
- `build.minify` to control minification

## Dependencies

- `@shevky/base` - `io`, `exec`, `plugin`
- `@tailwindcss/cli` ^4.2.1 - bundled for the CLI binary

## Risks and Limitations

- **Hardcoded paths:** Expects `src/css/app.css` and `tailwind.config.js` at specific locations.
- **Binary discovery:** If neither the project nor plugin has the `tailwindcss` binary installed, the step silently skips.
- **Direct imports:** Uses `io` and `exec` directly from `@shevky/base` rather than only `ctx.*` methods.

## Related

- [Esbuild Plugin](/docs/extend/plugins/plugin-esbuild/) - similar asset compilation pattern
