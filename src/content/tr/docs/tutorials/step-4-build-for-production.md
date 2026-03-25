---
id: rnwh57lf
lang: tr
title: 'Adım 4: Üretim için Oluşturun'
slug: docs/tutorials/step-4-build-for-production
category: docs
type: documentation
schemaType: page
description: Üretime hazır statik çıktı üretin ve oluşturulan yapıtları doğrulayın.
tags:
- tutorials
- build
order: 24
pair: pair-docs-tutorials-step-4-build-for-production
canonical: ~/tr/docs/tutorials/step-4-build-for-production/
alternate: ~/docs/tutorials/step-4-build-for-production/
template: page
layout: default
status: published
---

# Adım 4: Üretim için Oluşturma

## Önkoşullar

- Tamamlandı [3. Adım](./step-3-run-locally/)

## Komutlar

`src/site.json` düzenleyerek küçültmeyi etkinleştirin:

```json
"build": { "minify": true, "debug": false }
```

`identity.url`'ı üretim alan adınıza ayarlayın:

```json
"identity": { "url": "https://yourdomain.com" }
```

Üretim yapısını çalıştırın:

```bash
npm run build
```

Çıktıyı inceleyin:

```bash
find dist -maxdepth 2 -type f | sort
```

## Beklenen Çıktı

- `dist/` altındaki yeni statik dosyalar.
- `build.minify`, `true` olduğunda HTML küçültülür.
- CSS paketi: `dist/output.css` (Tailwind eklentisi de küçültülmüş).
- JS paketi: `dist/output.js` (esbuild eklentisi, kaynak haritasıyla küçültülmüş).
- SEO dosyaları: `dist/robots.txt`, `dist/sitemap.xml`, `dist/feed.xml`.

## Az önce ne oldu

Derleme yaşam döngüsü şu sırayla yürütülür:

1. `ensureDist()` - `dist/` öğesini temizler ve yeniden oluşturur.
2. `dist:clean` kancası - robots.txt oluşturuldu.
3. `src/assets/`'den kopyalanan statik varlıklar.
4. `assets:copy` kanca - Tailwind CSS ve esbuild çalıştırması.
5. `src/content/` adresinden yüklenen işaretleme içeriği.
6. `content:load` kanca - harici içerik enjeksiyon noktası.
7. Oluşturulan koleksiyonlar (etiketler, kategoriler, seriler).
8. `content:ready` kancası - RSS ve site haritası oluşturuldu.
9. `dist/`'ye aktarılan ve yazılan sayfalar.

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| Eksik `output.css` veya `output.js` | `src/css/app.css` ve `src/js/app.js`'nin mevcut olduğunu ve eklentilerin listelendiğini doğrulayın |
| Çıktıda yanlış dil/yol | `content.languages` ve kurallı ayarları kontrol edin |
| Eski dosyalar çıktıda kalıyor | Derleme `dist/` öğesini otomatik olarak temizler; sorunlar devam ederse `dist/` öğesini manuel olarak silin |

## İlgili

- [5. Adım: Dağıtın](/tr/docs/tutorials/step-5-deploy/)
- [Üretim Yapısı](/tr/docs/deploy/production-build/)
