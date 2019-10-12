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

export default {
  name: 'Para',
  components: {
    Products: () => import('@/views/Products'),
    Parallax: () => import('@/components/parallax'),
    Testimonial: () => import('@/components/Testimonial'),
    NavFooter: () => import('@/components/NavFooter')
  }
}
</script>

<style scoped>

</style>
