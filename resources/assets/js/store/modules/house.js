import Vue from 'vue'
import router from '../../router'

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
        },
        updateHouse(state, house) {
            console.log(house);
            Vue.axios.put('/api/house/' + house.id, house).then((response) => {
                console.log(response);
                // this.commit('setHouse', response.data);
            })
        },
        addHouse(state) {
            Vue.axios.post('/api/house', {
                user_id: CONFIG.USER_ID,
                residents_count: 1
            }).then((response) => {
                this.commit('setHouse', response.data);
                router.push('/house/' + response.data.id);
            })
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
        getHouse: (state) => (houseId) => {
            return state.houses.find(house => house.id == houseId);
        }
    }
}