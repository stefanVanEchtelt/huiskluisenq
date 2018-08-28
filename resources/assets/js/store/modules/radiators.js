import Vue from 'vue'

export default {
    state: {
        radiators: []
    },
    mutations: {
        setRadiators(state, radiators) {
            radiators.forEach((radiator) => {
                this.commit('setRadiator', radiator);
            });
        },
        setRadiator(state, radiator) {
            let radiatorExists = state.radiators.find(radiatorSearch => radiatorSearch.id == radiator.id);
            if (radiatorExists !== undefined) {
                state.radiators.splice(state.radiators.indexOf(radiatorExists), 1);
            }
            state.radiators.push(radiator);
        },
        addEmptyRadiator(state, roomId) {
            // TODO set sort
            Vue.axios.post('/api/radiator', {
                room_id: roomId,
                length: 0,
            }).then((response) => {
                this.commit('setRadiator', response.data);
            })
        },
        updateRadiator(state, radiator) {
            let radiatorExists = state.radiators.find(radiatorSearch => radiatorSearch.id == radiator.id);
            if (radiatorExists !== undefined) {
                Vue.axios.put('/api/radiator/' + radiator.id, radiator).then((response) => {
                    this.commit('setRadiator', response.data);
                });
            }
        },
    },
    actions: {
        loadRadiatorsByRoom(state, roomId) {
            Vue.axios.get('/api/radiator/' + roomId + '/room').then((response) => {
                this.commit('setRadiators', response.data);
            });
        }
    },
    getters: {
        getRadiatorsByRoom: (state) => (roomId) => {
            // todo sort check if needed
            return state.radiators.filter(radiator => radiator.room_id == roomId);
        }
    }
}