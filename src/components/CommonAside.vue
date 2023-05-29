<template>
 <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse()"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <h3> {{ isCollapse()?'后台':'Vue后台管理系统'}}</h3>
      <el-menu-item  v-for="item in noChildren" :key="item.name" @click="clickMenu(item)" :index="item.name">
        <!-- :key和:index为唯一值 -->
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

    <el-submenu  v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <!-- 为一个导航并未有页面数据 -->
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="Subitem in item.children" :key="Subitem.name">
        <el-menu-item :index="Subitem.name" @click="clickMenu(Subitem)">{{ Subitem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>

 </div>   
</template>
<script>
import Cookie from 'js-cookie'
    export default {
      data() {
        return {
          // aside样式数据
      //     menuData:[
      //       {
      //         path: '/',
      //         name: 'home',
      //         label: '首页',
      //         icon: 's-home',
      //         url: 'Home/Home'
      //       },
      //       {
      //         path: '/mall',
      //         name: 'mall',
      //         label: '商品管理',
      //         icon: 'video-play',
      //         url: 'MallManage/MallManage'
      //       },
      //       {
      //         path: '/user',
      //         name: 'user',
      //         label: '用户管理',
      //         icon: 'user',
      //         url: 'UserManage/UserManage'
      //       },
      //       {
      //         label: '其他',
      //         icon: 'location',
      //         children: [
      //           {
      //             path: '/pageone',
      //             name: 'page1',
      //             label: '页面1',
      //             icon: 'setting',
      //             url: 'Other/PageOne'
      //           },
      //           {
      //             path: '/pagetwo',
      //             name: 'page2',
      //             label: '页面2',
      //             icon: 'setting',
      //             url: 'Other/PageTwo'
      //           }
      //         ]
      //       }
      // ]
        };
      },
      computed:{
        //过滤数据,分为不同的用户登录有不同的页面展示
        noChildren(){
          return this.menuData.filter(item=>!item.children)
        },

        hasChildren(){
          return this.menuData.filter(item=>item.children)
        },
        // 动态aside样式数据
        //如果刷新缓存清空,我们需要去cookie中请求数据
        menuData(){
          //转化对象
          //返回1或2,如果一个为空.就返回另外一个
          console.log(this.$store.state.tab.menu ,'data')
          return JSON.parse(Cookie.get('menu'))  || this.$store.state.tab.menu
        }
        
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        //在路由跳转时,如果跳转的路径是当前的路径,会报错
        //我们在跳转前,进行验证
        //首页/重定向到home时点击会报错
        clickMenu(item){
          // $route为本页的路由
          //$router为全局的路由实例
          if(this.$route.path!=item.path &&!(this.$route.path==='/home' && (item.path==='/')))
          {
            this.$router.push(item.path)
          }
          //调用vuex中的mutations的selectMenu函数并将路由信息传递过去
          this.$store.commit('selectMenu',item)  
        },
        isCollapse(){
              // 是否水平折叠收起菜单
              //返回一个bool值
              //tab状态模块化
          return this.$store.state.tab.isCollapse
        }
      }
    }
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// .el-menu:not(.el-menu--collapse) {   
//     width: 200px;  
//     min-height: 400px;    
//   }
.el-menu{
    border-right: none;
    height: 100vh;
    
    h3{
    height: 48px;
    color: aliceblue;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }

  
  }


</style>