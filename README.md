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

# 5.22

### 代码格式化
prettier设置

### element-ui
https://element.eleme.cn/#/zh-CN/component/menu

### 安装less解析器
npm i less@4.1.2 --save
npm i less-loader@6.0.0 --save

### scoped
该样式只在使用的页面起作用,不加的话,就是全局都起作用

### 重定向   redirect
 path: '/',
        component: Mian,
        重定向,匹配为/时,直接跳转到home
        redirect:'/home',
### this.$router.push()
路由跳转方法.传入本地路径,通过对应的数据进行跳转

# 5.23

### $route和$router
$route是指当前路由
$router是全局的总路由


### UI 下拉菜单
el-dropdown

### vuex3.6.2
npm insatll vuex@3.6.2 

store文件夹
 -index.js主状态文件
 -tab.js导航栏状态文件

export default ****{} 暴露出去

import 引入

### 配置数据
我们通过函数返回出去一个值作为数据,相当于data中的数据