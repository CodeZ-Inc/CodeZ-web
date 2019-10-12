<template>
  <!--  <v-container v-if="fields" class="primary white&#45;&#45;text px-3">-->
  <v-parallax
    dark
    src="../assets/images/home24.jpg"
    class="pb240 pt240"
  >
    <v-row align="center" justify="center">
      <img alt="Logo" class="image-small mb40 mb-xs-0" src="../assets/images/logo-light.png"/>
    </v-row>
    <v-row align="center"
           justify="center">
      <br/>
      <h1 class="display-2 font-weight-thin mb-4">Vuetify.js</h1>
      <h4 class="subheading">Build your application today!</h4>
    </v-row>
  </v-parallax>

  <!--    <section class="background-multiply pt240 pb240 pt-xs-120 pb-xs-120 overlay image-bg parallax">-->
  <!--      <div class="background-image-holder">-->
  <!--        <img alt="image" class="background-image" src="../assets/images/home24.jpg"/>-->
  <!--      </div>-->
  <!--      <div class="container">-->
  <!--        <div class="row">-->
  <!--          <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">-->
  <!--            <img alt="Logo" class="image-small mb40 mb-xs-0" src="../assets/images/logo-light.png"/>-->
  <!--            <h4 class="mb56 mb-xs-24">-->
  <!--              Foundry is a digital design collective, tailoring experiences in web and print for clients all around the-->
  <!--              globe.-->
  <!--            </h4>-->
  <!--            <a class="btn btn-lg btn-white mb0" href="#">Make An Enquiry</a>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        &lt;!&ndash;end of row&ndash;&gt;-->
  <!--      </div>-->
  <!--      &lt;!&ndash;end of container&ndash;&gt;-->
  <!--    </section>-->
  <!--    <v-row align="center">-->
  <!--      <v-col cols="12" sm="12" md="5" class="pr-10">-->
  <!--        <h3 class="heading-3">{{fields.title_product1[0].text}}</h3>-->
  <!--        <p class="mt-5">{{fields.content_product1[0].text}}</p>-->
  <!--      </v-col>-->
  <!--      <v-col class="bg-img my-5">-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--    <v-divider class="accent my-3"/>-->
  <!--    <v-row class="my-5">-->
  <!--      <v-col v-for="(feature, index) in fields.feature_cards" :key="index" cols="12" sm="6" md="3">-->
  <!--        <v-card>-->
  <!--          <v-card-text class="white&#45;&#45;text">-->
  <!--            <div class="headline mb-2">{{feature.card_title[0].text}}</div>-->
  <!--            {{feature.card_content[0].text}}-->
  <!--          </v-card-text>-->
  <!--        </v-card>-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--  </v-container>-->
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      fields: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('products')
        .then((document) => {
          this.fields = document.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style scoped lang="scss">
.bg-img {
  height: 420px;
  background: black url("../assets/images/collection-3.png") no-repeat;
  background-size: 100% 100%;
  @media (max-width: $mobile_width) {
    height: 225px;
  }
}

.v-card {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
}

.pb240 {
  padding-bottom: 240px;
}

.pt240 {
  padding-top: 240px;
}
</style>
