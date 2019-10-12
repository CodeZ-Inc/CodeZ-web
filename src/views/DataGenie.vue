<template>
  <v-container class="px-0 mx-0 py-0 my-0">
    <section>
      <v-parallax src="../assets/images/home24.jpg" height="800">
        <v-layout
          column
          align-center
          justify-center
          class="black--text"
        >
          <v-container style="max-width: 700px;" class="text-center">
            <h2 class="display-4 font-weight-regular">
              Data Genie
            </h2>
            <h4 class="headline">
              Our product, Data Genie, enables enterprises to get the best value out of their data assets
              through a combination of Machine Learning, Automation and Common Sense!
            </h4>
            <h4 class="headline">
              Our crawlers crawl your entire data infrastructure and collect the important metadata for all the
              datasets you have. We have three services utilizing and enriching this metadata.
            </h4>
            <v-btn
              class="mt-12"
              color=""
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
    <consulting/>
  </v-container>
</template>

<script>
export default {
  name: 'DataGenie',
  components: {
    Collection: () => import('@/components/Collection'),
    Consulting: () => import('@/views/Consulting')
  }
}
</script>

<style scoped lang="scss">
.collection {
  margin-top: -100px;
}
</style>
