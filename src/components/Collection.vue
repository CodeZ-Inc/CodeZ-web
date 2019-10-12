<template>
  <section class="portfolio-pullup">
    <v-container class="container-collection">
      <v-row no-gutters class="pb-0">
        <v-col cols="12" sm="12" md="6">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text img-collection"
              height="500px"
              src="../assets/images/collection-1.png"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  Unsupervised Learning based Data Lineage
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="500px"
              src="../assets/images/collection-2.png"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                 Data Signature based Data Quality Tracking
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="500px"
              src="../assets/images/collection-3.png"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  Data Recommendation Engine
                </span>
                </div>
              </v-card-title>
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
  name: 'Collection'
}
</script>

<style scoped lang="scss">

.half-black {
  background: black(0.5);
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
</style>
