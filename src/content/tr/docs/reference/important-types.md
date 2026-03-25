---
id: oh5iu99d
lang: tr
title: Önemli Türler
slug: docs/reference/important-types
category: docs
type: documentation
schemaType: page
description: Shevky paketleri genelinde Anahtar TypeScript türü sözleşmeler.
tags:
- reference
- types
order: 64
pair: pair-docs-reference-important-types
canonical: ~/tr/docs/reference/important-types/
alternate: ~/docs/reference/important-types/
template: page
layout: default
status: published
---

# Önemli Türler

Tüm türler elle yazılmış `.d.ts` dosyalarında tanımlanır. Bu sayfa, çekirdek ve eklentiler arasındaki çalışma zamanı sözleşmelerini tanımlayan türleri eşler.

## Yapılandırma Türleri (`base/src/config.d.ts`)

| Tür | Açıklama |
|------|-------------|
| `ShevkyConfig` | Tüm bölümleri içeren kök yapılandırma şekli |
| `ConfigApi` | Nesneyi `load(path)` ve `get(key)` yöntemleriyle yapılandırma |
| `SeoConfig` | SEO varsayılanları (defaultImage, includeCollections, vb.) |
| `AnalyticsConfig` | Analitik sağlayıcı kimlikleri |
| `FeaturesConfig` | Kullanıcı arayüzü özelliği geçiş yapar |
| `PostOperationsConfig` | Etkileşim sonrası kontroller |
| `ShareOptions` | Ağ başına paylaşım düğmesi geçiş yapar |
| `MarkdownConfig` | İşaretleme oluşturucu seçenekleri |
| `PaginationConfig` | Sayfa boyutu ve yerelleştirilmiş segmentler |
| `ContentConfig` | Sayfalandırma, diller, koleksiyonlar |
| `BuildConfig` | Küçültme, hata ayıklama, arabellek sınırları, takma adlar |
| `IdentityConfig` | Yazar, e-posta, URL, tema, sosyal |
| `SocialIdentityConfig` | Sosyal medya hesabı URL'leri |
| `RobotsConfig` | Yollara izin ver/izin verme |

## Eklenti Sözleşme Türleri (`base/src/plugin.d.ts`)

| Tür | Açıklama |
|------|-------------|
| `PluginDefinition` | Eklenti şekli: `{ name, version, hooks, load? }` |
| `PluginHook` | Yaşam döngüsü kanca değerlerinin listesi |
| `PluginHooks` | Kanca adlarını işleyicilere kısmi kayıt eşleme |
| `HookHandler` | `(ctx: PluginContext) => Promise<void> \| void` |
| `PluginContext` | Yapılandırma, günlük, dosya, dizin, yol, yollar, contentFiles ile tam bağlam |
| `BasePluginContext` | `paths`'siz içerik |
| `PluginLoadContext` | Asgari bağlam: `{ config, paths }` |
| `PluginPaths` | Proje dizinleri (root, src, dist, content, vb.) |
| `SchemaType` | Birlik: `"post" \| "job-post" \| ... \| "policy"` |
| `CollectionType` | `"tag" \| "category" \| "series"` |

## İçerik Türleri (`base/src/plugin.d.ts`)

| Tür | Açıklama |
|------|-------------|
| `ContentHeaderLike` | Ön madde alanı şekli |
| `ContentBodyLike` | Gövde içeriği ambalajı |
| `ContentFileLike` | Eklenti etkileşimi için birleştirilmiş içerik dosyası |
| `ContentSummaryLike` | Özet projeksiyonu (kimlik, başlık, tarih vb.) |

## Yardımcı Program API Türleri

| Tür | Dosya | Açıklama |
|------|------|-------------|
| `IoApi` | `base/src/io.d.ts` | Dosya, dizin, yol, URL işlemleri |
| `ExecApi` | `base/src/exec.d.ts` | Süreç yürütme ve modül çözümü |
| `I18nApi` | `base/src/i18n.d.ts` | Uluslararasılaştırma yardımcıları |
| `FormatApi` | `base/src/format.d.ts` | Biçimlendirme ve yazım koruma yardımcı programları |
| `LogApi` | `base/src/log.d.ts` | Günlük arayüzü |

## Çekirdek Türleri (`core/types/index.d.ts`)

| Tür | Açıklama |
|------|-------------|
| `ProjectPaths` | Tüm proje dizini yolları |
| `PluginInstance` | Yüklenen eklenti çalışma zamanı nesnesi |
| `PluginExecutionContext` | Kanca yürütmesi için genişletilmiş bağlam |
| `ContentFileLike` | Çekirdek için içerik dosyası şekli |
| `CollectionEntry` | Koleksiyon türüyle içerik özeti |
| `CollectionsByLang` | `Record<string, Record<string, CollectionEntry[]>>` |
| `FooterPolicy` | Altbilgi politikası bağlantısı |
| `FrontMatter` | `Record<string, any>` |
| `Placeholder` | Markdown bileşeni yer tutucusu |

## Eklentiye Özel Türler

| Tür | Paket | Açıklama |
|------|---------|-------------|
| `RssPluginConfig` | eklenti-rss | Feed dosya adı, TTL, öğe sayısı |
| `SitemapPluginConfig` | eklenti-site haritası | Site haritası dosya adı |
| `ContentBridgeConfig` | eklenti-içerik köprüsü | Kaynaklar, maxItems, çıktı |
| `ContentBridgeSource` | eklenti-içerik köprüsü | Getirme, eşleme, kaynak başına yapılandırma |
| `ContentBridgeFetchConfig` | eklenti-içerik köprüsü | URL, yöntem, başlıklar, sayfalandırma |
| `ContentBridgePagination` | eklenti-içerik köprüsü | Mod, parametreler, imleçler |
| `ContentBridgeMapping` | eklenti-içerik köprüsü | Ön madde, içerik, kaynakYol eşlemesi |

## Bilinen Tür Uyuşmazlığı

`core/types/index.d.ts` alanına gerektiği gibi `PluginInstance.load` yazılır. Çalışma zamanında (`core/registries/pluginRegistry.js`), `load` isteğe bağlı (`if (instance.load)`) olarak değerlendirilir. Sıkı tip kontrolüne güveniyorsanız bu önemlidir.

## İlgili

- [Eklenti API Referansı](/tr/docs/extend/plugin-api-reference/)
- [Yapılandırma Referansı](/tr/docs/reference/configuration-reference/)
- [Sözlük](/tr/docs/reference/glossary/)
