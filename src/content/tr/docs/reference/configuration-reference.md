---
id: eoskopxn
lang: tr
title: Yapılandırma Referansı
slug: docs/reference/configuration-reference
category: docs
type: documentation
schemaType: page
description: Tüm bölümler, anahtarlar, türler ve varsayılanlarla birlikte site.json
  için eksiksiz referans.
tags:
- reference
- configuration
order: 62
pair: pair-docs-reference-configuration-reference
canonical: ~/tr/docs/reference/configuration-reference/
alternate: ~/docs/reference/configuration-reference/
template: page
layout: default
status: published
---

# Yapılandırma Referansı

Yapılandırma `src/site.json`'den `config.load()` tarafından `base/src/config.js`'ye yüklenir. Kök türü: `ShevkyConfig` (`base/src/config.d.ts`).

## `identity`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `author` | `string` | `"<name> <surname>"` | Meta etiketler için yazar adı |
| `email` | `string` | `"<name>@<surname>.net"` | Genel iletişim e-postası |
| `url` | `string` | `"http://localhost:3000"` | Kanonik site URL'si |
| `themeColor` | `string` | `"#5a8df0"` | Tema rengi meta etiketi |
| `social.rss` | `boolean` | `false` | RSS bağlantısını göster |
| `social.github` | `string` | `""` | GitHub profil URL'si |
| `social.linkedin` | `string` | `""` | LinkedIn profil URL'si |
| `social.x` | `string` | `""` | X/Twitter URL'si |
| `social.facebook` | `string` | `""` | Facebook URL'si |
| `social.instagram` | `string` | `""` | Instagram URL'si |
| `social.youtube` | `string` | `""` | YouTube URL'si |
| `social.tiktok` | `string` | `""` | TikTok URL'si |
| `social.substack` | `string` | `""` | Alt yığın URL'si |
| `social.medium` | `string` | `""` | Aracı URL'si |
| `social.devto` | `string` | `""` | Geliştirme URL'si |
| `social.stackoverflow` | `string` | `""` | Yığın Taşması URL'si |
| `social.mastodon` | `string` | `""` | Mastodon URL'si |

## `seo`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `defaultImage` | `string` | `""` | Geri Dönüş OG/Twitter resmi |
| `includeCollections` | `boolean` | `false` | Koleksiyon URL'lerini site haritasına dahil edin |
| `includePaging` | `boolean` | `false` | Sayfalandırma URL'lerini site haritasına ekleyin |
| `footerTagCount` | `number` | `8` | Altbilgide gösterilen etiketler |

## `analytics`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `enabled` | `boolean` | `false` | Ana analiz anahtarı |
| `gtmId` | `string` | `""` | Google Etiket Yöneticisi Kimliği |
| `gaId` | `string` | `""` | Google Analytics Kimliği |
| `clarityId` | `string` | `""` | Microsoft Clarity Kimliği |
| `metaPixelId` | `string` | `""` | Meta Piksel Kimliği |

## `features`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `search` | `boolean` | `false` | Genel aramayı etkinleştir |
| `postOperations.enabled` | `boolean` | `false` | Gönderi etkileşimlerini etkinleştir |
| `postOperations.like` | `boolean` | `false` | Eylemi beğen |
| `postOperations.dislike` | `boolean` | `false` | Beğenmediğim eylem |
| `postOperations.comment` | `boolean` | `false` | Yorum eylemi |
| `postOperations.share.enabled` | `boolean` | `false` | Paylaş düğmeleri |
| `postOperations.share.whatsapp` | `boolean` | `false` | WhatsApp paylaşımı |
| `postOperations.share.x` | `boolean` | `false` | X/Twitter paylaşımı |
| `postOperations.share.linkedin` | `boolean` | `false` | LinkedIn paylaş |
| `postOperations.share.facebook` | `boolean` | `false` | Facebook'ta paylaş |
| `postOperations.share.copy` | `boolean` | `false` | Bağlantıyı kopyala |

## `markdown`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `highlight` | `boolean` | `false` | Highlight.js aracılığıyla sözdizimi vurgulama |

## `content`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `pagination.pageSize` | `number` | `10` | Listeleme sayfası başına öğe sayısı |
| `pagination.segment.tr` | `string` | `"sayfa"` | Türkçe sayfalandırma URL segmenti |
| `pagination.segment.en` | `string` | `"page"` | İngilizce sayfalandırma URL segmenti |
| `languages.default` | `string` | `"tr"` | Varsayılan dil |
| `languages.supported` | `string[]` | `["tr", "en"]` | Desteklenen diller |
| `languages.canonical` | `Record` | `{ tr: "/", en: "/en/" }` | Dil başına kanonik yol |
| `collections.includeContentFile` | `boolean` | `false` | Tam dosya verilerini koleksiyonlara dahil edin |

## `build`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `minify` | `boolean` | `false` | HTML/CSS/JS çıktısını küçültün |
| `debug` | `boolean` | `false` | Hata ayıklama günlüğünü etkinleştir |
| `pageBufferLimit` | `number` | `20` | Disk temizlemeden önce ara belleğe alınan sayfalar |
| `outputAliases` | `Array<{from, to}>` | `[]` | Derleme sonrası yol takma adları |
| `contentRootDirectories` | `string[]` | `[".well-known"]` | Dizinler dağıtım köküne kopyalandı |

## `robots`

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `allow` | `string[]` | `["/"]` | İzin verilen tarayıcı yolları |
| `disallow` | `string[]` | `[]` | İzin verilmeyen tarayıcı yolları |

## `ui`

Açık uçlu `Record<string, unknown>`, şablonlara `site.ui` olarak aktarıldı.

## `plugins`

`PluginRegistry.load()` tarafından yüklenen npm paket adları (veya göreli yollar) dizisi.

## `pluginConfigs`

Eklenti çalışma zamanı `name` tarafından anahtarlanan eklenti ayarları:

- `shevky-rss`: `feedFilename`, `feedTtl`, `feedItemCount`, `includedSchemaTypes`, `includedCategories`
- `shevky-sitemap`: `sitemapFilename`
- `shevky-content-bridge`: `sources[]`, `maxItems`, `output`
- `shevky-open-graph`: `twitterSite`, `defaultTwitterCard`, `defaultImage`, `force`, `siteName`, `publisherType`, `exposePageMeta`, `enableSearchAction` ve daha fazlası

## Yapılandırma Çözünürlüğü

`config.get(key)` sırası: üst düzey anahtar -> `pluginConfigs[key]` -> yerleşik geri dönüş.

## İlgili

- [Yapılandırma Kılavuzu](/tr/docs/guides/configuration/)
- [Önemli Türler](/tr/docs/reference/important-types/)
