<template>
  <v-toolbar
    :absolute="true"
    flat
    width="100%"
    class="black--text transparent toolbar px-5"
  >
    <router-link to="/home">
      <v-toolbar-title class="black--text">
        {{title}}
      </v-toolbar-title>
    </router-link>
    <v-spacer/>
    <v-toolbar-items>
      <div v-for="(link, i) in links" :key="i" class="pt-3">
        <v-btn
          v-if="link.path !== 'dataGenie'"
          text
          :key="i"
          :to="{name: link.path}"
          active-class="highlighted"
          :class="link.path === $route.path ? 'highlighted' : ''"
          class="hidden-sm-and-down black--text nav-btn"
        >
          {{ link.text }}
        </v-btn>
        <v-menu
          v-if="link.path === 'dataGenie'"
          v-model="value"
          :open-on-hover="openOnHover"
          :close-on-click="closeOnClick"
          :close-on-content-click="closeOnContentClick"
          offset-y
        >
          <template #activator="{ on }">
            <v-btn
              text
              class="hidden-sm-and-down black--text nav-btn"
              v-on="on"
            >
              Our Offerings
            </v-btn>
          </template>
          <v-list class="black">
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :to="{name: item.link }"
            >
              <v-list-item-title class="white--text">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              href="data-genie#con"
            >
              <v-list-item-title class="white--text">
                Consulting
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      color="black"
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
  </v-toolbar>
</template>

<script>
// Utilities
import {
  mapGetters,
  mapMutations
} from 'vuex'

// TODO (RAVI): Data Giene as dropdown having
/*
* Our offerings
*   Data Giene
*   Consultancy
* */

export default {
  data () {
    return {
      title: 'Code Z',
      items: [
        { title: 'Data Genie', link: 'dataGenie' }
      ],
      openOnHover: true,
      value: false,
      closeOnClick: true,
      closeOnContentClick: true
    }
  },
  computed: {
    ...mapGetters(['links'])
  },

  methods: {
    ...mapMutations(['toggleDrawer'])
  }
}
</script>
<style lang="scss" scoped>
.toolbar {
  /*border-bottom: 1px #ccc solid !important;*/
}

.nav-btn {
  /*border-left: 1px solid #ccc;*/
  padding: 0 24px;
}

.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  opacity: 0;
}

.theme--light.v-btn:hover::before {
  opacity: 0;
}

.theme--light.v-btn:focus::before {
  opacity: 0;
}

.highlighted {
  color: #3d4145 !important;
}

</style>
