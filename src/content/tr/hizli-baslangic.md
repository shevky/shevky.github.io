---
id: cr073eir7r
lang: tr
title: S.H.E.V.K.Y. Teknik Dokümantasyon
slug: docs/hizli-baslangic
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
canonical: ~/docs/hizli-baslangic
alternate: ~/en/docs/quick-start
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
# Hızlı Başlangıç

**S.H.E.V.K.Y.** kurulumu ve kullanılması oldukça basit bir araçtır. Sadece aşağıdaki adımları takip ederek demo blog kurulumunu yapabilir ve kendi projeniz için proje yapısının oluşturulmasını sağlayabilirsiniz.

```bash
npm init -y
npm install --save-dev shevky
```

Yukarıdaki komut ile gereken kurulumu yapmış oluyorsunuz. Örnek proje için;

```bash
npx shevy --init
```

komutunu çalıştırmak yeterlidir.

```bash
npx shevky --dev
```

komut projeyi hazırlar ve `http://localhost:3000` adresi üzerinden lokalinizde kullanmanızı sağlar. Eğer kodlarda güncelleme yaparsanız;

```bash
npx shevky --build
```

komutunu çalıştırmanız yeterlidir.

Projeyi `--init` ile hazırladıysanız `package.json` içerisine kullanacağınız komutlar otomatik olarak eklenecektir. Diğer bir deyişle,

```bash
npm run dev
npm run build
```

komutları kullanıma hazırdır.
