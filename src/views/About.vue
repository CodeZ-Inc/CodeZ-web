<template>
  <v-container v-if="fields" class="black white--text">
    <v-row align="center">
      <v-col cols="12" sm="12" md="7" class="bg-img mb-5">
      </v-col>
      <v-col>
        <h3 class="heading-3 mb-5">{{fields.title_content1[0].text}}</h3>
        <p v-for="(content, index) in fields.content1" :key="index">
          {{content.text}}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      fields: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('about')
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
  background: black url("../assets/images/collection-single-6.jpg") no-repeat;
  background-size: 95% 100%;
  @media (max-width: $mobile_width) {
    height: 225px;
    background-size: 100% 100%;
  }
}
</style>
