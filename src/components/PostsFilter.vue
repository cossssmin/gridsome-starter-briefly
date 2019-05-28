<template>
  <div class="filters flex flex-wrap text-gray-500 mb-8 sm:mb-16 justify-between max-w-sm">
    <span class="text-black hidden sm:flex">Show:</span>
    <button @click="filterPosts('all')" :class="{'filter-active': this.active == 'all'}">All posts</button>
    <button @click="filterPosts('longer')" :class="{'filter-active': this.active == 'longer'}">Longer ones</button>
    <button @click="filterPosts('shorter')" :class="{'filter-active': this.active == 'shorter'}">Shorter ones</button>
  </div>
</template>

<script>
export default {
  name: 'PostsFilter',
  props: ['posts'],
  data () {
    return {
      active: 'all'
    }
  },
  methods: {
    filterPosts (type) {
      this.active = type
      if (type == 'longer') {
        return this.$emit('filter', 'longer')
      }
      if (type == 'shorter') {
        return this.$emit('filter', 'shorter')
      }
      this.$emit('filter', 'all')
    }
  },
}
</script>
