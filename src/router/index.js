import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mian from '../views/Mian.vue'

Vue.use(VueRouter)
//1.引入安装和使用

//2.定义路由组件

//3.创建 router 实例，然后传 `routes` 配置

//4. 创建和挂载根实例。

/*
const app = new Vue({
    router
  }).$mount('#app')
*/

const routes = [
    {
        path: '/',
        component: Mian,
        //子路由
        children: [
            { path: '/home', component: Home },
            { path: '/user', component: User }
        ]
    }
]


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router