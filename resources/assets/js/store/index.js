import Vue from 'vue'
import VueX from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

var token = document.head.querySelector('meta[name="csrf-token"]');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
window.axios.defaults.headers.common['CSRF-TOKEN'] = token.content;
Vue.use(VueAxios, axios);
Vue.use(VueX);

import house from './modules/house'
import floors from './modules/floors'
import rooms from './modules/rooms'
import devices from './modules/devices'

export default new VueX.Store({
    modules: {
        house,
        floors,
        rooms,
        devices,
    }
})


//
// // const findByKey = (key, targetProp) => state => val => state[key].find(x => x[targetProp] === val);
// const findById = function () {
//     console.log('x');
// }
//
//
// export default new VueX.Store({
//     state: {
//         houses: [],
//         floors: []
//     },
//     mutations: {
//         setHouse(state, house) {
//             var filteredHouses = state.houses.filter(e => e.id === house.id);
//             filteredHouses.forEach(filteredHouse => state.houses.splice(state.houses.findIndex(item => item.id === filteredHouse.id), 1));
//             state.houses.push(house);
//         },
//         setFloors(state, floors) {
//             let deleteThoseFloors = state.floors.filter((floor) => {
//                 return floors.indexOf(floor.id) === -1;
//             });
//
//             console.log(xxx);
//
//             floors.forEach((floor) => {
//                 state.floors.push(floor);
//             });
//
//
//             // var filteredFloors = state.floors.filter(e => e.id inf house.id);
//             // filteredHouses.forEach(filteredHouse => state.houses.splice(state.houses.findIndex(item => item.id === filteredHouse.id), 1));
//         },
//
//         // setRooms(state, floorRooms) {
//         //     floorRooms.forEach((floor) => {
//         //         console.log('floors');
//         //         console.log(state.house.floors);
//         //         state.house.floors[floor.floor_id].push(floor);
//         //     });
//         // },
//         // setFloorCount(state, value) {
//         //     value = parseInt(value);
//         //     if (value <= state.house.floors.length) {
//         //         state.house.floors.splice(value, state.house.floors.length - value);
//         //     } else if (value >= state.house.floors.length) {
//         //         var i;
//         //         for (i = 0; i < value; i++) {
//         //             if (!state.house.floors[i]) {
//         //                 state.house.floors[i] = {
//         //                     rooms: {}
//         //                 };
//         //             }
//         //         }
//         //     }
//         //
//         //     state.house.floorCount = parseInt(value);
//         // }
//     },
//     actions: {
//         loadHouse(state, houseId) {
//             Vue.axios.get('/api/house/' + houseId).then((response) => {
//                 this.commit('setFloors', response.data.floors);
//                 this.commit('setFloors', response.data.floors);
//                 delete response.data.floors;
//                 this.commit('setHouse', response.data);
//             });
//         },
//         // loadRooms(state, floorId) {
//         //     Vue.axios.get('/api/floor/' + floorId + '/rooms').then((response) => {
//         //         console.log('resssss');
//         //         console.log(response);
//         //         this.commit('setRooms', response.data);
//         //     });
//         // }
//     },
//     getters: {
//         getHouse(id) {
//
//         },
//         getFloor(id) {
//
//         }
//     }
// })