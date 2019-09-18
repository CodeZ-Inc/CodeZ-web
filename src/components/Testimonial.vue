<template>
  <v-container class="testimonial">
    <v-row>
      <v-col cols="6" class="offset-md-3 text-sm-center">
        <h3 class="mb-6 mb-sm-4">Some amazing companies we've had the pleasure to work with.</h3>
        <v-carousel
          v-model="model"
          :show-arrows="false"
          :cycle="true"
          :hide-delimiter-background="true"
          progress-color="success"
          height="320"
        >
          <v-carousel-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-row class="py-10"
                   align="center"
                   justify="center"
            >
              <h5 class="mb-5 text-wrap">{{item.text}}</h5>
              <div class="quote-author">
                <img alt="Author" class="image-xs mb16" :src="require(`@/assets/images/${item.avatar}`)"/>
                <h6 class="uppercase mb-1">{{item.name}}</h6>
                <span>{{item.title}}</span>
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
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
          text: 'The guys at Foundry were an absolute pleasure to work with - they took on our project with the same\n' +
            '                enthusiasm and passion as us.',
          avatar: 'avatar4.png',
          name: 'Anna Thompson',
          title: 'Vault'
        },
        {
          text: 'We\'ve worked with Foundry on our web presence over the past 8 years and always relish the opportunity\n' +
            '                to work alongside them.',
          avatar: 'avatar3.png',
          name: 'Carl Vance',
          title: 'Aviary Bar'
        },
        {
          text: 'There is only once choice when it comes to our marketing collateral, Foundry always deliver inspiring\n' +
            '                work on-time and budget.',
          avatar: 'avatar6.png',
          name: 'Natasha Canter',
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
  width: 1200px;
}
</style>
