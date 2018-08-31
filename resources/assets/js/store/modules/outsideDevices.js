import Vue from 'vue'

export default {
    state: {
        outsideDevices: []
    },
    mutations: {
        setOutsideDevices(state, outsideDevices) {
            outsideDevices.forEach((outsideDevice) => {
                this.commit('setOutsideDevice', outsideDevice);
            });
        },
        setOutsideDevice(state, outsideDevice) {
            let outsideDeviceExists = state.outsideDevices.find(outsideDeviceSearch => outsideDeviceSearch.id == outsideDevice.id);
            if (outsideDeviceExists !== undefined) {
                state.outsideDevices.splice(state.outsideDevices.indexOf(outsideDeviceExists), 1);
            }
            state.outsideDevices.push(outsideDevice);
        },
        addEmptyOutsideDevice(state, houseId) {
            // TODO set sort
            Vue.axios.post('/api/outside/device', {
                house_id: houseId,
                amount: 0,
            }).then((response) => {
                this.commit('setOutsideDevice', response.data);
            })
        },
        updateOutsideDevice(state, outsideDevice) {
            let outsideDeviceExists = state.outsideDevices.find(outsideDeviceSearch => outsideDeviceSearch.id == outsideDevice.id);
            if (outsideDeviceExists !== undefined) {
                Vue.axios.put('/api/outside/device/' + outsideDevice.id, outsideDevice).then((response) => {
                    console.log(response);
                    this.commit('setOutsideDevice', response.data);
                });
            }
        },
        deleteOutsideDevice(state, outsideDeviceId) {
            let outsideDeviceExists = state.outsideDevices.find(outsideDeviceSearch => outsideDeviceSearch.id == outsideDeviceId);
            if (outsideDeviceExists !== undefined) {
                Vue.axios.delete('/api/outside/device/' + outsideDeviceId).then((response) => {
                    state.outsideDevices.splice(state.outsideDevices.indexOf(outsideDeviceExists), 1);
                });
            }
        }
    },
    actions: {
        loadOutsideDevicesByHouse(state, houseId) {
            Vue.axios.get('/api/outside/device/' + houseId + '/house').then((response) => {
                this.commit('setOutsideDevices', response.data);
            });
        }
    },
    getters: {
        getOutsideDevicesByHouse: (state) => (houseId) => {
            // todo sort
            return state.outsideDevices.filter(outsideDevice => outsideDevice.house_id == houseId);
        }
    }
}