---
id: kd9cdz1s
lang: en
title: 'Step 6: Add Your First Plugin'
slug: docs/tutorials/step-6-add-your-first-plugin
category: docs
type: documentation
schemaType: page
description: Add and verify a plugin in your Shevky project.
tags:
- tutorials
- plugins
order: 26
pair: pair-docs-tutorials-step-6-add-your-first-plugin
canonical: ~/docs/tutorials/step-6-add-your-first-plugin/
alternate: ~/tr/docs/tutorials/step-6-add-your-first-plugin/
template: page
layout: default
status: published
---

# Step 6: Add Your First Plugin

This step uses `@shevky/plugin-robots-txt` because it is simple and easy to verify.

## Prerequisites

- A working Shevky project with `src/site.json`

## Commands

Install the plugin (if not already installed):

```bash
npm install @shevky/plugin-robots-txt
```

Ensure it is listed in `src/site.json`:

```json
"plugins": [
  "@shevky/plugin-robots-txt"
]
```

Add robots configuration:

```json
"robots": {
  "allow": ["/"],
  "disallow": ["/draft/"]
}
```

Build and verify:

```bash
npm run build
cat dist/robots.txt
```

## Expected Output

`dist/robots.txt` should contain:

```text
User-agent: *
Allow: /
Disallow: /draft/

Sitemap: https://yourdomain.com/sitemap.xml
```

## What Just Happened

1. The plugin was discovered via the `plugins` array in `site.json`.
2. `PluginRegistry.load()` dynamically imported the plugin package.
3. During the `dist:clean` hook, the plugin read `config.identity.url` and `config.robots` values.
4. It generated a `robots.txt` file and wrote it to `dist/`.

## Common Errors

| Error | Fix |
|-------|-----|
| Plugin not running | Verify the exact package name `@shevky/plugin-robots-txt` in `plugins[]` |
| Wrong sitemap URL | Set `identity.url` correctly and rebuild |
| `dist/robots.txt` missing | Check build logs for plugin load errors |

## Related

- [Plugin System Overview](/docs/extend/plugin-system-overview/)
- [Robots Txt Plugin](/docs/extend/plugins/plugin-robots-txt/)
