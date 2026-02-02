---
id: xyzlremnii
lang: tr
title: S.H.E.V.K.Y. Teknik Dokümantasyon
slug: docs/klasor-yapisi
category: projects
type: documentation
tags:
  - shevky
  - static-site-generator
  - ssg
  - nodejs
  - markdown
  - html
  - mustache
readingTime: 1
date: 2025-12-16
updated: 2026-01-20
pair: shevky
canonical: ~/docs/klasor-yapisi
alternate: ~/en/docs/folder-structure
description: S.H.E.V.K.Y. static site generator için teknik dokümantasyon. Mimari yapı, içerik formatı ve kullanım detayları (hazırlanıyor).
keywords:
  - S.H.E.V.K.Y.
  - statik site üreticisi
  - static site generator
  - teknik dokümantasyon
featured: false
cover: /assets/images/projects.webp
coverAlt: Terminal temalı kapak görseli
coverCaption: S.H.E.V.K.Y. teknik dokümantasyonu (hazırlanıyor)
template: page
layout: default
status: draft
---
# Klasör Yapısı

**S.H.E.V.K.Y.** projeleri aşağıdakine benzeyen içerik, görünüm ve davranışların ayrımını net yapan modüler bir klasör yapısına sahiptir.

![S.H.E.V.K.Y. Folder Structure](/assets/images/shevky-folder-structure.webp)

## Proje Kökü

```txt
/
├─ node_modules/
├─ src/
├─ package.json
├─ tailwind.config.js
├─ .gitignore
```

### node_modules

Her NodeJS projesinde olacağı gibi proje bağımlılıklarını ve gereken modülleri barındıran kısımdır. Bu kısma elle müdahale edilmez.

### package.json

Projenin ayağa kaldırılması, kurulumunun yapılması, script ve bağımlılıklarının bulunduğu yerdir.

### tailwind.config.js

**S.H.E.V.K.Y.** şu anda CSS ayarlanması ve sıkıştırma işlemleri için TailWind CSS çerçevesini kullanmaktadır. Bu dosya içerisinde temalar, renkler ve ekran boyut ayarları bulunmaktadır.

## src

**S.H.E.V.K.Y.**'nin üretim yaparken referans aldığı klasördür. 

```txt
src/
├─ assets/
├─ components/
├─ content/
├─ css/
├─ js/
├─ layouts/
├─ templates/
├─ i18n.json
├─ site.json
```

### assets

```txt
assets/
├─ favicon/
├─ images/
├─ rss.xsl
├─ sitemap.xsl
```

`assets` klasörü **S.H.E.V.K.Y.** tarafından derlenmeyen ve direk üretim çıktısına taşınan klasördür. Eğer üretim sürecine girmeyecek bir Java Script, CSS, görsel, vb. gibi dosyalar varsa buraya taşınmasını en doğru tercih olacaktır.

>[!warning]
>Bu klasör içerisinde Arama Motorları tarafından okunmaması gereken içerikler varsa, mutlaka `site.json` içindeki `robots` ayarlarının yapılması önerilmektedir.

### components

Site içerisinde tekrar kullanılacak yapıların bulunduğu klasördür. Bu yapılar `.mustache` uzantılı olarak kaydedilir ve içerik dosyalarının başlıklarına uygun veriler verilerek kullanılır.

bkz -> Şablon Yapısı
bkz -> Front Matter Hader Yapısı
bkz -> Component Tasarlama

### content

Sitenin içeriğinin olduğu klasördür. Klasörün iç yapısı istenildiği gibi ayarlanabilir. İçeriklerin `.md` formatında ve ön bölüm başlığı içermesi gerekmektedir.

bkz -> Front Matter Hader Yapısı

### layouts

Sitenin iskeletinin yer aldığı klasördür. Sitenin parçalarının ayrı olarak yönetilmesini ve özelleştirilmesini sağlayan `.mustache` uzantılı dosyaları içerir. Site'nin birden fazla iskeleti olabilir. Bu ayar içeriğin ön bölüm başlığı içinde belirlenmektedir.

### templates

Site içeriğinin özelleştirilmiş olarak site iskeleti içinde gösterilmesini sağlayan yapılardır. Sitenin içerisindeki *post*, *page*, vb. gibi sayfa şablonları barındırır. Bu şablonlar `.mustache` uzantılı olarak saklanır ve üretim sırasında kullanılır.

### css

Tailwind CSS giriş dosyasının ve diğer görsel kuralları içeren dosyaların bulunduğu klasördür.  **S.H.E.V.K.Y.** CSS üretme sürecinde `app.css` adında bir dosyayı arar ve ona bağlı olan bütün `.css` dosyalarını `tailwind-cli` ile işler.

### js

Sitenin davranışlarının ve dinamik yapısını sağlayan Java Script dosyalarının olduğu klasördür. `app.js` giriş dosyası olarak **S.H.E.V.K.Y.** tarafından kullanılır ve bağlı olan modüller ya da Java Script kodları `esbuild` ile işlenir.

### i18n.json

Sitenin çoklu dil desteği için kullanılan ayarlama dosyasıdır. Sitenin içerik dışında kalan kısımlarına çoklu dil desteği verilmesi için kullanılır.

```json
{
  "header": {
    "brand": {
      "tr": "Örnek Blog",
      "en": "Sample Blog"
    }
  }
}
```

### site.json

Sitenin genel ve ayarlanabilir bütün bilgilerinin bulunduğu dosyadır.

bkz -> konfigürasyon.

## S.H.E.V.K.Y.'nin neden sabit bir klasör yapısı var?

**S.H.E.V.K.Y.** bir içeriği olabildiğince hızlı ve basit şekilde yayına alınmasını sağlamak için geliştirildi. Klasör yapısının sabit olması; içerik, görünüm ve davranışın tamamen ayrıştırılmasına ve daha ölçeklenebilir, bakımı kolay ve modüler bir yapı sağlamaktadır.
