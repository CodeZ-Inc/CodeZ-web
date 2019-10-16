<template>
  <section>
    <v-parallax src="../assets/images/home24.jpg" height="400">
      <v-layout
        column
        align-center
        justify-center
        class="black--text"
      >
        <v-container v-if="fields" class="container-para text-center pt-0">
          <h2 class="display-4 font-weight-regular">
            Contact Us
          </h2>
          <h4 class="display-1 mt-6">
            Data Enablement for Enterprises
          </h4>
        </v-container>
      </v-layout>
    </v-parallax>
    <v-card
      class="mx-auto mb-10 py-10 card-contact"
    >
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="name"
          dark
          autofocus
          :error-messages="nameErrors"
          label="Full Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          dark
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-textarea
          dark
          v-model="message"
          auto-grow
          label="Message"
          rows="6"
        ></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="mt-3"
            @click="submit"
            color="secondary"
            width="200"
            height="50">Send
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </section>
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
      this.email = 'hello@codez.ai'
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

.v-application .display-4 {

  @media (max-width: $mobile_width) {
    font-size: 3rem !important;
  }

}

.v-application .headline {
  @media (max-width: $mobile_width) {
    font-size: 1rem !important;
  }
}

.container-para {
  max-width: 700px;
  margin-top: -35px;
}

.card-contact {
  background-color: rgba(67, 91, 113, .9);
  padding: 25px 30px 30px;
  border-radius: 15px;
  transition: all .2s ease-out;
  box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);
  margin-top: -100px;
  width: 60%;
   @media (max-width: $mobile_width) {
    width: 95%;
  }
}

.contact {
  @media (max-width: $mobile_width) {
    margin-top: 300px !important;
  }

}

.v-application .display-4 {

  @media (max-width: $mobile_width) {
    font-size: 3rem !important;
  }

}

.v-application .headline {
  @media (max-width: $mobile_width) {
    font-size: 1rem !important;
  }
}

</style>
