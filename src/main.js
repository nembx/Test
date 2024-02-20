import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import animated from 'animate.css'

axios.defaults.baseURL = 'http://localhost:8081/'
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  animated,
  render: h => h(App)
}).$mount('#app')
