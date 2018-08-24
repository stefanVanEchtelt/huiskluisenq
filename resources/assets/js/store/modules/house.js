import Vue from 'vue'

export default {
    state: {
        houses: []
    },
    mutations: {
        setHouse(state, house) {
            let houseExists = state.houses.find(houseSearch => houseSearch.id == house.id) !== undefined;
            if (houseExists !== undefined) {
                state.houses.splice(state.houses.indexOf(houseExists), 1);
            }
            state.houses.push(house);
        }
    },
    actions: {
        loadHouse(state, houseId) {
            Vue.axios.get('/api/house/' + houseId).then((response) => {
                this.commit('setHouse', response.data);
            });
        }
    },
    getters: {
        getHouse(state, houseId) {
            return state.houses.find(house => house.id == houseId) !== undefined;
        }
    }
}