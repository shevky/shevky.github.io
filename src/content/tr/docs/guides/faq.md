---
id: 6xgkkpip
lang: tr
title: SSS
slug: docs/guides/faq
category: docs
type: documentation
schemaType: page
description: Shevky hakkında sık sorulan sorular.
tags:
- guides
- faq
order: 34
pair: pair-docs-guides-faq
canonical: ~/tr/docs/guides/faq/
alternate: ~/docs/guides/faq/
template: page
layout: default
status: published
---

# SSS

## Genel

**S: Shevky nedir?**
C: Shevky, YAML front matter içeren Markdown dosyalarını Mustache şablonlarıyla HTML sayfalarına dönüştüren minimal bir statik site üreticisidir. Çok dilli siteyi, eklentileri ve standart statik çıktıyı destekler.

**S: Hangi Node.js sürümü gereklidir?**
C: `@shevky/core` motor gereksinimlerinde belirtildiği gibi Node.js 18 veya üzeri.

**S: TypeScript gerekli mi?**
C: Hayır. Kod tabanı, elle yazılmış `.d.ts` türü bildirimlerle JavaScript'te yazılmıştır. TypeScript olmadan içerik ve konfigürasyon yazabilirsiniz.

## İçerik

**S: Hangi front matter alanları gereklidir?**
C: İçerik dosyalarının düzgün işlenmesi için en az şu alanlar gerekir: `id`, `lang`, `slug`, `title`, `template` ve `status`. Sayfanın derleme çıktısında görünmesi için `status` değeri `"published"` olmalıdır.

**S: Birden fazla dil kullanabilir miyim?**
C: Evet. `site.json` içindeki `content.languages` bölümünü desteklenen diller, varsayılan dil ve canonical yollarla yapılandırın. Her dil için uygun `lang` front matter alanına sahip içerik dosyaları oluşturun. Shevky dil bazlı sayfalar, menüler, RSS yayınları ve site haritaları üretir.

**S: Shevky hangi şablon motorunu kullanıyor?**
C: Mustache (`mustache` npm paketi). Şablonlar logic-less yaklaşımıyla çalışır; veriler view payload olarak geçirilir.

## Eklentiler

**S: Bir eklentiyi nasıl yüklerim?**
C: `npm install @shevky/plugin-name` ve paket adını `site.json` içindeki `plugins` dizisine ekleyin.

**S: Yerel eklentileri npm'de yayınlamadan yazabilir miyim?**
C: Evet. `plugins` dizisinde göreli bir dosya yolu kullanın: `"./plugins/my-plugin.js"`.

**S: Bir eklenti başarısız olursa ne olur?**
C: Eklenti hataları yakalanır ve günlüğe kaydedilir. Derleme, başarısız eklentinin çıktısı olmadan devam eder. Uyarılar için derleme günlüklerini kontrol edin.

**S: Hangi eklentiler mevcut?**
C: Yedi adet birinci taraf eklenti: robots-txt, tailwindcss, esbuild, rss, site haritası, content-bridge, open-graph. [Eklenti Kataloğu](../extend/plugins/)'a bakın.

## Derleme ve Dağıtım

**S: Çıkış nerede?**
C: `dist/` dizininde. Her derlemede temizlenir ve yeniden oluşturulur.

**S: Herhangi bir statik barındırma platformuna dağıtım yapabilir miyim?**
C: Evet. Shevky standart HTML, CSS ve JS dosyaları üretir. GitHub Pages, Netlify, Vercel, S3 gibi statik barındırma platformlarının tamamı uygundur.

**S: Küçültmeyi nasıl etkinleştiririm?**
C: `site.json`'de `build.minify: true`'ı ayarlayın. Bu, HTML küçültmeyi, CSS küçültmeyi (Tailwind eklentisi) ve kaynak haritalarıyla (esbuild eklentisi) JS küçültmeyi mümkün kılar.

## İlgili

- [Sorun giderme](/tr/docs/guides/troubleshooting/)
- [Başlarken](/tr/docs/getting-started/)
