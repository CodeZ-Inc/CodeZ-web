<template>
  <section>
    <v-parallax src="../assets/images/home24.jpg" height="800">
      <v-layout
        column
        align-center
        justify-center
        class="black--text"
      >
        <v-container style="max-width: 700px;" class="text-center">
            <h2 class="display-4 font-weight-regular">
              CODE Z
            </h2>
            <h4 class="display-1">
              Data Enablement for Enterprises
            </h4>
            <h4 class="headline">
              Enterprises today collect enormous amounts of data but more data does not
              necessarily mean more intelligence. We are on a mission to make
              enterprises derive the best value out of their data assets.
            </h4>
            <v-btn
              class="mt-12"
              color=""
              dark
              large
              @click="contact"
            >
              Make an enquiry
            </v-btn>
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
.v-application .display-4 {

  @media (max-width: $mobile_width) {
    font-size: 3rem !important;
  }

}

.v-application .headline {
 @media (max-width: $mobile_width) {
    font-size: 1rem !important;
  }
}
</style>
