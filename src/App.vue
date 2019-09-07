<template>
  <v-app>
    <v-container v-if="env === 'production'" fill-height grid-list-md class="text-sm-center black">
      <v-layout row wrap align-center>
        <v-flex>
          <h1 class="display-3 white--text"> We are launching soon!
          </h1>
        </v-flex>
      </v-layout>
    </v-container>
    <div v-else>
      <nav-header/>
      <v-content>
        <router-view/>
      </v-content>
      <nav-footer/>
    </div>
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
  },
  data () {
    return {
      env: 'production'
    }
  }
}
</script>

<style lang="scss">
.div-production {
  background-color: yellow;
  height: 100%;
  font-weight: bold;
}
</style>
