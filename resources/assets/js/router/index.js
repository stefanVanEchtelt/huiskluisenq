import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Houses from '../components/house/Houses'
import HowManyFloors from '../components/house/questions/HowManyFloors'
import WitchRooms from '../components/house/questions/WitchRooms'
import WitchDevices from '../components/house/questions/WitchDevices'
import WitchLights from '../components/house/questions/WitchLights.vue'
import WitchRadiator from '../components/house/questions/WitchRadiator.vue'
import WitchDevicesOutside from '../components/house/questions/WitchDevicesOutside.vue'
import WitchLightsOutside from '../components/house/questions/WitchLightsOutside.vue'

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
        {
            name: 'houseRoomLights',
            path: '/house/:houseId/lights/:roomId',
            component: WitchLights,
        },
        {
            name: 'houseRoomRadiators',
            path: '/house/:houseId/radiators/:roomId',
            component: WitchRadiator,
        },
        {
            name: 'houseDevicesOutside',
            path: '/house/:houseId/devices/outside',
            component: WitchDevicesOutside,
        },
        {
            name: 'houseLightsOutside',
            path: '/house/:houseId/lights/outside',
            component: WitchLightsOutside,
        },
    ]
})