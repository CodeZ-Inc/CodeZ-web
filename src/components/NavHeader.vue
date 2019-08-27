<template>
  <v-app-bar app class="elevation-0">
    <v-toolbar-title class="headline primary--text">
      <router-link to="/">
        <span>CodeZ</span>
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
      :to="link.path"
    >
      {{ link.text }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavHeader',
  data () {
    return {
      links: [
        {
          text: 'Our Products',
          path: '/products'
        },
        {
          text: 'About Us',
          path: '/about'
        },
        {
          text: 'Contact Us',
          path: '/contact'
        }
      ]
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
  letter-spacing: normal;
}

.v-btn--active {
  font-weight: bold;
}

.v-btn:before {
  background-color: transparent;
}

</style>
