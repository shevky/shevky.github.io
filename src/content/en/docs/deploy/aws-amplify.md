---
id: h3q9t2mx
lang: en
title: AWS Amplify
slug: docs/deploy/aws-amplify
category: docs
type: documentation
schemaType: page
description: 'Inferred example: deploy Shevky static output to AWS Amplify Hosting.'
tags:
- deploy
- aws-amplify
order: 49
pair: pair-docs-deploy-aws-amplify
canonical: ~/docs/deploy/aws-amplify/
alternate: ~/tr/docs/deploy/aws-amplify/
template: page
layout: default
status: published
---

# AWS Amplify

> **Inferred Example** - AWS Amplify is not explicitly referenced in the Shevky codebase. This guide is a generic pattern for static site deployment.

## Configuration

Create `amplify.yml` in your project root:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Steps

1. Push your project to a Git repository.
2. Connect the repository in AWS Amplify Hosting.
3. Deploy using the detected build settings or your `amplify.yml`.

## Tips

- Set `identity.url` to your Amplify domain or custom domain before building.
- Use `npm ci` for deterministic builds across branch and preview deployments.

## Related

- [Deploy Options Overview](/docs/deploy/deploy-options-overview/)
- [CI/CD](/docs/deploy/ci-cd/)
