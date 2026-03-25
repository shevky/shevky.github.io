---
id: zq4jegkc
lang: en
title: Your First Plugin
slug: docs/extend/your-first-plugin
category: docs
type: documentation
schemaType: page
description: Build and wire a minimal plugin that creates an output file during build.
tags:
- extend
- tutorial
- plugin-authoring
order: 54
pair: pair-docs-extend-your-first-plugin
canonical: ~/docs/extend/your-first-plugin/
alternate: ~/tr/docs/extend/your-first-plugin/
template: page
layout: default
status: published
---

# Your First Plugin

This tutorial creates a tiny plugin that writes `dist/build-info.txt` with a build timestamp.

## Prerequisites

- An existing Shevky project
- `@shevky/base` available (installed as a dependency of `@shevky/core`)

## 1. Create the Plugin File

```bash
mkdir -p plugins
```

Create `plugins/build-info-plugin.js`:

```js
import { plugin } from "@shevky/base";

const hooks = {
  [plugin.hooks.DIST_CLEAN]: async function (ctx) {
    const target = ctx.path.combine(ctx.paths.dist, "build-info.txt");
    const content = `Build timestamp: ${new Date().toISOString()}\n`;
    await ctx.file.write(target, content);
    ctx.log.info("[build-info] Created build-info.txt");
  },
};

export default {
  name: "build-info-plugin",
  version: "0.0.1",
  hooks,
};
```

## 2. Register the Plugin in `site.json`

Add the plugin path to the `plugins` array:

```json
"plugins": [
  "./plugins/build-info-plugin.js"
]
```

The plugin registry resolves relative paths from the project root.

## 3. Build and Verify

```bash
npm run build
cat dist/build-info.txt
```

## Expected Output

- `dist/build-info.txt` exists.
- File contains a line like: `Build timestamp: 2026-03-25T21:00:00.000Z`

## How It Works

1. The build script loaded your plugin via `PluginRegistry.load()`.
2. During the `dist:clean` hook, your handler was called with the plugin context.
3. You used `ctx.path.combine()` and `ctx.file.write()` from the base context.
4. The file was written to the `dist/` directory.

## Common Errors

| Error | Fix |
|-------|-----|
| Plugin not loaded | Check the path string in `plugins[]` - use relative path from project root |
| Module syntax errors | Ensure the file is valid ESM (use `import`/`export`, not `require`) |
| Missing output file | Verify the hook key is valid (`plugin.hooks.DIST_CLEAN`) |

## Next Steps

- Try a different hook (e.g., `content:ready`) to access `ctx.contentFiles`.
- Read the [Plugin API Reference](./plugin-api-reference/) for all context fields.
- See the [Plugin Cookbook](./plugin-cookbook/) for common patterns.

## Related

- [Plugin API Reference](/docs/extend/plugin-api-reference/)
- [Plugin Lifecycle](/docs/extend/plugin-lifecycle/)
