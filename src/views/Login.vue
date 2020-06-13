<template>
  <div class="container">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <Form :model="form" :fields="fields" :onSubmit="submit" buttonText="Log in" />
    <p>
      <span>Don't have an account?</span>
      {{ ' ' }}
      <router-link :to="'Register'">Register here</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { auth } from '@/firebase'
import Form from '@/components/Form.vue'
import { FormField } from '../types/formField'

@Component({
  components: {
    Form
  }
})
export default class Login extends Vue {
  private form = {
    email: '',
    password: ''
  }

  private fields: FormField[] = [
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      required: true
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      required: true
    }
  ]

  private error = ''

  private async submit(event: Event) {
    event.preventDefault()

    try {
      const result = await auth.signInWithEmailAndPassword(
        this.form.email,
        this.form.password
      )
      this.$router.replace({ name: 'Home' })
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>

<style scoped lang="scss">
p {
  margin-top: 12px;
}
</style>
