<template>
  <v-footer
    color=""
    padless
    class="theme--dark"
  >
    <v-row align="center" justify="center" class="text-center">
      <v-col>
        <a href="/">
          <h2 class="display-2 mb-5">Codez</h2>
        </a>
        <h5 class="mb-5">An AI first data solutions engine to meet all <br/> your needs for the data driven future
          &copy;{{new Date().getFullYear() }}</h5>
        <div>
          <v-icon>mdi-twitter</v-icon>
          <v-icon>mdi-facebook</v-icon>
          <v-icon>mdi-dribbble</v-icon>
          <v-icon>mdi-vimeo</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavFooter',
  data () {
    return {
      links: [
        {
          text: 'CodeZ',
          path: '/'
        },
        {
          text: 'Our Products',
          path: '#products'
        },
        {
          text: 'Team',
          path: '#team'
        },
        {
          text: 'About Us',
          path: '#about'
        },
        {
          text: 'Contact Us',
          path: '#contact'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['setActiveLink'])
  }
}
</script>

<style scoped lang="scss">

.v-footer {
  padding: 72px 0;

  .v-icon {
    margin-right: 1rem;
    color: white;
    opacity: 0.75;
  }

  h2, h5 {
    color: white;
    opacity: 0.75;
    letter-spacing: 1px !important;
  }

  h2 {
    letter-spacing: 8px !important;
  }
}

.v-btn {
  text-transform: capitalize;
  letter-spacing: 0.8px;
  font-weight: normal !important;
}

</style>
