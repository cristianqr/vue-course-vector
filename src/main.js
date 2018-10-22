import Vue from 'vue'
import App from './App.vue'
import './shared'
import './shared/directives'
import './shared/filters';

import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
