<template>
  <div>
    <h1>Settings</h1>
    <a @click.prevent="signOut">Sign out</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { auth } from '@/firebase'

@Component
export default class Settings extends Vue {
  private async signOut() {
    await auth.signOut()
    this.$router.replace({ name: 'Home' })
  }
}
</script>
