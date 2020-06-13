<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop() private text!: string
}
</script>

<style scoped lang="scss">
button {
  border: 1px solid $primary;
  border-radius: 4px;
  background: $primary;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: none;
  padding: 0 20px;
  margin: 8px 0;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  height: 52px;

  &:hover {
    border: 1px solid $primary-dark;
    background: $primary-dark;
  }

  &:focus,
  &:active {
    border: 1px solid $primary-dark;
    background: $primary-dark;
  }

  &.accent {
    border: 1px solid $secondary;
    background: $secondary;

    &:hover,
    &:focus,
    &:active {
      border: 1px solid #f7b71e;
      background: #f7b71e;
    }
  }

  &.muted {
    background: transparent;
    color: $primary;
  }
}
</style>
