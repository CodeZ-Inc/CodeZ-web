<template>
  <section>
    <v-parallax
      src="../assets/images/home24.jpg"
      height="750">
      <v-layout
        column
        align-center
        justify-center
        class="black--text pt-0 mt-0"
      >
        <v-container class="container-para text-center pt-0">
          <h2 class="display-4 font-weight-regular">
            CODE Z
          </h2>
          <h4 class="display-1 mt-6" style="font-family: gill sans serif !important;">
            Get The Best Out Of Your Data!
          </h4>
          <h4 class="headline mt-6" style="font-family: gill sans serif !important;">
            Enterprises today collect enormous variety & volume of data.
            <span class="font-weight-bold d-block" >
            We are on a mission to make enterprises derive the best value
            out of their data assets.
            </span>
          </h4>
          <v-btn
            class="mt-12"
            color="white--text"
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
      this.$router.push('/contact')
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

.container-para {
  max-width: 700px;
  margin-top: -35px;
}
</style>
