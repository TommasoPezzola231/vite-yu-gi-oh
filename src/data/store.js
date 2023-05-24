import { reactive } from 'vue'

export const store = reactive({
    urlAPI: `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype="C"`,
    cards: [],

    urlAPIArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypes: []
})