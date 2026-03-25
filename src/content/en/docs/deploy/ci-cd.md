---
id: yek74wyz
lang: en
title: CI/CD
slug: docs/deploy/ci-cd
category: docs
type: documentation
schemaType: page
description: Generic CI/CD pipeline pattern for building and publishing Shevky output.
tags:
- deploy
- ci-cd
order: 48
pair: pair-docs-deploy-ci-cd
canonical: ~/docs/deploy/ci-cd/
alternate: ~/tr/docs/deploy/ci-cd/
template: page
layout: default
status: published
---

# CI/CD

Shevky builds are deterministic and well-suited for CI/CD pipelines. The core commands are:

```bash
npm ci
npm run build
```

The `dist/` directory is the deployable artifact.

## Generic Pipeline Steps

1. **Checkout** - clone the repository.
2. **Setup Node** - install Node.js 18+.
3. **Install dependencies** - `npm ci` for reproducible installs.
4. **Build** - `npm run build` to generate `dist/`.
5. **Deploy** - upload `dist/` to the target platform.

## Example: GitHub Actions

See [GitHub Pages](./github-pages/) for a complete workflow example.

## Example: GitLab CI

```yaml
build:
  image: node:20-alpine
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
```

## Tips

- Set `build.minify: true` and `build.debug: false` in CI builds.
- Set `identity.url` to the production URL via a pre-build script or environment-specific config.
- Plugin errors are logged but do not fail the build by default - consider adding a post-build validation step.

## Related

- [Production Build](/docs/deploy/production-build/)
- [GitHub Pages](/docs/deploy/github-pages/)
