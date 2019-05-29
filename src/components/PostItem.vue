<template>
  <li class="mb-8 sm:mb-16 -mx-5" :class="{hidden: !visible}">
    <g-link :to="`${post.node.path}/`" class="article-list-link">
      <h2>{{ post.node.title }}</h2>
      <p class="text-gray-400 leading-snug">{{ post.node.description }}</p>
      <time :datetime="post.node.datetime" class="text-gray-400 text-sm">{{ formatPublishDate(post.node.datetime) }}</time>
    </g-link>
  </li>
</template>

<script>
import moment from 'moment'

export default {
  name: 'PostItem',
  props: ['post', 'show'],
  methods: {
    formatPublishDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
  },
  computed: {
    contentLength () {
      return this.post.node.content.replace(/<(?:.|\n)*?>/gm, '').length
    },
    visible () {
      if (this.show == 'longer') {
        return this.contentLength > 1000 ? true : false
      }
      if (this.show == 'shorter') {
        return this.contentLength < 1000 ? true : false
      }
      return true
    },
  }
}
</script>
