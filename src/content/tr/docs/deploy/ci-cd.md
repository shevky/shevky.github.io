---
id: yek74wyz
lang: tr
title: CI/CD
slug: docs/deploy/ci-cd
category: docs
type: documentation
schemaType: page
description: Shevky çıktısını oluşturmak ve yayınlamak için genel CI/CD işlem hattı
  deseni.
tags:
- deploy
- ci-cd
order: 48
pair: pair-docs-deploy-ci-cd
canonical: ~/tr/docs/deploy/ci-cd/
alternate: ~/docs/deploy/ci-cd/
template: page
layout: default
status: published
---

# CI/CD

Shevky derlemeleri deterministiktir ve CI/CD pipeline'ları için uygundur. Temel komutlar:

```bash
npm ci
npm run build
```

`dist/` dizini dağıtıma hazır artefakttır.

## Genel Pipeline Adımları

1. **Checkout** - depoyu klonlayın.
2. **Node.js kurulumu** - Node.js 18+ sürümünü kurun.
3. **Bağımlılıkları kurma** - tekrarlanabilir kurulum için `npm ci` çalıştırın.
4. **Derleme** - `npm run build` ile `dist/` çıktısını üretin.
5. **Dağıtım** - `dist/` içeriğini hedef platforma yükleyin.

## Örnek: GitHub Eylemleri

Tam bir iş akışı örneği için [GitHub Sayfaları](./github-pages/)'a bakın.

## Örnek: GitLab CI

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

## İpuçları

- CI derlemelerinde `build.minify: true` ve `build.debug: false` değerlerini ayarlayın.
- `identity.url` değerini ön-derleme script'i veya ortama özel yapılandırma ile üretim URL'sine çekin.
- Eklenti hataları loglanır ancak varsayılan olarak build'i fail etmez; bu yüzden derleme sonrası doğrulama adımı ekleyin.

## İlgili

- [Üretim Yapısı](/tr/docs/deploy/production-build/)
- [GitHub Sayfaları](/tr/docs/deploy/github-pages/)
