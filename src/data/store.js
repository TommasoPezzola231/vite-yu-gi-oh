import { reactive } from 'vue'

export const store = reactive({
    urlAPI: "",
    cards: [],

    urlAPIArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypes: []
})