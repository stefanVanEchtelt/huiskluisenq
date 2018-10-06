import Vue from 'vue'
import Room from './rooms'
import Floor from './floors'

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
        addRadiator(state, data) {
            Vue.axios.post('/api/radiator', data).then((response) => {
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
        deleteRadiator(state, radiatorId) {
            let radiatorExists = state.radiators.find(radiatorSearch => radiatorSearch.id == radiatorId);
            if (radiatorExists !== undefined) {
                Vue.axios.delete('/api/radiator/' + radiatorId).then((response) => {
                    state.radiators.splice(state.radiators.indexOf(radiatorExists), 1);
                });
            }
        }
    },
    actions: {
        loadRadiatorsByRoom(state, roomId) {
            Vue.axios.get('/api/radiator/' + roomId + '/room').then((response) => {
                this.commit('setRadiators', response.data);
            });
        },
        loadRadiatorsByHouse(state, houseId) {
            Vue.axios.get('/api/radiator/' + houseId + '/house').then((response) => {
                this.commit('setRadiators', response.data);
            });
        }
    },
    getters: {
        getRadiatorsByRoom: (state) => (roomId) => {
            // todo sort check if needed
            return state.radiators.filter(radiator => radiator.room_id == roomId);
        },
        getRadiatorsByHouse: (state) => (houseId) => {
            return state.radiators.filter(
                radiator => {
                    let room = Room.getters.getRoom(Room.state, radiator.room_id);
                    let floor = Floor.getters.findFloor(Floor.state, room.floor_id);
                    if (floor && floor != undefined) {
                        return floor.house_id == houseId;
                    }
                }
            );
        }
    }
}