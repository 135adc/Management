<template>
 <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <h3>Vue后台管理系统</h3>
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
    export default {
      data() {
        return {
          // 是否水平折叠收起菜单
          isCollapse: false,
          // aside样式数据
          menuData:[
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              path: '/mall',
              name: 'mall',
              label: '商品管理',
              icon: 'video-play',
              url: 'MallManage/MallManage'
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'UserManage/UserManage'
            },
            {
              label: '其他',
              icon: 'location',
              children: [
                {
                  path: '/pageone',
                  name: 'page1',
                  label: '页面1',
                  icon: 'setting',
                  url: 'Other/PageOne'
                },
                {
                  path: '/pagetwo',
                  name: 'page2',
                  label: '页面2',
                  icon: 'setting',
                  url: 'Other/PageTwo'
                }
              ]
            }
      ]
        };
      },
      computed:{
        //过滤数据,分为不同的用户登录有不同的页面展示
        noChildren(){
          return this.menuData.filter(item=>!item.children)
        },

        hasChildren(){
          return this.menuData.filter(item=>item.children)
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        clickMenu(item){
              this.$router.push(item.path)
        }
      }
    }
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    height: 100vh;
    
    h3{
    color: aliceblue;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
  }
</style>