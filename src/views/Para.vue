<template>
  <div>
    <nav-header/>
    <parallax/>
    <collection class="mb-12"/>
    <testimonial class="mb-12"/>
    <nav-footer/>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import Parallax from '@/components/parallax'
import Collection from '@/components/Collection'
import Testimonial from '@/components/Testimonial'
import NavFooter from '@/components/NavFooter'

export default {
  name: 'Para',
  components: {
    NavHeader,
    Parallax,
    Collection,
    Testimonial,
    NavFooter
  }
}
</script>

<style scoped>

</style>
