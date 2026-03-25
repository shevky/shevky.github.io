---
id: 6xgkkpip
lang: en
title: FAQ
slug: docs/guides/faq
category: docs
type: documentation
schemaType: page
description: Frequently asked questions about Shevky.
tags:
- guides
- faq
order: 34
pair: pair-docs-guides-faq
canonical: ~/docs/guides/faq/
alternate: ~/tr/docs/guides/faq/
template: page
layout: default
status: published
---

# FAQ

## General

**Q: What is Shevky?**
A: Shevky is a minimal static site generator that transforms Markdown content with YAML front matter into HTML pages using Mustache templates. It supports multi-language sites, plugins, and produces standard static output.

**Q: What Node.js version is required?**
A: Node.js 18 or later, as specified in `@shevky/core`'s engine requirements.

**Q: Is TypeScript required?**
A: No. The codebase is written in JavaScript with hand-written `.d.ts` type declarations. You can author content and configuration without TypeScript.

## Content

**Q: What front matter fields are required?**
A: For content files to be properly processed, they should include at minimum: `id`, `lang`, `slug`, `title`, `template`, and `status`. The `status` field must be `"published"` for the page to appear in build output.

**Q: Can I use multiple languages?**
A: Yes. Configure `content.languages` in `site.json` with supported language codes, default language, and canonical paths. Create content files with the appropriate `lang` front matter field. Shevky builds per-language pages, menus, feeds, and sitemaps.

**Q: What template engine does Shevky use?**
A: Mustache (via the `mustache` npm package). Templates are zero-logic - data is passed as a view payload.

## Plugins

**Q: How do I install a plugin?**
A: `npm install @shevky/plugin-name` and add the package name to the `plugins` array in `site.json`.

**Q: Can I write local plugins without publishing to npm?**
A: Yes. Use a relative file path in the `plugins` array: `"./plugins/my-plugin.js"`.

**Q: What happens if a plugin fails?**
A: Plugin errors are caught and logged. The build continues without the failed plugin's output. Check build logs for warnings.

**Q: What plugins are available?**
A: Seven first-party plugins: robots-txt, tailwindcss, esbuild, rss, sitemap, content-bridge, open-graph. See the [Plugin Catalog](../extend/plugins/).

## Build and Deploy

**Q: Where is the output?**
A: In the `dist/` directory. It is cleared and recreated on every build.

**Q: Can I deploy to any static host?**
A: Yes. Shevky generates standard HTML, CSS, and JS files. Any static hosting platform works: GitHub Pages, Netlify, Vercel, S3, etc.

**Q: How do I enable minification?**
A: Set `build.minify: true` in `site.json`. This enables HTML minification, CSS minification (Tailwind plugin), and JS minification with sourcemaps (esbuild plugin).

## Related

- [Troubleshooting](/docs/guides/troubleshooting/)
- [Getting Started](/docs/getting-started/)
