---
id: 2v6ip681
lang: en
title: Vercel
slug: docs/deploy/vercel
category: docs
type: documentation
schemaType: page
description: 'Inferred example: deploy Shevky static output to Vercel.'
tags:
- deploy
- vercel
order: 46
pair: pair-docs-deploy-vercel
canonical: ~/docs/deploy/vercel/
alternate: ~/tr/docs/deploy/vercel/
template: page
layout: default
status: published
---

# Vercel

> **Inferred Example** - Vercel is not explicitly referenced in the Shevky codebase. This guide is a generic pattern for static site deployment.

## Configuration

Create `vercel.json` in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

## Steps

1. Push your project to a Git repository.
2. Import the repository in Vercel.
3. Vercel runs the build command and serves `dist/`.

## Tips

- Set `identity.url` to your Vercel URL or custom domain before building.

## Related

- [Deploy Options Overview](/docs/deploy/deploy-options-overview/)
