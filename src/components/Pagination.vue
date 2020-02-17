<template>
  <section class="mx-auto py-8 sm:pb-16">
    <nav role="navigation" aria-label="pagination">
      <ul class="flex items-center justify-between">
        <li class="lg:w-1/5">
          <g-link v-if="info.currentPage > 1" :to="previousPage(info.currentPage)" class="text-gray-700 hover:text-briefly-blue py-2 transition-colors duration-300" rel="prev">
            &larr; Previous
          </g-link>
        </li>
        <li class="hidden md:flex w-auto text-center text-gray-600">Page {{ info.currentPage }} of {{ info.totalPages }}</li>
        <li class="lg:w-1/5">
          <g-link v-if="info.currentPage !== info.totalPages" :to="nextPage(info.currentPage,info.totalPages)" class="text-gray-700 hover:text-briefly-blue py-2 transition-colors duration-300" rel="next">
            Next &rarr;
          </g-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  props: ['base', 'info'],
  methods: {
    previousPage(currentPage) {
      return [0, 1].includes(currentPage - 1) ? `${this.basePath}/` : `${this.basePath}/${currentPage - 1}/`;
    },
    nextPage(currentPage, totalPages) {
      return totalPages > currentPage ? `${this.basePath}/${currentPage + 1}/` : `${this.basePath}/${currentPage}/`;
    }
  },
  computed: {
    basePath() {
      return this.base || ''
    }
  }
}
</script>
