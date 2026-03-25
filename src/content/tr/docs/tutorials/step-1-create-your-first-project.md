---
id: 95kqc3ic
lang: tr
title: 'Adım 1: İlk Projenizi Oluşturun'
slug: docs/tutorials/step-1-create-your-first-project
category: docs
type: documentation
schemaType: page
description: Yeni bir Shevky projesi oluşturun, bağımlılıkları yükleyin ve başlangıç
  ​​dosyalarını önyükleyin.
tags:
- tutorials
- setup
order: 21
pair: pair-docs-tutorials-step-1-create-your-first-project
canonical: ~/tr/docs/tutorials/step-1-create-your-first-project/
alternate: ~/docs/tutorials/step-1-create-your-first-project/
template: page
layout: default
status: published
---

# Adım 1: İlk Projenizi Oluşturun

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
```

## Beklenen Çıktı

Bu komutlar tamamlandıktan sonra:

- `package.json`, otomatik olarak eklenen `build` ve `dev` komut dosyalarına sahiptir.
- `src/` dizini, başlangıç ​​içeriği, şablonlar, düzenler ve bileşenlerle oluşturulur.
- `tailwind.config.js` proje köküne kopyalanır.
- `.gitignore`, `node_modules/` ve `dist/`'yi içerir.

## Az önce ne oldu

- Shevky CLI'yi (`@shevky/core`) ve temel derleme eklentilerini yüklediniz.
- `--init` bayrağı, `fatihtatoglu/shevky-simple-blog`'den `degit` aracılığıyla bir başlangıç ​​şablonunu kopyalayan `core/scripts/init.js`'yi tetikledi.
- Başlangıç ​​dosyaları projenize kopyalandı ve npm komut dosyaları yapılandırıldı.
- Projeniz artık Shevky'nin beklenen çalışma zamanı yapısına uyuyor.

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| `package.json not found` başlatma sırasında | `npm init -y` dosyasının aynı klasörde çalıştığından emin olun |
| Başlatma ağ/rakam hatalarıyla başarısız oluyor | İnternet bağlantısını kontrol edin ve yeniden deneyin |
| Eklenti paketleri daha sonra derleme sırasında eksik | Yukarıdaki `npm install ...` komutunu yeniden çalıştırın |

## İlgili

- [2. Adım: Yapılandırın](/tr/docs/tutorials/step-2-configure/)
- [Proje Yapısı](/tr/docs/getting-started/project-structure/)
