---
id: h3q9t2mx
lang: tr
title: AWS Amplify
slug: docs/deploy/aws-amplify
category: docs
type: documentation
schemaType: page
description: 'Genel örnek: Shevky statik çıktısını AWS Amplify Hosting''e dağıtın.'
tags:
- deploy
- aws-amplify
order: 49
pair: pair-docs-deploy-aws-amplify
canonical: ~/tr/docs/deploy/aws-amplify/
alternate: ~/docs/deploy/aws-amplify/
template: page
layout: default
status: published
---

# AWS Amplify

> **Genel Örnek** - AWS Amplify, Shevky kod tabanında doğrudan referanslanmaz. Bu kılavuz, statik site dağıtımı için genel bir desendir.

## Yapılandırma

Proje kökünde `amplify.yml` oluşturun:

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

## Adımlar

1. Projenizi bir Git deposuna gönderin.
2. Depoyu AWS Amplify Hosting içinde bağlayın.
3. Algılanan build ayarları veya `amplify.yml` ile dağıtımı başlatın.

## İpuçları

- Build almadan önce `identity.url` değerini Amplify alan adınıza veya özel alan adınıza ayarlayın.
- Şube ve önizleme dağıtımlarında tekrarlanabilir çıktı için `npm ci` kullanın.

## İlgili

- [Dağıtım Seçeneklerine Genel Bakış](/tr/docs/deploy/deploy-options-overview/)
- [CI/CD](/tr/docs/deploy/ci-cd/)
