<template>
  <section class="portfolio-pullup">
    <v-container class="container-collection">
      <v-row no-gutters class="pb-0">
        <v-col cols="12" sm="12" md="12">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              src="../assets/images/bg-product.png"
            >
              <div class="container pt-10">
                <v-container class="">
                  <h4 class="display-1 white--text ml-5 text-center">
                    Does any of this sound familiar? If yes, this is exactly where we can help.
                  </h4>
                  <v-row dense>
                    <v-col
                      v-for="(item, i) in items"
                      :key="i"
                      cols="12" md="3"
                      class="px-5 pb-5"
                    >
                      <v-card
                        class="half-black white--text elevation-2 pb-12"
                        height="100%"
                      >
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div class="ml-2">
                            <v-card-title
                              class="subtitle-1 white--text"
                              v-text="item.title"
                            ></v-card-title>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <!--end of row-->
    </v-container>
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
          color: '#eeeeee',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'KPI increase in C-level report - improved performance or data quality issue?',
          artist: 'Foster the People'
        },
        {
          color: '#141e30',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'No time to manually create & maintain data quality rules',
          artist: 'Ellie Goulding'
        },
        {
          color: '#4ecdc4',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'No knowledge of change in underlying data patterns' +
            ' of the datasets > Inability' +
            ' to timely retrain machine learning models timely',
          artist: 'Foster the People'
        },
        {
          color: '#141e30',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'No tracking of multi-staged table/attribute level ' +
            'lineage > No root cause assessment of data issue in aggregate tables.',
          artist: 'Ellie Goulding'
        },
        {
          color: '#4ecdc4',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Missed invaluable opportunities - We do not know what we do not see!' +
            ' How to track important trends in the 1000s of attributes in our 100s of datasets?',
          artist: 'Foster the People'
        },
        {
          color: '#141e30',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'No adequate knowledge of details of redundancy in our datasets' +
            ' & processing pipelines – Inability to optimize',
          artist: 'Ellie Goulding'
        },
        {
          color: '#4ecdc4',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Data Scientists and Data Analysts not fully equipped' +
            ' to use the best of all the data assets available',
          artist: 'Foster the People'
        }
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
    border-left: 5px solid white;
  }
}

section + .portfolio-pullup {
  padding-top: 0;
  margin-top: -70px;
  position: relative;
  z-index: 20;
}
</style>
