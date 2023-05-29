import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mian from '../views/Mian.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'

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
        // 重定向,匹配为/时,直接跳转到home
        redirect:'/home',
        //子路由
        children: [
            { path: 'home',     name:'home',   component: Home }, //首页
            { path: 'user',     name:'user',   component: User }, //用户管理
            { path: 'mall',     name:'mall',   component: Mall }, //商品管理
            { path: 'page1',  name:'page1',   component: PageOne }, //页面1
            { path: 'page2',  name:'page2',   component: PageTwo }  //页面2
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
]


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router