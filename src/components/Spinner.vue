<template>
  <div class="spinner-container">
    <svg
      class="spinner"
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Spinner extends Vue {}
</script>

<style scoped lang="scss">
$offset: 187;
$duration: 2s;

.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

svg.spinner {
  animation: rotator $duration linear infinite;
  height: 48px;
  width: 48px;
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  stroke: $primary;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite;
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
