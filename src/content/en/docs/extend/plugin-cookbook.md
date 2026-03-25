---
id: 7yf09it0
lang: en
title: Plugin Cookbook
slug: docs/extend/plugin-cookbook
category: docs
type: documentation
schemaType: page
description: Practical plugin patterns for common tasks in Shevky builds.
tags:
- extend
- cookbook
order: 56
pair: pair-docs-extend-plugin-cookbook
canonical: ~/docs/extend/plugin-cookbook/
alternate: ~/tr/docs/extend/plugin-cookbook/
template: page
layout: default
status: published
---

# Plugin Cookbook

## Pattern 1: Generate a File in dist/

**Hook:** `dist:clean` or `content:ready`

Use `dist:clean` when the file is independent of content. Use `content:ready` when you need access to loaded content and collections.

**Example:** `@shevky/plugin-robots-txt` writes `robots.txt` during `dist:clean`.

## Pattern 2: Run an External Tool

**Hook:** `assets:copy`

Execute CLI tools for CSS/JS compilation using `exec.execute()` or `exec.executeNpx()` from `@shevky/base`.

**Examples:** `@shevky/plugin-tailwindcss` (runs Tailwind CLI), `@shevky/plugin-esbuild` (runs esbuild via npx).

## Pattern 3: Inject Remote Content

**Hook:** `content:load`

Fetch data from an API and call `ctx.addContent({ header, body, content, sourcePath, isValid })` to inject it into the content pipeline.

**Example:** `@shevky/plugin-content-bridge` fetches paginated API data with a mapping DSL.

## Pattern 4: Generate Feeds or Sitemaps

**Hook:** `content:ready`

Iterate `ctx.contentFiles` and `ctx.pages` to produce XML output files.

**Examples:** `@shevky/plugin-rss` (RSS 2.0 feeds), `@shevky/plugin-sitemap` (sitemap.xml).

## Pattern 5: Enrich Page Metadata

**Hook:** `page:meta`

Read `ctx.frontMatter`, compute additional metadata, and call `ctx.setPageMeta(meta)` to inject it into the rendering pipeline.

**Example:** `@shevky/plugin-open-graph` generates OG, Twitter Card, and JSON-LD data.

## Best Practices

- **Validate config early.** Check for required settings before doing work. Log actionable warnings with `ctx.log.warn()`.
- **Keep side effects explicit.** Document what files your plugin creates or what data it mutates.
- **Handle errors gracefully.** A thrown error is caught and logged by the engine, but your plugin's output will be missing.
- **Prefer `ctx` helpers.** Use `ctx.file`, `ctx.path`, `ctx.log` rather than direct `fs` imports when possible.
- **Avoid depending on undocumented internal shapes.** Stick to the documented context fields.

## Anti-Patterns

- **Mutating shared objects silently.** If you write to `ctx.contentFiles` entries, other plugins see your changes. Document this coupling.
- **Implicit plugin ordering.** If your plugin depends on another plugin's output, document the required ordering in `plugins[]`.
- **Large synchronous work in `page:meta`.** This hook runs per-page; keep it fast.

## Related

- [Plugin API Reference](/docs/extend/plugin-api-reference/)
- [Plugin Catalog](/docs/extend/plugins/)
