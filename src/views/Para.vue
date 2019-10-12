<template>
  <div>
    <parallax/>
    <products/>
<!--    <collection class="mb-12"/>-->
    <testimonial class="mb-12"/>
    <nav-footer/>
  </div>
</template>

<script>
// import Parallax from '@/components/parallax'
// import Collection from '@/components/Collection'
// import Testimonial from '@/components/Testimonial'
// import NavFooter from '@/components/NavFooter'

export default {
  name: 'Para',
  components: {
    Products: () => import('@/views/Products'),
    Parallax: () => import('@/components/parallax'),
    Collection: () => import('@/components/Collection'),
    Testimonial: () => import('@/components/Testimonial'),
    NavFooter: () => import('@/components/NavFooter')
  }
}
</script>

<style scoped>

</style>
