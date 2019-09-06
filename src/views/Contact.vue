<template>
  <v-container v-if="fields" class="white">
    <v-row align="center">
      <v-col cols="12" sm="12" md="7" class="mr-10">
        <v-form @submit.prevent="submit" class="form-contact">
          <v-text-field
            v-model="name"
            color="deep-purple"
            filled
            :error-messages="nameErrors"
            label="Full Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            filled
            color="deep-purple"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            v-model="message"
            filled
            auto-grow
            color="deep-purple"
            label="Message"
            rows="6"
          ></v-textarea>
          <v-btn class="my-10" @click="submit" color="primary" width="200" height="50">Send</v-btn>
        </v-form>
      </v-col>
      <v-col>
        <h3 v-for="(line, index) in fields.address" :key="index">
          {{line.text}}
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Contact',
  mixins: [validationMixin],
  validations: {
    name: { maxLength: maxLength(100) },
    email: { email },
    message: { maxLength: maxLength(2024) }
  },

  data () {
    return {
      fields: null,
      name: '',
      email: '',
      message: ''
    }
  },

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 100 characters long')
      // !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      // !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.maxLength && errors.push('Message must be at most 2024 characters long')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      this.email = 'contact@codez.ai'
      setTimeout(() => {
        window.open(`mailto:${this.email}?subject=${this.name}&body=${this.message}`)
      }, 320)
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
    },
    getContent () {
      this.$prismic.client.getSingle('contact')
        .then((document) => {
          this.fields = document.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style scoped lang="scss">
</style>
