<script>
import { store } from '../data/store.js'

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    mounted() {
    }
}
</script>

<template>
    <main>
        <section class="container d-flex">
            <div v-for="card in store.cards" class="card">
                <img :src=card.card_images[0].image_url_small>
                <h4>{{ card.name }}</h4>
                <h6>{{ card.archetype }}</h6>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: orange;
    padding: 5rem 0;
}

section {
    background-color: white;
    padding: 3rem;
}

.d-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    width: calc(100% / 5 - 1rem);
    background-color: orange;
    margin-bottom: 2rem;

    img {
        width: 100%;
    }

    h4,
    h6 {
        text-align: center;
    }
}
</style>