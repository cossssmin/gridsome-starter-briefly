<template>
  <Layout class="bg-white">
    <main class="py-12 max-w-2xl mx-auto px-6">
      <index-header />
      <posts-list :posts="$page.posts.edges" />
      <pagination base="/paginated" :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
      <site-footer class="pt-8 pb-4" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import PostsList from '@/components/PostsList'
import Pagination from '@/components/Pagination'
import SiteFooter from '@/components/SiteFooter'
import IndexHeader from '@/components/IndexHeader'

export default {
  components: {
    IndexHeader,
    PostsList,
    Pagination,
    SiteFooter,
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$static.metadata.siteName },
        { property: "og:description", content: this.$static.metadata.siteDescription },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        { name: "twitter:description", content: this.$static.metadata.siteDescription },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
}
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 4) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
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

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>

