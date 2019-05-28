<template>
  <Layout>
    <main class="flex items-center justify-center text-center h-screen">
      <section class="markdown w-full max-w-3xl">
        <h1 class="text-2xl font-bold">Page Not Found</h1>
        <p class="mb-8">Unfortunately, the page could not be found.</p>
        <g-link to="/">&larr; Go back home</g-link>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: `Page Not Found (404)`,
    }
  },
}
</script>

