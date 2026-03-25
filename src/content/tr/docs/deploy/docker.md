---
id: pi28acwb
lang: tr
title: Docker
slug: docs/deploy/docker
category: docs
type: documentation
schemaType: page
description: 'Genel örnek: Docker ile Shevky statik çıktısını sunun.'
tags:
- deploy
- docker
order: 47
pair: pair-docs-deploy-docker
canonical: ~/tr/docs/deploy/docker/
alternate: ~/docs/deploy/docker/
template: page
layout: default
status: published
---

# Docker

> **Genel Örnek** - Docker, Shevky kod tabanında doğrudan referanslanmaz. Bu kılavuz, container tabanlı statik yayın için genel bir model sunar.

## Çok Aşamalı Dockerfile

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

## Oluştur ve Çalıştır

```bash
docker build -t my-shevky-site .
docker run -p 8080:80 my-shevky-site
```

Siteye `http://localhost:8080` adresinden ulaşılabilir.

## İlgili

- [Dağıtım Seçeneklerine Genel Bakış](/tr/docs/deploy/deploy-options-overview/)
- [CI/CD](/tr/docs/deploy/ci-cd/)
