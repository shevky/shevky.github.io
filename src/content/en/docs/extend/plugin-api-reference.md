---
id: yp3rlsos
lang: en
title: Plugin API Reference
slug: docs/extend/plugin-api-reference
category: docs
type: documentation
schemaType: page
description: Contract-level reference for plugin shape, hooks, and context fields.
tags:
- extend
- api
- reference
order: 53
pair: pair-docs-extend-plugin-api-reference
canonical: ~/docs/extend/plugin-api-reference/
alternate: ~/tr/docs/extend/plugin-api-reference/
template: page
layout: default
status: published
---

# Plugin API Reference

All contract types are defined in `base/src/plugin.d.ts`.

## Plugin Definition

```ts
type PluginDefinition = {
  name: string;
  version: string;
  hooks: PluginHooks;
  load?: (ctx: PluginLoadContext) => void;
};
```

## Hook Names

Defined as frozen constants in `base/src/plugin.js`:

| Constant | Value |
|----------|-------|
| `plugin.hooks.DIST_CLEAN` | `"dist:clean"` |
| `plugin.hooks.ASSETS_COPY` | `"assets:copy"` |
| `plugin.hooks.CONTENT_LOAD` | `"content:load"` |
| `plugin.hooks.CONTENT_READY` | `"content:ready"` |
| `plugin.hooks.PAGE_META` | `"page:meta"` |

## Base Context (`createBaseContext()`)

Provided to every hook handler:

| Field | Type | Description |
|-------|------|-------------|
| `config` | `ConfigApi` | Site configuration with `get(key)` accessor |
| `log` | `LogApi` | Logging: `info`, `warn`, `err`, `debug`, `step` |
| `file.read` | `(path) => Promise<string>` | Read UTF-8 file |
| `file.write` | `(path, content) => Promise<void>` | Write UTF-8 file |
| `file.exists` | `(path) => Promise<boolean>` | Check file existence |
| `directory.read` | `(path) => Promise<string[]>` | List directory contents |
| `directory.exists` | `(path) => Promise<boolean>` | Check directory existence |
| `directory.create` | `(path) => Promise<void>` | Create directory recursively |
| `path.combine` | `(...paths) => string` | Join path segments |
| `path.resolve` | `(...paths) => string` | Resolve absolute path |
| `path.name` | `(path) => string` | Get directory name |

## Extended Context (from PluginEngine)

| Field | Type | Available In |
|-------|------|-------------|
| `paths` | `PluginPaths` | All hooks |
| `i18n` | `I18nApi` | All hooks |
| `contentFiles` | `ContentFile[]` | `content:load`, `content:ready` |
| `addContent` | `(input) => void` | `content:load` |
| `pages` | `CollectionsByLang` | `content:ready` |
| `footerPolicies` | `Record<string, FooterPolicy[]>` | `content:ready` |
| `contentIndex` | `Record<...>` | `content:ready` |
| `frontMatter` | `Record<string, any>` | `page:meta` |
| `derivedFrontMatter` | `Record<string, any>` | `page:meta` |
| `lang` | `string` | `page:meta` |
| `slug` | `string` | `page:meta` |
| `pageMeta` | `Record<string, any>` | `page:meta` |
| `setPageMeta` | `(meta) => void` | `page:meta` |

## PluginPaths

| Field | Example |
|-------|---------|
| `root` | `./` |
| `src` | `./src` |
| `dist` | `./dist` |
| `tmp` | `./tmp` |
| `content` | `./src/content` |
| `layouts` | `./src/layouts` |
| `components` | `./src/components` |
| `templates` | `./src/templates` |
| `assets` | `./src/assets` |
| `siteConfig` | `./src/site.json` |
| `i18nConfig` | `./src/i18n.json` |

## Schema Types (`plugin.schema`)

`post`, `job-post`, `job-listing`, `not-found`, `page`, `home`, `contact`, `about`, `press`, `help`, `faq`, `collection`, `policy`

## Collection Types (`plugin.collection`)

`tag`, `category`, `series`

## Minimal Plugin Skeleton

```js
import { plugin } from "@shevky/base";

const hooks = {
  [plugin.hooks.ASSETS_COPY]: async function (ctx) {
    ctx.log.info("My plugin running!");
    // plugin work here
  },
};

export default {
  name: "my-plugin",
  version: "0.0.1",
  hooks,
};
```

## Related

- [Your First Plugin](/docs/extend/your-first-plugin/)
- [Plugin Cookbook](/docs/extend/plugin-cookbook/)
