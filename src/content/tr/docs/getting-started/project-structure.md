---
id: kcrhiyri
lang: tr
title: Proje Yapısı
slug: docs/getting-started/project-structure
category: docs
type: documentation
schemaType: page
description: Shevky çalışma zamanı ve eklentilerinin beklediği dosya ve klasör düzeni.
tags:
- getting-started
- structure
order: 15
pair: pair-docs-getting-started-project-structure
canonical: ~/tr/docs/getting-started/project-structure/
alternate: ~/docs/getting-started/project-structure/
template: page
layout: default
status: published
---

# Proje Yapısı

Shevky, `core/lib/project.js` tarafından çözümlenen, kurala dayalı bir dizin yapısı kullanır.

## Beklenen Düzen

```text
project-root/
|-- package.json
|-- tailwind.config.js          # Tailwind CSS configuration
|-- src/
|   |-- site.json               # Site configuration (identity, plugins, build, etc.)
|   |-- i18n.json               # Multi-language dictionary
|   |-- content/                # Markdown content files
|   |   |-- hello-world.md
|   |   \-- about.md
|   |-- layouts/                # Mustache page shells
|   |   |-- default.mustache    # Main layout
|   |   \-- _header.mustache    # Partial (prefix with _)
|   |-- templates/              # Content templates (post, page, collection, etc.)
|   |   |-- post.mustache
|   |   \-- page.mustache
|   |-- components/             # Reusable Mustache components
|   |-- assets/                 # Static files copied to dist/assets/
|   |-- css/
|   |   \-- app.css             # CSS entry point (for Tailwind plugin)
|   \-- js/
|       \-- app.js              # JS entry point (for esbuild plugin)
\-- dist/                       # Generated output (created by build)
```

## Anahtar Dizinler

| Dizin | Amaç |
|-----------|---------|
| `src/content/` | Markdown kaynak dosyaları `gray-matter` tarafından ön madde + gövde olarak ayrıştırıldı |
| `src/layouts/` | Sayfa kabukları ve kısmi parçalar. `_`-önekli dosyalar kısmi olarak yüklenir |
| `src/templates/` | `template` ön konu alanı tarafından seçilen içerik alanı şablonları |
| `src/components/` | Yeniden Kullanılabilir Mustache bileşenleri, hem şablonlarda hem de Markdown'da kullanılabilir |
| `src/assets/` | Derleme sırasında `dist/assets/`'ye kopyalandı |
| `dist/` | Statik çıktı oluşturuldu. Her derlemede temizlendi ve yeniden oluşturuldu |

## Minimum Gerekli Dosyalar

Çalışan bir yapı için en azından ihtiyacınız var:

- `src/site.json` - site yapılandırması
- `src/i18n.json` - dil sözlüğü (tek dil için `{}` olabilir)
- `src/content/` içinde geçerli ön konuya sahip en az bir Markdown dosyası
- `src/layouts/`'da varsayılan düzen şablonu

## Çıktı Kuralları Oluşturun

- HTML sayfaları içerik bilgisi/dil/kanonik çözünürlüğü takip eder.
- Eklenti çıktıları `dist/` kökünde görünür:
- `output.css` (Tailwind), `output.js` (esbuild), `robots.txt`, `sitemap.xml`, `feed.xml`
- `build.contentRootDirectories` yapılandırması (varsayılan: `[".well-known"]`), `src/content/` alt dizinleriyle eşleşen doğrudan `dist/`'ye kopyalar.

## İlgili

- [Temel Kavramlar](/tr/docs/getting-started/core-concepts/)
- [Hızlı başlangıç](/tr/docs/getting-started/quickstart/)
- [Öğretici Adım 2: Yapılandırma](/tr/docs/tutorials/step-2-configure/)
