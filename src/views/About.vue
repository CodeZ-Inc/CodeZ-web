<template>
  <v-container class="black white--text">
    <v-row align="center">
      <v-col cols="12" sm="12" md="7" class="bg-img">
      </v-col>
      <v-col>
        <h3>About Us
        </h3>
        <p></p>
        <p>Stealth mode start up powered by a highly experienced and able team </p>
        <p>
          Code Z Inc is a registered Delaware C Corp organization in the US.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'About'
}

</script>

<style scoped lang="scss">
.bg-img {
  height: 420px;
  background: black url("../assets/images/bgContact.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
