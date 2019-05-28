<template>
  <ul class="mb-8 sm:mb-16">
    <li class="mb-8 sm:mb-16 -mx-5" v-for="post in posts" :key="post.node.id">
      <g-link :to="`${post.node.path}/`" class="article-list-link">
        <h2>{{ post.node.title }}</h2>
        <p class="text-gray-400 leading-snug">{{ post.node.description }}</p>
        <time :datetime="post.node.datetime" class="text-gray-400 text-sm">{{ formatPublishDate(post.node.datetime) }}</time>
      </g-link>
    </li>
  </ul>
</template>

<script>
import moment from 'moment'

export default {
  name: 'PostList',
  props: ['posts'],
  methods: {
    formatPublishDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
  },
}
</script>
