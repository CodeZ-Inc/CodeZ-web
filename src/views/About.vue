<template>
  <v-container class="black white--text px-3">
    <v-row align="center">
      <v-col cols="5" class="">
        <h3>About Us
        </h3>
        <p></p>
        <p>Stealth mode start up powered by a highly experienced and able team </p>
        <p>
          Code Z Inc is a registered Delaware C Corp organization in the US.
        </p>
      </v-col>
      <v-col cols="7" class="bg-img">
      </v-col>
    </v-row>
    <team/>
  </v-container>
</template>

<script>
import Team from '@/views/Team'

export default {
  name: 'About',
  components: {
    Team
  }
}

</script>

<style scoped lang="scss">
.bg-img {
  height: 420px;
  background: black url("../assets/images/bgContact.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
