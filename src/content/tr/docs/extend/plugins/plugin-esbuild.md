---
id: ximijiln
lang: tr
title: Esbuild Eklentisi
slug: docs/extend/plugins/plugin-esbuild
category: docs
type: documentation
schemaType: page
description: Derlemeler sırasında JavaScript'i esbuild ile paketler.
tags:
- extend
- plugins
- esbuild
- javascript
order: 103
pair: pair-docs-extend-plugins-plugin-esbuild
canonical: ~/tr/docs/extend/plugins/plugin-esbuild/
alternate: ~/docs/extend/plugins/plugin-esbuild/
template: page
layout: default
status: published
---

# Esbuild Eklentisi

## Amaç

Esbuild'i kullanarak JavaScript'i `src/js/app.js`'dan `dist/output.js`'ye paketler. Küçültme, kaynak haritaları ve ölü kodların ortadan kaldırılmasını destekler.

## Konum

- Paket: `@shevky/plugin-esbuild`
- Ana: `plugin-esbuild/main.js`
- Çalışma zamanı adı: `shevky-esbuild`

## Yaşam Döngüsü Kancaları

| Kanca | Uygulandı |
|------|:-----------:|
| `assets:copy` | ✓ |

## Nasıl Çalışır?

`assets:copy` sırasında:

1. Kaynak (`{root}/src/js/app.js`) ve çıkış (`{root}/dist/output.js`) yollarını çözümler.
2. Kaynak dosyanın var olup olmadığını kontrol eder (eksikse uyarır ve atlar).
3. Esbuild bağımsız değişkenlerini oluşturur: `--bundle --format=esm --target=es2018`.
4. `build.minify` doğru olduğunda şunu ekler: `--minify`, `--drop:debugger`, `--drop:console`, `--ignore-annotations`, `--sourcemap`.
5. Eklenti kök dizininden `exec.executeNpx()` aracılığıyla çalışır.

## Çıkış Ayarlarını Oluştur

| Ayar | Değer |
|---------|-------|
| Paket | Evet |
| Biçim | ESM |
| Hedef | ES2018 |
| Kaynak Haritası | Yalnızca küçültürken |
| Konsol/hata ayıklayıcının kaldırılması | Yalnızca küçültürken |

## Bağımlılıklar

- `@shevky/base` - `io`, `exec`, `plugin`
- `esbuild` ^0.27.3 - bağımlılık olarak paketlendi

## Riskler ve Sınırlamalar

- **Sabit kodlanmış kaynak yolu:** Tam olarak `src/js/app.js` bekleniyor.
- **npx aracılığıyla çalışır:** Eklentinin bağımlılık ağacında esbuild'in bulunması gerekir.
- **Özel yapılandırma yok:** Esbuild eklentilerini veya kullanıcı tarafından sağlanan yapılandırmayı desteklemez.

## İlgili

- [TailwindCSS Eklentisi](/tr/docs/extend/plugins/plugin-tailwindcss/) - benzer varlık derleme modeli
