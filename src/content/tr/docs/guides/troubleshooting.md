---
id: 5odjk4jo
lang: tr
title: Sorun giderme
slug: docs/guides/troubleshooting
category: docs
type: documentation
schemaType: page
description: Pratik düzeltmelerle sık karşılaşılan kurulum ve derleme sorunları.
tags:
- guides
- troubleshooting
order: 33
pair: pair-docs-guides-troubleshooting
canonical: ~/tr/docs/guides/troubleshooting/
alternate: ~/docs/guides/troubleshooting/
template: page
layout: default
status: published
---

# Sorun giderme

## Derleme JSON Ayrıştırma Hatasıyla Başarısız Oldu

**Belirtiler:** Derleme `site.json` veya `i18n.json` yüklendikten sonra iptal ediliyor.

**Düzeltme:** JSON sözdizimini doğrulayın - sondaki virgülleri, teklif bakiyesini ve kodlamayı kontrol edin. Bir JSON doğrulayıcı veya editörünüzün yerleşik denetleyicisini kullanın.

## Eklenti Yüklenmedi

**Belirtiler:** Başarısız eklenti yüklemesiyle ilgili uyarı. Beklenen eklenti çıktı dosyası eksik.

**Düzeltmek:**
1. Paketin `package.json` bağımlılıklarına kurulduğunu doğrulayın.
2. `src/site.json` -> `plugins[]` içindeki tam paket adını doğrulayın.
3. Eklentinin `name` ve `hooks` ile geçerli bir nesneyi dışa aktardığından emin olun.

## Eksik `output.css` veya `output.js`

**Belirtiler:** HTML, 404 döndüren CSS/JS dosyalarına başvuruyor.

**Düzeltmek:**
- Tailwind eklentisi proje kökünde `tailwind.config.js` ve `src/css/app.css` gerektirir.
- Esbuild eklentisi `src/js/app.js` gerektirir.
- Her iki eklentinin de `plugins` dizisinde listelendiğini doğrulayın.

## Geliştirici Sunucusu Başlamıyor

**Belirtiler:** Bağlantı noktası çakışması veya hizmet komutu hatası.

**Düzeltmek:**
1. 3000 numaralı bağlantı noktasını serbest bırakın (onu kullanan tüm işlemleri durdurun).
2. `npm run dev`'yi yeniden çalıştırın.
3. Derlemenin kendisi başarısız olursa, önce derleme hatalarını düzeltin; sunucu yalnızca başarılı bir derlemeden sonra başlar.

## Kanonik URL'ler Yanlış

**Belirtiler:** `sitemap.xml`, RSS yayınları veya meta etiketler üretimde `http://localhost:3000` gösteriyor.

**Düzeltme:** `src/site.json` içindeki `identity.url` değerini gerçek üretim URL'nize ayarlayın ve yeniden oluşturun.

## Beklenmeyen Boş Koleksiyonlar

**Belirtiler:** Etiket, kategori veya seri sayfaları boş görünüyor.

**Düzeltmek:**
1. İçerik ön madde değerlerinin (`category`, `tags`, `series`) doğru şekilde ayarlandığını doğrulayın.
2. Özel toplama yolları kullanılıyorsa `content.collections` yapılandırma tanımlarını doğrulayın.
3. İçerik girişlerinin `status: published` olduğundan emin olun (`draft` değil).

## Şablon Bulunamadı

**Belirtiler:** Eksik bir şablona başvururken derleme hatası.

**Düzeltme:** İçerik ön maddesinde (`template: post`) adı verilen şablonun karşılık gelen bir `src/templates/post.mustache` dosyasına sahip olduğundan emin olun.

## Derleme Günlüğünde Eklenti Hataları Var Ancak Derleme Başarılı

**Belirtiler:** Eklenti arızalarıyla ilgili uyarı mesajları ancak `dist/` oluşturuldu.

**Açıklama:** Eklenti hataları `PluginEngine` tarafından yakalanır ve günlüğe kaydedilir. Yapım ne olursa olsun devam ediyor. Günlükleri dikkatlice kontrol edin; eklenti çıktısı eksik veya eksik olabilir.

## İlgili

- [Yapılandırma Kılavuzu](/tr/docs/guides/configuration/)
- [SSS](/tr/docs/guides/faq/)
- [Öğreticiler](/tr/docs/tutorials/)
