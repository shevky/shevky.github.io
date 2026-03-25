---
id: xgzz4706
lang: en
title: CLI Reference
slug: docs/reference/cli-reference
category: docs
type: documentation
schemaType: page
description: Complete Shevky CLI flags, handlers, and runtime effects.
tags:
- reference
- cli
order: 63
pair: pair-docs-reference-cli-reference
canonical: ~/docs/reference/cli-reference/
alternate: ~/tr/docs/reference/cli-reference/
template: page
layout: default
status: published
---

# CLI Reference

CLI is provided by `@shevky/core` through the bin entry `shevky` -> `core/shevky.js`.

## Flags

Defined in `core/scripts/cli.js` (`getCliOptionDefinitions()`):

| Flag | Alias | Type | Description |
|------|-------|------|-------------|
| `--help` | `-h` | Boolean | Print usage text |
| `--version` | `-v` | Boolean | Print version |
| `--init` | - | Boolean | Initialize project |
| `--build` | - | Boolean | Run full build |
| `--dev` | - | Boolean | Build + serve locally |

## Dispatch Order

`core/scripts/main.js` checks flags in this order:

1. `--help` -> print usage via `command-line-usage`
2. `--version` -> print version string
3. `--init` -> run `core/scripts/init.js`
4. `--dev` -> build then serve
5. `--build` -> run full build
6. No flags -> print help

## Command Details

### `shevky --init`

Runs `core/scripts/init.js`:
- Clones `fatihtatoglu/shevky-simple-blog` via `degit`
- Copies `src/` and `tailwind.config.js`
- Installs build dependencies via `exec.installPackage()`
- Writes `.gitignore`
- Updates `package.json` with scripts: `build` -> `npx shevky --build`, `dev` -> `npx shevky --dev`

### `shevky --build`

Runs `core/scripts/build.js` `execute()`:
- Loads i18n, config, templates, plugins
- Executes the full build lifecycle
- Writes output to `dist/`

### `shevky --dev`

- Runs the full build first
- Starts `serve@14` on `dist/`
- Logs: `Serving dist on http://localhost:3000`

## Exit Behavior

- Plugin errors are logged and swallowed; build may complete with missing plugin output.
- `--init` exits early on missing `package.json` or clone/install failures.

## Note

`runWatch()` exists in `core/scripts/main.js` but no CLI flag maps to it in the current version. (Inferred from source comparison.)

## Related

- [CLI Usage Guide](/docs/guides/cli-usage/)
- [Architecture Overview](/docs/reference/architecture-overview/)
