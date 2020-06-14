<template>
  <div>
    <Spinner v-if="loading" class="spinner" />
    <div v-else>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <Form
        :model="form"
        :fields="fields"
        :onSubmit="submit"
        buttonText="Log in"
      />
      <p>
        <span>Don't have an account? </span>
        <router-link :to="'Register'">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { auth } from '@/firebase'
import Form from '@/components/Form.vue'
import Spinner from '@/components/Spinner.vue'
import { FormField } from '../types/formField'

@Component({
  components: {
    Form,
    Spinner
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
      placeholder: 'Email',
      required: true
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true
    }
  ]
  private error = ''
  private loading = false

  private async submit(event: Event) {
    event.preventDefault()

    this.loading = true
    try {
      await auth.signInWithEmailAndPassword(this.form.email, this.form.password)
      this.$router.replace((this.$route.query.redirect as string) || '/')
    } catch (error) {
      this.error = error.message
    }
    this.loading = false
  }
}
</script>

<style scoped lang="scss">
p {
  margin-top: 12px;
}

.spinner {
  width: 100%;
  height: 66vw;
}
</style>
