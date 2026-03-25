---
id: c4julvxx
lang: tr
title: '2. Adım: Yapılandırın'
slug: docs/tutorials/step-2-configure
category: docs
type: documentation
schemaType: page
description: Site.json'da site kimliğini, dil ayarlarını ve eklenti listesini yapılandırın.
tags:
- tutorials
- configuration
order: 22
pair: pair-docs-tutorials-step-2-configure
canonical: ~/tr/docs/tutorials/step-2-configure/
alternate: ~/docs/tutorials/step-2-configure/
template: page
layout: default
status: published
---

# Adım 2: Yapılandırın

## Önkoşullar

- Tamamlandı [1. Adım](./step-1-create-your-first-project/)
- `src/site.json` mevcut

## Komutlar

Mevcut yapılandırmayı inceleyin:

```bash
cat src/site.json
```

Kendi ayarlarınızla güncelleyin. İşte minimal düzeyde yalnızca İngilizce bir örnek:

```json
{
  "identity": {
    "author": "Your Name",
    "email": "you@example.com",
    "url": "http://localhost:3000",
    "themeColor": "#2f8f5b",
    "social": { "rss": true }
  },
  "content": {
    "languages": {
      "default": "en",
      "supported": ["en"],
      "canonical": { "en": "/" }
    },
    "pagination": {
      "pageSize": 5,
      "segment": { "en": "page" }
    },
    "collections": {}
  },
  "build": { "minify": false, "debug": true },
  "robots": { "allow": ["/"], "disallow": [] },
  "plugins": [
    "@shevky/plugin-robots-txt",
    "@shevky/plugin-tailwindcss",
    "@shevky/plugin-esbuild",
    "@shevky/plugin-rss",
    "@shevky/plugin-sitemap"
  ],
  "pluginConfigs": {}
}
```

## Beklenen Çıktı

- `src/site.json` geçerli JSON içeriyor.
- `plugins` dizisi, kurulu tüm eklentilerin paket adlarını listeler.
- `identity.url` geliştirme veya üretim URL'nizle eşleşir.

## Az önce ne oldu

- `config.load()` tarafından `base/src/config.js`'de yüklenen merkezi çalışma zamanı yapılandırmasını düzenlediniz.
- `plugins` dizisi, yapıya hangi eklenti paketlerinin dinamik olarak içe aktarılacağını bildirir.
- Eksik tüm yapılandırma alanları yerleşik geri dönüş varsayılanlarını kullanır (ör. `pageSize: 10`, `minify: false`).

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| JSON derleme sırasında hataları ayrıştırıyor | `src/site.json` içindeki virgülleri/tırnak işaretlerini doğrulayın |
| Eklenti yükleme uyarıları | Paket adlarının tam ve yüklü olduğunu doğrulayın |
| Yanlış standart URL'ler | `identity.url` değerini gerçek site URL'nize ayarlayın |

## İlgili

- [3. Adım: Yerel Olarak Çalıştırın](/tr/docs/tutorials/step-3-run-locally/)
- [Yapılandırma Kılavuzu](/tr/docs/guides/configuration/)
