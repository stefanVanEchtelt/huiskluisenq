import Vue from 'vue'

export default {
    state: {
        floors: []
    },
    mutations: {
        setFloors(state, floors) {
            floors.forEach((floor) => {
                let floorExists = state.floors.find(floorSearch => floorSearch.id == floor.id);
                if (floorExists !== undefined) {
                    state.floors.splice(state.floors.indexOf(floorExists), 1);
                }
                state.floors.push(floor);
            });
        },
        updateFloorsByCount(state, data) {
            // TODO change house
            let sortedFloors = this.getters.getFloorsByHouse(data.houseId);
            if (data.floorCount <= sortedFloors.length) {
                var i;
                for (i = data.floorCount; i < sortedFloors.length; i++) {
                    this.commit('deleteFloor', sortedFloors[i].id);
                }
            } else if (data.floorCount >= sortedFloors.length) {
                var i;
                for (i = sortedFloors.length; i < data.floorCount; i++) {
                    this.commit('createFloor', data.houseId);
                }
            }
        },
        deleteFloor(state, id) {
            // todo remove related Data
            var floor = state.floors.find(existingInstance => existingInstance.id == id);
            if (floor !== undefined) {
                Vue.axios.delete('/api/floor/' + floor.id);
                state.floors.splice(state.floors.indexOf(floor), 1);
            }
        },
        createFloor(state, houseId) {
            // TODO fix house_id and sort
            Vue.axios.post('/api/floor', {
                house_id: houseId,
                sort: 3
            }).then((response) => {
                state.floors.push(response.data);
            });
        }
    },
    actions: {
        loadFloors(state, houseId) {
            Vue.axios.get('/api/house/' + houseId + '/floors').then((response) => {
                this.commit('setFloors', response.data);
            });
        },
    },

    getters: {
        findFloor(state, floorId) {
            return state.floors.find(floorSearch => floorSearch.id == floorId);
        },

        getFloorsByHouse: (state) => (houseId) => {
            return state.floors.filter(floor => floor.house_id == houseId).sort(function(a,b) {return (a.sort > b.sort) ? 1 : ((b.sort > a.sort) ? -1 : 0);} );
        }
    }
}