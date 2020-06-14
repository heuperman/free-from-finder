<template>
  <div>
    <Spinner v-if="loading" class="spinner" />
    <Card
      v-for="place in places"
      :key="place.id"
      :title="place.name"
      :link="toMapLink(place.name, place.address)"
      :linkText="place.address"
      :content="place.description"
      :icon="place.category"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { database } from '@/firebase'
import { Place } from '@/types/place'

@Component({
  components: {
    Card,
    Spinner
  }
})
export default class Places extends Vue {
  get places(): Place[] {
    return this.$store.state.places
  }

  set places(places: Place[]) {
    this.$store.commit('setPlaces', places)
  }

  private loading = false

  private async fetchPlaces() {
    this.loading = true
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
    this.loading = false
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

<style scoped lang="scss">
.spinner {
  height: 66vh;
  width: 100%;
}
</style>
