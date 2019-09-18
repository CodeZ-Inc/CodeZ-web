<template>
  <div>
    <test/>
    <testimonial/>
    <nav-footer/>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter'
import Test from '@/components/Test'
import Testimonial from '@/components/Testimonial'

export default {
  name: 'foundary',
  components: {
    NavFooter,
    Test,
    Testimonial
  }
}
</script>

<style scoped>

</style>
