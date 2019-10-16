<template>
  <v-btn
    fab
    fixed
    bottom
    right
    color="secondary"
    target="_blank"
    rel="noopener"
    class="cta"
    @click="contact"
  >
    <v-icon>mdi-mail</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'Cta',
  methods: {
    contact () {
      this.$router.push('/contact')
    }
  }
}
</script>
<style lang="scss" scoped>
.cta {
  z-index: 21;
}
</style>
