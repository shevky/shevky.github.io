---
id: hbmnma87
lang: tr
title: Site Haritası Eklentisi
slug: docs/extend/plugins/plugin-sitemap
category: docs
type: documentation
schemaType: page
description: Sayfalandırma ve koleksiyon desteğiyle sitemap.xml oluşturur.
tags:
- extend
- plugins
- sitemap
- seo
order: 105
pair: pair-docs-extend-plugins-plugin-sitemap
canonical: ~/tr/docs/extend/plugins/plugin-sitemap/
alternate: ~/docs/extend/plugins/plugin-sitemap/
template: page
layout: default
status: published
---

# Site Haritası Eklentisi

## Amaç

Yayınlanan tüm içeriğe ilişkin URL'leri, isteğe bağlı sayfalandırılmış listeleme URL'lerini ve isteğe bağlı koleksiyon URL'lerini içeren bir `sitemap.xml` dosyası oluşturur. URL tekilleştirmeyi ve son mod izlemeyi destekler.

## Konum

- Paket: `@shevky/plugin-sitemap`
- Ana: `plugin-sitemap/main.js` (~363 satır)
- Çalışma zamanı adı: `shevky-sitemap`

## Yaşam Döngüsü Kancaları

| Kanca | Uygulandı |
|------|:-----------:|
| `content:ready` | ✓ |

## Nasıl Çalışır?

`content:ready` sırasında:

1. `ctx.contentFiles` - yayınlanan sayfa başına bir `<url>` - içerik girişlerini toplar.
2. `config.seo.includePaging` etkinleştirilirse, sayfalandırılmış listeleme sayfaları için ek URL'ler oluşturur (ör. `page-2`, `page-3`).
3. `config.seo.includeCollections` etkinleştirilirse, `content.collections` yapılandırma tanımlarını kullanarak koleksiyon sayfaları (etiketler, kategoriler, seriler) için URL'ler oluşturur.
4. En güncel `lastmod` değerini koruyarak tüm girişleri URL'ye göre birleştirir ve tekilleştirir.
5. Lastmod'a göre azalan şekilde sıralar.
6. `dist/sitemap.xml` işler ve yazar.

## Yapılandırma

`pluginConfigs["shevky-sitemap"]`'dan eklentiye özel yapılandırma:

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `sitemapFilename` | `string` | `"sitemap.xml"` | Çıktı dosya adı |

Site haritası oluşturmayı etkileyen genel yapılandırma anahtarları:

| Anahtar | Efekt |
|-----|--------|
| `seo.includeCollections` | Koleksiyon sayfası URL'lerini dahil edin |
| `seo.includePaging` | Sayfalandırma URL'lerini dahil edin |
| `content.pagination.pageSize` | Sayfalandırma URL sayımı için sayfa başına öğe sayısı |
| `content.pagination.segment` | Yerelleştirilmiş sayfalandırma URL segmenti (ör. `"page"`, `"sayfa"`) |
| `content.collections` | `types` ve `slugPattern` ile koleksiyon tanımları |

## Koleksiyon URL'si Oluşturma

Koleksiyonlar `content.collections`'da tanımlanmıştır:

```json
"collections": {
  "tags": {
    "types": ["tag"],
    "slugPattern": { "en": "tag/{{key}}", "tr": "etiket/{{key}}" }
  }
}
```

Eklenti `ctx.pages` (toplama verileri) yineler, koleksiyon türlerini eşleştirir ve sümüklü böcek desenini kullanarak URL'ler oluşturur.

## Bağımlılıklar

- `@shevky/base` - `i18n`, `plugin`, `format`

## Riskler ve Sınırlamalar

- **Çoğaltılmış URL mantığı:** Çekirdek MetaEngine'i kullanmak yerine `buildContentUrl()`'yi dahili olarak yeniden uygular. Çekirdekteki URL mantığı değişiklikleri yansıtılmayabilir.
- **Tek site haritası:** Çok büyük siteler (>50.000 URL) için site haritası dizini oluşturmaz.
- **Koleksiyon yapılandırma şekli:** `types` ve `slugPattern` ile belirli bir `content.collections` yapısına bağlıdır.

## İlgili

- [RSS Eklentisi](/tr/docs/extend/plugins/plugin-rss/) - benzer içerik:hazır model
- [Robots Txt Eklentisi](/tr/docs/extend/plugins/plugin-robots-txt/) - site haritasına referans verir
