---
id: e93lfc36
lang: tr
title: CLI Kullanımı
slug: docs/guides/cli-usage
category: docs
type: documentation
schemaType: page
description: Shevky CLI komutlarının nasıl kullanılacağı ve her modun ne yaptığı.
tags:
- guides
- cli
order: 32
pair: pair-docs-guides-cli-usage
canonical: ~/tr/docs/guides/cli-usage/
alternate: ~/docs/guides/cli-usage/
template: page
layout: default
status: published
---

# CLI Kullanımı

CLI giriş noktası `shevky`'dır ve `@shevky/core` tarafından `package.json` içindeki `bin` alanı aracılığıyla sağlanır.

## Komutları Çalıştırma

Her zaman proje kökünden `npx` kullanın:

```bash
npx shevky <flag>
```

Veya `--init` tarafından eklenen npm komut dosyalarını kullanın:

```bash
npm run build   # equivalent to: npx shevky --build
npm run dev     # equivalent to: npx shevky --dev
```

## Mevcut Komutlar

### Yardım

```bash
npx shevky --help
```

Mevcut tüm seçenekleri ve proje bağlantılarını gösterir.

### Sürüm

```bash
npx shevky --version
```

Shevky sürüm dizesini yazdırır.

### Projeyi Başlat

```bash
npx shevky --init
```

Bir başlangıç ​​projesini önyükler: şablon dosyalarını klonlar, bağımlılıkları yükler, `package.json` komut dosyalarını günceller.

### İnşa etmek

```bash
npx shevky --build
```

Tam statik site yapısını çalıştırır: yapılandırmayı yükler, şablonları derler, içeriği yükler, eklenti kancalarını çalıştırır, sayfaları oluşturur, çıktıyı `dist/`'a yazar.

### Geliştirici

```bash
npx shevky --dev
```

Önce tam derlemeyi çalıştırır, ardından `serve@14` kullanarak `http://localhost:3000` adresinde yerel bir statik sunucuyu başlatır.

## Varsayılan Davranış

Herhangi bir işaret sağlanmazsa CLI yardım metnini yazdırır.

## İzleme Moduyla İlgili Not

`core/scripts/main.js`'de bir `runWatch()` işlevi mevcut ancak geçerli sürümde CLI bayrağı olarak gösterilmiyor. (`main.js` ve `cli.js` arasındaki kaynak karşılaştırmasından çıkarılmıştır.)

## İlgili

- [CLI Referansı](/tr/docs/reference/cli-reference/) - ayrıntılı bayrak belgeleri
- [Sorun giderme](/tr/docs/guides/troubleshooting/)
