<template>
  <form @submit="onSubmit">
    <div v-for="field of fields" :key="field.id" class="input-container">
      <label :for="field.id"
        >{{ field.label }}<span v-if="field.required">*</span>
      </label>
      <select
        v-if="field.type === 'select'"
        :required="field.required"
        v-model="model[field.id]"
      >
        <option disabled selected hidden value="">{{
          field.placeholder
        }}</option>
        <option v-for="option of field.options" :key="option" :value="option">{{
          option
        }}</option>
      </select>
      <input
        v-else
        :type="field.type"
        :id="field.id"
        :placeholder="field.placeholder"
        v-model="model[field.id]"
        :required="field.required"
      />
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
  gap: 4px 20px;
  grid-column: 1/3;
}

input,
select {
  border: 2px solid $light-gray;
  border-radius: 4px;
  outline: none;
  margin-bottom: 20px;
  font-size: 1rem;
  padding: 0.75rem;
  line-height: 1;
  grid-column: 1/3;
}

input:not(:placeholder-shown):invalid {
  border-color: $error;
}

select {
  line-height: 1.2;
}

select:invalid,
input::placeholder {
  color: $gray;
  opacity: 1;
}

label {
  text-align: left;
  grid-column: 1/2;
}

button {
  grid-column: 1/3;
}
</style>
