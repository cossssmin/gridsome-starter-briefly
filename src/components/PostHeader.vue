<template>
  <header>
    <h1 class="text-3xl sm:text-5xl leading-tight font-bold mb-4 text-black">{{ post.title }}</h1>
    <time :datetime="post.datetime" class="text-gray-500">{{ formattedPublishDate }}</time>
  </header>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('YYYY-MM-DD');
    },
  },
}
</script>
