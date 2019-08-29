import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './link-resolver'

const endpoint = 'https://codez-web.cdn.prismic.io/api/v2'

Vue.use(PrismicVue, {
  endpoint: endpoint,
  linkResolver
})
