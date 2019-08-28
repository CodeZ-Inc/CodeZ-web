<template>
  <v-container class="black white--text">
    <v-row align="center">
      <v-col cols="12" sm="12" md="7">
        <v-form @submit.prevent="submit" class="form-contact">
          <v-text-field
            v-model="name"
            color="deep-purple"
            class="input-contact"
            :error-messages="nameErrors"
            label="Full Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            class="input-contact"
            color="deep-purple"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            v-model="message"
            class="input-contact"
            auto-grow
            color="deep-purple"
            label="Message"
            rows="6"
          ></v-textarea>
          <v-btn class="my-5" @click="submit" color="primary" width="200">Send</v-btn>
        </v-form>
      </v-col>
      <v-col>
        <h3>
          CodeZ
          xyz 65
        </h3>
        <h3>
          12345, ZZZ
        </h3>
        <h2>
          USA
        </h2>
        <br/>
        <br/>
        <h3>
          +00 11 700 400 011
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Contact',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(100) },
    email: { required, email },
    message: { maxLength: maxLength(2024) }
  },

  data () {
    return {
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
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
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
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style scoped lang="scss">
.bg-img {
  height: 420px;
  background: black url("../assets/images/bgContact.jpg") no-repeat;
  background-size: 100% 100%;
}

.form-contact {
  .input-contact {
    background: #3C3B3F; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #605C3C, #3C3B3F); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #605C3C, #3C3B3F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
}

</style>
