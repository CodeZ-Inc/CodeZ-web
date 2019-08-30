<template>
  <v-container v-if="fields" class="black white--text">
    <v-row align="center">
      <v-col cols="12" sm="12" md="5" class="mb-5">
        <h3 class="heading-3 mb-5">{{fields.title_content1[0].text}}</h3>
        <p>{{fields.content1[0].text}}
        </p>
      </v-col>
      <v-col class="bg-img mb-5 ml-10">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      fields: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('team')
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
  background: black url("../assets/images/bgTeam.jpg") no-repeat;
  background-size: 100% 100%;
  @media (max-width: $mobile_width) {
    height: 225px;
  }
}
</style>
