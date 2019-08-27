<template>
  <v-container class="black white--text px-3">
    <v-row no-gutters align="center">
      <v-col cols="5" class="">
        <h3>Data Genie</h3>
        <p></p>
        <p>Data Genie enables enterprises to maximize the value of their
          data assets</p>
      </v-col>
      <v-col cols="7" class="bg-img">
      </v-col>
    </v-row>
    <v-divider class="accent my-3"/>
    <v-row>
      <v-col cols="xs12 md3">
        <v-card
          color="#385F73">
          <v-card-text class="white--text">
            <div class="headline mb-2">Data Catalog</div>
            The data catalog crawls the entire data infrastructure and all the data store logs to capture data access
            patterns. It generates required core meta data for the other services.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="xs12 md3">
        <v-card
          color="#959595">
          <v-card-text class="white--text">
            <div class="headline mb-2">Data Intelligence</div>
            Machine Learning, Dictionary & Regex based data classification that enables semantic tagging of enterprise
            datasets to domain specific logical data models.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="xs12 md3">
        <v-card
          color="#385F73">
          <v-card-text class="white--text">
            <div class="headline mb-2">Data Quality</div>
            Data Signature is assigned for each dataset that specifies the Schema, Cardinality, Statistical Attributes,
            Noise, Freshness , Completeness, Consistency enabling anomaly
            detection and timely identification of data quality issues at source.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="xs12 md3">
        <v-card
          color="#385F73">
          <v-card-text class="white--text">
            <div class="headline mb-2">Data Lineage</div>
            The unsupervised algorithm based on temporal clustering, data signature correlation & heuristics enables
            understanding of sto rage & processing redundancy.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="xs12 md3">
        <v-card
          color="#385F73">
          <v-card-text class="white--text">
            <div class="headline mb-2">Data Guidance</div>
            Using intelligence from underlying services, Data Genie delivers services at Data Scientist and Enterprise
            level.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style scoped lang="scss">
.bg-img {
  height: 420px;
  background: black url("../assets/images/bgProduct.jpg") no-repeat;
  background-size: 100% 100%;
}

.v-card {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
