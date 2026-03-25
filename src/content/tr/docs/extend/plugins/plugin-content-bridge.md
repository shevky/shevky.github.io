---
id: bcpb96qr
lang: tr
title: İçerik Köprüsü Eklentisi
slug: docs/extend/plugins/plugin-content-bridge
category: docs
type: documentation
schemaType: page
description: Harici API içeriğini getirir ve bunu derleme ardışık düzenine enjekte
  eder.
tags:
- extend
- plugins
- content-bridge
- api
order: 106
pair: pair-docs-extend-plugins-plugin-content-bridge
canonical: ~/tr/docs/extend/plugins/plugin-content-bridge/
alternate: ~/docs/extend/plugins/plugin-content-bridge/
template: page
layout: default
status: published
---

# İçerik Köprüsü Eklentisi

## Amaç

Harici REST API'lerinden içerik getirir, ifade tabanlı alan eşleme DSL'si kullanarak API yanıtlarını Shevky içerik formatına eşler ve sonuçları sanal içerik dosyaları olarak derleme ardışık düzenine enjekte eder.

## Konum

- Paket: `@shevky/plugin-content-bridge`
- Ana: `plugin-content-bridge/main.js`
- Alt modüller: `plugin-content-bridge/lib/` (yükleyici, getirme, eşleme, sayfalandırma, doğrulama, istek, kullanımlar)
- Çalışma zamanı adı: `shevky-content-bridge`

## Yaşam Döngüsü Kancaları

| Kanca | Uygulandı |
|------|:-----------:|
| `content:load` | ✓ |

Bu, içerik enjekte etmek için `ctx.addContent()` sağlayan **`content:load`** kullanan tek eklentidir.

## Nasıl Çalışır?

1. `ctx.config.get("shevky-content-bridge")`'dan yapılandırmayı okur.
2. `config.sources` içindeki her kaynak için:
- Sayfalandırma parametreleriyle HTTP istekleri oluşturur.
- JSON'u `lib/fetch.js` (zaman aşımı, hata işleme) aracılığıyla getirir.
- Yapılandırılabilir bir yolda yanıttan öğeleri çıkarır.
- `lib/mapping.js` kullanarak her öğeyi ön maddeye eşler.
- İçerik gövdesini ve kaynak yolunu eşler.
- Gerekli ön konu alanlarını doğrular (`id`, `lang`, `title`, `slug`, `canonical`, `template`, `layout`, `status`).
- İçerik kayıt defterine eklemek için `ctx.addContent()` öğesini çağırır.
- İsteğe bağlı olarak Markdown dosyalarını diske yazar.
- Tamamlanana veya `maxItems` ulaşılana kadar sayfalandırma durumunu ilerletir.

## DSL'i Eşleme

`lib/mapping.js` (~890 satır) içindeki eşleme sistemi zengin bir ifade dilini destekler:

| İfade | Açıklama |
|-----------|-------------|
| `$_field.path` | Kaynak verilerine nokta yoluyla erişin (örn. `$_data.title`) |
| `"literal"` veya `'literal'` | Dize değişmezi |
| `$slugify(expr)` | Bir değeri yavaşlatmak |
| `$concat(a, b, ...)` | Dize birleştirme |
| `$today()` / `$now()` | Güncel ISO tarihi |
| `$lower(expr)` / `$upper(expr)` | Vaka dönüşümü |
| `$join(arr, sep)` | Dizi birleştirme |
| `$default(expr, fallback)` | Geri dönüş değeri |
| `$if(cond, then, else)` | Koşullu |
| `$iter(path, mapping)` | Öğe başına eşlemeyle dizi yinelemesi |
| `$obj(key1, val1, ...)` | Nesne yapımı |
| `$uuid()` / `$nanoid()` / `$hash(expr)` | kimlik oluşturma |

Ek işlevler: `$merge`, `$unique`, `$date`, `$add`, `$sub`, `$number`, `$boolean`, `$replace`, `$split`, `$first`, `$last`, `$truncate`, `$matches`, `$arr`.

## Sayfalandırma Modları

`lib/pagination.js` modülü üç modu destekler:

| Modu | Açıklama |
|------|-------------|
| `page` (varsayılan) | Sayfa dizini parametresini artırır |
| `offset` | Sayfa boyutuna göre artışlar |
| `cursor` | Yanıttaki imleç değerini takip eder |

Sonlandırma: nextCursorPath -> hasMorePath -> nextPagePath -> totalPath -> kısa sayfa tespiti.

## Yapılandırma

```json
"pluginConfigs": {
  "shevky-content-bridge": {
    "sources": [{
      "name": "Blog API",
      "fetch": {
        "endpointUrl": "https://api.example.com/posts",
        "method": "GET",
        "headers": { "Authorization": "Bearer ..." },
        "pagination": { "mode": "page", "pageParam": "page", "pageSize": 20, "itemsPath": "$_posts" },
        "timeoutMs": 30000
      },
      "mapping": {
        "frontMatter": {
          "id": "$_data.id",
          "title": "$_data.title",
          "lang": "'en'",
          "slug": "$slugify($_data.title)",
          "canonical": "$concat('~/', $slugify($_data.title))",
          "template": "'post'",
          "layout": "'default'",
          "status": "'published'"
        },
        "content": "$_data.body",
        "sourcePath": "$concat('bridge://posts/', $_data.id, '.md')"
      },
      "maxItems": 100
    }]
  }
}
```

## Bağımlılıklar

- `@shevky/base` - `plugin`, `format`
- `nanoid` ^5.1.6 - `$nanoid()` eşleme işlevi için

## Riskler ve Sınırlamalar

- **Ağ bağımlılığı:** API'ler kullanılamıyorsa derlemeler eksik çıktı üretebilir.
- **Karmaşık eşleme DSL:** İfadelerin eşlenmesindeki hatalar şifreli hatalara neden olur; ifadeler için şema doğrulaması yoktur.
- **Gerekli alan katılığı:** Gerekli 8 ön konu alanından herhangi birinin eksik olması durumunda fırlatılır.
- **Önbelleğe alma yok:** Her derleme, tüm içeriği sıfırdan getirir.
- **Hata toleransı:** Kısmi beslemeyi maskeleyebilen geçmiş getirme hatalarına devam eder (kaynak başına en fazla 5 ardışık hata).

## İlgili

- [Eklenti Sistemine Genel Bakış](/tr/docs/extend/plugin-system-overview/)
- [Eklenti API Referansı](/tr/docs/extend/plugin-api-reference/)
