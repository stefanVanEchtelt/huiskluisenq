import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Houses from '../components/house/Houses'
import CookedOn from '../components/house/_old/questions/CookedOn'
import HowManyResidents from '../components/house/_old/questions/HowManyResidents'
import HowManyFloors from '../components/house/_old/questions/HowManyFloors'
import WitchRooms from '../components/house/_old/questions/WitchRooms'
import WitchDevices from '../components/house/_old/questions/WitchDevices'
import WitchLights from '../components/house/_old/questions/WitchLights.vue'
import WitchRadiator from '../components/house/_old/questions/WitchRadiator.vue'
import WitchOutsideDevices from '../components/house/_old/questions/WitchOutsideDevices.vue'
import WitchOutsideLights from '../components/house/_old/questions/WitchOutsideLights.vue'
import HouseOverview from '../components/house/HouseView'

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
            name: 'houseCookedOn',
            path: '/house/:houseId/cooked/on',
            component: CookedOn
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