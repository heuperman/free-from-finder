<template>
  <form @submit="onSubmit">
    <div v-for="field of fields" :key="field.id" class="input-container">
      <label :for="field.id">{{ field.label }}:</label>
      <input :type="field.type" :id="field.id" v-model="model[field.id]" :required="field.required" />
    </div>
    <Button :text="buttonText" />
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { FormField } from '@/types/formField'
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Form extends Vue {
  @Prop() private onSubmit!: () => void
  @Prop() private fields!: FormField[]
  @Prop() private model!: {}
  @Prop() private buttonText!: string
}
</script>

<style scoped lang="scss">
form {
  padding: 20px 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 20px;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 20px;
  grid-column: 1/3;
}

input {
  border: 2px solid $light-gray;
  border-radius: 4px;
  outline: none;
  background: transparent;
  margin-bottom: 20px;
  font-size: 1rem;
  padding: 0.75rem;
  line-height: 1;
  grid-column: 1/3;
}

label {
  text-align: left;
  grid-column: 1/2;
}

button {
  grid-column: 1/3;
}
</style>
