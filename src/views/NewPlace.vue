<template>
  <Form :onSubmit="checkForm" :fields="fields" :model="{ place }" buttonText="Submit" />
</template>

<script lang="ts">
import Form from '@/components/Form.vue'
import { Component, Vue } from 'vue-property-decorator'
import { PlaceInput } from '@/types/placeInput'
import { FormField } from '@/types/formField'

@Component({
  components: {
    Form
  }
})
export default class NewPlace extends Vue {
  private place: PlaceInput = {
    name: '',
    address: '',
    description: ''
  }

  private fields: FormField[] = [
    {
      label: 'Name',
      type: 'text',
      id: 'name',
      required: true
    },
    { label: 'Address', type: 'text', id: 'address', required: true },
    { label: 'Description', type: 'text', id: 'description', required: true }
  ]

  private checkForm(event: Event) {
    event.preventDefault()

    console.log('Sumbitted', this.place)
  }
}
</script>
