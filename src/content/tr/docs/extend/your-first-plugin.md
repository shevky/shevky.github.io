---
id: zq4jegkc
lang: tr
title: İlk Eklentiniz
slug: docs/extend/your-first-plugin
category: docs
type: documentation
schemaType: page
description: Derleme sırasında bir çıktı dosyası oluşturan minimal bir eklenti oluşturun
  ve bağlayın.
tags:
- extend
- tutorial
- plugin-authoring
order: 54
pair: pair-docs-extend-your-first-plugin
canonical: ~/tr/docs/extend/your-first-plugin/
alternate: ~/docs/extend/your-first-plugin/
template: page
layout: default
status: published
---

# İlk Eklentiniz

Bu öğretici, derleme zaman damgasıyla `dist/build-info.txt` yazan küçük bir eklenti oluşturur.

## Önkoşullar

- Mevcut bir Shevky projesi
- `@shevky/base` mevcut (`@shevky/core` bağımlılığı olarak kurulur)

## 1. Eklenti Dosyasını Oluşturun

```bash
mkdir -p plugins
```

`plugins/build-info-plugin.js` oluştur:

```js
import { plugin } from "@shevky/base";

const hooks = {
  [plugin.hooks.DIST_CLEAN]: async function (ctx) {
    const target = ctx.path.combine(ctx.paths.dist, "build-info.txt");
    const content = `Build timestamp: ${new Date().toISOString()}\n`;
    await ctx.file.write(target, content);
    ctx.log.info("[build-info] Created build-info.txt");
  },
};

export default {
  name: "build-info-plugin",
  version: "0.0.1",
  hooks,
};
```

## 2. Eklentiyi `site.json`'a kaydedin

Eklenti yolunu `plugins` dizisine ekleyin:

```json
"plugins": [
  "./plugins/build-info-plugin.js"
]
```

Eklenti kaydı, proje kökünden gelen göreceli yolları çözer.

## 3. Oluşturun ve Doğrulayın

```bash
npm run build
cat dist/build-info.txt
```

## Beklenen Çıktı

- `dist/build-info.txt` mevcut.
- Dosya şöyle bir satır içeriyor: `Build timestamp: 2026-03-25T21:00:00.000Z`

## Nasıl Çalışır?

1. Derleme betiği eklentinizi `PluginRegistry.load()` aracılığıyla yükledi.
2. `dist:clean` kancası sırasında işleyiciniz eklenti bağlamıyla çağrıldı.
3. Temel bağlamdan `ctx.path.combine()` ve `ctx.file.write()` kullandınız.
4. Dosya `dist/` dizinine yazılmıştır.

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| Eklenti yüklenmedi | `plugins[]` içindeki yol dizesini kontrol edin - proje kökündeki göreli yolu kullanın |
| Modül sözdizimi hataları | Dosyanın geçerli ESM olduğundan emin olun (`require` değil, `import`/`export` kullanın) |
| Eksik çıktı dosyası | Kanca anahtarının geçerli olduğunu doğrulayın (`plugin.hooks.DIST_CLEAN`) |

## Sonraki Adımlar

- `ctx.contentFiles`'e erişmek için farklı bir kanca (örn. `content:ready`) deneyin.
- Tüm içerik alanları için [Eklenti API Referansı](./plugin-api-reference/) değerini okuyun.
- Yaygın modeller için [Eklenti Yemek Kitabı](./plugin-cookbook/)'a bakın.

## İlgili

- [Eklenti API Referansı](/tr/docs/extend/plugin-api-reference/)
- [Eklenti Yaşam Döngüsü](/tr/docs/extend/plugin-lifecycle/)
