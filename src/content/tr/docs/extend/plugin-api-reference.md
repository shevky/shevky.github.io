---
id: yp3rlsos
lang: tr
title: Eklenti API Referansı
slug: docs/extend/plugin-api-reference
category: docs
type: documentation
schemaType: page
description: Eklenti şekli, kancalar ve bağlam alanları için sözleşme düzeyinde referans.
tags:
- extend
- api
- reference
order: 53
pair: pair-docs-extend-plugin-api-reference
canonical: ~/tr/docs/extend/plugin-api-reference/
alternate: ~/docs/extend/plugin-api-reference/
template: page
layout: default
status: published
---

# Eklenti API Referansı

Tüm sözleşme türleri `base/src/plugin.d.ts`'da tanımlanmıştır.

## Eklenti Tanımı

```ts
type PluginDefinition = {
  name: string;
  version: string;
  hooks: PluginHooks;
  load?: (ctx: PluginLoadContext) => void;
};
```

## Kanca İsimleri

`base/src/plugin.js`'da dondurulmuş sabitler olarak tanımlanır:

| Sabit | Değer |
|----------|-------|
| `plugin.hooks.DIST_CLEAN` | `"dist:clean"` |
| `plugin.hooks.ASSETS_COPY` | `"assets:copy"` |
| `plugin.hooks.CONTENT_LOAD` | `"content:load"` |
| `plugin.hooks.CONTENT_READY` | `"content:ready"` |
| `plugin.hooks.PAGE_META` | `"page:meta"` |

## Temel Bağlam (`createBaseContext()`)

Her kanca işleyicisine sağlanır:

| Alan | Tür | Açıklama |
|-------|------|-------------|
| `config` | `ConfigApi` | `get(key)` erişimcisiyle site yapılandırması |
| `log` | `LogApi` | Günlük kaydı: `info`, `warn`, `err`, `debug`, `step` |
| `file.read` | `(path) => Promise<string>` | UTF-8 dosyasını okuyun |
| `file.write` | `(path, content) => Promise<void>` | UTF-8 dosyasını yaz |
| `file.exists` | `(path) => Promise<boolean>` | Dosyanın varlığını kontrol edin |
| `directory.read` | `(path) => Promise<string[]>` | Dizin içeriğini listele |
| `directory.exists` | `(path) => Promise<boolean>` | Dizin varlığını kontrol edin |
| `directory.create` | `(path) => Promise<void>` | Dizini yinelemeli olarak oluştur |
| `path.combine` | `(...paths) => string` | Yol bölümlerini birleştir |
| `path.resolve` | `(...paths) => string` | Resolve absolute path |
| `path.name` | `(path) => string` | Dizin adını al |

## Genişletilmiş Bağlam (PluginEngine'den)

| Alan | Tür | Mevcut |
|-------|------|-------------|
| `paths` | `PluginPaths` | Tüm kancalar |
| `i18n` | `I18nApi` | Tüm kancalar |
| `contentFiles` | `ContentFile[]` | `content:load`, `content:ready` |
| `addContent` | `(input) => void` | `content:load` |
| `pages` | `CollectionsByLang` | `content:ready` |
| `footerPolicies` | `Record<string, FooterPolicy[]>` | `content:ready` |
| `contentIndex` | `Record<...>` | `content:ready` |
| `frontMatter` | `Record<string, any>` | `page:meta` |
| `derivedFrontMatter` | `Record<string, any>` | `page:meta` |
| `lang` | `string` | `page:meta` |
| `slug` | `string` | `page:meta` |
| `pageMeta` | `Record<string, any>` | `page:meta` |
| `setPageMeta` | `(meta) => void` | `page:meta` |

## Eklenti Yolları

| Alan | Örnek |
|-------|---------|
| `root` | `./` |
| `src` | `./src` |
| `dist` | `./dist` |
| `tmp` | `./tmp` |
| `content` | `./src/content` |
| `layouts` | `./src/layouts` |
| `components` | `./src/components` |
| `templates` | `./src/templates` |
| `assets` | `./src/assets` |
| `siteConfig` | `./src/site.json` |
| `i18nConfig` | `./src/i18n.json` |

## Şema Türleri (`plugin.schema`)

`post`, `job-post`, `job-listing`, `not-found`, `page`, `home`, `contact`, `about`, `press`, `help`, `faq`, `collection`, `policy`

## Koleksiyon Türleri (`plugin.collection`)

`tag`, `category`, `series`

## Minimal Eklenti İskeleti

```js
import { plugin } from "@shevky/base";

const hooks = {
  [plugin.hooks.ASSETS_COPY]: async function (ctx) {
    ctx.log.info("My plugin running!");
    // plugin work here
  },
};

export default {
  name: "my-plugin",
  version: "0.0.1",
  hooks,
};
```

## İlgili

- [İlk Eklentiniz](/tr/docs/extend/your-first-plugin/)
- [Eklenti Yemek Kitabı](/tr/docs/extend/plugin-cookbook/)
