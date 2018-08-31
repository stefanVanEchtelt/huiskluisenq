import Vue from 'vue'

export default {
    state: {
        outsideLights: []
    },
    mutations: {
        setOutsideLights(state, outsideLights) {
            outsideLights.forEach((outsideLight) => {
                this.commit('setOutsideLight', outsideLight);
            });
        },
        setOutsideLight(state, outsideLight) {
            let outsideLightExists = state.outsideLights.find(outsideLightSearch => outsideLightSearch.id == outsideLight.id);
            if (outsideLightExists !== undefined) {
                state.outsideLights.splice(state.outsideLights.indexOf(outsideLightExists), 1);
            }
            state.outsideLights.push(outsideLight);
        },
        addEmptyOutsideLight(state, houseId) {
            // TODO set sort
            Vue.axios.post('/api/outside/light', {
                house_id: houseId,
                amount: 0,
            }).then((response) => {
                this.commit('setOutsideLight', response.data);
            })
        },
        updateOutsideLight(state, outsideLight) {
            let outsideLightExists = state.outsideLights.find(outsideLightSearch => outsideLightSearch.id == outsideLight.id);
            if (outsideLightExists !== undefined) {
                Vue.axios.put('/api/outside/light/' + outsideLight.id, outsideLight).then((response) => {
                    this.commit('setOutsideLight', response.data);
                });
            }
        },
        deleteOutsideLight(state, outsideLightId) {
            let outsideLightsExists = state.outsideLights.find(outsideLightsSearch => outsideLightsSearch.id == outsideLightId);
            if (outsideLightsExists !== undefined) {
                Vue.axios.delete('/api/outside/light/' + outsideLightId).then((response) => {
                    state.outsideLights.splice(state.outsideLights.indexOf(outsideLightsExists), 1);
                });
            }
        }
    },
    actions: {
        loadOutsideLightsByHouse(state, houseId) {
            Vue.axios.get('/api/outside/light/' + houseId + '/house').then((response) => {
                this.commit('setOutsideLights', response.data);
            });
        }
    },
    getters: {
        getOutsideLightsByHouse: (state) => (houseId) => {
            // todo sort
            return state.outsideLights.filter(outsideLight => outsideLight.house_id == houseId);
        }
    }
}