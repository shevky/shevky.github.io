---
id: u6rlq18r
lang: tr
title: RSS Eklentisi
slug: docs/extend/plugins/plugin-rss
category: docs
type: documentation
schemaType: page
description: Derlemeler sırasında dil başına RSS 2.0 beslemeleri oluşturur.
tags:
- extend
- plugins
- rss
- feeds
order: 104
pair: pair-docs-extend-plugins-plugin-rss
canonical: ~/tr/docs/extend/plugins/plugin-rss/
alternate: ~/docs/extend/plugins/plugin-rss/
template: page
layout: default
status: published
---

# RSS Eklentisi

## Amaç

Yayınlanan içerik dosyalarından dil başına RSS 2.0 beslemeleri oluşturur. Yapılandırılabilir yayın dosya adını, TTL'yi, öğe sayısı sınırlarını, şema türü filtrelemeyi ve kategori filtrelemeyi destekler.

## Konum

- Paket: `@shevky/plugin-rss`
- Ana: `plugin-rss/main.js` (~313 satır)
- Çalışma zamanı adı: `shevky-rss`

## Yaşam Döngüsü Kancaları

| Kanca | Uygulandı |
|------|:-----------:|
| `content:ready` | ✓ |

## Nasıl Çalışır?

`content:ready` sırasında:

1. `ctx.config.get("shevky-rss")` aracılığıyla eklenti yapılandırmasını okur.
2. `ctx.contentFiles` filtresini şuna göre filtreler: geçerlilik, yayın durumu, şema türü (varsayılan: `post`, `job-post`) ve isteğe bağlı kategori filtresi.
3. Filtrelenen girişleri dile göre gruplandırır.
4. Her dil için RSS 2.0 XML'i aşağıdakilerle oluşturur:
- Kanal meta verileri (başlık, bağlantı, açıklama, dil, telif hakkı vb.)
- Atom kendi kendine bağlantı ve alternatif dil besleme bağlantıları
- Başlık, bağlantı, kılavuz, pubDate, açıklama (CDATA), yazar, kategoriler içeren bireysel öğeler
5. Beslemeleri `dist/feed.xml` (varsayılan dil) ve `dist/{lang}/feed.xml` (diğer diller) dillerine yazar.

## Yapılandırma

`pluginConfigs["shevky-rss"]`'den okuyun:

| Anahtar | Tür | Varsayılan | Açıklama |
|-----|------|---------|-------------|
| `feedFilename` | `string` | `"feed.xml"` | Çıktı dosya adı |
| `feedTtl` | `number` | `1440` | TTL'yi dakikalar içinde besleyin |
| `feedItemCount` | `number` | sınırsız | Feed başına maksimum öğe |
| `includedSchemaTypes` | `string[]` | `["post", "job-post"]` | Eklenecek şema türleri |
| `includedCategories` | `string[]` | hepsi | İsteğe bağlı kategori filtresi |

## Bağımlılıklar

- `@shevky/base` - `i18n`, `plugin`, `format` (kaçış, tarih biçimlendirmesi, URL çözümlemesi için)
- Dışa bağımlılık yok.

## Riskler ve Sınırlamalar

- **XSL stil sayfası referansı:** `<?xml-stylesheet href="/assets/rss.xsl"?>` içerir - bu dosya projenin varlıklar dizininde bulunmalıdır.
- **Atom ad alanı karışımı:** Geçerli ancak standart olmayan RSS 2.0 içinde `atom:link` kullanır.
- **Telif hakkı metni:** Dil tespitine dayalı olarak İngilizce veya Türkçe telif hakkı metni oluşturur.

## İlgili

- [Site Haritası Eklentisi](/tr/docs/extend/plugins/plugin-sitemap/) - benzer içerik:hazır model
