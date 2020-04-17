import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueTyperPlugin from 'vue-typer'
import "minireset.css"
import './assets/main.scss'
Vue.use(VueTyperPlugin)
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
