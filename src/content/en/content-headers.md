---
id: kz4cbc6ip6-en
lang: en
title: S.H.E.V.K.Y. Documentation
slug: docs/content-headers
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
canonical: ~/en/docs/content-headers
alternate: ~/docs/icerik-basliklari
description: Technical documentation for the S.H.E.V.K.Y. static site generator. Architecture, content format, and usage details (in progress).
keywords:
  - S.H.E.V.K.Y.
  - static site generator
  - technical documentation
featured: false
cover: /assets/images/projects.webp
coverAlt: Terminal themed cover image
coverCaption: S.H.E.V.K.Y. documentation (in progress)
template: page
layout: default
status: draft
---
# Content Headers

The descriptive section used to manage a content item's lifecycle and its relationship with other content is called the front matter. **S.H.E.V.K.Y.** uses this structure to customize content during the build process.

Unlike the `site.json` and `i18n.json` configuration files provided by **S.H.E.V.K.Y.**, the front matter allows you to define fields specific to each piece of content, giving you more flexibility.

The YAML headers placed between the `---` lines at the top of every `.md` file are used during the build.

| Field        | Data Type | Required | Description                                                     | Default Value | Format     |
| ------------ | --------- | -------- | --------------------------------------------------------------- | ------------- | ---------- |
| id           | string    | ✅        | Unique identifier for the content                              |               |            |
| lang         | string    | ✅        | Language of the content                                        |               |            |
| title        | string    | ✅        | Page title                                                     |               |            |
| template     | string    | ✅        | Content template                                               | page          |            |
| layout       | string    | ❌        | Page layout                                                    | default       |            |
| status       | string    | ❌        | Publish status                                                 | draft         |            |
| canonical    | string    | ✅        | URL where the content will be published                        |               |            |
| date         | string    | ❌        | Content creation date                                          |               | YYYY-MM-DD |
| updated      | string    | ❌        | Last updated date                                              |               | YYYY-MM-DD |
| category     | string    | ❌        | Content category                                               |               |            |
| type         | string    | ❌        | Content subtype                                                |               |            |
| readingTime  | int       | ❌        | Estimated reading time (minutes)                               |               |            |
| tags         | string[]  | ❌        | Content tags                                                   |               |            |
| pair         | string    | ❌        | Alternate content ID in another language                       |               |            |
| alternate    | string    | ❌        | Alternate output path in another language                      |               |            |
| slug         | string    | ❌        | Output path for the page                                       |               |            |
| description  | string    | ❌        | Content description                                            |               |            |
| keywords     | string[]  | ❌        | Content keywords                                               |               |            |
| featured     | boolean   | ❌        | Whether the content appears in RSS and home listing            | false         |            |
| cover        | string    | ❌        | Path to the featured image                                     |               |            |
| coverAlt     | string    | ❌        | Alternative text for the featured image                        |               |            |
| coverCaption | string    | ❌        | Caption for the featured image                                 |               |            |
| series       | string    | ❌        | Slug for a series                                              |               |            |
| seriesTitle  | string    | ❌        | Title for the dynamic series page                              |               |            |
| related      | string[]  | ❌        | IDs of related content in a series                             |               |            |
| menu         | string    | ❌        | Label for menu display                                         |               |            |
| show         | boolean   | ❌        | Whether the content appears in the menu                        | false         |            |
| order        | int       | ❌        | Menu order                                                     | 0             |            |
| listKey      | string    | ❌        | Which dynamic collection the page belongs to                   |               |            |
