import Vue from 'vue'
import App from './index.vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import store from '../../store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')