<template>
  <div class="card">
    <div class="icon">
      <Icon :name="icon" v-if="icon" />
    </div>
    <div class="card-container">
      <h1>{{ title }}</h1>
      <a :href="link" target="_blank" rel="noopener noreferrer">
        {{ linkText }}
      </a>
      <div class="card-content">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '@/components/Icon.vue'

@Component({
  components: {
    Icon
  }
})
export default class Card extends Vue {
  @Prop() private title!: string
  @Prop() private link!: string
  @Prop() private linkText!: string
  @Prop() private content!: string
  @Prop() private icon!: string
}
</script>

<style scoped lang="scss">
.card {
  border-bottom: 1px solid $light-gray;
  padding: 16px;
  text-align: left;
  display: grid;
  grid-template-columns: 36px auto;
  gap: 8px;

  &:last-child {
    border: none;
  }
}

.card-container {
  grid-column: 2/3;
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

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  color: $gray;
}
</style>
