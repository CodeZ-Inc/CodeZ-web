<template>
  <section>
    <v-parallax src="../assets/images/home24.jpg" height="750">
      <v-layout
        column
        align-center
        justify-center
        class="black--text"
      >
        <v-container style="max-width: 700px;">
          <v-row justify="center" align="center" class="text-center">
            <h2 class="display-4 font-weight-regular">CODE Z</h2>
            <!--            <img src="../assets/images/logo-dark-0.1.png" alt="Vuetify.js" class="img-responsive1">-->
            <h3 class="headline black--text text-center">Welcome to Code Z. We are an AI first data solutions
              engine to
              meet all your needs for the data driven future.</h3>
            <br/>
            <v-btn
              class="mt-12"
              color=""
              dark
              large
              @click="contact"
            >
              Make an enquiry
            </v-btn>
          </v-row>
        </v-container>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>

export default {
  name: 'parallax',
  components: {},
  data () {
    return {
      title: 'Your Logo'
    }
  },
  methods: {
    contact () {
      this.email = 'hello@codez.ai'
      setTimeout(() => {
        window.open(`mailto:${this.email}`)
      }, 320)
    }
  }
}
</script>

<style scoped lang="scss">

.img-responsive1 {

  @media (max-width: $mobile_width) {
    width: 100%;
  }
}

</style>
