<template>
  <Form
    :onSubmit="checkForm"
    :fields="fields"
    :model="place"
    buttonText="Submit"
  />
</template>

<script lang="ts">
import Form from '@/components/Form.vue'
import { Component, Vue } from 'vue-property-decorator'
import { PlaceInput } from '@/types/placeInput'
import { FormField } from '@/types/formField'
import { database } from '@/firebase'

@Component({
  components: {
    Form
  }
})
export default class NewPlace extends Vue {
  private place: PlaceInput = {
    name: '',
    address: '',
    category: '',
    description: ''
  }

  private fields: FormField[] = [
    {
      label: 'Name',
      type: 'text',
      id: 'name',
      placeholder: 'Place name',
      required: true
    },
    {
      label: 'Address',
      type: 'text',
      id: 'address',
      placeholder: 'Address',
      required: true
    },
    {
      label: 'Category',
      type: 'select',
      id: 'category',
      placeholder: 'Pick a category',
      required: true,
      options: ['Café', 'Restaurant', 'Supermarket', 'Market']
    },
    {
      label: 'Description',
      type: 'text',
      id: 'description',
      placeholder: 'Description',
      required: true
    }
  ]

  private checkForm(event: Event) {
    event.preventDefault()

    try {
      database.collection('places').add(this.place)
      this.$router.push({ name: 'Places' })
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>
