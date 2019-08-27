<template>
  <div>
    <v-container id="home" class="black white--text px-3">
      <v-row align="center">
        <v-col cols="7" class="bg-img">
        </v-col>
        <v-col cols="4" class="ml-4">
          <p>Welcome to CodeZ. We are an AI first data
            solutions engine to meet all your needs for the
            data driven future.
          </p>
          <p>Check out our products here.</p>
          <p>Contact us for more information.</p>
        </v-col>
      </v-row>
    </v-container>
    <div id="products">
      <products/>
    </div>
    <div id="about">
      <about/>
    </div>
    <div id="contact">
      <contact/>
    </div>
  </div>
</template>

<script>
import Products from '@/views/Products'
import About from '@/views/About'
import Contact from '@/views/Contact'

export default {
  name: 'Home',
  components: {
    Products,
    About,
    Contact
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
