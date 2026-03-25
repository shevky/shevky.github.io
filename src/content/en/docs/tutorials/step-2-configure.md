---
id: c4julvxx
lang: en
title: 'Step 2: Configure'
slug: docs/tutorials/step-2-configure
category: docs
type: documentation
schemaType: page
description: Configure site identity, language settings, and the plugin list in site.json.
tags:
- tutorials
- configuration
order: 22
pair: pair-docs-tutorials-step-2-configure
canonical: ~/docs/tutorials/step-2-configure/
alternate: ~/tr/docs/tutorials/step-2-configure/
template: page
layout: default
status: published
---

# Step 2: Configure

## Prerequisites

- Completed [Step 1](./step-1-create-your-first-project/)
- `src/site.json` exists

## Commands

Inspect the current config:

```bash
cat src/site.json
```

Update it with your own settings. Here is a minimal English-only example:

```json
{
  "identity": {
    "author": "Your Name",
    "email": "you@example.com",
    "url": "http://localhost:3000",
    "themeColor": "#2f8f5b",
    "social": { "rss": true }
  },
  "content": {
    "languages": {
      "default": "en",
      "supported": ["en"],
      "canonical": { "en": "/" }
    },
    "pagination": {
      "pageSize": 5,
      "segment": { "en": "page" }
    },
    "collections": {}
  },
  "build": { "minify": false, "debug": true },
  "robots": { "allow": ["/"], "disallow": [] },
  "plugins": [
    "@shevky/plugin-robots-txt",
    "@shevky/plugin-tailwindcss",
    "@shevky/plugin-esbuild",
    "@shevky/plugin-rss",
    "@shevky/plugin-sitemap"
  ],
  "pluginConfigs": {}
}
```

## Expected Output

- `src/site.json` contains valid JSON.
- The `plugins` array lists the package names of all installed plugins.
- `identity.url` matches your development or production URL.

## What Just Happened

- You edited the central runtime configuration loaded by `config.load()` in `base/src/config.js`.
- The `plugins` array tells the build which plugin packages to dynamically import.
- Any missing config fields will use built-in fallback defaults (e.g., `pageSize: 10`, `minify: false`).

## Common Errors

| Error | Fix |
|-------|-----|
| JSON parse errors during build | Validate commas/quotes in `src/site.json` |
| Plugin load warnings | Verify package names are exact and installed |
| Incorrect canonical URLs | Set `identity.url` to your actual site URL |

## Related

- [Step 3: Run Locally](/docs/tutorials/step-3-run-locally/)
- [Configuration Guide](/docs/guides/configuration/)
