<template>
  <section class="portfolio-pullup">
    <v-container class="container-collection">
      <v-row no-gutters class="pb-0">
        <v-col cols="12" sm="12" md="4"
               v-for="(item, index) in items"
               :key="index"
        >
          <v-card
            class="mx-auto my-5"
            max-width="344"
          >
            <v-img
              :src="require(`@/assets/images/${item.src}`)"
              height="200px"
            ></v-img>

            <v-card-title>
              {{item.title}}
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click="item.show = !item.show"
              >
                <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="item.show">
                <v-divider></v-divider>
                <v-card-text>
                  {{item.text}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-container style="max-width: 870px;">
        <v-row>
          <v-col cols="12">
            <div class="display-1 text-center pt-5">
              We are working with a couple of leading enterprises for a POC. Please contact us if you are
              interested in doing a POC with Data Genie.
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!--end of row-->
    </v-container>
    <!--end of container-->
  </section>
</template>

<script>
export default {
  name: 'Collection',
  data () {
    return {
      show: false,
      items: [
        {
          show: false,
          src: 'collection1.jpg',
          title: 'Unsupervised Learning based Data Lineage',
          text: 'Our ‘patent-pending’ algorithm deciphers the complex, multi-staged table/attribute data lineage' +
            '                  across the hundreds of datasets in your enterprise. We do this in a non-intrusive way - no API' +
            '                  injection or code parsers in your data pipelines. Our algorithm is based on temporal clustering of' +
            '                  read-write access patterns, columnar data correlation & heuristics.'
        },
        {
          show: false,
          src: 'collection2.jpg',
          title: 'Data Signature based Data Quality Tracking',
          text: ' Our patent-pending algorithm creates a daily signature for each of your datasets. The data' +
            '                  signature is composed of important descriptive & inferential statistics derived from the dataset' +
            '                  along with interesting meta-data. We provide rules-based alerts and machine learning based' +
            '                  anomaly detection on all components of the Data Signature. To make your life even easier, we' +
            '                  automatically derive the data quality checks for each of your datasets using machine learning,' +
            '                  run the checks & raise alerts as needed. We also parse your data store logs to understand' +
            '                  which dimensions and metrics are most used and accordingly expand data signature.'
        },
        {
          show: false,
          src: 'collection3.jpg',
          title: 'Data Recommendation Engine',
          text: 'We perform semantic tagging of your datasets - understand which datasets can be used for' +
            '                  which use cases. We combine this intelligence along with the Data Signature & Data Lineage to' +
            '                  provide a Data Recommendation Service - imagine this like Netflix movie recommendation or' +
            '                  Amazon product recommendation. We provide dataset recommendations for your Data' +
            '                  Scientists & Data Analysts making their job much easier and more impactful - enabling them to' +
            '                  use all relevant data assets in the enterprise.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.half-black {
  background: black(0.8);
}

.half-white {
  background: white(0.3);
}

.container-collection {
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: $mobile_width) {
    padding: 0px;
  }

  .img-collection {
    @media (max-width: $mobile_width) {
      height: 200px;
    }
  }
}

section + .portfolio-pullup {
  padding-top: 0;
  margin-top: -100px;
  position: relative;
  z-index: 20;
}

.v-application .display-1 {

  @media (max-width: $mobile_width) {
    font-size: 2rem !important;
  }

}
</style>
