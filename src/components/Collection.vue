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
              class="white--text"
              height="400px"
              src="../assets/images/collection-single-7-m.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="headline uppercase">Data Guidance</span>
                  <p class="body-1 mb-0 mt-1">
                    At data scientist and enterprise level.
                </p>
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
              height="400px"
              src="../assets/images/collection-single-8-m.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="uppercase">Data Quality</span>
                  <p class="body-1 mb-0 mt-1">
                  Data Signature for each dataset enabling anomaly detection and timely
                  identification of data quality issues at source.
                </p>
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="420px"
              src="../assets/images/collection-single-4.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="uppercase">Data Catalog</span>
                  <p class="body-1 mb-0 mt-1">
                    Captures data access patterns and generates required core meta data for the other services.
                </p>
                </span>
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" class="">
          <v-card
            class="mx-auto"
            :tile="true"
          >
            <v-img
              class="white--text"
              height="420px"
              src="../assets/images/collection-single-2.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                 <span>
                  <span class="uppercase">Data Intelligence </span>
                  <p class="body-1 mb-0 mt-1">
                    Machine Learning, Dictionary & Regex based data classification.
                </p>
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
              src="../assets/images/collection-single-6.jpg"
            >
              <v-card-title class="align-end fill-height pb-0 px-0">
                <div class="container half-black">
                <span>
                  <span class="uppercase">Data Lineage</span>
                  <p class="body-1 mb-0 mt-1">
                    Enables understanding of storage & processing redundancy.
                </p>
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
  }
}

section + .portfolio-pullup {
  padding-top: 0;
  margin-top: -128px;
  position: relative;
  z-index: 20;
}
</style>
