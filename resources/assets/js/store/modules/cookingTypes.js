import Vue from 'vue'

export default {
    state: {
        cookingTypes: []
    },
    mutations: {
        setCookingTypes(state, cookingTypes) {
            cookingTypes.forEach((informationType) => {
                let informationTypeExists = state.cookingTypes.find(cookingTypeSearch => cookingTypeSearch.id == informationType.id);
                if (informationTypeExists !== undefined) {
                    state.cookingTypes.splice(state.cookingTypes.indexOf(informationTypeExists), 1);
                }
                state.cookingTypes.push(informationType);
            });
        },
    },
    actions: {
        loadCookingTypes(state) {
            Vue.axios.get('/api/cooking/type/').then((response) => {
                this.commit('setCookingTypes', response.data);
            });
        },
    },
    getters: {
        allCookingTypes: (state) => () => {
            return state.cookingTypes;
        },
    }
}