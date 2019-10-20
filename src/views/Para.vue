<template>
  <div>
    <parallax/>
    <products class="pb-12"/>
<!--    <collection class="mb-12"/>-->
    <testimonial class="mb-12"/>
  </div>
</template>

<script>

export default {
  name: 'Para',
  components: {
    Products: () => import('@/views/Products'),
    Parallax: () => import('@/components/parallax'),
    Testimonial: () => import('@/components/Testimonial')
  }
}
</script>

<style scoped>

</style>
