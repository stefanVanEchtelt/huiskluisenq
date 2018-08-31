import Vue from 'vue'

export default {
    state: {
        devices: []
    },
    mutations: {
        setDevices(state, devices) {
            devices.forEach((device) => {
                this.commit('setDevice', device);
            });
        },
        setDevice(state, device) {
            let deviceExists = state.devices.find(deviceSearch => deviceSearch.id == device.id);
            if (deviceExists !== undefined) {
                state.devices.splice(state.devices.indexOf(deviceExists), 1);
            }
            state.devices.push(device);
        },
        addEmptyDevice(state, roomId) {
            // TODO set sort
            Vue.axios.post('/api/device', {
                room_id: roomId,
                type_id: 1,
                sort: 1,
            }).then((response) => {
                this.commit('setDevice', response.data);
            })
        },
        updateDevice(state, device) {
            let deviceExists = state.devices.find(deviceSearch => deviceSearch.id == device.id);
            if (deviceExists !== undefined) {
                Vue.axios.put('/api/device/' + device.id, device).then((response) => {
                    this.commit('setDevice', response.data);
                });
            }
        },
        deleteDevice(state, deviceId) {
            let deviceExists = state.devices.find(deviceSearch => deviceSearch.id == deviceId);
            if (deviceExists !== undefined) {
                Vue.axios.delete('/api/device/' + deviceId).then((response) => {
                    state.devices.splice(state.devices.indexOf(deviceExists), 1);
                });
            }
        }
    },
    actions: {
        loadDevicesByRoom(state, roomId) {
            Vue.axios.get('/api/device/' + roomId + '/room').then((response) => {
                this.commit('setDevices', response.data);
            });
        }
    },
    getters: {
        getDevicesByRoom: (state) => (roomId) => {
            // todo sort
            return state.devices.filter(device => device.room_id == roomId);
        }
    }
}