<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'
import { store } from './data/store.js'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store: store,
    }
  },
  mounted() {
    axios.get(store.urlAPI).then(result => {
      this.store.cards = result.data.data
    })

    axios.get(store.urlAPIArchetypes).then(r => {
      console.log(r.data)
      this.store.archetypes = r.data
    })
  }
}


</script>

<template>
  <AppHeader />

  <AppMain />
</template>

<style lang="scss" scoped></style>
