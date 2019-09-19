<template>
  <section>
    <v-parallax src="../assets/images/home24.jpg" height="1050">
      <v-layout
        column
        align-center
        justify-center
        class="black--text"
      >
        <v-container>
          <v-row justify="center" align="center" class="text-center">
            <!--            <v-col cols="6" offset="6" sm="10" class="offset-sm-1 text-center">-->
            <img src="../assets/images/logo-dark.png" alt="Vuetify.js" class="img-responsive1">
            <h1 class="black--text mb-2 text-center mt-5">Welcome to CodeZ. We are an AI first data solutions
              engine to
              meet all your needs for the data driven future.</h1>
            <!--            <div class="subheading mb-4 text-center">Powered by CodeZ</div>-->
            <br/>
            <v-btn
              class="mt-12"
              color=""
              dark
              large
              href="/pre-made-themes"
            >
              Make an enquiry
            </v-btn>
            <!--            </v-col>-->
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
  }
}
</script>

<style scoped lang="scss">

.img-responsive1 {
  width: 100%;
}

.btn-white,
.image-bg .btn,
.image-bg .btn:visited {
  color: #fff;
  border-color: #fff;
}

.btn-white:hover,
.image-bg .btn:hover,
.image-bg .btn:visited:hover {
  background: #fff;
  color: #222;
}

</style>
