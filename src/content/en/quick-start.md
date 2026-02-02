---
id: cr073eir7r-en
lang: en
title: S.H.E.V.K.Y. Documentation
slug: docs/quick-start
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
canonical: ~/en/docs/quick-start
alternate: ~/docs/hizli-baslangic
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
# Quick Start

**S.H.E.V.K.Y.** is very easy to install and use. Just follow the steps below to set up a demo blog and generate the base structure for your project.

```bash
npm init -y
npm install --save-dev shevky
```

The commands above install everything you need. For a sample project, run:

```bash
npx shevy --init
```

That is enough to bootstrap the project.

```bash
npx shevky --dev
```

This command prepares the project and serves it locally at `http://localhost:3000`. If you make changes to the code, run:

```bash
npx shevky --build
```

If you used `--init`, the required scripts are added to `package.json` automatically. In other words, the following commands will be ready to use:

```bash
npm run dev
npm run build
```
