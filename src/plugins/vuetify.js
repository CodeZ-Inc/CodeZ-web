import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#5edcd0',
        secondary: '#424242',
        accent: '#795548',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#4caf50',
        black: '#292929'
      }
    }
  }
})
