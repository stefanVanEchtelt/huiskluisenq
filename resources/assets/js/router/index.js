import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Houses from '../components/house/Houses'
import HowManyResidents from '../components/house/questions/HowManyResidents'
import HowManyFloors from '../components/house/questions/HowManyFloors'
import WitchRooms from '../components/house/questions/WitchRooms'
import WitchDevices from '../components/house/questions/WitchDevices'
import WitchLights from '../components/house/questions/WitchLights.vue'
import WitchRadiator from '../components/house/questions/WitchRadiator.vue'
import WitchOutsideDevices from '../components/house/questions/WitchOutsideDevices.vue'
import WitchOutsideLights from '../components/house/questions/WitchOutsideLights.vue'
import HouseOverview from '../components/house/HouseOverview'

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Houses
        },
        {
            name: 'houseResidents',
            path: '/house/:houseId/residents',
            component: HowManyResidents
        },
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
            path: '/house/:houseId/outside/devices',
            component: WitchOutsideDevices,
        },
        {
            name: 'houseLightsOutside',
            path: '/house/:houseId/outside/lights',
            component: WitchOutsideLights,
        },
        {
            name: 'houseOverview',
            path: '/house/:houseId/overview',
            component: HouseOverview,
        },
    ]
})