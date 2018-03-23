// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import  VueResource  from 'vue-resource'
import routes from './router/'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
/* eslint-disable no-new */

const router = new VueRouter({
	routes
})
new Vue({
  router,
//template: '<App/>',
//components: { App }
}).$mount('#app')
