<template>
  <ul class="mb-8 sm:mb-16">
    <post-item v-for="post in posts" :key="post.node.id" :post="post" :show="filter" />
  </ul>
</template>

<script>
import moment from 'moment'
import PostItem from '@/components/PostItem'

export default {
  name: 'PostList',
  props: ['posts', 'filter'],
  components: {
    PostItem
  },
}
</script>
