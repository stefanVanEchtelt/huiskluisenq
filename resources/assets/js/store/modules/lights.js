import Vue from 'vue'

export default {
    state: {
        lights: []
    },
    mutations: {
        setLights(state, lights) {
            lights.forEach((light) => {
                this.commit('setLight', light);
            });
        },
        setLight(state, light) {
            let lightExists = state.lights.find(lightSearch => lightSearch.id == light.id);
            if (lightExists !== undefined) {
                state.lights.splice(state.lights.indexOf(lightExists), 1);
            }
            state.lights.push(light);
        },
        addEmptyLight(state, roomId) {
            // TODO set sort
            Vue.axios.post('/api/light', {
                room_id: roomId,
                amount: 0,
            }).then((response) => {
                this.commit('setLight', response.data);
            })
        },
        updateLight(state, light) {
            let lightExists = state.lights.find(LightSearch => LightSearch.id == light.id);
            if (lightExists !== undefined) {
                Vue.axios.put('/api/light/' + light.id, light).then((response) => {
                    this.commit('setLight', response.data);
                });
            }
        },
    },
    actions: {
        loadLightsByRoom(state, roomId) {
            Vue.axios.get('/api/light/' + roomId + '/room').then((response) => {
                this.commit('setLights', response.data);
            });
        }
    },
    getters: {
        getLightsByRoom: (state) => (roomId) => {
            // todo sort check if needed
            return state.lights.filter(light => light.room_id == roomId);
        }
    }
}