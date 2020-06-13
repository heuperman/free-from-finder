<template>
  <div class="home">
    <h1>Free From Finder</h1>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Footer
  }
})
export default class Home extends Vue {}
</script>
