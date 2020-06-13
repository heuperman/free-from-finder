<template>
  <div>
    <Form :model="form" :fields="fields" :onSubmit="submit" buttonText="Register" />
    <p>
      <span>Already have an account?</span>
      {{ ' ' }}
      <router-link :to="'Login'">Log in here</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { auth } from '@/firebase'
import Form from '@/components/Form.vue'
import { FormField } from '@/types/formField'

@Component({
  components: {
    Form
  }
})
export default class Register extends Vue {
  private form = {
    name: '',
    email: '',
    password: ''
  }

  private fields: FormField[] = [
    { label: 'Name', id: 'name', type: 'name', required: true },
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
      const result = await auth.createUserWithEmailAndPassword(
        this.form.email,
        this.form.password
      )
      result.user?.updateProfile({ displayName: this.form.name })
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
