<template>
  <Layout class="bg-white">
    <main class="py-12 max-w-2xl mx-auto px-6">
      <index-header />
      <posts-filter @filter="filterPosts" />
      <posts-list :posts="$page.posts.edges" :filter="showPosts" />
      <site-footer class="pt-8 pb-4" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import PostsList from '@/components/PostsList'
import SiteFooter from '@/components/SiteFooter'
import PostsFilter from '@/components/PostsFilter'
import IndexHeader from '@/components/IndexHeader'

export default {
  components: {
    IndexHeader,
    PostsList,
    PostsFilter,
    SiteFooter,
  },
  data () {
    return {
      showPosts: 'all'
    }
  },
  metaInfo () {
    return {
      title: this.config.siteName,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.config.siteName },
        { property: "og:description", content: this.config.siteDescription },
        { property: "og:url", content: this.config.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.config.siteName },
        { name: "twitter:description", content: this.config.siteDescription },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  methods: {
    filterPosts (type) {
      this.showPosts = type
    }
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/briefly-card.png`
    }
  },
}
</script>

<page-query>
  query Home {
    posts: allPost {
      edges {
        node {
          id
          title
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          description
          path
        }
      }
    }
  }
</page-query>

