<template>
<div>
<el-container>
 <el-aside width="auto">
  <common-aside></common-aside>
 </el-aside>
  <el-container>
    <el-header>
    <common-header></common-header>
    </el-header>
    <common-tags></common-tags>
    <el-main>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonTags from '../components/CommonTags.vue';
export default {
data() {
  return {
    
  }
},
components:{
  CommonAside,
  CommonHeader,
  CommonTags
},
methods:{
  
}

}
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;
}
</style>