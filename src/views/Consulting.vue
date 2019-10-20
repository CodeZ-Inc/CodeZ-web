<template>
  <v-container class="pb-10 pt-0 px-10">
    <v-row>
      <v-col cols="12" md="8" class="card-contact shadow text-center offset-md-2 white--text py-12 px-5 my-12">
        <!--        <div class="card-contact">-->
        <div class="display-1">Consulting</div>
        <div class="body-1 mt-5 px-12">
          We also undertake consulting projects in Machine Learning specifically focusing on the Online
          Retail domain. Our team of experts has delivered multiple use cases including Sales/Inventory
          Forecasting, Product Size/Fit Recommendation, Personalized Product Recommendation and
          Customer Propensity Identification for Loyalty Programs.

        </div>
        <!--        </div>-->
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'Consulting'
}
</script>

<style scoped lang="scss">

.card-contact {
  background-color: rgba(89, 108, 120, .95); //rgba(67, 91, 113, .9);
  padding: 25px 30px 30px;
  border-radius: 15px;
  transition: all .2s ease-out;
  box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);
  width: 100%;
  @media (max-width: $mobile_width) {
    width: 95%;
  }
}

.shadow {
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
  opacity: 0.8;
}

</style>
