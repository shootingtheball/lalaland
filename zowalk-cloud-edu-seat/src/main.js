import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/vuex/store.js'   //vuex
import islogin from '@/util/auth.js'
// Vue.config.productionTip = false
import api from '@/http/api.js'

Vue.prototype.$api= api;

router.beforeEach((to,from,next) => {
  if(to.meta.require){
    if(islogin()){
      next()
    }else{
      alert('您还未登录')
      next({path:'/login'})
    }
  }else{
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
