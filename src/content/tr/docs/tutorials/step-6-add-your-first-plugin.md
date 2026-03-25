---
id: kd9cdz1s
lang: tr
title: 'Adım 6: İlk Eklentinizi Ekleyin'
slug: docs/tutorials/step-6-add-your-first-plugin
category: docs
type: documentation
schemaType: page
description: Shevky projenize bir eklenti ekleyin ve doğrulayın.
tags:
- tutorials
- plugins
order: 26
pair: pair-docs-tutorials-step-6-add-your-first-plugin
canonical: ~/tr/docs/tutorials/step-6-add-your-first-plugin/
alternate: ~/docs/tutorials/step-6-add-your-first-plugin/
template: page
layout: default
status: published
---

# Adım 6: İlk Eklentinizi Ekleyin

Bu adımda `@shevky/plugin-robots-txt` kullanılır çünkü doğrulaması basit ve kolaydır.

## Önkoşullar

- `src/site.json` ile çalışan bir Shevky projesi

## Komutlar

Eklentiyi yükleyin (henüz kurulmamışsa):

```bash
npm install @shevky/plugin-robots-txt
```

`src/site.json`'da listelendiğinden emin olun:

```json
"plugins": [
  "@shevky/plugin-robots-txt"
]
```

Robot yapılandırmasını ekleyin:

```json
"robots": {
  "allow": ["/"],
  "disallow": ["/draft/"]
}
```

Oluşturun ve doğrulayın:

```bash
npm run build
cat dist/robots.txt
```

## Beklenen Çıktı

`dist/robots.txt` şunları içermelidir:

```text
User-agent: *
Allow: /
Disallow: /draft/

Sitemap: https://yourdomain.com/sitemap.xml
```

## Az önce ne oldu

1. Eklenti, `site.json` içindeki `plugins` dizisi aracılığıyla keşfedildi.
2. `PluginRegistry.load()` eklenti paketini dinamik olarak içe aktardı.
3. `dist:clean` kancası sırasında eklenti `config.identity.url` ve `config.robots` değerlerini okur.
4. Bir `robots.txt` dosyası oluşturdu ve onu `dist/`'ye yazdı.

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| Eklenti çalışmıyor | `plugins[]`'de `@shevky/plugin-robots-txt` tam paket adını doğrulayın |
| Yanlış site haritası URL'si | `identity.url` öğesini doğru şekilde ayarlayın ve yeniden oluşturun |
| `dist/robots.txt` eksik | Eklenti yükleme hataları için derleme günlüklerini kontrol edin |

## İlgili

- [Eklenti Sistemine Genel Bakış](/tr/docs/extend/plugin-system-overview/)
- [Robots Txt Eklentisi](/tr/docs/extend/plugins/plugin-robots-txt/)
