<template>
  <v-footer
    color="white"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.text"
        color="primary"
        text
        rounded
        class="my-2"
        :href="link.path"
      >
        {{ link.text }}
      </v-btn>
      <v-col
        class="white py-4 text-center primary--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>CodeZ</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'NavFooter',
  data () {
    return {
      links: [
        {
          text: 'CodeZ',
          path: '/'
        },
        {
          text: 'Our Products',
          path: '#products'
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
  }
}
</script>

<style scoped lang="scss">
.v-btn {
  text-transform: capitalize;
  letter-spacing: normal;
}

</style>
