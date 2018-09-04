import Vue from 'vue'

export default {
    state: {
        informationSources: []
    },
    mutations: {
        setInformationSources(state, informationSources) {
            informationSources.forEach((informationSource) => {
                let informationSourceExists = state.informationSources.find(informationSourceSearch => informationSourceSearch.id == informationSource.id);
                if (informationSourceExists !== undefined) {
                    state.informationSources.splice(state.informationSources.indexOf(informationSourceExists), 1);
                }
                state.informationSources.push(informationSource);
            });
        },
    },
    actions: {
        loadInformationSources(state) {
            Vue.axios.get('/api/information/source/').then((response) => {
                this.commit('setInformationSources', response.data);
            });
        },
    },
    getters: {
        allInformationSources: (state) => () => {
            return state.informationSources;
        },
    }
}