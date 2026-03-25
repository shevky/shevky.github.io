---
id: cqkwjir5
lang: tr
title: Temel Kavramlar
slug: docs/getting-started/core-concepts
category: docs
type: documentation
schemaType: page
description: Derleme yaşam döngüsü, içerik, şablonlar ve eklentiler için zihinsel
  model.
tags:
- getting-started
- concepts
order: 14
pair: pair-docs-getting-started-core-concepts
canonical: ~/tr/docs/getting-started/core-concepts/
alternate: ~/docs/getting-started/core-concepts/
template: page
layout: default
status: published
---

# Temel Kavramlar

## 1. Shevky Derleme Merkezlidir

Shevky, `src/` altındaki kaynak dosyalardan `dist/` içinde statik HTML çıktısı oluşturur. Çalışma zamanı sunucusu yoktur; çıktı, herhangi bir barındırma platformuna hazır, düz statik dosyalardır.

- Giriş komutu: `shevky --build`
- Derleme orkestratörü: `core/scripts/build.js`

## 2. İçerik = Markdown + Front Matter

İçerik dosyaları `src/content/`'da YAML ön maddesine sahip Markdown dosyaları olarak yayınlanır:

```markdown
---
id: hello-world
lang: en
slug: hello-world
title: Hello World
template: post
status: published
category: general
tags: [intro]
---

This is your first blog post.
```

Front matter alanları yönlendirmeyi, şablon seçimini, SEO meta verilerini, koleksiyon gruplamasını ve menü yerleşimini kontrol eder. `status: published` alanı, sayfanın derleme çıktısına dahil edilip edilmeyeceğini belirler.

## 3. Şablonlar ve Düzenler

Shevky, [Mustache](https://mustache.github.io/) şablon motorunu (sıfır mantık şablonları) kullanıyor.

| Tür | Konum | Kural |
|------|----------|-----------|
| **Layout'lar** | `src/layouts/` | Sayfa kabuğu (HTML head, body wrapper) |
| **Partials** | `src/layouts/` | `_` ön ekine sahip dosyalar (ör. `_header.mustache`) |
| **Şablonlar** | `src/templates/` | Türe göre içerik alanı yapısı (ör. `post.mustache`) |
| **Bileşenler** | `src/components/` | Markdown içinde kullanılabilen tekrar kullanılabilir parçalar |

## 4. Çoklu Dil Desteği

Shevky birinci sınıf i18n desteğine sahip:

- `src/i18n.json` dil başına çevrilmiş dizeleri tutar.
- `src/site.json` içindeki `content.languages`, varsayılan dili, desteklenen dilleri ve kurallı URL yollarını tanımlar.
- İçerik dosyaları dilini `lang` front matter alanıyla belirtir.
- URL'ler, menüler, RSS beslemeleri ve site haritaları dile göre oluşturulur.

## 5. Derleme Hattı

Derleme şu aşamaları sırayla yürütür:

1. i18n sözlükleri ve site yapılandırması yüklenir.
2. Mustache şablonları, layout'lar, bileşenler ve partials yüklenir.
3. Eklentiler `site.json` üzerinden yüklenip başlatılır.
4. Markdown içeriği `src/content/` altından okunur.
5. Eklenti kancaları çalıştırılır (`dist:clean`, `assets:copy`, `content:load`, `content:ready`).
6. Gezinme menüleri ve içerik koleksiyonları (etiket, kategori, seri) oluşturulur.
7. Her sayfa işlenir: Markdown -> Mustache -> HTML (opsiyonel minify ile).
8. Çıktı `dist/` dizinine yazılır.

## 6. Eklenti Sistemi

Eklentiler, `site.json` içinde `plugins` anahtarı altında listelenen npm paketleridir. Derleme yaşam döngüsünde tanımlı beş noktaya bağlanırlar:

| Kanca | Amaç |
|------|---------|
| `dist:clean` | `dist/` hazırlandıktan sonra dosya üretimi (ör. robots.txt) |
| `assets:copy` | CSS/JS derleme ve bundle adımları (ör. Tailwind, esbuild) |
| `content:load` | Harici içerik ekleme (ör. API kaynakları) |
| `content:ready` | Tüm içeriği işleme (ör. RSS, sitemap, SEO meta verileri) |
| `page:meta` | Render sırasında sayfa bazlı meta veriyi zenginleştirme |

Eklentiye özel ayarlar `site.json` içindeki `pluginConfigs` bölümünde tutulur ve `config.get("plugin-runtime-name")` ile okunur.

## 7. Yapılandırma

Merkezi yapılandırma dosyası `src/site.json`'dir. Ana bölümler:

- `identity` - yazar, e-posta, URL, sosyal bağlantılar
- `seo` - varsayılan resim, koleksiyon/sayfalama SEO bayrakları
- `content` - dil ayarları, sayfalandırma, koleksiyonlar
- `build` - küçültme, hata ayıklama, arabellek sınırları, çıktı takma adları
- `plugins` - yüklenecek eklenti paketi adları
- `pluginConfigs` - eklenti başına ayarlar

## İlgili

- [Proje Yapısı](/tr/docs/getting-started/project-structure/)
- [Yapılandırma Kılavuzu](/tr/docs/guides/configuration/)
- [Eklenti Sistemine Genel Bakış](/tr/docs/extend/plugin-system-overview/)
