<template>
  <v-container v-if="fields" class="black white--text px-3">
    <v-row align="center">
      <v-col cols="12" sm="12" md="5">
        <h3>{{fields.title_product1[0].text}}</h3>
        <p></p>
        <p>{{fields.content_product1[0].text}}</p>
      </v-col>
      <v-col class="bg-img">
      </v-col>
    </v-row>
    <v-divider class="accent my-3"/>
    <v-row>
      <v-col v-for="(feature, index) in fields.feature_cards" :key="index" cols="12" sm="6" md="3">
        <v-card>
          <v-card-text class="white--text">
            <div class="headline mb-2">{{feature.card_title[0].text}}</div>
            {{feature.card_content[0].text}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
  background: black url("../assets/images/bgProduct.jpg") no-repeat;
  background-size: 100% 100%;
}

.v-card {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
}
</style>
