import { reactive } from 'vue'

export const store = reactive({
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    urlAPIArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cards: [],
    archetypes: []
})