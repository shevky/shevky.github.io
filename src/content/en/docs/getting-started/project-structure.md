---
id: kcrhiyri
lang: en
title: Project Structure
slug: docs/getting-started/project-structure
category: docs
type: documentation
schemaType: page
description: File and folder layout expected by the Shevky runtime and plugins.
tags:
- getting-started
- structure
order: 15
pair: pair-docs-getting-started-project-structure
canonical: ~/docs/getting-started/project-structure/
alternate: ~/tr/docs/getting-started/project-structure/
template: page
layout: default
status: published
---

# Project Structure

Shevky uses a convention-based directory structure resolved by `core/lib/project.js`.

## Expected Layout

```text
project-root/
|-- package.json
|-- tailwind.config.js          # Tailwind CSS configuration
|-- src/
|   |-- site.json               # Site configuration (identity, plugins, build, etc.)
|   |-- i18n.json               # Multi-language dictionary
|   |-- content/                # Markdown content files
|   |   |-- hello-world.md
|   |   \-- about.md
|   |-- layouts/                # Mustache page shells
|   |   |-- default.mustache    # Main layout
|   |   \-- _header.mustache    # Partial (prefix with _)
|   |-- templates/              # Content templates (post, page, collection, etc.)
|   |   |-- post.mustache
|   |   \-- page.mustache
|   |-- components/             # Reusable Mustache components
|   |-- assets/                 # Static files copied to dist/assets/
|   |-- css/
|   |   \-- app.css             # CSS entry point (for Tailwind plugin)
|   \-- js/
|       \-- app.js              # JS entry point (for esbuild plugin)
\-- dist/                       # Generated output (created by build)
```

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/content/` | Markdown source files parsed by `gray-matter` into front matter + body |
| `src/layouts/` | Page shells and partials. `_`-prefixed files are loaded as partials |
| `src/templates/` | Content-area templates selected by the `template` front matter field |
| `src/components/` | Reusable Mustache components, usable in both templates and Markdown |
| `src/assets/` | Copied to `dist/assets/` during build |
| `dist/` | Generated static output. Cleared and recreated on each build |

## Minimal Required Files

For a working build you need at minimum:

- `src/site.json` - site configuration
- `src/i18n.json` - language dictionary (can be `{}` for single language)
- At least one Markdown file in `src/content/` with valid front matter
- A default layout template in `src/layouts/`

## Build Output Conventions

- HTML pages follow content slug/language/canonical resolution.
- Plugin outputs appear at the root of `dist/`:
  - `output.css` (Tailwind), `output.js` (esbuild), `robots.txt`, `sitemap.xml`, `feed.xml`
- The `build.contentRootDirectories` config (default: `[".well-known"]`) copies matching `src/content/` subdirectories directly to `dist/`.

## Related

- [Core Concepts](/docs/getting-started/core-concepts/)
- [Quickstart](/docs/getting-started/quickstart/)
- [Tutorial Step 2: Configure](/docs/tutorials/step-2-configure/)
