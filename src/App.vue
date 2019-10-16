<template>
  <v-app>
    <core-toolbar/>
    <core-drawer/>
    <core-cta/>
    <v-content>
      <router-view/>
    </v-content>
    <nav-footer/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    CoreCta: () => import('@/components/core/Cta'),
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    NavFooter: () => import('@/components/NavFooter')
  }
}
</script>

<style lang="scss">
</style>
