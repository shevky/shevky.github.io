---
id: 2afak5j4
lang: tr
title: GitHub Sayfaları
slug: docs/deploy/github-pages
category: docs
type: documentation
schemaType: page
description: Shevky çıktısını GitHub Pages'a dağıtın.
tags:
- deploy
- github-pages
order: 44
pair: pair-docs-deploy-github-pages
canonical: ~/tr/docs/deploy/github-pages/
alternate: ~/docs/deploy/github-pages/
template: page
layout: default
status: published
---

# GitHub Sayfaları

## Kanıt

Çalışma alanında, Shevky derleme script'leriyle GitHub Pages'e dağıtılan `shevky.github.io` projesi bulunur. Statik `dist/` çıktı modeli, GitHub Pages barındırmasıyla uyumludur.

## Temel Akış

1. Siteyi oluşturun:

```bash
npm run build
```

2. `dist/` dizinini Pages tarafından sunulan bir branch'e veya depoya yayınlayın.

## Örnek: GitHub Eylemleri İş Akışı

> **Not** - Bu iş akışı, yerleşik bir Shevky entegrasyonu değil; örnek bir kullanım desenidir.

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

## İpuçları

- Build almadan önce `site.json` içindeki `identity.url` alanını GitHub Pages URL'nize ayarlayın.
- Özel bir etki alanı kullanıyorsanız, `src/assets/` içine bir `CNAME` dosyası yerleştirin, böylece `dist/`'ye kopyalanır.

## İlgili

- [Dağıtım Seçeneklerine Genel Bakış](/tr/docs/deploy/deploy-options-overview/)
- [CI/CD](/tr/docs/deploy/ci-cd/)
