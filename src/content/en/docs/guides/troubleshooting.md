---
id: 5odjk4jo
lang: en
title: Troubleshooting
slug: docs/guides/troubleshooting
category: docs
type: documentation
schemaType: page
description: Common setup and build issues with practical fixes.
tags:
- guides
- troubleshooting
order: 33
pair: pair-docs-guides-troubleshooting
canonical: ~/docs/guides/troubleshooting/
alternate: ~/tr/docs/guides/troubleshooting/
template: page
layout: default
status: published
---

# Troubleshooting

## Build Fails with JSON Parse Error

**Symptoms:** Build aborts after loading `site.json` or `i18n.json`.

**Fix:** Validate JSON syntax - check trailing commas, quote balance, and encoding. Use a JSON validator or your editor's built-in checker.

## Plugin Not Loaded

**Symptoms:** Warning about failed plugin load. Expected plugin output file is missing.

**Fix:**
1. Verify the package is installed in `package.json` dependencies.
2. Verify the exact package name in `src/site.json` -> `plugins[]`.
3. Ensure the plugin exports a valid object with `name` and `hooks`.

## Missing `output.css` or `output.js`

**Symptoms:** HTML references CSS/JS files that return 404.

**Fix:**
- Tailwind plugin requires `tailwind.config.js` at project root and `src/css/app.css`.
- Esbuild plugin requires `src/js/app.js`.
- Confirm both plugins are listed in the `plugins` array.

## Dev Server Does Not Start

**Symptoms:** Port conflict or serve command failure.

**Fix:**
1. Free port 3000 (stop any process using it).
2. Re-run `npm run dev`.
3. If the build itself fails, fix build errors first - the server only starts after a successful build.

## Canonical URLs Are Wrong

**Symptoms:** `sitemap.xml`, RSS feeds, or meta tags show `http://localhost:3000` on production.

**Fix:** Set `identity.url` in `src/site.json` to your actual production URL and rebuild.

## Unexpected Empty Collections

**Symptoms:** Tag, category, or series pages render empty.

**Fix:**
1. Verify content front matter values (`category`, `tags`, `series`) are set correctly.
2. Verify `content.collections` config definitions if using custom collection routes.
3. Ensure content entries have `status: published` (not `draft`).

## Template Not Found

**Symptoms:** Build error referencing a missing template.

**Fix:** Ensure the template named in content front matter (`template: post`) has a corresponding `src/templates/post.mustache` file.

## Plugin Errors in Build Log but Build Succeeds

**Symptoms:** Warning messages about plugin failures, but `dist/` is generated.

**Explanation:** Plugin errors are caught and logged by the `PluginEngine`. The build continues regardless. Check logs carefully - plugin output may be missing or incomplete.

## Related

- [Configuration Guide](/docs/guides/configuration/)
- [FAQ](/docs/guides/faq/)
- [Tutorials](/docs/tutorials/)
