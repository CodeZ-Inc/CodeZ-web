import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from '../link-resolver'

// const accessToken = 'MC5YV2JvS0JBQUFDTUF4RDk2.ZO-_ve-_vQrvv70677-9X--_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vW_vv70YEe-_vRHvv73vv73vv73vv73vv706DxDvv71T'
// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})
