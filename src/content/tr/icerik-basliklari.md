---
id: kz4cbc6ip6
lang: tr
title: S.H.E.V.K.Y. Teknik Dokümantasyon
slug: docs/icerik-basliklari
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
canonical: ~/docs/icerik-basliklari
alternate: ~/en/docs/content-headers
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
# İçerik Başlıkları

Bir içeriğin yaşam döngüsünü ve diğer içeriklerle olan bağlantısını yönetmek için kullanılan tanımlama kısmına ön bölüm başlık deniyor. **S.H.E.V.K.Y.**'de bu yapıyı kullanarak içerikleri üretim sürecinde özelleştirmektedir.

**S.H.E.V.K.Y.** projesinin sunduğu `site.json` ve `i18n.json` ayarlama dosyalarından farklı olarak; sadece içeriğe özel olarak ayarlanacak tanımların bu kısımda yapılması sayesinde daha esnek bir yapı sunulmaktadır.

Her `.md` dosyasının en başına `---` satırları arasına eklenen YAML formatındaki başlıklar, üretim sırasında kullanılmaktadır.

| Alan         | Veri Tipi | Zorunlu | Açıklama                                                         | Varsayılan Değer | Format     |
| ------------ | --------- | ------- | ---------------------------------------------------------------- | ---------------- | ---------- |
| id           | string    | ✅       | İçeriğin tekil kimliği                                           |                  |            |
| lang         | string    | ✅       | İçeriğin dili                                                    |                  |            |
| title        | string    | ✅       | Sayfa başlığı                                                    |                  |            |
| template     | string    | ✅       | İçeriğin şablonu                                                 | page             |            |
| layout       | string    | ❌       | Sayfa düzeni                                                     | default          |            |
| status       | string    | ❌       | Yayın Durumu                                                     | draft            |            |
| canonical    | string    | ✅       | İçeriğin yayına alınacağı adres                                  |                  |            |
| date         | string    | ❌       | İçeriğin üretildiği tarih                                        |                  | YYYY-MM-DD |
| updated      | string    | ❌       | İçeriğin güncellendiği tarih                                     |                  | YYYY-MM-DD |
| category     | string    | ❌       | İçeriğin kategorisi                                              |                  |            |
| type         | string    | ❌       | İçeriğin alt türü                                                |                  |            |
| readingTime  | int       | ❌       | İçeriğin okuma süresi (dakika)                                   |                  |            |
| tags         | string[]  | ❌       | İçeriğin etiketleri                                              |                  |            |
| pair         | string    | ❌       | İçeriğin farklı dildeki alternatif sayfası                       |                  |            |
| alternate    | string    | ❌       | İçeriğin farklı dildeki alternatif çıktı yolu                    |                  |            |
| slug         | string    | ❌       | İçeriğin sayfa çıktı yolu                                        |                  |            |
| description  | string    | ❌       | İçeriğin açıklaması                                              |                  |            |
| keywords     | string[]  | ❌       | İçeriğin anahtar kelimeleri                                      |                  |            |
| featured     | boolean   | ❌       | İçeriğin RSS ve Anasayfa listesine girip girmeyeceğini belirler. | false            |            |
| cover        | string    | ❌       | İçeriğin ön çıkan görselinin yolu                                |                  |            |
| coverAlt     | string    | ❌       | İçeriğin öne çıkan görselinin alternatif metni.                  |                  |            |
| coverCaption | string    | ❌       | İçeriğin öne çıkan resminin alt metni.                           |                  |            |
| series       | string    | ❌       | Yazı dizisi için slug                                            |                  |            |
| seriesTitle  | string    | ❌       | Dinamik yazı dizisi sayfasının başlığı                           |                  |            |
| related      | string[]  | ❌       | Yazı dizisi içindeki içeriklerin id değerleri                    |                  |            |
| menu         | string    | ❌       | İçeriğin menü listesinde görünecek adı                           |                  |            |
| show         | boolean   | ❌       | İçeriğin menü listesinde görünüp görünmeyeceği                   | false            |            |
| order        | int       | ❌       | İçeriğin menü listesindeki sıralaması                            | 0                |            |
| listKey      | string    | ❌       | Üretilen sayfanın hangi dinamik koleksiyon içine ekleneceği      |                  |            |
