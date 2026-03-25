---
id: lxrn9cxe
lang: tr
title: Yapılandırma Kılavuzu
slug: docs/guides/configuration
category: docs
type: documentation
schemaType: page
description: site.json ve plug-inConfig'leri güvenli bir şekilde düzenlemek için pratik
  rehberlik.
tags:
- guides
- configuration
order: 31
pair: pair-docs-guides-configuration
canonical: ~/tr/docs/guides/configuration/
alternate: ~/docs/guides/configuration/
template: page
layout: default
status: published
---

# Yapılandırma Kılavuzu

Shevky, derleme başlangıcı sırasında `base/src/config.js`'de `config.load()` aracılığıyla `src/site.json` okur. Tüm yapılandırma alanlarında yerleşik geri dönüş varsayılanları bulunur.

## Temel İlkeler

- `site.json` değerini geçerli JSON olarak tutun (sondaki virgül yok, yorum yok).
- Yalnızca varsayılanlara güvenmek yerine açık değerleri tercih edin.
- Eklenti ayarlarını global config ile karıştırılmadan `pluginConfigs` içine yerleştirin.
- Eklenti paket adlarını `plugins` içine koyun.

## Yüksek Etkili Bölümler

### `identity`

Meta etiketler, RSS, site haritası ve robot oluşturmada kullanılan kanonik site meta verilerini kontrol eder.

Anahtar alanlar: `author`, `email`, `url`, `themeColor`, `social`.

> **Önemli:** `identity.url` RSS yayınlarında, site haritasında, robots.txt'de ve OG meta verilerinde standart URL'leri yönlendirir. Dağıtım için oluşturmadan önce bunu üretim URL'nize ayarlayın.

### `content`

Dil davranışını ve içerik listelerini kontrol eder.

Anahtar alanlar:
- `languages.default`, `languages.supported`, `languages.canonical` - çok dilli yönlendirme
- `pagination.pageSize`, `pagination.segment` - sayfalandırmayı listeleme
- `collections` - etiketler/kategoriler/seriler için özel koleksiyon tanımları

### `build`

Çıkış davranışını kontrol eder:
- `minify` - HTML/CSS/JS küçültmeyi etkinleştirir
- `debug` - ayrıntılı derleme günlüğe kaydetmeyi ve yüklerde hata ayıklamayı etkinleştirir
- `pageBufferLimit` - temizlemeden önce bellekte tutulan sayfalar (varsayılan: 20)
- `outputAliases` - derleme sonrası yol eşlemeleri (örneğin, `~/404/` -> `~/404.html`)

### `plugins`

Eklenti paketi adlarını tam olarak npm'de kurulu olduğu şekilde listeleyin:

```json
"plugins": [
  "@shevky/plugin-robots-txt",
  "@shevky/plugin-tailwindcss"
]
```

### `pluginConfigs`

Eklentinin `name` alanıyla anahtarlanan eklenti çalışma zamanı ayarlarını saklayın (npm paket adı değil, çalışma zamanı adı):

```json
"pluginConfigs": {
  "shevky-rss": { "feedFilename": "feed.xml" },
  "shevky-open-graph": { "siteName": "My Site" }
}
```

## Güvenli Değişim İş Akışı

1. `src/site.json`'yi düzenleyin.
2. `npm run build` komutunu çalıştırın.
3. `dist/` çıktısını inceleyin ve günlükleri oluşturun.
4. `npm run dev` komutunu çalıştırın ve tarayıcıdaki sayfaları doğrulayın.

## Yaygın Hatalar

| Hata | Sonuç | Düzelt |
|---------|------------|-----|
| `pluginConfigs` eklentisi var ancak `plugins[]`'de eksik | Yapılandırma göz ardı edilir; eklenti asla yüklenmiyor | Her iki yere de ekle |
| `plugins[]`'da yanlış paket adı | Eklenti yükleme uyarısı; inşaat onsuz devam ediyor | Tam npm paket adını kullanın |
| Yanlış `identity.url` | Yanlış standart/site haritası/yayın/OG URL'leri | Gerçek üretim URL'sine ayarla |
| Eşleşmeyen `pluginConfigs` anahtarı | Eklenti `null` yapılandırmasını okuyor | Anahtar, eklentinin `name` dışa aktarımıyla eşleşmelidir |

## İlgili

- [Yapılandırma Referansı](/tr/docs/reference/configuration-reference/) - alan bazında tam referans
- [CLI Kullanımı](/tr/docs/guides/cli-usage/)
