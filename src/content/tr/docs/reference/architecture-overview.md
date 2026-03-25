---
id: s5zrrvt9
lang: tr
title: Mimariye Genel Bakış
slug: docs/reference/architecture-overview
category: docs
type: documentation
schemaType: page
description: Shevky'nin dahili olarak nasıl çalıştığının kullanıcıya yönelik mimari
  özeti.
tags:
- reference
- architecture
order: 61
pair: pair-docs-reference-architecture-overview
canonical: ~/tr/docs/reference/architecture-overview/
alternate: ~/docs/reference/architecture-overview/
template: page
layout: default
status: published
---

# Mimariye Genel Bakış

## Paket Yapısı

Shevky çoklu paket sistemi olarak düzenlenmiştir:

| Paket | Rol |
|---------|------|
| `@shevky/base` | Paylaşılan yardımcı programlar: config, i18n, io, log, format, exec, eklenti sözleşmesi |
| `@shevky/core` | CLI, işlem hattı, motorlar, kayıtlar, içerik modeli oluşturma |
| `@shevky/plugin-*` | Proje yapılandırmasından yüklenen isteğe bağlı derleme uzantıları |

Bağımlılık yönü: eklentiler `base`'a bağlıdır; çekirdek `base`'e bağlıdır; core, derleme sırasında eklentileri dinamik olarak içe aktarır.

## Çalışma Zamanı Giriş Noktaları

- CLI ikili dosyası: `core/shevky.js` (hashbang Node.js betiği)
- Gönderici: `core/scripts/main.js` (rotalar `--build`, `--dev`, `--init`, vb.)
- İşlem hattını oluşturun: `core/scripts/build.js` (`execute()` işlevi)

## Yaşam Döngüsü Oluşturun

`core/scripts/build.js` içindeki derleme hattı şu aşamaları yürütür:

1. `dist/` öğesini temizleyin ve yeniden oluşturun.
2. `dist:clean` eklenti kancasını çalıştırın.
3. Statik varlıkları `src/assets/`'dan kopyalayın.
4. `assets:copy` eklenti kancasını çalıştırın.
5. Markdown içeriğini `src/content/` adresinden yükleyin.
6. `content:load` eklenti kancasını çalıştırın.
7. Menüler ve içerik koleksiyonları (etiketler, kategoriler, seriler) oluşturun.
8. `content:ready` eklenti kancasını çalıştırın.
9. Sayfaları işleyin (sayfa başına `page:meta` kancası, ardından Mustache + İşaretleme -> HTML).
10. Sayfaları `dist/` olarak yıkayın.
11. Çıktı takma adlarını uygulayın.

## Dahili Bileşenler

### Motorlar

| Motor | Dosya | Amaç |
|--------|------|---------|
| EklentiEngine | `core/engines/pluginEngine.js` | Kanca başına bağlamla kanca yürütme |
| RenderEngine | `core/engines/renderEngine.js` | Mustache + İşaretleme oluşturma, HTML dönüştürmeleri |
| MenüMotor | `core/engines/menuEngine.js` | Navigasyon menüsü oluşturma |
| MetaEngine | `core/engines/metaEngine.js` | URL çözünürlüğü, site meta verileri, alternatif bağlantılar |

### Kayıtlar

| Kayıt | Dosya | Amaç |
|----------|------|---------|
| Eklenti Kaydı | `core/registries/pluginRegistry.js` | Eklentilerin dinamik olarak içe aktarılması ve önbelleğe alınması |
| İçerik Kaydı | `core/registries/contentRegistry.js` | İçerik yükleme, tekilleştirme, koleksiyon oluşturma |
| ŞablonKayıt | `core/registries/templateRegistry.js` | Mustache şablonu türe göre yükleniyor |
| Sayfa Kaydı | `core/registries/pageRegistry.js` | Arabelleğe alınmış sayfa çıktısı |

### Veri Akışı

1. İşaretleme dosyaları -> `ContentRegistry` -> `ContentFile` nesneleri
2. Şablonlar -> `TemplateRegistry` -> Mustache dizeleri
3. İçerik + şablonlar -> `RenderEngine` -> HTML dizeleri
4. HTML -> `PageRegistry` -> `dist/` dosyaları

Eklentiler içerik ekleyebilir (`content:load`), içeriği işleyebilir (`content:ready`) ve sayfa meta verilerini zenginleştirebilir (`page:meta`).

## Uzatma Noktaları

- Eklenti kancaları: `dist:clean`, `assets:copy`, `content:load`, `content:ready`, `page:meta`
- `content.collections` yapılandırması aracılığıyla özel koleksiyonlar
- Takma adların çıktısını `build.outputAliases` aracılığıyla alın
- `build.contentRootDirectories` aracılığıyla içerik kök dizinleri

## İlgili

- [CLI Referansı](/tr/docs/reference/cli-reference/)
- [Yapılandırma Referansı](/tr/docs/reference/configuration-reference/)
- [Eklenti Sistemine Genel Bakış](/tr/docs/extend/plugin-system-overview/)
