---
id: qpa32afx
lang: tr
title: Eklenti Yaşam Döngüsü
slug: docs/extend/plugin-lifecycle
category: docs
type: documentation
schemaType: page
description: Kanca yürütme sırası, kanca başına bağlam ve çalışma zamanı zamanlaması.
tags:
- extend
- lifecycle
order: 52
pair: pair-docs-extend-plugin-lifecycle
canonical: ~/tr/docs/extend/plugin-lifecycle/
alternate: ~/docs/extend/plugin-lifecycle/
template: page
layout: default
status: published
---

# Eklenti Yaşam Döngüsü

## Yükleme Aşaması

Derlemeyi yürütmeden önce, `core/registries/pluginRegistry.js`'de `PluginRegistry.load()`:

1. `exec.resolve()` kullanarak paket yolunu proje kökünden çözer.
2. Eklenti modülünü dinamik olarak içe aktarır.
3. Eklenti nesnesini doğrular: boş olmayan bir `name` dizesine sahip, boş olmayan bir nesne olmalıdır.
4. Kopyaları `name` ile reddeder.
5. `Map<string, PluginInstance>` dosyasındaki önbellekler.
6. Eklentinin bir `load(ctx)` işlevi varsa, onu `{ config, paths }` ile çağırın.

## Kanca Aşamasını Oluşturun

Derleme sırasında (`core/scripts/build.js`), kancalar şu sabit sırayla yürütülür:

1. **`dist:clean`** - `dist/` temizlendi ve yeniden oluşturuldu. İçerik işlenmeden önce mevcut olması gereken dosyaları oluşturun.
2. **`assets:copy`** - Statik varlıklar kopyalandı. Varlık işlem hatlarını çalıştırın (CSS/JS derlemesi).
3. **`content:load`** - Markdown dosyaları `ContentRegistry`'e yüklendi. `ctx.addContent()` aracılığıyla ek içerik ekleyin.
4. **`content:ready`** - Koleksiyonlar (etiketler, kategoriler, seriler) oluşturuldu. Tam içerik kümesine (RSS, site haritası) dayalı dosyalar oluşturun.

## Sayfa Meta Aşaması

**`page:meta`** sayfa oluşturma sırasında `buildPageMetaWithPlugins()`'den tetiklenir. İçerik dosyası başına bir kez çalışır ve şunları alır:

- `frontMatter` - sayfanın ön konu nesnesi
- `derivedFrontMatter` - zenginleştirilmiş ön madde
- `lang`, `slug` - sayfa kimliği
- `pageMeta` - geçerli meta veriler (değişebilir)
- `setPageMeta(meta)` - sayfa meta verilerini değiştirmek için geri arama
- `pages` - tam koleksiyon verileri

## Kancalar İçinde Yürütme Emri

Eklentiler, `plugins` yapılandırma dizisinde göründükleri sıraya göre yinelenir. `PluginEngine`, ekleme sırasını koruyarak `Map`'yi `for...of` aracılığıyla yineler.

## Kanca Bağlamı Özeti

| Kanca | `contentFiles` | `addContent` | `pages` | `footerPolicies` | `contentIndex` | `frontMatter` | `setPageMeta` |
|------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `dist:clean` | - | - | - | - | - | - | - |
| `assets:copy` | - | - | - | - | - | - | - |
| `content:load` | ✓ | ✓ | - | - | - | - | - |
| `content:ready` | ✓ | - | ✓ | ✓ | ✓ | - | - |
| `page:meta` | - | - | çalışma zamanı aracılığıyla | - | - | ✓ | ✓ |

## Arıza Semantiği

- Kanca işleyicisinin içindeki bir `throw`, `PluginEngine.execute()` tarafından yakalanır.
- Hata `log.err()` aracılığıyla günlüğe kaydedilir.
- Bu kanca için kalan eklentiler çalışmaya devam eder.
- Yapım bir sonraki aşamaya devam ediyor.

Bu, tek bir eklenti hatasının yapıyı bozmadığı ancak eklenti çıktısının eksik olabileceği anlamına gelir.

## İlgili

- [Eklenti Sistemine Genel Bakış](/tr/docs/extend/plugin-system-overview/)
- [Eklenti API Referansı](/tr/docs/extend/plugin-api-reference/)
