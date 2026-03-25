---
id: 3j61svop
lang: tr
title: Robots Txt Eklentisi
slug: docs/extend/plugins/plugin-robots-txt
category: docs
type: documentation
schemaType: page
description: Derlemeler sırasında robots.txt dosyasını oluşturur.
tags:
- extend
- plugins
- robots
order: 101
pair: pair-docs-extend-plugins-plugin-robots-txt
canonical: ~/tr/docs/extend/plugins/plugin-robots-txt/
alternate: ~/docs/extend/plugins/plugin-robots-txt/
template: page
layout: default
status: published
---

# Robots Txt Eklentisi

## Amaç

Derlemeler sırasında `dist/` dizininde bir `robots.txt` dosyası oluşturur, web tarayıcısı erişim kurallarını yapılandırır ve site haritasına bağlanır.

## Konum

- Paket: `@shevky/plugin-robots-txt`
- Ana: `plugin-robots-txt/main.js`
- Çalışma zamanı adı: `shevky-robots-txt`

## Keşif ve Kayıt

`site.json` -> `plugins`'de `"@shevky/plugin-robots-txt"` olarak listelenmiştir. `PluginRegistry.load()` tarafından yüklendi. `load()` başlatıcı yok.

## Yaşam Döngüsü Kancaları

| Kanca | Uygulandı |
|------|:-----------:|
| `dist:clean` | ✓ |
| `assets:copy` | - |
| `content:load` | - |
| `content:ready` | - |
| `page:meta` | - |

## Nasıl Çalışır?

`dist:clean` sırasında işleyici:

1. `ctx.config.identity.url` okur ve temel URL'nin sonundaki eğik çizgileri çıkarır.
2. `ctx.config.robots.allow` ve `ctx.config.robots.disallow` dizilerini okur.
3. `User-agent: *`, `Allow:`, `Disallow:` direktiflerini içeren bir metin dosyası oluşturur.
4. `Sitemap: {baseUrl}/sitemap.xml` eklenir.
5. `ctx.file.write()` aracılığıyla `dist/robots.txt`'ye yazar.

## Yapılandırma

`site.json`'den `robots` bölümünü kullanır:

```json
"robots": {
  "allow": ["/"],
  "disallow": ["/draft/"]
}
```

`pluginConfigs`'da eklentiye özel yapılandırma yok - doğrudan global `robots` yapılandırma bölümünden okunur.

## Bağımlılıklar

- Yalnızca `@shevky/base`. Dış bağımlılık yok.

## Riskler ve Sınırlamalar

- **Sabit kodlu site haritası yolu:** Her zaman `sitemap.xml`'ye başvurur. Site haritası eklentisi farklı bir dosya adı kullanıyorsa referans yanlış olacaktır.
- **Doğrulama yok:** İzin verme/izin vermeme yollarının iyi biçimlendirilmiş olup olmadığını kontrol etmez.
- **Tek Kullanıcı aracısı:** Yalnızca `User-agent: *` için kurallar oluşturur.

## İlgili

- [Eklenti Sistemine Genel Bakış](/tr/docs/extend/plugin-system-overview/)
- [Site Haritası Eklentisi](/tr/docs/extend/plugins/plugin-sitemap/)
