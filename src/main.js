import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-sans' }
}
