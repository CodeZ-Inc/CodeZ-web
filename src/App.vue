<template>
  <v-app>
    <core-toolbar/>
    <core-drawer/>
    <core-cta/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    CoreCta: () => import('@/components/core/Cta'),
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreToolbar: () => import('@/components/core/Toolbar')
  }
}
</script>

<style lang="scss">
</style>
