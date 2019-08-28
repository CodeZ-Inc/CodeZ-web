<template>
  <v-container class="black white--text px-3">
    <v-row align="center">
      <v-col cols="12" sm="12" md="5">
        <h3>Data Genie</h3>
        <p></p>
        <p>Data Genie enables enterprises to maximize the value of their
          data assets</p>
      </v-col>
      <v-col class="bg-img">
      </v-col>
    </v-row>
    <v-divider class="accent my-3"/>
    <v-row>
      <v-col v-for="feature in features" :key="feature.title" cols="12" sm="6" md="3">
        <v-card>
          <v-card-text class="white--text">
            <div class="headline mb-2">{{feature.title}}</div>
            {{feature.content}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      features: [
        {
          title: 'Data Catalog',
          content: 'The data catalog crawls the entire data infrastructure and all the data store logs to capture data access\n' +
            '            patterns. It generates required core meta data for the other services.'
        },
        {
          title: 'Data Intelligence',
          content: 'Machine Learning, Dictionary & Regex based data classification that enables semantic tagging of enterprise\n' +
            '            datasets to domain specific logical data models.'
        },
        {
          title: 'Data Quality',
          content: 'Data Signature is assigned for each dataset that specifies the Schema, Cardinality, Statistical Attributes,\n' +
            '            Noise, Freshness , Completeness, Consistency enabling anomaly\n' +
            '            detection and timely identification of data quality issues at source.'
        },
        {
          title: 'Data Lineage',
          content: 'The unsupervised algorithm based on temporal clustering, data signature correlation & heuristics enables\n' +
            '            understanding of sto rage & processing redundancy.'
        },
        {
          title: 'Data Guidance',
          content: 'Using intelligence from underlying services, Data Genie delivers services at Data Scientist and Enterprise\n' +
            '            level.'
        }
      ]
    }
  }
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
  height: 100%;
}
</style>
