<template>
  <v-container id="home" class="black white--text">
    <v-row align="center">
      <v-col cols="12" sm="12" md="5">
        <h3>Our Team</h3>
        <p>
          Development is powered by 8 experts spanning areas of product management, big data software architecture, data
          engineering, data science & full stack
          development. The leadership team brings multiple tens of years of big data analytics & data enablement
          expertise
          in major For tune 500 companies. We have lived
          through the same problems for enterprise data adoption, that we are endeavoring to solve through Data Genie.
          The
          team is dist ributed across USA & India, along
          with an advisor and a Business manager based out of Europe.
        </p>
      </v-col>
       <v-col class="bg-img">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style scoped lang="scss">
.bg-img {
  height: 420px;
  background: black url("../assets/images/bgTeam.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
