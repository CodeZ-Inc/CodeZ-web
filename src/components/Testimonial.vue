<template>
  <v-container class="testimonial py-10" id="products"
               style="max-width: 700px;"
  >
    <v-row justify="center"
           align="center"
           class="px-5 text-center"

    >

      <div class="display-3">
        Introducing Data Genie
      </div>
      <div class="headline headline-data-1 my-10" style="font-family: gill sans serif !important;">
        Our first product, Data Genie maximises value of enterprises data assets
        through a combination of Machine Learning, Automation and Common Sense!
      </div>
      <div class="headline headline-data-2" style="font-family: gill sans serif !important;">
        Our crawlers crawl your entire data infrastructure and collect the important metadata for all the
        datasets you have. We have three services utilizing and enriching this metadata.
      </div>
      <!--      <v-carousel-->
      <!--        v-model="model"-->
      <!--        :show-arrows="false"-->
      <!--        :cycle="true"-->
      <!--        class="secondary py-3"-->
      <!--        progress-color="black"-->
      <!--        height="650"-->
      <!--      >-->
      <!--        <div class="display-1 text-capitalize white&#45;&#45;text">-->
      <!--          Code z unique-->
      <!--          advantages</div>-->
      <!--        <v-carousel-item-->
      <!--          v-for="(item, index) in items"-->
      <!--          :key="index"-->
      <!--        >-->
      <!--          <v-sheet-->
      <!--            color="dark"-->
      <!--            height="100%"-->
      <!--            tile-->
      <!--            class="pt-5"-->
      <!--          >-->
      <!--            <v-card-->
      <!--              class="mx-auto white"-->
      <!--              max-width="374"-->
      <!--              height="75%"-->
      <!--            >-->
      <!--              <v-img-->
      <!--                :src="require(`@/assets/images/${item.avatar}`)"-->
      <!--                height="200px"-->
      <!--              ></v-img>-->
      <!--              <div class="white black&#45;&#45;text">-->
      <!--                <v-card-title>-->
      <!--                  <div>{{item.name}}</div>-->
      <!--                </v-card-title>-->
      <!--                <v-card-text class="text-left body-1">{{item.text}}-->
      <!--                </v-card-text>-->
      <!--              </div>-->
      <!--            </v-card>-->
      <!--          </v-sheet>-->
      <!--        </v-carousel-item>-->
      <!--      </v-carousel>-->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Testimonial',
  data () {
    return {
      model: 0,
      items: [
        {
          text: 'Using our patent pending algorithm for \'Data Signature based intrinsic data tracking\' ' +
            'we can provide valuable and very specific insights like reason for change in table rows, ' +
            'breaking change in table schemas, exact percentage of change in table values etc.',
          avatar: 'slider-1.jpg',
          name: 'Data Reliability and Dependability',
          title: ''
        },
        {
          text: 'Machine learning models need to be retrained or their hyper parameters need to be tuned' +
            ' based on the new training data - when to re-train a ML model is a big issue in ML operationalization.' +
            ' We provide intrinsic insights that can be used to trigger re-training of downstream ML models.',
          avatar: 'slider-2.png',
          name: 'Retraining of Machine Learning models',
          title: 'Aviary Bar'
        },
        {
          text: 'We also support rule driven notification based on data quality factors. It would be possible' +
            ' to configure very specific need based rules for any required dataset.',
          avatar: 'slider-3.png',
          name: 'Rules driven Notification',
          title: 'Vault'
        },
        {
          text: 'Using our patent pending algorithm for \'Unsupervised lineage detection in heterogeneous' +
            ' enterprise data infrastructure\',  we can identify multi-level data lineage in the enterprise' +
            ' data infrastructure. And track attributes at the root level.',
          avatar: 'slider-4.png',
          name: 'Lineage Detection',
          title: 'Vault'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.testimonial {
  @media (max-width: 1250px) {
  }

  .div-avatar {
    display: block;
    height: 100%;
    width: 200px;
  }

  .v-carousel {
    height: 350px;
    @media (max-width: $mobile_width) {
      height: 370px;
    }
  }

  .headline-data-1 {
    font-size: 26px !important;
  }

  .headline-data-2 {
    font-size: 20px !important;
  }
}
</style>
