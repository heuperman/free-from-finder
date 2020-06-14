<template>
  <svg xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop() private name!: string

  get iconPath() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const icon = require(`@/assets/${this.name}.svg?sprite`)
    return '#' + icon.default.id
  }
}
</script>

<style scoped lang="scss">
svg {
  fill: currentColor;
  height: 24px;
  width: 24px;
}
</style>
