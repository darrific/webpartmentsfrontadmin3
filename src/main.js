import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios;

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')

if (token) {
  Axios.defaults.headers.common['Authorization'] = "Bearer " + token
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
