<template>
  <div>
    <v-container id="home" class="black white--text py-10">
      <v-row align="center">
        <v-col cols="12" sm="12" md="7" class="bg-img">
        </v-col>
        <v-col v-if="fields">
          <p v-for="(content, index) in fields.content1" :key="index">{{content.text}}</p>
        </v-col>
      </v-row>
    </v-container>
    <products id="products" class="py-10"/>
    <about id="about" class="py-10"/>
    <team id="team" class="py-10"/>
    <contact id="contact" class="py-10"/>
  </div>
</template>

<script>
import Products from '@/views/Products'
import About from '@/views/About'
import Contact from '@/views/Contact'
import Team from '@/views/Team'

export default {
  name: 'Home',
  components: {
    Products,
    About,
    Contact,
    Team
  },
  data () {
    return {
      fields: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
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
  background: black url("../assets/images/bgHome.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
