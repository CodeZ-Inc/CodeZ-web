<template>
  <div>
    <section>
      <v-parallax src="../assets/images/home24.jpg" height="500">
        <v-layout
          column
          align-center
          justify-center
          class="black--text"
        >
          <v-container class="container-para pt-0 text-center">
            <h2 class="display-4 font-weight-regular">
              Data Genie
            </h2>
            <h4 class="display-1 mt-6" style="font-family: gill sans serif !important;">
              Get The Best Out Of Your Data!
            </h4>
            <!--            <h4 class="headline mt-6">-->
            <!--              Our product, Data Genie, enables enterprises to get the best value out of their data assets-->
            <!--              through a combination of Machine Learning, Automation and Common Sense!-->
            <!--            </h4>-->
            <!--            <h4 class="headline mt-6">-->
            <!--              Our crawlers crawl your entire data infrastructure and collect the important metadata for all the-->
            <!--              datasets you have. We have three services utilizing and enriching this metadata.-->
            <!--            </h4>-->
            <v-btn
              class="mt-12"
              color="white--text"
              dark
              large
              @click="contact"
            >
              Make an enquiry
            </v-btn>
          </v-container>
        </v-layout>
      </v-parallax>
      <collection class="collection"/>
    </section>
    <consulting id="con"/>
  </div>
</template>

<script>
export default {
  name: 'DataGenie',
  components: {
    Collection: () => import('@/components/Collection'),
    Consulting: () => import('@/views/Consulting')
  },
  methods: {
    contact () {
      this.$router.push('/contact')
    }
  }
}
</script>

<style scoped lang="scss">

.v-application .display-4 {

  @media (max-width: $mobile_width) {
    font-size: 3rem !important;
  }

}

.v-application .headline {
  @media (max-width: $mobile_width) {
    font-size: 1rem !important;
  }
}

.container-para {
  max-width: 700px;
  margin-top: -35px;
}

.collection {
  margin-top: -100px;
}
</style>
