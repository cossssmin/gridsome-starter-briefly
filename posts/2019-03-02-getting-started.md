---
title: "Getting started"
slug: getting-started-with-gridsome-and-briefly
description: "Getting started with the Briefly minimal blog starter theme for the Gridsome static site generator"
date: 2019-03-01 14:43:24
---

**Briefly** is a minimal blog starter theme for Gridsome, based on the design of the [Dylan Smith's](https://dylanatsmith.com/) personal website, and styled with [Tailwind CSS](https://tailwindcss.com).

[Gridsome](https://gridsome.org) is a Vue.js-powered, modern site generator for building the fastest possible websites for any Headless CMS, APIs or Markdown-files. Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.


## Installation

After installing Gridsome, run:

```
gridsome create my-website https://github.com/cossssmin/gridsome-starter-briefly.git
```

Then, `cd my-website` and `gridsome develop` to start a local development server.

Alternatively, you can clone or download the [repo on GitHub](https://github.com/cossssmin/gridsome-starter-briefly).

## Features

- Sitemap
- RSS Feed
- Google Analytics
- Custom [404 Page](/404/)
- Code syntax highlighting
- Medium-like image lightbox
- Open Graph meta tags for posts
- Alternative index page: [paginated posts list](/paginated/)
- Post descriptions: automatic or user-defined
- Easily show post dates in your locale (moment.js)
- _Index page post filtering_: show longer or shorter posts
- Posts show a warning if they're older than 1 year (configurable)

## Configuration

You'll need to change some Briefly defaults before deploying your own site.

#### Sitemap

Briefly uses Gridsome's official sitemap plugin. Simply change the default `siteUrl` in `gridsome.config.js`, and you're all set:

```js
siteUrl: 'https://gridsome-starter-briefly.netlify.com',
```

When you build the site, a `sitemap.xml` will be automatically generated at the root of your site.
Read more in the [plugin's documentation](https://gridsome.org/plugins/@gridsome/plugin-sitemap).

#### RSS Feed

Update the feed title and all the default URLs, in `gridsome.config.js`:

```js
{
  use: 'gridsome-plugin-rss',
  options: {
    contentTypeName: 'Post',
    feedOptions: {
      title: 'Briefly, a Gridsome minimal blog starter', // <- update
      feed_url: 'https://gridsome-starter-briefly.netlify.com/feed.xml',  // <- update, leave the file name
      site_url: 'https://gridsome-starter-briefly.netlify.com'  // <- update
    },
    feedItemOptions: node => ({
      title: node.title,
      description: node.description,
      url: 'https://gridsome-starter-briefly.netlify.com/' + node.slug,  // <- update
      author: '@cossssmin',
      date: node.date
    }),
    output: {
      name: 'feed.xml' // <- if you change this, also change it in the `feed_url` above
    }
  }
},
```

#### Google Analytics

If you want to use Google Analytics, make sure to change the default tracking code in `gridsome.config.js`:

```js
{
use: '@gridsome/plugin-google-analytics',
  options: {
    id: 'UA-135446199-2' // <- change this
  }
}
```

To disable GA, simply comment out or delete that entire code block.

## Customisation

#### Post filtering

Post filtering is done in the `filterPosts()` method from `pages/Index.vue`.

Posts are considered to be "longer" if they're over 1000 characters. Otherwise, they're considered "shorter".

You can customise the text and styling by editing the `components/PostsFilter.vue` file.

#### Old content alert

Posts that are over one year old will show a warning like this one:

<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-900 leading-normal p-4 md:mx-6 mb-6 text-base" role="alert">
    This post is over a year old, some of this information may be out of date.
</div>

This is a flexible alert component, defined in `/src/components/Alert.vue`. 

Usage:

```vue
<!-- /src/templates/Post.vue -->
<template>
    ...
    <alert v-if="postIsOlderThanOneYear" class="bg-orange-100 border-orange-500 text-orange-900">This post is over a year old, some of this information may be out of date.</alert>
    ...
</template>
```
The `postIsOlderThanOneYear` computed property uses `moment.js`, so you can customise it to any date you need.
Style it like you would normally style any element, by adding a `class=""` attribute and using Tailwind utility classes.

#### Post dates in your language

Open `/src/components/PostItem.vue` and `import` your [locale](https://github.com/moment/moment/tree/develop/locale "List of all moment.js locales") after the `moment` import:

```vue
<script>
import moment from 'moment'
import 'moment/locale/ro' // <- add this

export default {
  // ...
}
</script>
```

For the single post view, do the same in `/src/templates/Post.vue`.

#### Advanced customisation

The [Gridsome documentation](https://gridsome.org/docs) is a great place to start. You will need to be familiar with Vue.js, mostly. Tailwind CSS is very easy to pick up. For advanced customisation, you'll also need a bit of experience with GraphQL.
