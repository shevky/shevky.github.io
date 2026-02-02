---
id: xyzlremnii-en
lang: en
title: S.H.E.V.K.Y. Documentation
slug: docs/folder-structure
category: projects
type: documentation
tags:
  - shevky
  - static-site-generator
  - ssg
  - nodejs
  - markdown
  - html
  - mustache
readingTime: 1
date: 2025-12-16
updated: 2026-01-20
pair: shevky
canonical: ~/en/docs/folder-structure
alternate: ~/docs/klasor-yapisi
description: Technical documentation for the S.H.E.V.K.Y. static site generator. Architecture, content format, and usage details (in progress).
keywords:
  - S.H.E.V.K.Y.
  - static site generator
  - technical documentation
featured: false
cover: /assets/images/projects.webp
coverAlt: Terminal themed cover image
coverCaption: S.H.E.V.K.Y. documentation (in progress)
template: page
layout: default
status: draft
---
# Folder Structure

**S.H.E.V.K.Y.** projects use a modular folder structure that clearly separates content, presentation, and behavior.

![S.H.E.V.K.Y. Folder Structure](/assets/images/shevky-folder-structure.webp)

## Project root

```txt
/
├─ node_modules/
├─ src/
├─ package.json
├─ tailwind.config.js
├─ .gitignore
```

### node_modules

As with any NodeJS project, this folder contains project dependencies and required modules. You should not edit it manually.

### package.json

Contains the scripts, dependencies, and configuration required to run the project.

### tailwind.config.js

**S.H.E.V.K.Y.** currently uses the Tailwind CSS framework for CSS configuration and minification. This file includes theme, color, and breakpoint settings.

## src

The main folder referenced by **S.H.E.V.K.Y.** during the build.

```txt
src/
├─ assets/
├─ components/
├─ content/
├─ css/
├─ js/
├─ layouts/
├─ templates/
├─ i18n.json
├─ site.json
```

### assets

```txt
assets/
├─ favicon/
├─ images/
├─ rss.xsl
├─ sitemap.xsl
```

The `assets` folder contains files that are not processed by **S.H.E.V.K.Y.** and are copied directly to the build output. Any JavaScript, CSS, or images that should not go through the build pipeline should live here.

>[!warning]
>If this folder contains content that should not be indexed by search engines, configure the `robots` settings in `site.json`.

### components

Reusable site structures live here. These are saved as `.mustache` files and used by providing matching data from content front matter.

see -> Template structure  
see -> Front matter header structure  
see -> Component design

### content

This folder contains the site content. You can structure it as you like, but each item must be a `.md` file with front matter.

see -> Front matter header structure

### layouts

Contains the site skeletons. These `.mustache` files help you manage and customize the parts of the site. A project can have multiple layouts, selected via front matter.

### templates

Templates control how content is rendered inside layouts. They include page types like *post* and *page*. Files are stored as `.mustache` and used during build.

### css

Contains the Tailwind CSS entry file and other styling rules. **S.H.E.V.K.Y.** looks for `app.css` and processes all referenced `.css` files using `tailwind-cli`.

### js

Holds the JavaScript files responsible for behavior and interactivity. **S.H.E.V.K.Y.** uses `app.js` as the entry file and processes dependencies with `esbuild`.

### i18n.json

Configuration file for multi-language support. It is used to localize non-content areas of the site.

```json
{
  "header": {
    "brand": {
      "tr": "Sample Blog",
      "en": "Sample Blog"
    }
  }
}
```

### site.json

Contains the general, configurable site settings.

see -> configuration.

## Why does S.H.E.V.K.Y. use a fixed folder structure?

**S.H.E.V.K.Y.** was built to publish content as quickly and simply as possible. A fixed folder structure cleanly separates content, presentation, and behavior, resulting in a more scalable, maintainable, and modular project.
