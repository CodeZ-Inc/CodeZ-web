<template>
  <section class="portfolio-pullup">
    <v-container class="container-collection transparent">
      <!--      <v-container class="">-->
      <v-row no-gutters dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12" md="4"
          class=""
          style="height: 400px;"
        >
          <v-card
            class="white--text elevation-5 py-12 text-center align-center justify-center px-12"
            height="100%"
            width="100%"
            tile
            :color="item.color"
          >
            <v-img :src="require(`@/assets/images/${item.src}`)"
                   width="125"
                   height="125"
                   class="mx-auto my-auto"
            >
            </v-img>
            <div class="headline my-2">{{item.artist}}</div>
            <div class="body-1">
              {{item.title}}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--     </v-container>-->
    <!--end of container-->
  </section>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      fields: null,
      items: [
        {
          color: '#596C78',
          src: '1-kpi.png',
          title: 'KPI increase in C-level report - improved performance or data quality issue?',
          artist: 'Data quality'
        },
        {
          color: '#BBC4CC',
          src: '2-no-time.png',
          title: 'No time to manually create & maintain data quality rules',
          artist: 'Data management'
        },
        {
          color: '#80898E',
          src: '3-no-knowledge.png',
          title: 'No knowledge of change in underlying data patterns' +
            ' of the datasets > Inability' +
            ' to timely retrain machine learning models timely',
          artist: 'Data pattern'
        },
        {
          color: '#97A3AB',
          src: '4-no-tracking.png',
          title: 'No tracking of multi-staged table/attribute level ' +
            'lineage > No root cause assessment of data issue in aggregate tables.',
          artist: 'Multi stage data tracking'
        },
        {
          color: '#91A3AD',
          src: '5-no-options.png',
          title: 'Missed invaluable opportunities - We do not know what we do not see!' +
            ' How to track important trends in the 1000s of attributes in our 100s of datasets?',
          artist: 'Data analytics'
        },
        {
          color: '#667078',
          src: '6-data-scientist.png',
          title: 'Data Scientists and Data Analysts not fully equipped to use the best' +
            ' of all the data assets available. No idea of how to optimize datasets and redundant pipelines.',
          artist: 'Optimization of datasets'
        }
        // {
        //   color: '#4ecdc4',
        //   src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        //   title: 'Data Scientists and Data Analysts not fully equipped' +
        //     ' to use the best of all the data assets available',
        //   artist: 'Foster the People'
        // }
      ]
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('products')
        .then((document) => {
          this.fields = document.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style scoped lang="scss">
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

  .half-black {
    background: black(0.8);
    /*border-left: 5px solid white;*/
  }
}

section + .portfolio-pullup {
  padding-top: 0;
  margin-top: -100px;
  position: relative;
  z-index: 20;
}
</style>
