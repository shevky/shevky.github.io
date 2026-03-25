---
id: 7yf09it0
lang: tr
title: Eklenti Yemek Kitabı
slug: docs/extend/plugin-cookbook
category: docs
type: documentation
schemaType: page
description: Shevky derlemelerindeki ortak görevler için pratik eklenti desenleri.
tags:
- extend
- cookbook
order: 56
pair: pair-docs-extend-plugin-cookbook
canonical: ~/tr/docs/extend/plugin-cookbook/
alternate: ~/docs/extend/plugin-cookbook/
template: page
layout: default
status: published
---

# Eklenti Yemek Kitabı

## Desen 1: dist/ konumunda bir Dosya Oluştur

**Kanca:** `dist:clean` veya `content:ready`

Dosya içerikten bağımsız olduğunda `dist:clean` kullanın. Yüklenen içeriğe ve koleksiyonlara erişmeniz gerektiğinde `content:ready` kullanın.

**Örnek:** `@shevky/plugin-robots-txt`, `dist:clean` sırasında `robots.txt` yazar.

## Desen 2: Harici Bir Aracı Çalıştırın

**Kanca:** `assets:copy`

`@shevky/base`'den `exec.execute()` veya `exec.executeNpx()` kullanarak CSS/JS derlemesi için CLI araçlarını çalıştırın.

**Örnekler:** `@shevky/plugin-tailwindcss` (Tailwind CLI'yi çalıştırır), `@shevky/plugin-esbuild` (esbuild'i npx aracılığıyla çalıştırır).

## Desen 3: Uzak İçeriği Enjekte Etme

**Kanca:** `content:load`

Bir API'den veri alın ve içerik ardışık düzenine eklemek için `ctx.addContent({ header, body, content, sourcePath, isValid })` öğesini çağırın.

**Örnek:** `@shevky/plugin-content-bridge`, sayfalandırılmış API verilerini bir eşleme DSL'si ile getirir.

## Desen 4: Yayınlar veya Site Haritaları Oluşturun

**Kanca:** `content:ready`

XML çıktı dosyalarını oluşturmak için `ctx.contentFiles` ve `ctx.pages` öğelerini yineleyin.

**Örnekler:** `@shevky/plugin-rss` (RSS 2.0 yayınları), `@shevky/plugin-sitemap` (sitemap.xml).

## Desen 5: Sayfa Meta Verilerini Zenginleştirin

**Kanca:** `page:meta`

`ctx.frontMatter` okuyun, ek meta verileri hesaplayın ve bunu işleme hattına eklemek için `ctx.setPageMeta(meta)` öğesini çağırın.

**Örnek:** `@shevky/plugin-open-graph` OG, Twitter Kartı ve JSON-LD verilerini oluşturur.

## En İyi Uygulamalar

- **Yapılandırmayı erkenden doğrulayın.** Çalışmaya başlamadan önce gerekli ayarları kontrol edin. İşlem yapılabilir uyarıları `ctx.log.warn()` ile günlüğe kaydedin.
- **Yan etkileri açık tutun.** Eklentinizin hangi dosyaları oluşturduğunu veya hangi verileri değiştirdiğini belgeleyin.
- **Hataları dikkatli bir şekilde ele alın.** Atılan bir hata motor tarafından yakalanır ve günlüğe kaydedilir, ancak eklentinizin çıktısı eksik olacaktır.
- **`ctx` yardımcılarını tercih edin.** Mümkün olduğunda doğrudan `fs` içe aktarmaları yerine `ctx.file`, `ctx.path`, `ctx.log` kullanın.
- **Belgelenmemiş iç şekillere bağlı kalmaktan kaçının.** Belgelenmiş içerik alanlarına sadık kalın.

## Anti-Desenler

- **Paylaşılan nesneleri sessizce değiştirme.** `ctx.contentFiles` girişlerine yazarsanız diğer eklentiler değişikliklerinizi görür. Bu bağlantıyı belgeleyin.
- **Örtülü eklenti sıralaması.** Eklentiniz başka bir eklentinin çıktısına bağlıysa, gerekli sıralamayı `plugins[]` ile belgeleyin.
- **`page:meta`'da büyük eşzamanlı çalışma.** Bu kanca sayfa başına çalışır; hızlı tut.

## İlgili

- [Eklenti API Referansı](/tr/docs/extend/plugin-api-reference/)
- [Eklenti Kataloğu](/tr/docs/extend/plugins/)
