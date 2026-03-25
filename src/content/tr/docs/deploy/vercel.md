---
id: 2v6ip681
lang: tr
title: Vercel
slug: docs/deploy/vercel
category: docs
type: documentation
schemaType: page
description: 'Genel örnek: Shevky statik çıktısını Vercel''e dağıtın.'
tags:
- deploy
- vercel
order: 46
pair: pair-docs-deploy-vercel
canonical: ~/tr/docs/deploy/vercel/
alternate: ~/docs/deploy/vercel/
template: page
layout: default
status: published
---

# Vercel

> **Genel Örnek** - Vercel, Shevky kod tabanında doğrudan referanslanmaz. Bu kılavuz, statik site dağıtımı için genel bir desendir.

## Yapılandırma

Proje kökünüzde `vercel.json` oluşturun:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

## Adımlar

1. Projenizi Git deposuna aktarın.
2. Depoyu Vercel'e import edin.
3. Vercel build komutunu çalıştırır ve `dist/` dizinini yayınlar.

## İpuçları

- Oluşturmadan önce `identity.url` değerini Vercel URL'nize veya özel alan adınıza ayarlayın.

## İlgili

- [Dağıtım Seçeneklerine Genel Bakış](/tr/docs/deploy/deploy-options-overview/)
