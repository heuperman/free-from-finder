<template>
  <div>
    <Card
      v-for="place in places"
      :key="place.id"
      :title="place.name"
      :link="toMapLink(place.name, place.address)"
      :linkText="place.address"
      :content="place.description"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'
import { database } from '@/firebase'
import { Place } from '@/types/place'

@Component({
  components: {
    Card
  }
})
export default class Places extends Vue {
  get places(): Place[] {
    return this.$store.state.places
  }

  set places(places: Place[]) {
    this.$store.commit('setPlaces', places)
  }

  private async fetchPlaces() {
    try {
      const result = await database
        .collection('places')
        .limit(10)
        .get()

      const fetchedPlaces: Place[] = []
      result.docs.forEach(doc => {
        fetchedPlaces.push({ ...doc.data(), id: doc.id } as Place)
      })
      this.places = fetchedPlaces
    } catch (error) {
      alert(error.message)
    }
  }

  private toMapLink(name: string, address: string) {
    return `https://www.google.co.uk/maps/search/?api=1&query=${name}, ${address}`
  }

  mounted() {
    if (!this.places.length) {
      this.fetchPlaces()
    }
  }
}
</script>
