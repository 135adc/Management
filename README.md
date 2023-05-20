# 5.20
版本 vue2

vue create managementSystem
或 vue ui

## 安装element-ui
npm install element-ui@2.15.10 --save 

### 全局引用
//引入UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

## 安装vue-router@3.6.5
npm install vue-router@3.6.5

### 路由配置
参考文档 https://v3.router.vuejs.org/zh/guide/#javascript

### 路由导航
<router-link to="/home">Go to Foo</router-link>
<router-link to="/user">Go to Bar</router-link>

### 路由渲染
 <router-view></router-view>

### 嵌套路由
Main.vue为主路由 path:'\'
const routes = [
    {
        path: '/',
        component: Mian,
        //子路由
        children: [
            { path: 'home', component: Home },
            { path: 'user', component: User }
        ]
    }
]

#### 注意:
在App.vue中的路由出口是主路由的,子路由应该在主路由的文件中,添加
路由的渲染出口
 <router-view></router-view>