---
id: hk6fgnaj
lang: tr
title: Grafik Eklentisini Aç
slug: docs/extend/plugins/plugin-open-graph
category: docs
type: documentation
schemaType: page
description: OG, Twitter Kartı ve JSON-LD yapılandırılmış verileri oluşturur.
tags:
- extend
- plugins
- open-graph
- seo
order: 107
pair: pair-docs-extend-plugins-plugin-open-graph
canonical: ~/tr/docs/extend/plugins/plugin-open-graph/
alternate: ~/docs/extend/plugins/plugin-open-graph/
template: page
layout: default
status: published
---

# Grafik Eklentisini Aç

## Amaç

Her içerik dosyası ve oluşturulan sayfa için Açık Grafik (`og:*`), Twitter Kartı (`twitter:*`) ve JSON-LD yapılandırılmış verileri oluşturur. 10'dan fazla sayfa türü için şemaya özel yapılandırılmış verilerle ekosistemdeki en karmaşık eklenti.

## Konum

- Paket: `@shevky/plugin-open-graph`
- Ana: `plugin-open-graph/main.js`
- Alt modüller: `plugin-open-graph/src/` (boru hattı, meta, yardımcılar, sabitler, yapılandırılmış/)
- Çalışma zamanı adı: `shevky-open-graph`

## Yaşam Döngüsü Kancaları

| Kanca | Uygulandı | Amaç |
|------|:-----------:|---------|
| `content:ready` | ✓ | Tüm içerik dosyaları için toplu olarak meta veriler oluşturun |
| `page:meta` | ✓ | Oluşturma sırasında sayfa başına meta verileri oluşturun/güncelleyin |

Bu **iki kanca uygulayan tek eklentidir** ve `page:meta` kullanan tek eklentidir.

## Nasıl Çalışır?

### `content:ready` Kanca

Her geçerli dosya için tüm `ctx.contentFiles` yinelenir:
1. Ön madde hedefini çıkarır.
2. Sayfa meta verilerini oluşturur (kanonik URL, OG başlığı/açıklama/resim, Twitter kartı, JSON-LD).
3. **Ön madde nesnesini değiştirerek** `og`, `twitter`, `structuredData` ve `pageMeta` alanlarını enjekte eder.

### `page:meta` Kanca

Oluşturma sırasında tek tek sayfalar için:
1. `ctx.frontMatter` ve `ctx.derivedFrontMatter` okur.
2. Sayfa meta verilerini oluşturur.
3. Oluşturma motoruna SEO verilerini sağlamak için `ctx.setPageMeta(meta)` öğesini çağırır.

### Şemaya Özel JSON-LD

Şema türüne göre dağıtım yapmak için `src/structured/index.js`'da bir strateji modeli kullanır:

| Şema Türü | JSON-LD Türü | `og:type` |
|-------------|-------------|-----------|
| `post` | Makale | `article` |
| `job-post` | İş İlanı | `website` |
| `job-listing` | Öğe Listesi + İş İlanı | `website` |
| `home` | WebSitesi + KoleksiyonSayfası | `website` |
| `about` | HakkındaSayfa | `website` |
| `contact` | İletişim Sayfası | `website` |
| `help` / `faq` | SSS Sayfası | `website` |
| `press` | Web Sayfası | `website` |
| `not-found` | Web Sayfası (noindex) | `website` |
| `collection` | Koleksiyon Sayfası | `website` |
| varsayılan | Web Sayfası | `website` |

## Yapılandırma

`pluginConfigs["shevky-open-graph"]`'den okuyun:

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `twitterSite` | `string` | `""` | Twitter `@username` için `twitter:site` |
| `defaultTwitterCard` | `string` | `"summary_large_image"` | Varsayılan kart türü |
| `defaultImage` | `string` | `""` | Geri Dönüş OG/Twitter resmi |
| `force` | `boolean` | `false` | Mevcut OG değerlerinin üzerine yazın |
| `siteName` | `string` | `""` | `og:site_name` geçersiz kılma |
| `publisherType` | `string` | `"person"` | `"person"` veya `"organization"` |
| `exposePageMeta` | `boolean` | `true` | pageMeta'yı ön konuda gösterin |
| `enableSearchAction` | `boolean\|null` | `null` | SearchAction'ı WebSite şemasına ekleme |
| `contact` | `object\|null` | `null` | ContactPoint için iletişim bilgileri |

Gelişmiş şema için ek anahtarlar: `jobCategoryTokens`, `jobUrlTokens`, `localityCountryTokens`, `faqItemsPaths`, `newsItemsPaths`, `questionCount`, `jobValidThroughDays`, `searchActionTarget`, `searchActionQueryInput`.

## Bağımlılıklar

- `@shevky/base` - `plugin`, `format`, `i18n`
- Dışa bağımlılık yok.

## Riskler ve Sınırlamalar

- **En büyük eklenti:** Tüm dosyalarda ~3000'den fazla satır. Yüksek karmaşıklık ve bakım yükü.
- **Paylaşılan durumu değiştirir:** Doğrudan içerik dosyası ön madde nesnelerine yazar, sonraki tüm eklentileri ve işleme hattını etkiler.
- **Yinelenen URL mantığı:** MetaEngine'e yetki vermek yerine kendi kanonik URL çözümlemesini içerir.
- **Modül düzeyinde değiştirilebilir durum:** Çağrı başına yenilenmesi gereken `runtimeI18n`, `runtimeCollections` ve `runtimePluginConfig` değişkenlerini korur.
- **Sezgisel şema algılama:** Olağandışı içerik meta veri kalıpları için yanlış pozitifler üretebilir. (`helpers.js`'deki kural yoğunluğundan çıkarılmıştır.)

## İlgili

- [Eklenti API Referansı](/tr/docs/extend/plugin-api-reference/)
- [Eklenti Yaşam Döngüsü](/tr/docs/extend/plugin-lifecycle/)
