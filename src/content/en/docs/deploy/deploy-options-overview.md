---
id: 65kca2yn
lang: en
title: Deploy Options Overview
slug: docs/deploy/deploy-options-overview
category: docs
type: documentation
schemaType: page
description: Deployment options for Shevky static output.
tags:
- deploy
- overview
order: 43
pair: pair-docs-deploy-deploy-options-overview
canonical: ~/docs/deploy/deploy-options-overview/
alternate: ~/tr/docs/deploy/deploy-options-overview/
template: page
layout: default
status: published
---

# Deploy Options Overview

Shevky outputs static files to `dist/`. Any host that serves static files is compatible.

## Evidence

- Shevky does not include platform-specific deployment adapters.
- The `shevky.github.io` consumer project in the workspace uses GitHub Pages, confirming that pattern.
- All consumer projects use `build` and `dev` npm scripts only.

## Deployment Modes

1. **Manual upload** - Upload `dist/` contents to any static host.
2. **Git-based hosts** - Push to a branch that the host builds and serves.
3. **CI/CD pipeline** - Automate `npm ci && npm run build` and publish `dist/`.

## Platform Guides

| Platform | Type | Page |
|----------|------|------|
| GitHub Pages | Evidence-based | [GitHub Pages](./github-pages/) |
| Netlify | Inferred example | [Netlify](./netlify/) |
| Vercel | Inferred example | [Vercel](./vercel/) |
| AWS Amplify | Inferred example | [AWS Amplify](./aws-amplify/) |
| Docker | Inferred example | [Docker](./docker/) |
| CI/CD | Generic pattern | [CI/CD](./ci-cd/) |

> **Note:** Platforms marked "Inferred example" are not explicitly supported in the codebase but work because Shevky outputs standard static files.

## Related

- [Production Build](/docs/deploy/production-build/)
- [FAQ](/docs/guides/faq/)
