---
id: mh07aohj
lang: tr
title: Kurulum
slug: docs/getting-started/installation
category: docs
type: documentation
schemaType: page
description: Shevky çekirdeğini ve birinci taraf eklentilerini yükleyin.
tags:
- getting-started
- installation
order: 12
pair: pair-docs-getting-started-installation
canonical: ~/tr/docs/getting-started/installation/
alternate: ~/docs/getting-started/installation/
template: page
layout: default
status: published
---

# Kurulum

## 1. Bir Proje Dizini Oluşturun

```bash
mkdir my-shevky-site
cd my-shevky-site
npm init -y
```

## 2. Çekirdek ve Eklentileri Kurun

Çekirdek CLI'yi ve yaygın olarak kullanılan eklentileri yükleyin:

```bash
npm install @shevky/core \
  @shevky/plugin-robots-txt \
  @shevky/plugin-tailwindcss \
  @shevky/plugin-esbuild \
  @shevky/plugin-rss \
  @shevky/plugin-sitemap
```

Gelişmiş kullanım durumları için isteğe bağlı eklentiler:

```bash
npm install @shevky/plugin-content-bridge @shevky/plugin-open-graph
```

## 3. Bootstrap Başlangıç ​​Dosyaları

```bash
npx shevky --init
```

Bu komut (`core/scripts/init.js`'da uygulanmıştır):

- `fatihtatoglu/shevky-simple-blog` başlangıç ​​şablonunu `degit` aracılığıyla klonlar.
- `src/` dizinini ve `tailwind.config.js` projenize kopyalar.
- Ek yapı bağımlılıklarını yükler (Tailwind, esbuild, işaretlenmiş vb.).
- Bir `.gitignore` dosyası oluşturur.
- `package.json` dosyanıza `build` ve `dev` komut dosyalarını ekler.

## 4. CLI Erişimini Doğrulayın

```bash
npx shevky --help
```

Yardım çıktısının mevcut bayrakları listelediğini görmelisiniz: `--help`, `--version`, `--init`, `--build`, `--dev`.

## Yaygın Kurulum Hataları

| Hata | Düzelt |
|-------|-----|
| `shevky: command not found` | `shevky ...` yerine `npx shevky ...` kullanın |
| `package.json not found` başlatma sırasında | Önce proje dizininde `npm init -y` komutunu çalıştırın |
| Tailwind/esbuild derleme sırasında eksik | `npm install`'yi yeniden çalıştırın ve `node_modules`'nin var olduğunu doğrulayın |

## İlgili

- [Önkoşullar](/tr/docs/getting-started/prerequisites/)
- [Hızlı başlangıç](/tr/docs/getting-started/quickstart/)
