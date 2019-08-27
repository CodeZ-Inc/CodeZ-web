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
        :key="link"
        color="primary"
        text
        rounded
        class="my-2"
      >
        {{ link }}
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
        'CodeZ',
        'Products',
        'About Us',
        'Contact Us'
      ]
    }
  }
}
</script>

<style scoped>

</style>
