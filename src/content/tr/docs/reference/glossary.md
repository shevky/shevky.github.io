---
id: ng6ofn9o
lang: tr
title: Sözlük
slug: docs/reference/glossary
category: docs
type: documentation
schemaType: page
description: Shevky belgeleri ve kod tabanında kullanılan terminoloji.
tags:
- reference
- glossary
order: 65
pair: pair-docs-reference-glossary
canonical: ~/tr/docs/reference/glossary/
alternate: ~/docs/reference/glossary/
template: page
layout: default
status: published
---

# Sözlük

## Temel
`@shevky/base` - config, i18n, io, log, format, exec ve eklenti sözleşmesini sağlayan paylaşılan yardımcı paket.

## Derleme Hattı
`core/scripts/build.js` içinde kaynak içeriği `dist/` altında dağıtıma hazır statik site çıktısına dönüştüren aşamalı süreç.

## Kanonik URL
Bir sayfanın front matter içindeki `canonical` alanı ve `identity.url` değeri üzerinden çözümlenen mutlak URL'si.

## Koleksiyon
İçerik dosyalarının ortak meta veriye göre gruplanmış hali. Üç tür: **tag**, **category**, **series**. `ContentRegistry.buildCategoryTagCollections()` tarafından üretilir.

## KoleksiyonlarByLang
`Record<string, Record<string, CollectionEntry[]>>` türü. Dış anahtar dil, iç anahtar koleksiyon adı, değer ise içerik girdileridir.

## Bileşen
`src/components/` altındaki Mustache parçası. Hem şablonlarda hem Markdown içinde kullanılabilir. `components/` anahtar önekiyle yüklenir.

## İçerik Dosyası
`src/content/` altında bulunan, YAML front matter içeren Markdown dosyası. Çalışma zamanında `ContentFile` (header + body) olarak ayrıştırılır.

## Çekirdek
`@shevky/core` - CLI, derleme hattı, engine'ler, registry'ler ve içerik modeli paketidir.

## Motor
`core/engines/` altındaki işleme sınıfları: PluginEngine, RenderEngine, MenuEngine, MetaEngine.

## Front Matter
Markdown dosyasının başındaki YAML meta verisi. Temel alanlar: `id`, `lang`, `slug`, `title`, `template`, `status`, `category`, `tags`, `series`, `schemaType`.

## Kanca
Adlandırılmış bir eklenti yaşam döngüsü olayı. Beş kanca: `dist:clean`, `assets:copy`, `content:load`, `content:ready`, `page:meta`.

## Düzen
`src/layouts/` altındaki, sayfanın HTML kabuğunu tanımlayan üst düzey Mustache şablonu. `_` ile başlamayan dosyalardır.

## Çıkış Takma Adı
Derleme sonrası yol eşlemesi (`build.outputAliases`), örneğin `~/404/` -> `~/404.html`.

## Sayfa Kaydı
Render edilen sayfaları tutan bellek içi buffer. Sınır dolunca veya build sonunda `dist/` içine yazılır.

## Kısmi
Yeniden kullanılabilir bir Mustache parçası. `src/layouts/` içindeki `_`-önekli dosyalar (ör. `_header.mustache`).

## Eklenti
`PluginDefinition` nesnesi dışa aktaran npm paketi. `site.json` içindeki `plugins[]` üzerinden keşfedilir, build sırasında dinamik olarak yüklenir.

## Eklenti İçeriği
Hook işleyicilerine iletilen nesne. Yapılandırma, log, dosya sistemi, yol yardımcıları, proje yolları ve hook'a özel verileri içerir.

## Eklenti Çalışma Zamanı Adı
Bir eklenti tarafından dışa aktarılan `name` alanı (ör. `"shevky-rss"`). `pluginConfigs` ve `config.get()` tarafından anahtar olarak kullanılır.

## Kayıt Defteri
Nesne koleksiyonlarını yöneten sınıf ailesi: PluginRegistry, ContentRegistry, TemplateRegistry, PageRegistry.

## Şema Türü
Yapılandırılmış veriler ve işleme için içerik sınıflandırması. Değerler: `post`, `job-post`, `job-listing`, `not-found`, `page`, `home`, `contact`, `about`, `press`, `help`, `faq`, `collection`, `policy`.

## Yapılandırılmış Veri
Arama motorları için `@shevky/plugin-open-graph` tarafından üretilen JSON-LD işaretlemesi.

## Şablon
`src/templates/` altındaki, içerik alanı yapısını tanımlayan Mustache dosyası. `template` front matter alanıyla seçilir.

## View Payload
Layout render sırasında Mustache'a geçirilen veri nesnesi. Site verisi, menü, footer, i18n, sayfa meta verisi, içerik HTML'i ve script bilgilerini içerir.

## Kısaltmalar

| Kısaltma | Anlamı |
|-------------|---------|
| SSG | Statik Site Oluşturucu |
| OG | Open Graph |
| JSON-LD | Bağlantılı Veriler için JSON |
| i18n | Uluslararasılaşma |
| SEO | Arama Motoru Optimizasyonu |
| RSS | Really Simple Syndication |
| ESM | ECMAScript Modülleri |

## İlgili

- [Mimariye Genel Bakış](/tr/docs/reference/architecture-overview/)
- [Önemli Türler](/tr/docs/reference/important-types/)
