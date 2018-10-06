import Vue from 'vue'
import Floors from './floors'
import House from './house'

export default {
    state: {
        rooms: []
    },
    mutations: {
        setRooms(state, rooms) {
            rooms.forEach((room) => {
                this.commit('setRoom', room);
            });
        },
        setRoom(state, room) {
            let roomExists = state.rooms.find(roomSearch => roomSearch.id == room.id);
            if (roomExists !== undefined) {
                state.rooms.splice(state.rooms.indexOf(roomExists), 1);
            }
            state.rooms.push(room);
        },
        addEmptyRoom(state, floorId) {
            Vue.axios.post('/api/room', {
                name: '',
                square_meter: '',
                floor_id: floorId
            }).then((response) => {
                this.commit('setRoom', response.data);
            })
        },
        addTotalRoom(state, data) {
            Vue.axios.post('/api/full/room', data).then((response) => {
                this.commit('setRoom', response.data);
                this.commit('setDevices', response.data.devices);
                this.commit('setLights', response.data.lights);
                this.commit('setRadiators', response.data.radiators);
            })
        },
        updateRoom(state, room) {
            let roomExists = state.rooms.find(roomSearch => roomSearch.id == room.id);
            if (roomExists !== undefined) {
                Vue.axios.put('/api/room/' + room.id, room).then((response) => {
                    this.commit('setRoom', response.data);
                });
            }
        },
        deleteRoom(state, roomId) {
            let roomExists = state.rooms.find(roomSearch => roomSearch.id == roomId);
            if (roomExists !== undefined) {
                Vue.axios.delete('/api/room/' + roomId).then((response) => {
                    state.rooms.splice(state.rooms.indexOf(roomExists), 1);
                });
            }
        }
    },
    actions: {
        loadRoomsByFloor(state, floorId) {
            Vue.axios.get('/api/floor/' + floorId + '/rooms').then((response) => {
                this.commit('setRooms', response.data);
            });
        },
        loadAllRoomsByHouse(state, houseId) {
            Vue.axios.get('/api/house/' + houseId + '/rooms').then((response) => {
                this.commit('setRooms', response.data);
            });
        },
        loadRoom(state, roomId) {
            Vue.axios.get('/api/room/' + roomId).then((response) => {
                this.commit('setRoom', response.data);
            });
        }
    },

    getters: {
        getRoomsByFloor: (state) => (floorId) => {
            // todo sort
            return state.rooms.filter(room => room.floor_id == floorId);
        },
        getRoom: (state) => (roomId) => {
            return state.rooms.find(room => room.id == roomId);
        },
        getRoomsByHouse: (state) => (houseId) => {
            // TODO SORT THOSE ITEMS
            return state.rooms.filter(room => {
                let floor = Floors.state.floors.find(floorSearch => floorSearch.id == room.floor_id);
                if (floor && floor != undefined) {
                    let house = House.state.houses.find(house => house.id == floor.house_id);
                    if (house && house != undefined && house.id == houseId) {
                        return true;
                    }
                }

                return false;
            }).sort(function(a,b) {return (a.created_at > b.created_at) ? 1 : ((b.created_at > a.created_at) ? -1 : 0);} );
            // TODO !!!! FIX THE SORT ORDER IMPORTANT!!!!!!!
        }
    }
}