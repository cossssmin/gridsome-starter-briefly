<template>
  <div class="filters flex flex-wrap text-gray-500 mb-8 sm:mb-16 justify-between max-w-sm">
    <span class="text-black hidden sm:flex">Show:</span>
    <button
      v-for="(label, type, index) in {'all': 'All posts', 'longer': 'Longer ones', 'shorter': 'Shorter ones'}"
      :key="index"
      @click="filterPosts(type)"
      :class="{'filter-active': active == type}"
      class="capitalize">
        {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PostsFilter',
  data () {
    return {
      active: 'all'
    }
  },
  methods: {
    filterPosts (type) {
      this.active = type
      this.$emit('filter', type)
    }
  },
}
</script>
