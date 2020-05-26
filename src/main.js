import Vue from 'vue'
//import VueAxios from 'vue-axios'
import App from './App.vue'
import './plugins/axiosc'
import './plugins/element.js'
import router from './router'
import store from './store'
import wbapi from './utils/websiteApi'

Vue.config.productionTip = false
//Vue.use(VueAxios, axios);
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.prototype.$api = wbapi;