import Vue from 'vue'

export default {
    state: {
        informationTypes: []
    },
    mutations: {
        setInformationTypes(state, informationTypes) {
            informationTypes.forEach((informationType) => {
                let informationTypeExists = state.informationTypes.find(informationTypeSearch => informationTypeSearch.id == informationType.id);
                if (informationTypeExists !== undefined) {
                    state.informationTypes.splice(state.informationTypes.indexOf(informationTypeExists), 1);
                }
                state.informationTypes.push(informationType);
            });
        },
    },
    actions: {
        loadInformationTypes(state) {
            Vue.axios.get('/api/information/type/').then((response) => {
                this.commit('setInformationTypes', response.data);
            });
        },
    },
    getters: {
        allInformationTypes: (state) => () => {
            return state.informationTypes;
        },
    }
}