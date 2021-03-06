import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import idxAxios from '@/idxLib/utils/Axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(ElementUI)
Vue.use(idxAxios)

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
