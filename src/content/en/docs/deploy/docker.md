---
id: pi28acwb
lang: en
title: Docker
slug: docs/deploy/docker
category: docs
type: documentation
schemaType: page
description: 'Inferred example: serve Shevky static output with Docker.'
tags:
- deploy
- docker
order: 47
pair: pair-docs-deploy-docker
canonical: ~/docs/deploy/docker/
alternate: ~/tr/docs/deploy/docker/
template: page
layout: default
status: published
---

# Docker

> **Inferred Example** - Docker is not used in the Shevky codebase. This guide shows a generic pattern for containerized static serving.

## Multi-Stage Dockerfile

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

## Build and Run

```bash
docker build -t my-shevky-site .
docker run -p 8080:80 my-shevky-site
```

The site is available at `http://localhost:8080`.

## Related

- [Deploy Options Overview](/docs/deploy/deploy-options-overview/)
- [CI/CD](/docs/deploy/ci-cd/)
