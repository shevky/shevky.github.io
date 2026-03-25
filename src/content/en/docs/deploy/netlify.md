---
id: cvvl1dba
lang: en
title: Netlify
slug: docs/deploy/netlify
category: docs
type: documentation
schemaType: page
description: 'Inferred example: deploy Shevky static output to Netlify.'
tags:
- deploy
- netlify
order: 45
pair: pair-docs-deploy-netlify
canonical: ~/docs/deploy/netlify/
alternate: ~/tr/docs/deploy/netlify/
template: page
layout: default
status: published
---

# Netlify

> **Inferred Example** - Netlify is not explicitly referenced in the Shevky codebase. This guide is a generic pattern for static site deployment.

## Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

## Steps

1. Push your project to a Git repository.
2. Connect the repository to Netlify.
3. Netlify runs `npm run build` and publishes `dist/`.

## Tips

- Set `identity.url` to your Netlify URL or custom domain before building.
- Netlify automatically handles routing for static sites.

## Related

- [Deploy Options Overview](/docs/deploy/deploy-options-overview/)
