import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import store from './store/index.js';
//引入UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './api/mock'
import Cookies from 'js-cookie';


Vue.config.productionTip = false

Vue.use(ElementUI)

//设置路由前置守卫
//跳转前拦截
router.beforeEach((to,from,next)=>{
  //判断token是否存在,获取cookie
  const token=Cookies.get('token')
  //token不存在,说明用户为登录,返回登录页面
  //返回用户界面前提还有不在用户界面
  if(!token && to.name!=='login'){
    next({name:'login'})
    //token存在,且此时在登录页面,我们应该跳转
  }else if(token && to.name ==='login'){
    next({name:'home'})
  }else{
    //路由往下走
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
