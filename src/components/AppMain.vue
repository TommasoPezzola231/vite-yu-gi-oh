<script>
import { store } from '../data/store.js'

export default {
    name: "AppMain",
    props: [
        "cards"
    ],
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log(this.cards)
    }
}
</script>

<template>
    <main>
        <section class="d-flex">
            <div v-for="card in cards" class="card">

            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.d-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.card {
    width: 20%;
    padding: 1rem;

    &img {
        width: 100%;
    }
}
</style>