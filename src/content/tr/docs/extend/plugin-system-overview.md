---
id: 1rfrlzk9
lang: tr
title: Eklenti Sistemine Genel Bakış
slug: docs/extend/plugin-system-overview
category: docs
type: documentation
schemaType: page
description: Shevky'nin yaşam döngüsü kancaları aracılığıyla eklentileri nasıl keşfettiği,
  yüklediği ve çalıştırdığı.
tags:
- extend
- plugins
- architecture
order: 51
pair: pair-docs-extend-plugin-system-overview
canonical: ~/tr/docs/extend/plugin-system-overview/
alternate: ~/docs/extend/plugin-system-overview/
template: page
layout: default
status: published
---

# Eklenti Sistemine Genel Bakış

Shevky **kancaya dayalı bir eklenti modeli** kullanıyor. Eklentiler, bir tanım nesnesini dışa aktaran npm paketleridir. Çekirdek bunları konfigürasyondan keşfeder, dinamik olarak içe aktarır ve tanımlanmış yapı yaşam döngüsü noktalarında kanca işleyicilerini çağırır.

## Keşif

Eklentiler `plugins` anahtarının altındaki `src/site.json` öğesinde listelenir:

```json
"plugins": [
  "@shevky/plugin-robots-txt",
  "@shevky/plugin-tailwindcss",
  "@shevky/plugin-rss"
]
```

## Kayıt Sözleşmesi

Bir eklentinin varsayılan olarak şu şekle uyan bir nesneyi dışa aktarması gerekir:

```js
export default {
  name: "my-plugin",       // unique identifier
  version: "0.0.1",        // semantic version
  hooks: { ... },          // hook handlers
  load: (ctx) => { ... },  // optional initialization
};
```

Resmi TypeScript türü `base/src/plugin.d.ts`'de `PluginDefinition`'dir.

## Kanca Yaşam Döngüsü

Derleme hattı kancaları şu sırayla yürütür:

| Sipariş | Kanca | Ne zaman | En İyisi |
|-------|------|------|----------|
| 1 | `dist:clean` | `dist/` oluşturulduktan sonra | Dağıtım düzeyinde dosyalar oluşturma (robots.txt) |
| 2 | `assets:copy` | Statik varlıklar kopyalandıktan sonra | CSS/JS derlemesi (Tailwind, esbuild) |
| 3 | `content:load` | Markdown dosyaları yüklendikten sonra | Harici içerik enjekte etme (`addContent`) |
| 4 | `content:ready` | Koleksiyonlar oluşturulduktan sonra | Yayınlar, site haritaları, SEO meta verileri oluşturma |
| 5 | `page:meta` | Oluşturma sırasında sayfa başına | Sayfa düzeyinde meta veri zenginleştirme |

1-4 numaralı kancalar derleme başına bir kez çalıştırılır. Hook 5, oluşturulan sayfa başına bir kez çalışır.

## Çalışma Zamanı Bağlamı

Her kanca işleyicisi aşağıdakileri içeren bir bağlam nesnesi alır:

- `config` - eklentiye özel yapılandırma için `get(key)` ile tam site yapılandırması
- `log` - günlük işlevleri (`info`, `warn`, `err`, `debug`, `step`)
- `file` - `read`, `write`, `exists`
- `directory` - `read`, `exists`, `create`
- `path` - `combine`, `resolve`, `name`
- `paths` - proje dizinleri (`root`, `src`, `dist`, `content`, vb.)
- `i18n` - uluslararasılaştırma yardımcıları

Kancaya özgü eklemeler:

| Kanca | Ekstra Bağlam |
|------|--------------|
| `content:load` | `contentFiles`, `addContent()` |
| `content:ready` | `contentFiles`, `pages`, `footerPolicies`, `contentIndex` |
| `page:meta` | `frontMatter`, `derivedFrontMatter`, `lang`, `slug`, `pageMeta`, `setPageMeta()` |

## Eklenti Yapılandırması

Eklentiler ayarlarını `site.json` içindeki `pluginConfigs` adresinden okur:

```json
"pluginConfigs": {
  "shevky-rss": { "feedFilename": "feed.xml", "feedTtl": 1440 }
}
```

Çalışma zamanında `ctx.config.get("shevky-rss")` aracılığıyla erişilir. Anahtar, eklentinin dışa aktarılan `name` alanıyla eşleşmelidir.

## Hata Davranışı

- Eklenti yükleme hataları yakalanır ve günlüğe kaydedilir; derleme, başarısız eklenti olmadan devam eder.
- Kanca yürütme hataları yakalanır ve günlüğe kaydedilir; kalan eklentiler ve yapım aşamaları devam ediyor.
- Sonuç: eklenti çıktısı eksikken derlemeler başarılı olabilir. Derleme günlüklerini kontrol edin.

## İlgili

- [Eklenti Yaşam Döngüsü](/tr/docs/extend/plugin-lifecycle/) - ayrıntılı kanca zamanlaması ve bağlamı
- [Eklenti API Referansı](/tr/docs/extend/plugin-api-reference/) - sözleşme türleri
- [İlk Eklentiniz](/tr/docs/extend/your-first-plugin/) - uygulamalı eğitim
- [Eklenti Kataloğu](/tr/docs/extend/plugins/) - birinci taraf eklenti belgeleri
