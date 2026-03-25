---
id: cqkwjir5
lang: en
title: Core Concepts
slug: docs/getting-started/core-concepts
category: docs
type: documentation
schemaType: page
description: Mental model for the build lifecycle, content, templates, and plugins.
tags:
- getting-started
- concepts
order: 14
pair: pair-docs-getting-started-core-concepts
canonical: ~/docs/getting-started/core-concepts/
alternate: ~/tr/docs/getting-started/core-concepts/
template: page
layout: default
status: published
---

# Core Concepts

## 1. Shevky Is Build-Centric

Shevky generates static HTML output in `dist/` from source files under `src/`. There is no runtime server - the output is plain static files ready for any hosting platform.

- Entry command: `shevky --build`
- Build orchestrator: `core/scripts/build.js`

## 2. Content = Markdown + Front Matter

Content files live in `src/content/` as Markdown files with YAML front matter:

```markdown
---
id: hello-world
lang: en
slug: hello-world
title: Hello World
template: post
status: published
category: general
tags: [intro]
---

This is your first blog post.
```

Front matter fields control routing, template selection, SEO metadata, collection grouping, and menu placement. The `status: published` field determines whether the page is included in the build output.

## 3. Templates and Layouts

Shevky uses the [Mustache](https://mustache.github.io/) template engine (zero-logic templates).

| Type | Location | Convention |
|------|----------|-----------|
| **Layouts** | `src/layouts/` | Page shell (HTML head, body wrapper) |
| **Partials** | `src/layouts/` | Files prefixed with `_` (e.g., `_header.mustache`) |
| **Templates** | `src/templates/` | Content-area structure per type (e.g., `post.mustache`) |
| **Components** | `src/components/` | Reusable fragments usable in Markdown |

## 4. Multi-Language Support

Shevky has first-class i18n support:

- `src/i18n.json` holds per-language translated strings.
- `content.languages` in `src/site.json` defines the default language, supported languages, and canonical URL paths.
- Content files specify their language via the `lang` front matter field.
- URLs, menus, RSS feeds, and sitemaps are generated per language.

## 5. Build Pipeline

The build executes these stages in order:

1. Load i18n dictionaries and site configuration.
2. Load Mustache templates, layouts, components, and partials.
3. Load and initialize plugins from `site.json`.
4. Load Markdown content from `src/content/`.
5. Execute plugin hooks (`dist:clean`, `assets:copy`, `content:load`, `content:ready`).
6. Build navigation menus and content collections (tags, categories, series).
7. Render each page: Markdown -> Mustache -> HTML (with optional minification).
8. Write output to `dist/`.

## 6. Plugin System

Plugins are npm packages listed in `site.json` under the `plugins` key. They hook into the build lifecycle at five defined points:

| Hook | Purpose |
|------|---------|
| `dist:clean` | Generate files after dist is created (e.g., robots.txt) |
| `assets:copy` | Compile/bundle CSS and JS (e.g., Tailwind, esbuild) |
| `content:load` | Inject external content (e.g., from APIs) |
| `content:ready` | Process all content (e.g., generate RSS, sitemap, SEO metadata) |
| `page:meta` | Enrich individual page metadata during rendering |

Plugin-specific settings go in `pluginConfigs` in `site.json` and are accessed via `config.get("plugin-runtime-name")`.

## 7. Configuration

The central configuration file is `src/site.json`. Major sections:

- `identity` - author, email, URL, social links
- `seo` - default image, collection/paging SEO flags
- `content` - language settings, pagination, collections
- `build` - minify, debug, buffer limits, output aliases
- `plugins` - plugin package names to load
- `pluginConfigs` - per-plugin settings

## Related

- [Project Structure](/docs/getting-started/project-structure/)
- [Configuration Guide](/docs/guides/configuration/)
- [Plugin System Overview](/docs/extend/plugin-system-overview/)
