<template>
  <div id="app">
    <router-view id="main" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: $body-font;
  color: $black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1,
h2,
h3,
h4 {
  font-family: $title-font;
}

#main {
  margin-bottom: 52px;
}

a {
  color: $primary;
  text-decoration: none;
}

p {
  color: $dark-gray;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
