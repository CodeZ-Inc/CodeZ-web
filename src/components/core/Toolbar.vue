<template>
  <v-toolbar
    :absolute="true"
    flat
    dense
    width="100%"
    class="black--text transparent toolbar"
  >
    <router-link to="/home">
     <v-toolbar-title class="black--text">
      {{title}}
    </v-toolbar-title>
    </router-link>
    <v-spacer/>
    <v-toolbar-items>
      <v-btn
        text
        v-for="(link, i) in links"
        :key="i"
        :to="{name: link.path}"
        class="hidden-sm-and-down black--text nav-btn"
      >
        {{ link.text }}
      </v-btn>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      color="black"
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
  </v-toolbar>
</template>

<script>
// Utilities
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  data () {
    return {
      title: 'Code Z'
    }
  },
  computed: {
    ...mapGetters(['links'])
  },

  methods: {
    ...mapMutations(['toggleDrawer'])
  }
}
</script>
<style lang="scss" scoped>
.toolbar {
  border-bottom: 1px #ccc solid !important;
}

.nav-btn {
  border-left: 1px solid #ccc;
  padding: 0 24px;
}

</style>
