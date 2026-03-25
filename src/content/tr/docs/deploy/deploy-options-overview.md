---
id: 65kca2yn
lang: tr
title: Dağıtım Seçeneklerine Genel Bakış
slug: docs/deploy/deploy-options-overview
category: docs
type: documentation
schemaType: page
description: Shevky statik çıkışı için dağıtım seçenekleri.
tags:
- deploy
- overview
order: 43
pair: pair-docs-deploy-deploy-options-overview
canonical: ~/tr/docs/deploy/deploy-options-overview/
alternate: ~/docs/deploy/deploy-options-overview/
template: page
layout: default
status: published
---

# Dağıtım Seçeneklerine Genel Bakış

Shevky, statik dosyaları `dist/` dizinine üretir. Statik dosya sunabilen tüm barındırma platformlarıyla uyumludur.

## Kanıt

- Shevky, platforma özel dağıtım adaptörleri içermez.
- Çalışma alanındaki `shevky.github.io` projesi GitHub Pages kullanır ve bu modeli doğrular.
- Kullanım projelerinde temel olarak `build` ve `dev` npm script'leri bulunur.

## Dağıtım Modları

1. **Manuel yükleme** - `dist/` içeriğini herhangi bir statik barındırma platformuna yükleyin.
2. **Git tabanlı platformlar** - platformun build edip yayınladığı branch'e push edin.
3. **CI/CD pipeline'ı** - `npm ci && npm run build` adımlarını otomatikleştirip `dist/` çıktısını yayınlayın.

## Platform Kılavuzları

| Platform | Tür | Sayfa |
|----------|------|------|
| GitHub Sayfaları | Kanıta dayalı | [GitHub Sayfaları](./github-pages/) |
| Netlify | Genel örnek | [Netlify](./netlify/) |
| Vercel | Genel örnek | [Vercel](./vercel/) |
| AWS Amplify | Genel örnek | [AWS Amplify](./aws-amplify/) |
| Docker | Genel örnek | [Docker](./docker/) |
| CI/CD | Genel desen | [CI/CD](./ci-cd/) |

> **Not:** "Genel örnek" olarak işaretlenen platformlar kod tabanında doğrudan desteklenmez; Shevky standart statik dosya ürettiği için bu platformlarda çalışır.

## İlgili

- [Üretim Yapısı](/tr/docs/deploy/production-build/)
- [SSS](/tr/docs/guides/faq/)
