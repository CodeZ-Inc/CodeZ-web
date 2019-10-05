<template>
  <v-container class="testimonial pt-10" style="max-width: 700px;" id="products">
    <v-row justify="center" align="center" class="px-5 text-center">
      <h3 class="mb-6 mb-sm-4 headline">Some amazing products and services we are offering</h3>
      <v-carousel
        v-model="model"
        :show-arrows="false"
        :cycle="true"
        :hide-delimiter-background="true"
        progress-color="black"
        class="my-5"
      >
        <v-carousel-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-card
            class="mx-auto"
            max-width="374"
          >
            <v-img
              :src="require(`@/assets/images/${item.avatar}`)"
              height="200px"
            ></v-img>

            <v-card-title>
              <div>{{item.name}}</div>
            </v-card-title>
            <v-card-text class="text-left body-1">{{item.text}}
            </v-card-text>
          </v-card>
          <!--          <v-row class="text-center"-->
          <!--                 align="center"-->
          <!--                 justify="center"-->
          <!--          >-->
          <!--            <h3 class="headline">{{item.name}}</h3>-->
          <!--            <h5 class="mb-5 px-5">{{item.text}}</h5>-->

          <!--            <div class="text-center div-avatar">-->
          <!--              <img alt="Author" class="mt-5" :src="require(`@/assets/images/${item.avatar}`)"/>-->
          <!--              &lt;!&ndash;            <h6 class="uppercase mb-1">{{item.name}}</h6>&ndash;&gt;-->
          <!--              &lt;!&ndash;            <span>{{item.title}}</span>&ndash;&gt;-->
          <!--            </div>-->
          <!--          </v-row>-->
        </v-carousel-item>
      </v-carousel>
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
}
</style>
