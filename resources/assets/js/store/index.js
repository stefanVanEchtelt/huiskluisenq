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
import lights from './modules/lights'
import radiators from './modules/radiators'
import outsideDevices from './modules/outsideDevices'
import outsideLights from './modules/outsideLights'
import informationTypes from './modules/informationTypes'
import informationSources from './modules/informationSources'
import cookingTypes from './modules/cookingTypes'

export default new VueX.Store({
    modules: {
        house,
        floors,
        rooms,
        devices,
        lights,
        radiators,
        outsideDevices,
        outsideLights,
        informationTypes,
        informationSources,
        cookingTypes,
    }
});
