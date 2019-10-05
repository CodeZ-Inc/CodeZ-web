<template>
  <v-toolbar color="secondary" class="elevation-0">
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="link.text"
      color="primary"
      text
      rounded
      class="my-2"
      :href="link.path"
      @click="setActive(link.path)"
    >
      <span :class="{'font-weight-bold': isActiveLink === link.path}">{{ link.text }}</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
// import Fnav from '@/components/Fnav'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NavHeader',
  components: {
    // Fnav
  },
  data () {
    return {
      title: 'Code Z',
      drawer: false,
      group: null,
      links: [
        {
          text: 'Our Products',
          path: '#products'
        },
        {
          text: 'Team',
          path: '#team'
        },
        {
          text: 'About Us',
          path: '#about'
        },
        {
          text: 'Contact Us',
          path: '#contact'
        }
      ]
    }
  },
  computed: {
    ...mapState(['activeLink']),
    isActiveLink () {
      return this.activeLink === undefined ? this.$router.currentRoute.hash : this.activeLink
    }
  },
  methods: {
    ...mapActions(['setActiveLink']),
    setActive (link) {
      this.setActiveLink(link)
      if (link === '') {
        this.scrollToTop()
      }
    },
    scrollToTop () {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-menu {
  visibility: hidden;
}

</style>
