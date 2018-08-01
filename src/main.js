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
	mode: 'history',
	routes
})

router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		if(sessionStorage.getItem('token')){
			next();
		}else{
			next({
				path:'/Login'
			})
		}
	}else{
		next();
	}
})

new Vue({
  router,
//template: '<App/>',
//components: { App }
}).$mount('#app')
