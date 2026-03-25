---
id: xgzz4706
lang: tr
title: CLI Referansı
slug: docs/reference/cli-reference
category: docs
type: documentation
schemaType: page
description: Shevky CLI işaretlerini, işleyicilerini ve çalışma zamanı efektlerini
  tamamlayın.
tags:
- reference
- cli
order: 63
pair: pair-docs-reference-cli-reference
canonical: ~/tr/docs/reference/cli-reference/
alternate: ~/docs/reference/cli-reference/
template: page
layout: default
status: published
---

# CLI Referansı

CLI, `@shevky/core` tarafından `shevky` -> `core/shevky.js` depo girişi yoluyla sağlanır.

## Bayraklar

`core/scripts/cli.js` (`getCliOptionDefinitions()`)'de tanımlanmış:

| Bayrak | Takma Ad | Tür | Açıklama |
|------|-------|------|-------------|
| `--help` | `-h` | Boolean | Kullanım metnini yazdır |
| `--version` | `-v` | Boolean | Baskı versiyonu |
| `--init` | - | Boolean | Projeyi başlat |
| `--build` | - | Boolean | Tam derlemeyi çalıştır |
| `--dev` | - | Boolean | Yerel olarak oluştur + hizmet ver |

## Gönderim Emri

`core/scripts/main.js` bayrakları şu sırayla kontrol eder:

1. `--help` -> `command-line-usage` aracılığıyla yazdırma kullanımı
2. `--version` -> sürüm dizesini yazdır
3. `--init` -> `core/scripts/init.js` komutunu çalıştırın
4. `--dev` -> oluştur ve sun
5. `--build` -> tam derlemeyi çalıştır
6. Bayrak yok -> yazdırma yardımı

## Komut Ayrıntıları

### `shevky --init`

`core/scripts/init.js` çalıştırır:
- `degit` aracılığıyla `fatihtatoglu/shevky-simple-blog` klonları
- `src/` ve `tailwind.config.js` kopyaları
- `exec.installPackage()` aracılığıyla derleme bağımlılıklarını yükler
- `.gitignore` yazıyor
- `package.json` komut dosyalarını günceller: `build` -> `npx shevky --build`, `dev` -> `npx shevky --dev`

### `shevky --build`

`core/scripts/build.js` `execute()` çalıştırır:
- i18n, yapılandırma, şablonlar ve eklentileri yükler
- Tüm yapı yaşam döngüsünü yürütür
- Çıktıyı `dist/`'a yazar

### `shevky --dev`

- İlk önce tam yapıyı çalıştırır
- `dist/` tarihinde `serve@14` başlar
- Günlükler: `Serving dist on http://localhost:3000`

## Çıkış Davranışı

- Eklenti hataları günlüğe kaydedilir ve yutulur; derleme eksik eklenti çıktısıyla tamamlanabilir.
- `--init`, eksik `package.json` veya kopyalama/kurma hatalarında erken çıkış yapar.

## Not

`runWatch()`, `core/scripts/main.js`'de mevcut ancak geçerli sürümde onunla eşlenen hiçbir CLI bayrağı yok. (Kaynak karşılaştırmasından çıkarılmıştır.)

## İlgili

- [CLI Kullanım Kılavuzu](/tr/docs/guides/cli-usage/)
- [Mimariye Genel Bakış](/tr/docs/reference/architecture-overview/)
