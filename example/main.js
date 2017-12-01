import Vue from 'vue'
import App from './App'

// import element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

// import VueDynamicForm
import VueDynamicForm from '../src/index.js'

// use element-ui
Vue.use(ElementUI)

// use VueDynamicForm
Vue.use(VueDynamicForm)

// disable production top into browser console
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
