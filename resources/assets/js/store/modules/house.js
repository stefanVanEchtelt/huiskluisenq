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
        addHouse(state) {
            Vue.axios.post('/api/house', {
                user_id: CONFIG.USER_IDw
            }).then((response) => {
                router.push('/house/' + response.data.id + '/floors');
                this.commit('setHouse', response.data);
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
        getHouse(state, houseId) {
            return state.houses.find(house => house.id == houseId) !== undefined;
        }
    }
}