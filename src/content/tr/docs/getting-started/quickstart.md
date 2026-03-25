---
id: c7fh3nty
lang: tr
title: Hızlı başlangıç
slug: docs/getting-started/quickstart
category: docs
type: documentation
schemaType: page
description: Boş klasörden çalışan bir yerel siteye giden en hızlı yol.
tags:
- getting-started
- quickstart
order: 13
pair: pair-docs-getting-started-quickstart
canonical: ~/tr/docs/getting-started/quickstart/
alternate: ~/docs/getting-started/quickstart/
template: page
layout: default
status: published
---

# Hızlı başlangıç

İki dakikadan kısa sürede çalışan bir Shevky sitesi edinin.

## Önkoşullar

- Node.js 18+
- npm

## Komutlar

```bash
mkdir my-shevky-site
cd my-shevky-site
npm init -y
npm install @shevky/core @shevky/plugin-robots-txt @shevky/plugin-tailwindcss @shevky/plugin-esbuild @shevky/plugin-rss @shevky/plugin-sitemap
npx shevky --init
npm run build
npm run dev
```

## Beklenen Çıktı

`npm run build`'den sonra:

- `dist/` dizini oluşturulan HTML sayfalarıyla oluşturulur.
- `dist/output.css` mevcut (Tailwind eklentisi).
- `dist/output.js` mevcut (esbuild eklentisi).
- `dist/robots.txt`, `dist/sitemap.xml` ve özet akışı XML'si mevcuttur (ilgili eklentiler yapılandırıldığında).

`npm run dev`'den sonra:

- Önce derleme çalışır, ardından `http://localhost:3000` konumunda statik bir sunucu başlar.
- Sitenizi görmek için bu URL'yi tarayıcınızda açın.

## Az önce ne oldu

1. CLI girişi (`shevky.js`) derleme komut dosyasına (`core/scripts/build.js`) yönlendirildi.
2. Derleme yüklendi `src/site.json` (yapılandırma) ve `src/i18n.json` (çeviriler).
3. Mustache şablonları `src/layouts/`, `src/components/`, `src/templates/`'den yüklendi.
4. `site.json` içindeki `plugins` dizisindeki eklentiler dinamik olarak içe aktarıldı.
5. Eklenti kancaları şu sırayla çalışıyordu: `dist:clean` -> `assets:copy` -> `content:load` -> `content:ready`.
6. `src/content/`'deki işaretleme içeriği ayrıştırıldı, oluşturuldu ve `dist/`'ye yazıldı.
7. `--dev` bayrağı ayrıca çıktının yerel olarak önizlemesini yapmak için `serve@14`'yi başlattı.

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| `Cannot find module @shevky/plugin-...` | Eksik eklenti paketini yükleyin |
| `src/site.json` eksik | `npx shevky --init` dosyasını yeniden çalıştırın veya dosyayı manuel olarak oluşturun |
| Bağlantı Noktası 3000 zaten kullanımda | Çakışan işlemi durdurun veya yalnızca `npm run build` komutunu çalıştırın |

## İlgili

- [Kurulum](/tr/docs/getting-started/installation/)
- [Proje Yapısı](/tr/docs/getting-started/project-structure/)
- [Öğretici Adım 3: Yerel Olarak Çalıştırın](/tr/docs/tutorials/step-3-run-locally/)
