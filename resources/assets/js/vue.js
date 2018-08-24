import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

const app = new Vue({
    el: '#vueHouse',
    router,
    store,
    render: h => h(App),
});