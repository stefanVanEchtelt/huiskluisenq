import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Houses from '../components/house/Houses'
import HowManyFloors from '../components/house/questions/HowManyFloors'
import WitchRooms from '../components/house/questions/WitchRooms'
import WitchDevices from '../components/house/questions/WitchDevices'

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'houseFloorCount',
            path: '/house/:houseId/floors',
            component: HowManyFloors
        },
        {
            name: 'houseFloor',
            path: '/house/:houseId/floor/:floorId',
            component: WitchRooms,
        },
        {
            name: 'houseRoomDevices',
            path: '/house/:houseId/devices/:roomId',
            component: WitchDevices,
        },
    ]
})