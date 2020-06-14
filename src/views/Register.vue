<template>
  <div>
    <Spinner v-if="loading" class="spinner" />
    <div v-else>
      <Form
        :model="form"
        :fields="fields"
        :onSubmit="submit"
        buttonText="Register"
      />
      <p>
        <span>Already have an account? </span>
        <router-link :to="'Login'">Log in here</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { auth } from '@/firebase'
import Form from '@/components/Form.vue'
import Spinner from '@/components/Spinner.vue'
import { FormField } from '@/types/formField'

@Component({
  components: {
    Form,
    Spinner
  }
})
export default class Register extends Vue {
  private form = {
    name: '',
    email: '',
    password: ''
  }
  private fields: FormField[] = [
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      placeholder: 'Your email address',
      required: true
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      placeholder: 'Choose a password',
      required: true
    },
    {
      label: 'Display name',
      id: 'displayName',
      type: 'text',
      placeholder: 'Choose a display name',
      required: true
    }
  ]
  private error = ''
  private loading = false

  private async submit(event: Event) {
    event.preventDefault()

    this.loading = true
    try {
      const result = await auth.createUserWithEmailAndPassword(
        this.form.email,
        this.form.password
      )
      result.user?.updateProfile({ displayName: this.form.name })
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
