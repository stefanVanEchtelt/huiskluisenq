import Vue from 'vue'
import Room from './rooms'
import Floor from './floors'

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
        addLight(state, data) {
            Vue.axios.post('/api/light', data).then((response) => {
                this.commit('setLight', response.data);
            });
        },
        updateLight(state, light) {
            let lightExists = state.lights.find(LightSearch => LightSearch.id == light.id);
            if (lightExists !== undefined) {
                Vue.axios.put('/api/light/' + light.id, light).then((response) => {
                    this.commit('setLight', response.data);
                });
            }
        },
        deleteLight(state, lightId) {
            let lightExists = state.lights.find(lightSearch => lightSearch.id == lightId);
            if (lightExists !== undefined) {
                Vue.axios.delete('/api/light/' + lightId).then((response) => {
                    state.lights.splice(state.lights.indexOf(lightExists), 1);
                });
            }
        }
    },
    actions: {
        loadLightsByRoom(state, roomId) {
            Vue.axios.get('/api/light/' + roomId + '/room').then((response) => {
                this.commit('setLights', response.data);
            });
        },
        loadLightsByHouse(state, houseId) {
            Vue.axios.get('/api/light/' + houseId + '/house').then((response) => {
                this.commit('setLights', response.data);
            });
        }
    },
    getters: {
        getLightsByRoom: (state) => (roomId) => {
            // todo sort check if needed
            return state.lights.filter(light => light.room_id == roomId);
        },
        getLightsByHouse: (state) => (houseId) => {
            return state.lights.filter(
                light => {
                    let room = Room.getters.getRoom(Room.state, light.room_id);
                    let floor = Floor.getters.findFloor(Floor.state, room.floor_id);
                    if (floor && floor != undefined) {
                        return floor.house_id == houseId;
                    }
                }
            );
        }
    }
}