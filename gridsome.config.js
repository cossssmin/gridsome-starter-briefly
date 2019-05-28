class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: 'A minimal blog starter for Gridsome',
  siteDescription: "Briefly is a minimal blog starter for Gridsome, the Vue.js static site generator. It's based on Dylan Smith's personal website design, and it's styled with Tailwind CSS.",
  siteUrl: 'https://gridsome-starter-briefly.netlify.com',
  titleTemplate: `%s | Briefly`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        route: '/:slug',
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-135446199-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Briefly, a Gridsome minimal blog starter',
          feed_url: 'https://gridsome-starter-briefly.netlify.com/feed.xml',
          site_url: 'https://gridsome-starter-briefly.netlify.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://gridsome-starter-briefly.netlify.com/' + node.slug,
          author: '@cossssmin',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'feed.xml'
        }
      }
    },
  ],

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['css', 'vue', 'js']
                }
              ],
              whitelistPatterns: [/shiki/]
            }),
          ])
        }

        return options
      })
  },
}





