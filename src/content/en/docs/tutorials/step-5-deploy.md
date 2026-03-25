---
id: jw28xfeu
lang: en
title: 'Step 5: Deploy'
slug: docs/tutorials/step-5-deploy
category: docs
type: documentation
schemaType: page
description: Deploy the generated dist folder to a static hosting environment.
tags:
- tutorials
- deploy
order: 25
pair: pair-docs-tutorials-step-5-deploy
canonical: ~/docs/tutorials/step-5-deploy/
alternate: ~/tr/docs/tutorials/step-5-deploy/
template: page
layout: default
status: published
---

# Step 5: Deploy

## Prerequisites

- Completed [Step 4](./step-4-build-for-production/)
- A successful `dist/` build with production settings

## Commands

Build for production:

```bash
npm run build
```

Optional: create a deployment archive:

```bash
tar -czf site-dist.tar.gz dist
```

## Expected Output

- Deployable static files under `dist/`.
- All canonical URLs point to your production domain.

## What Just Happened

Shevky produced a fully static artifact directory. Deployment is platform-dependent, but Shevky itself is platform-agnostic - it generates standard HTML, CSS, and JS files that any static file host can serve.

## Common Errors

| Error | Fix |
|-------|-----|
| Host shows 404 on nested routes | Configure host for static folder structure with `index.html` resolution |
| Missing assets after deployment | Verify the entire `dist/` directory was uploaded |
| Wrong canonical URLs in production | Update `identity.url` in `site.json` and rebuild |

## Related

- [Step 6: Add Your First Plugin](/docs/tutorials/step-6-add-your-first-plugin/)
- [Deploy Options Overview](/docs/deploy/deploy-options-overview/)
