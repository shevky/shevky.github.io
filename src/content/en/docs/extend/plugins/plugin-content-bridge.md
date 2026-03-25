---
id: bcpb96qr
lang: en
title: Content Bridge Plugin
slug: docs/extend/plugins/plugin-content-bridge
category: docs
type: documentation
schemaType: page
description: Fetches external API content and injects it into the build pipeline.
tags:
- extend
- plugins
- content-bridge
- api
order: 106
pair: pair-docs-extend-plugins-plugin-content-bridge
canonical: ~/docs/extend/plugins/plugin-content-bridge/
alternate: ~/tr/docs/extend/plugins/plugin-content-bridge/
template: page
layout: default
status: published
---

# Content Bridge Plugin

## Purpose

Fetches content from external REST APIs, maps API responses to Shevky content format using an expression-based field mapping DSL, and injects the results into the build pipeline as virtual content files.

## Location

- Package: `@shevky/plugin-content-bridge`
- Main: `plugin-content-bridge/main.js`
- Sub-modules: `plugin-content-bridge/lib/` (loader, fetch, mapping, pagination, validation, request, utils)
- Runtime name: `shevky-content-bridge`

## Lifecycle Hooks

| Hook | Implemented |
|------|:-----------:|
| `content:load` | ✓ |

This is the **only plugin that uses `content:load`**, which provides `ctx.addContent()` for injecting content.

## How It Works

1. Reads config from `ctx.config.get("shevky-content-bridge")`.
2. For each source in `config.sources`:
   - Builds HTTP requests with pagination parameters.
   - Fetches JSON via `lib/fetch.js` (timeout, error handling).
   - Extracts items from the response at a configurable path.
   - Maps each item to front matter using `lib/mapping.js`.
   - Maps content body and source path.
   - Validates required front matter fields (`id`, `lang`, `title`, `slug`, `canonical`, `template`, `layout`, `status`).
   - Calls `ctx.addContent()` to inject into the content registry.
   - Optionally writes Markdown files to disk.
   - Advances pagination state until done or `maxItems` reached.

## Mapping DSL

The mapping system in `lib/mapping.js` (~890 lines) supports a rich expression language:

| Expression | Description |
|-----------|-------------|
| `$_field.path` | Access source data by dot-path (e.g., `$_data.title`) |
| `"literal"` or `'literal'` | String literal |
| `$slugify(expr)` | Slugify a value |
| `$concat(a, b, ...)` | String concatenation |
| `$today()` / `$now()` | Current ISO date |
| `$lower(expr)` / `$upper(expr)` | Case transformation |
| `$join(arr, sep)` | Array join |
| `$default(expr, fallback)` | Fallback value |
| `$if(cond, then, else)` | Conditional |
| `$iter(path, mapping)` | Array iteration with per-item mapping |
| `$obj(key1, val1, ...)` | Object construction |
| `$uuid()` / `$nanoid()` / `$hash(expr)` | ID generation |

Additional functions: `$merge`, `$unique`, `$date`, `$add`, `$sub`, `$number`, `$boolean`, `$replace`, `$split`, `$first`, `$last`, `$truncate`, `$matches`, `$arr`.

## Pagination Modes

The `lib/pagination.js` module supports three modes:

| Mode | Description |
|------|-------------|
| `page` (default) | Increments page index parameter |
| `offset` | Increments by page size |
| `cursor` | Follows a cursor value from the response |

Termination: nextCursorPath -> hasMorePath -> nextPagePath -> totalPath -> short-page detection.

## Configuration

```json
"pluginConfigs": {
  "shevky-content-bridge": {
    "sources": [{
      "name": "Blog API",
      "fetch": {
        "endpointUrl": "https://api.example.com/posts",
        "method": "GET",
        "headers": { "Authorization": "Bearer ..." },
        "pagination": { "mode": "page", "pageParam": "page", "pageSize": 20, "itemsPath": "$_posts" },
        "timeoutMs": 30000
      },
      "mapping": {
        "frontMatter": {
          "id": "$_data.id",
          "title": "$_data.title",
          "lang": "'en'",
          "slug": "$slugify($_data.title)",
          "canonical": "$concat('~/', $slugify($_data.title))",
          "template": "'post'",
          "layout": "'default'",
          "status": "'published'"
        },
        "content": "$_data.body",
        "sourcePath": "$concat('bridge://posts/', $_data.id, '.md')"
      },
      "maxItems": 100
    }]
  }
}
```

## Dependencies

- `@shevky/base` - `plugin`, `format`
- `nanoid` ^5.1.6 - for `$nanoid()` mapping function

## Risks and Limitations

- **Network dependency:** Builds may produce incomplete output if APIs are unavailable.
- **Complex mapping DSL:** Errors in mapping expressions produce cryptic failures; no schema validation for expressions.
- **Required field strictness:** Throws if any of 8 required front matter fields are missing.
- **No caching:** Every build fetches all content from scratch.
- **Error tolerance:** Continues past fetch errors (up to 5 consecutive errors per source), which can mask partial ingestion.

## Related

- [Plugin System Overview](/docs/extend/plugin-system-overview/)
- [Plugin API Reference](/docs/extend/plugin-api-reference/)
