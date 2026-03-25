---
id: llkk1yvb
lang: tr
title: '3. Adım: Yerel Olarak Çalıştırın'
slug: docs/tutorials/step-3-run-locally
category: docs
type: documentation
schemaType: page
description: Shevky geliştirme modunu kullanarak sitenizi yerel olarak oluşturun ve
  önizleyin.
tags:
- tutorials
- local-dev
order: 23
pair: pair-docs-tutorials-step-3-run-locally
canonical: ~/tr/docs/tutorials/step-3-run-locally/
alternate: ~/docs/tutorials/step-3-run-locally/
template: page
layout: default
status: published
---

# Adım 3: Yerel Olarak Çalıştırın

## Önkoşullar

- Tamamlandı [2. Adım](./step-2-configure/)
- `src/site.json` ve `src/content/` mevcut

## Komutlar

```bash
npm run dev
```

Alternatif doğrudan çağırma:

```bash
npx shevky --dev
```

## Beklenen Çıktı

- İlk önce derleme çalıştırılır - her aşama için günlük çıktısını göreceksiniz.
- `dist/` HTML sayfalarıyla oluşturulur.
- Terminal yazdırır: `Serving dist on http://localhost:3000`.
- Oluşturulan siteye göz atmak için bu URL'yi tarayıcınızda açın.

## Az önce ne oldu

`core/scripts/main.js` içindeki `--dev` bayrağı iki şey yapar:

1. Tam derlemeyi `_build.execute()` aracılığıyla çalıştırır.
2. `dist/` dizininde `serve@14`'yi başlatır.

Bu statik bir önizlemedir; etkin modül değişimi yoktur. Değişiklikleri görmek için sunucuyu durdurun, yeniden oluşturun ve yeniden başlatın.

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| `EADDRINUSE` / bağlantı noktası çakışması | Bağlantı noktası 3000'i kullanarak işlemi durdurun ve yeniden çalıştırın |
| `Template not found` hataları | Düzen/şablon dosyalarının `src/templates/` ve `src/layouts/`'de mevcut olduğunu doğrulayın |
| İçerik sayfası yok | `src/content/` | altına ön konuyu içeren en az bir geçerli Markdown dosyası ekleyin.

## İlgili

- [Adım 4: Üretim için Oluşturun](/tr/docs/tutorials/step-4-build-for-production/)
- [Sorun giderme](/tr/docs/guides/troubleshooting/)
