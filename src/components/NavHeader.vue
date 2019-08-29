<template>
  <v-app-bar app class="elevation-0">
    <v-toolbar-title class="headline primary--text">
      <router-link :to="{name: 'home'}">
        <span @click="setActive('')">CodeZ</span>
      </router-link>
    </v-toolbar-title>
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
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NavHeader',
  data () {
    return {
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
  }
}
</script>

<style scoped lang="scss">

a {
  text-decoration: none;
}

.router-link-exact-active {
  font-weight: bold;
}

.v-btn {
  text-transform: capitalize;
  letter-spacing: 0.8px;
  font-weight: normal !important;
}

.v-btn--active {
  font-weight: bold;
}

.v-btn:before {
  background-color: transparent;
}

</style>
