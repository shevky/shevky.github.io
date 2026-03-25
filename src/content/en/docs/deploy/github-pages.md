---
id: 2afak5j4
lang: en
title: GitHub Pages
slug: docs/deploy/github-pages
category: docs
type: documentation
schemaType: page
description: Deploy Shevky output to GitHub Pages.
tags:
- deploy
- github-pages
order: 44
pair: pair-docs-deploy-github-pages
canonical: ~/docs/deploy/github-pages/
alternate: ~/tr/docs/deploy/github-pages/
template: page
layout: default
status: published
---

# GitHub Pages

## Evidence

The workspace contains `shevky.github.io`, a consumer project using Shevky build scripts deployed to GitHub Pages. The static `dist/` output model matches GitHub Pages hosting.

## Basic Flow

1. Build the site:

```bash
npm run build
```

2. Publish the `dist/` directory to a Pages-served branch or repository.

## Example: GitHub Actions Workflow

> **Inferred** - This workflow is an example pattern, not a built-in Shevky integration.

```yaml
name: deploy-pages
on:
  push:
    branches: [main]
permissions:
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

## Tips

- Set `identity.url` in `site.json` to your GitHub Pages URL before building.
- If using a custom domain, place a `CNAME` file in `src/assets/` so it gets copied to `dist/`.

## Related

- [Deploy Options Overview](/docs/deploy/deploy-options-overview/)
- [CI/CD](/docs/deploy/ci-cd/)
