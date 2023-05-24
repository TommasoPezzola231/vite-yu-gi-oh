<script>
import { store } from '../data/store.js'
import axios from 'axios'

export default {
    name: "AppMain",
    data() {
        return {
            store,
            archetypeAttivo: `"C"`
        }
    },
    methods: {
        filteredCards() {
            console.log(this.store.urlAPI),
                this.changeURL(this.archetypeAttivo)


            axios.get(store.urlAPI).then(result => {
                this.store.cards = result.data.data
            })
        },
        changeURL(element) {
            this.store.urlAPI = "https://db.ygoprodeck.com/api/v7/cardinfo.php",
                this.store.urlAPI += `?archetype=${element}`

        }
    },
    mounted() {

    }
}
</script>

<template>
    <main>
        <div class="container d-flex">
            <select @change="filteredCards" v-model="archetypeAttivo">
                <option v-for="archetype in this.store.archetypes">{{ archetype.archetype_name }}</option>
            </select>

            <div>
                <p>Found {{ store.cards.length }} cards</p>
            </div>
        </div>


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

p {
    font-size: 20px;
    font-weight: bold;
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