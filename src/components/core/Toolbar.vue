<template>
  <v-toolbar
    :absolute="true"
    flat
    width="100%"
    class="black--text transparent toolbar px-5"
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
        active-class="highlighted"
        :class="link.path === $route.path ? 'highlighted' : ''"
        class="hidden-sm-and-down black--text nav-btn"
        retain-focus-on-click
        :ripple="false"
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

// TODO (RAVI): Data Giene as dropdown having
/*
* Our offerings
*   Data Giene
*   Consultancy
* */

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
  /*border-bottom: 1px #ccc solid !important;*/
}

.nav-btn {
  /*border-left: 1px solid #ccc;*/
  padding: 0 24px;
}

.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  opacity: 0;
}

.theme--light.v-btn:hover::before {
  opacity: 0;
}

.theme--light.v-btn:focus::before {
  opacity: 0;
}

.highlighted {
  color: #3d4145 !important;
}

</style>
