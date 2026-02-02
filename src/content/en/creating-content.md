---
id: 93x7lc7oeg-en
lang: en
title: S.H.E.V.K.Y. Documentation
slug: docs/creating-content
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
canonical: ~/en/docs/creating-content
alternate: ~/docs/icerik-olusturma
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
# Creating Content

Creating new content in **S.H.E.V.K.Y.** is as easy as writing a note: save the content as a `.md` file and then set the front matter fields.

```markdown
# Hello World

This is a simple piece of content created for **S.H.E.V.K.Y.**. It will be delivered as HTML after the build.

To learn more, visit the **S.H.E.V.K.Y.** documentation at [S.H.E.V.K.Y.](https://shevky.github.io/).

_Fatih Tatoğlu_
```

Adding front matter to the note above turns it into valid **S.H.E.V.K.Y.** content.

```markdown
---
id: abc
lang: en
title: Hello World
canonical: ~/hello-world
template: page
layout: default
status: published
---

# Hello World
...
```

For a `markdown` file to be processed by **S.H.E.V.K.Y.**, the minimum required fields are:

- `id`: The unique identifier for the content.
- `lang`: The language of the content.
- `title`: The title used for the HTML `<title>` element.
- `canonical`: The URL where the content will be published. The `~` symbol refers to the site root.
- `template`: The template used to render the content. It can also define the content type. Defaults to `page`.
- `layout`: The page layout template. Defaults to `default`.
- `status`: Whether the content is published. Defaults to `draft`. Use `published` to publish.

## Post vs Page

**S.H.E.V.K.Y.** is a static site generator. The content type is determined by the `template` field. There are two default types: `page` and `post`.

Because there are two primary content types, this distinction is implemented through the `template` field, which is a core part of the processing pipeline. In short:

- **Page**: Timeless, routing-focused content.
- **Post**: Dated, feed and collection-focused content.

### Page

When a piece of content is marked as `template: page`:

- It is rendered with the `templates/page.mustache` template.
- It is removed from RSS.
- It can be shown in the menu (requires `menu` and `show` fields).
- It is marked as `WebPage` in the SEO LD JSON output.

### Post

When a piece of content is marked as `template: page`:

- It is rendered with the `template/post.mustache` template.
- It is added to RSS.
- It is not added to the menu.
- It can appear on the main feed by adding the `featured` field.
- It is marked as `Article` in the SEO LD JSON output.
- It can be included in dynamic collections like `category`, `tag`, and `series`.
