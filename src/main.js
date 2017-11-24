import Vue from 'vue'
import App from './App'

import VueDynamicForm from './index.js'
Vue.use(VueDynamicForm)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})