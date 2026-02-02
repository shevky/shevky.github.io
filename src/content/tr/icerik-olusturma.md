---
id: 93x7lc7oeg
lang: tr
title: S.H.E.V.K.Y. Teknik Dokümantasyon
slug: docs/icerik-olusturma
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
canonical: ~/docs/icerik-olusturma
alternate: ~/en/docs/creating-content
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
# İçerik Oluşturma

**S.H.E.V.K.Y.** içinde yeni bir içerik oluşturmak bir not yazmak kadar kolay: Oluşturmak istenen içerik `.md` uzantılı olarak kaydedilir ve sonrasında ön bölüm başlıkları ile ayarlamaları yapılır.

```markdown
# Merhaba Dünya

Bu **S.H.E.V.K.Y.** için oluşturulmuş basit bir içeriktir. Üretim sonunda HTML olarak size teslim edilecektir.

Detayları öğrenmek için, [S.H.E.V.K.Y.](https://shevky.github.io/) dokümantasyonunu ziyaret edebilirsiniz.

_Fatih Tatoğlu_
```

Yukarıdaki nota eklenecek başlık ile **S.H.E.V.K.Y.**'ye uygun bir içeriğe dönüşüyor.

```markdown
---
id: abc
lang: tr
title: Merhaba Dünya
canonical: ~/merhaba-dunya
template: page
layout: default
status: published
---

# Merhaba Dünya
...
```

Bir `markdown` dosyasının **S.H.E.V.K.Y.** tarafından işlenebilmesi için
asgari olarak aşağıdaki alanların bulunması gerekir.

- `id`: Bu alan içerik için tanımlanan tekil değerdir.
- `lang`: İçeriğin hangi dilde olduğunu belirler.
- `title`: İçerik için oluşturulacak olan HTML dosyasının `<title>` elementi için kullanılacak başlıktır.
- `canonical`: İçeriğin hangi adres üzerinden yayına alınacağını belirler. `~` işareti sitenin kök yolunu ifade etmektedir.
- `template`: İçeriğin hangi şablon ile işleneceğini belirtir. Aynı zamanda içeriğin türünü belirlemek için de kullanılabilir. Eğer belirtilmezse varsayılan değer olarak `page` kullanılır.
- `layout`: İçeriğin gösterileceği sayfa şablonunu belirtir. Eğer belirlenmezse varsayılan değer olarak `default` kullanılır.
- `status`: İçeriğin yayına alınıp alınmayacağını belirler. Eğer değer belirtilmezse varsayılan olarak `draft` kullanılır. İçeriği yayına almak için `published` olarak belirlenmelidir.

## Post ve Page Farkı

**S.H.E.V.K.Y.** sadece statik bir site üreticisidir. Bir yazının türü; `template` alanının değerine göre belirlenmektedir. Bu alan için iki tane ön kabul tanım vardır. `page` ve `post`.

İçeriklerde iki ana tür olmasından kaynaklı olarak bu ayrım, temel işleme alanlarından biri olan `template` alanı kullanılarak yapılmıştır. Bu ayrım içerikler özelinde farklı özellikler eklemektedir. Özet olarak;

- **Page**: Zaman bağımsız, yönlendirme odaklıdır.
- **Post**: Tarihli, akış ve koleksiyon odaklıdır.

### Page

Bir içerik; `template: page` olarak işaretlendiğinde;

- `templates/page.mustache` şablonu ile işlenir.
- RSS listesinden çıkartılır.
- Menü listesinde gösterilebilir hale gelir. Gösterilmesi için, `menu` ve `show` alanlarının da eklenmesi gerekmektedir.
- SEO için üretilen LD JSON yapısında `WebPage` olarak belirlenir.

### Post

Bir içerik; `template: page` olarak işaretlendiğinde;

- `template/post.mustache` şablonu ile işlenir.
- RSS listesine eklenir.
- Menü listesine eklenmez.
- Ana akışta görünebilmesi için `home` listesine eklenebilir  hale gelir. Eklenmesi için `featured` alanının eklenmesi gerekmektedir.
- SEO için üretilen LD JSON yapısında `Article` olarak belirlenir.
- Kullanılan `category`, `tag` ve `series` gibi dinamik koleksiyonların listesine eklenebilir.
