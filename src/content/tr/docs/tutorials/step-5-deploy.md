---
id: jw28xfeu
lang: tr
title: '5. Adım: Dağıtın'
slug: docs/tutorials/step-5-deploy
category: docs
type: documentation
schemaType: page
description: Oluşturulan dağıtım klasörünü statik bir barındırma ortamına dağıtın.
tags:
- tutorials
- deploy
order: 25
pair: pair-docs-tutorials-step-5-deploy
canonical: ~/tr/docs/tutorials/step-5-deploy/
alternate: ~/docs/tutorials/step-5-deploy/
template: page
layout: default
status: published
---

# Adım 5: Dağıtım

## Önkoşullar

- Tamamlandı [4. Adım](./step-4-build-for-production/)
- Üretim ayarlarıyla başarılı bir `dist/` yapısı

## Komutlar

Üretim derlemesini alın:

```bash
npm run build
```

İsteğe bağlı: bir dağıtım arşivi oluşturun:

```bash
tar -czf site-dist.tar.gz dist
```

## Beklenen Çıktı

- `dist/` altında dağıtıma hazır statik dosyalar.
- Tüm standart URL'ler üretim alanınıza işaret eder.

## Az önce ne oldu

Shevky tamamen statik bir derleme dizini üretti. Dağıtım seçimi platforma bağlıdır, ancak Shevky platformdan bağımsızdır; statik barındırma sunabilen tüm ortamlarda çalışacak standart HTML, CSS ve JS dosyaları üretir.

## Yaygın Hatalar

| Hata | Düzelt |
|-------|-----|
| Platform iç içe rotalarda 404 dönüyor | Statik klasör yapısını `index.html` fallback ile sunacak şekilde yönlendirme ayarı yapın |
| Dağıtımdan sonra eksik varlıklar | `dist/` dizininin tamamının yüklendiğini doğrulayın |
| Üretimde yanlış standart URL'ler | `identity.url`'yi `site.json`'de güncelleyin ve yeniden oluşturun |

## İlgili

- [Adım 6: İlk Eklentinizi Ekleyin](/tr/docs/tutorials/step-6-add-your-first-plugin/)
- [Dağıtım Seçeneklerine Genel Bakış](/tr/docs/deploy/deploy-options-overview/)
