---
id: 6xdjjmvm
lang: tr
title: Üretim Yapısı
slug: docs/deploy/production-build
category: docs
type: documentation
schemaType: page
description: Üretim barındırma için belirleyici dağıtılabilir çıktılar üretin.
tags:
- deploy
- production
order: 42
pair: pair-docs-deploy-production-build
canonical: ~/tr/docs/deploy/production-build/
alternate: ~/docs/deploy/production-build/
template: page
layout: default
status: published
---

# Üretim Yapısı

## Önerilen Ayarlar

`src/site.json`'da üretime uygun değerleri ayarlayın:

```json
{
  "build": { "minify": true, "debug": false },
  "identity": { "url": "https://yourdomain.com" }
}
```

## Komutlar

```bash
npm run build
```

İsteğe bağlı eser ambalajı:

```bash
tar -czf dist.tar.gz dist
```

## Yapının Ürettiği Şeyler

Derleme işlem hattı şu aşamaları yürütür:

1. `dist/` öğesini temizleyin ve yeniden oluşturun
2. `dist:clean` eklenti kancasını çalıştırın (ör. robots.txt)
3. Statik varlıkları `src/assets/`'dan kopyalayın
4. `assets:copy` eklenti kancasını çalıştırın (CSS/JS derlemesi)
5. Markdown içeriğini yükleyin ve ayrıştırın
6. `content:load` kancasını çalıştırın (harici içerik enjeksiyonu)
7. Koleksiyonlar, menüler ve dizinler oluşturun
8. `content:ready` hook'u çalıştırın (RSS, site haritası oluşturma)
9. Tüm sayfaları Mustache şablonlarıyla işleyin
10. HTML çıktısını küçültün
11. Sayfaları yıkayın ve çıktı takma adlarını uygulayın

## Çıktı Doğrulaması

Şunu kontrol edin:

- HTML sayfaları beklenen dil/bilgi yollarında mevcut.
- Kanonik URL'ler üretim alanınızı yansıtır.
- Etkinleştirilen tüm eklenti çıktıları mevcuttur (`robots.txt`, `sitemap.xml`, `feed.xml`).
- CSS ve JS paketleri küçültüldü.

## İlgili

- [Yerel Yapı ve Önizleme](/tr/docs/deploy/local-build-and-preview/)
- [Öğretici Adım 4](/tr/docs/tutorials/step-4-build-for-production/)
