<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    app
    dark
    temporary
    style="margin-top: 55px;"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          v-if="item.heading"
          :key="item.heading"
          row
          align-center
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex
            xs6
            class="text-xs-center"
          >
            <a
              href="#!"
              class="body-2 black--text"
            >EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <template #activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="{name: child.link}"
          >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.text"
          :to="{name: item.link}"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'CoreDrawer',
  data () {
    return {
      items: [
        { icon: 'mdi-home', text: 'Is This You?', link: 'home' },
        {
          icon: 'mdi-arrow-up',
          'icon-alt': 'mdi-arrow-down',
          text: 'Our Offerings',
          link: '',
          model: false,
          children: [
            { icon: 'mdi-star', text: 'Data Genie', link: 'dataGenie' },
            { icon: 'mdi-circle', text: 'Consulting', link: 'dataGenie' }
          ]
        },
        { icon: 'mdi-contacts', text: 'Contact Us', link: 'contact' }
      ]
    }
  },
  computed: {
    ...mapGetters(['links']),
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    }
  },

  methods: {
    ...mapMutations(['setDrawer']),
    onClick (e, item) {
      e.stopPropagation()

      if (item.to === '/') {
        this.$vuetify.goTo(0)
        this.setDrawer(false)
        return
      }

      if (item.to || !item.href) return

      this.$vuetify.goTo(item.href)
      this.setDrawer(false)
    }
  }
}
</script>
