<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <a :href="link" target="_blank" rel="noopener noreferrer">{{ linkText }}</a>
    <div class="card-content">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  @Prop() private title!: string
  @Prop() private link!: string
  @Prop() private linkText!: string
  @Prop() private content!: string
}
</script>

<style scoped lang="scss">
.card {
  border-bottom: 1px solid $light-gray;
  padding: 20px;
  text-align: left;

  &:last-child {
    border: none;
  }
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.2;
}

a {
  margin: 0 0 15px;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
