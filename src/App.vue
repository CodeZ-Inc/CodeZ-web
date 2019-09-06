<template>
  <v-app>
    <nav-header/>
    <v-content>
      <router-view/>
    </v-content>
    <nav-footer/>
  </v-app>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'

export default {
  name: 'App',
  components: {
    NavFooter,
    NavHeader
  }
}
</script>

<style lang="scss">
</style>
