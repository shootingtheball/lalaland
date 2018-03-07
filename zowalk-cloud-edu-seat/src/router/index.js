import Vue from "vue";
import Router from "vue-router";

const _import = require('./_import_production.js')
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

console.log('process.env.NODE_ENV' +process.env.NODE_ENV)

Vue.use(Router);
import Layout from '@/views/layout/layout'

export const RouterMap = [
  {
    path:'/login',
    component:_import('login/index')
  },
  {
    path:'/user',
    component:Layout,
    redirect:'/user/index',
    children:[
      {
        meta:{require:true},
        path:'/user/index',
        component : _import('user/index'),
        name:'个人信息'  
      }
    ]
  },
  {
    path:'/',
    component:Layout,
    redirect:'/homepage',
    children:[
      {
        meta:{require:true},
        path:'/homepage',
        component:_import('homepage/index'),
        name:'主页'
      }
    ]
  },
  {
    path:'/homework',
    component:_import('homework/index'),
    meta:{require:true},
  },
  {
    path:'/prepare',
    component:Layout,
    redirect:'/prepare/index',
    children:[
      {
        meta:{require:true},
        path:'/prepare/index',
        component:_import('prepare/index'),
        name:'备课'
      }
    ]
  },
  {
    path:'/detail',
    component:Layout,
    redirect:'/prepare/detail',
    children:[
      {
        meta:{require:true},
        component:_import('prepare/detail'),
        path:'/prepare/detail',
        name:'准备内容'
      }
    ]
  },
  {
    path:'/live',
    component:_import('live/index'),
    meta:{require:true}
  },
  {
    path:'/notice',
    meta:{require:true},
    component:_import('notice/index')
  },
  {
    path:'/basic',
    component:Layout,
    redirect:'/basicInfo',
    children:[
      {
        meta:{require:true},
        path:'/basicInfo',
        component:_import('homework/basicInfo'),
        name:'基本信息'
      }
    ]
  },{
    path:'/summary',
    meta:{require:true},
    component:_import('homework/summary'),
    name:'总结情况'
  },
  {
    path:'/sign',
    meta:{require:true},
    component:_import('sign/sign'),
    name:'签到'
  }
]



export default new Router({
  mode: 'history',
  routes:RouterMap
});
