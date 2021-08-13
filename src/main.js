import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './components/routes/router'
import { BootstrapVue } from 'bootstrap-vue'


Vue.use(VueRouter)
Vue.use(BootstrapVue)



new Vue({
  render: h => h(App),
router
}).$mount('#app')
