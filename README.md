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

# 5.24
<h3> {{ isCollapse()?'后台':'Vue后台管理系统'}}</h3>

# 5.25
### 栅格布局
一共将屏幕分为24份.
行
<el-row>
<el-col :span='8'>
</el-col>
<el-col :span='16'>
</el-col>
</el-row>

### v-for遍历对象,(val,key) in list :key='key'
遍历的是键值对
val是值,key是键

### axios安装
npm insatll axios@0.27.2

### axios封装
### api请求
返回一个promise对象,用then接收,得到数据

### 安装Mock.js
npm install mockjs@1.1.0
定义mock的数据
Mock.mock('/api/home/getdata',home.getStatisticalData)

### 数据解构
  getdata().then((data)=>{
     console.log(data);
     this.tableData=data.data.data.tableData
   })

//解构写法
  getdata().then(({data})=>{
    console.log(data.data);
    const {tableData}=data.data
    this.tableData=tableData
  })

  ### 安装echarts
npm i echarts@5.1.2 --save

### vue中获取dom
在标签上加上 ref='***'

在状态中获取 this.$refs.***
###echarts的折线图,柱状图,扇形图的引入

# 5.27

### 面包屑的制作
<el-breadcrumb separator="/">
    <el-breadcrumb-item  v-for="item in tags" :key="item.name"  :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
</el-breadcrumb>

### mapState辅助函数
返回一个对象.用来接收store中的state
 ...mapState({
      tags:state => state.tab.tabList
    })
对象展开运算符,将对象暴露在计算属性中

### mapMutations辅助函数
 ...mapMutations(['deleteList'])
 获取store中的Mutations中的事件,在methods调用this.***

store中Mutations中的事件,参数为state和调用传递过来的参数
deleteList(state,index)

### tags使用
<el-tag
    v-for="(tag,index) in tags"
    :key="tag.path"
    :closable="tag.name!='home'"
    :type="tag.type"
    :effect="$route.name===tag.name ? 'dark' : 'plain'"
    @click="selectMenu(tag)"
    @close="handleClose(tags,tag,index)"
    size="mini">
    {{tag.label}}
</el-tag>

# 5.28
### elemen ui中的弹窗,表单,表格

@事件 :属性

Vuex将数据存储在浏览器,刷新后.数据后清空
我们可以通过cookie存储这些信息

### 安装cookie
npm i js-cookie -s

cookie.set('a',a)
cookie.get('a')
cookie.remove('a')

cookie中是一行字符串.所以我们在传值时要注意转换
JSON.stringify(a)===>字符串
JSON.parse(a)===>还原

那个不为空就返回那个
return JSON.parse(Cookie.get('menu'))  || this.$store.state.tab.menu

### 路由前置守卫
router.beforeEach((to,from,next)=>{
  to:当前页面
  from:跳转的页面
  next({})===>传入一个对象
  next()
})

### token验证
我们通过生成特定的token,将token信息传入cookie实现登录验证

### {data} 解构写法

### 路径的正则匹配
Mock.mock(/api\/user\/get/, user.getUserList)