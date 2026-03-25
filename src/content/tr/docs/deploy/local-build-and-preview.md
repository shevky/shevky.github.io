---
id: cbcbk0b8
lang: tr
title: Yerel Yapı ve Önizleme
slug: docs/deploy/local-build-and-preview
category: docs
type: documentation
schemaType: page
description: Statik çıktı oluşturun ve dağıtımdan önce yerel olarak önizleyin.
tags:
- deploy
- local
order: 41
pair: pair-docs-deploy-local-build-and-preview
canonical: ~/tr/docs/deploy/local-build-and-preview/
alternate: ~/docs/deploy/local-build-and-preview/
template: page
layout: default
status: published
---

# Yerel Yapı ve Önizleme

## Amaç

Üretim benzeri çıktıyı bir barındırma platformunda yayınlamadan önce yerel olarak doğrulayın.

## Komutlar

Çıktı oluştur:

```bash
npm run build
```

Shevky dev komutuyla önizleme:

```bash
npm run dev
```

Veya statik çıktıyı doğrudan herhangi bir statik sunucuyla önizleyin:

```bash
npx serve dist
```

## Doğrulama Kontrol Listesi

- Ana sayfayı ve en az bir içerik sayfasını açın.
- CSS ve JS paketlerinin 404 hatası olmadan yüklendiğini doğrulayın.
- Oluşturulan destek dosyalarının mevcut olup olmadığını kontrol edin: `dist/robots.txt`, `dist/sitemap.xml`, `dist/feed.xml`.
- HTML kaynağındaki standart URL'lerin beklenen değerlerle eşleştiğini doğrulayın.

## Yaygın Sorunlar

| Sayı | Düzelt |
|-------|-----|
| 3000'de liman çatışması | Çakışan süreci durdurun veya `npx serve dist -l 8080` kullanın |
| Eksik CSS/JS paketleri | `src/css/app.css` ve `src/js/app.js`'nin mevcut olduğunu ve eklentilerin listelendiğini doğrulayın |
| Eski içerik | Derleme `dist/` öğesini otomatik olarak temizler; gerekirse manuel olarak silin |

## İlgili

- [Üretim Yapısı](/tr/docs/deploy/production-build/)
- [Dağıtım Seçeneklerine Genel Bakış](/tr/docs/deploy/deploy-options-overview/)
