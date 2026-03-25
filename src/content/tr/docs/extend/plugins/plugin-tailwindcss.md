---
id: hot5rtut
lang: tr
title: TailwindCSS Eklentisi
slug: docs/extend/plugins/plugin-tailwindcss
category: docs
type: documentation
schemaType: page
description: Derlemeler sırasında Tailwind CSS'yi derler.
tags:
- extend
- plugins
- tailwind
- css
order: 102
pair: pair-docs-extend-plugins-plugin-tailwindcss
canonical: ~/tr/docs/extend/plugins/plugin-tailwindcss/
alternate: ~/docs/extend/plugins/plugin-tailwindcss/
template: page
layout: default
status: published
---

# TailwindCSS Eklentisi

## Amaç

Derlemeler sırasında Tailwind CSS'yi projenin `src/css/app.css` öğesinden optimize edilmiş bir `dist/output.css` olarak derler. `build.minify` etkinleştirildiğinde küçültmeyi destekler.

## Konum

- Paket: `@shevky/plugin-tailwindcss`
- Ana: `plugin-tailwindcss/main.js`
- Çalışma zamanı adı: `shevky-tailwindcss`

## Yaşam Döngüsü Kancaları

| Kanca | Uygulandı |
|------|:-----------:|
| `assets:copy` | ✓ |

## Nasıl Çalışır?

`assets:copy` sırasında:

1. Üç yolu çözümler: `{root}/tailwind.config.js`, `{src}/css/app.css`, `{dist}/output.css`.
2. Hem yapılandırma hem de kaynak dosyalarının mevcut olduğunu doğrular (eksikse uyarır ve atlar).
3. Tailwind CLI ikili dosyasını bulur - önce `node_modules/.bin/tailwindcss` projesini kontrol eder, ardından eklentinin kendi `node_modules/.bin/tailwindcss` dosyasına geri döner. Windows'ta `.cmd` sonekini kullanır.
4. Tailwind CLI'yi çalıştırır: `-c {config} --input {source} --output {dist}`.
5. `ctx.config.build.minify` doğru olduğunda `--minify` eklenir.

## Yapılandırma

Eklentiye özel yapılandırma yok. Şuna dayanır:

- `tailwind.config.js` proje kökünde
- `src/css/app.css` CSS giriş noktası olarak
- `build.minify` küçültmeyi kontrol etmek için

## Bağımlılıklar

- `@shevky/base` - `io`, `exec`, `plugin`
- `@tailwindcss/cli` ^4.2.1 - CLI ikili dosyası için paketlenmiştir

## Riskler ve Sınırlamalar

- **Sabit kodlanmış yollar:** Belirli konumlarda `src/css/app.css` ve `tailwind.config.js` beklenir.
- **İkili bulma:** Projede veya eklentide `tailwindcss` ikili dosyası kurulu değilse, adım sessizce atlanır.
- **Doğrudan içe aktarmalar:** Yalnızca `ctx.*` yöntemlerinden ziyade doğrudan `@shevky/base`'den `io` ve `exec` kullanır.

## İlgili

- [Esbuild Eklentisi](/tr/docs/extend/plugins/plugin-esbuild/) - benzer varlık derleme modeli
