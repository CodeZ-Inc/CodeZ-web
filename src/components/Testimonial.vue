<template>
  <v-container class="testimonial pt-10" style="max-width: 700px;" id="products">
    <v-row justify="center" align="center" class="px-5 text-center">
      <h3 class="mb-6 mb-sm-4">Some amazing products and services we are offering.</h3>
      <v-carousel
        v-model="model"
        :show-arrows="false"
        :cycle="true"
        :hide-delimiter-background="true"
        progress-color="success"
        height="385"
      >
        <v-carousel-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-row class="text-center"
                 align="center"
                 justify="center"
          >
            <h3 class="headline">{{item.name}}</h3>
            <h5 class="mb-5 px-5">{{item.text}}</h5>
          </v-row>
          <div class="text-center div-avatar">
            <img alt="Author" class="image-xs mb16" :src="require(`@/assets/images/${item.avatar}`)"/>
            <h6 class="uppercase mb-1">{{item.name}}</h6>
            <span>{{item.title}}</span>
          </div>
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
          text: 'Data Genie enables enterprises to maximize the value of their data assets.',
          avatar: 'avatar4.png',
          name: 'Data Genie',
          title: 'Vault'
        },
        {
          text: 'The data catalog crawls the entire data infrastructure and all the data store logs to capture data access patterns. It generates required core meta data for the other services.',
          avatar: 'avatar3.png',
          name: 'Data Catalog',
          title: 'Aviary Bar'
        },
        {
          text: 'Machine Learning, Dictionary & Regex based data classification that enables semantic tagging of enterprise datasets to domain specific logical data models.',
          avatar: 'avatar6.png',
          name: 'Data Intelligence',
          title: 'Vault'
        },
        {
          text: 'Data Signature is assigned for each dataset that specifies the Schema, Cardinality, Statistical Attributes, Noise, Freshness , Completeness, Consistency enabling anomaly detection and timely identification of data quality issues at source.',
          avatar: 'avatar4.png',
          name: 'Data Quality',
          title: 'Vault'
        },
        {
          text: 'The unsupervised algorithm based on temporal clustering, data signature correlation & heuristics enables understanding of sto rage & processing redundancy.',
          avatar: 'avatar3.png',
          name: 'Data Lineage',
          title: 'Aviary Bar'
        },
        {
          text: 'Using intelligence from underlying services, Data Genie delivers services at Data Scientist and Enterprise level.',
          avatar: 'avatar6.png',
          name: 'Data Guidance',
          title: 'Vault'
        }
      ],
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.testimonial {
  @media (max-width: 1250px) {
    /*width: 1200px;*/
  }

  .div-avatar {
    display: block;
  }

  .v-carousel {
    height: 350px;
    @media (max-width: $mobile_width) {
      height: 370px;
    }
  }
}
</style>
