import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Houses from '../components/house/Houses'
import HouseView from '../components/house/HouseView'

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Houses
        },
        {
            name: 'homeView',
            path: '/house/:houseId',
            component: HouseView
        }
    ]
})