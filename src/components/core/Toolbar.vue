<template>
  <v-toolbar
    text
    class="nav-bar nav-bar-custom elevation-0 black--text"
  >
    <v-toolbar-title v-text="title">
    </v-toolbar-title>
    <v-spacer/>
    <v-btn
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      class="ml-0 hidden-sm-and-down nav-btn black--text"
      text
      @click="onClick($event, item)"
    >
      {{ link.text }}
    </v-btn>
    <v-app-bar-nav-icon
      color="black"
      class="hidden-md-and-up pt-6"
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
    ...mapMutations(['toggleDrawer']),
    onClick (e, item) {
      e.stopPropagation()

      if (item.to || !item.href) return

      this.$vuetify.goTo(item.href)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-bar-custom {
  position: absolute;
  margin-top: 0px;
  z-index: 10;
  width: 100%;
  background: transparent;
}

.nav-btn {
  border-left: 1px solid #ccc;
  padding: 0 24px;
  cursor: pointer;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
}

</style>
