---
id: cvvl1dba
lang: tr
title: Netlify
slug: docs/deploy/netlify
category: docs
type: documentation
schemaType: page
description: 'Genel örnek: Shevky statik çıktısını Netlify''a dağıtın.'
tags:
- deploy
- netlify
order: 45
pair: pair-docs-deploy-netlify
canonical: ~/tr/docs/deploy/netlify/
alternate: ~/docs/deploy/netlify/
template: page
layout: default
status: published
---

# Netlify

> **Genel Örnek** - Netlify, Shevky kod tabanında doğrudan referanslanmaz. Bu kılavuz, statik site dağıtımı için genel bir desendir.

## Yapılandırma

Proje kökünüzde `netlify.toml` oluşturun:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

## Adımlar

1. Projenizi Git deposuna aktarın.
2. Depoyu Netlify'a bağlayın.
3. Netlify `npm run build` çalıştırır ve `dist/` yayınlar.

## İpuçları

- Oluşturmadan önce `identity.url`'yi Netlify URL'nize veya özel alan adınıza ayarlayın.
- Netlify, statik siteler için yönlendirmeyi otomatik olarak yönetir.

## İlgili

- [Dağıtım Seçeneklerine Genel Bakış](/tr/docs/deploy/deploy-options-overview/)
