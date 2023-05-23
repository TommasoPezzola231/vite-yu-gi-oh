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
      console.log(result.data.data)
      this.store.cards = result.data.data
      console.log("secondo console log:", this.store.cards)
    })
  }
}


</script>

<template>
  <AppHeader />

  <AppMain />
</template>

<style lang="scss" scoped></style>
