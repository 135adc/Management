<template>
  <div class="header-container">
    <div class="l-content">
        <el-button  @click="handlerMenu" icon="el-icon-menu" size="mini"></el-button>
        <!-- 面包屑 -->
        <!-- <span class="text">首页</span> -->

        <el-breadcrumb separator="/">
            <el-breadcrumb-item  v-for="item in tags" :key="item.name"  :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <div class="r-content">
     <el-dropdown>
        <span class="el-dropdown-link">
         <img class="image" src="../assets/image/OIP-C (1).jpg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
     </el-dropdown>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {

    methods:{
        handlerMenu(){
            this.$store.commit('collapseMenu')
        }
    },
    computed:{
        //mapState返回一个对象,...对象展开运算符,将tags传给computed属性
        ...mapState({
            tags:state => state.tab.tabList
        })
    }
}
</script>

<style lang="less" scoped>

.header-container{
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text{
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-content{
        .image{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }   

    }

    .l-content{
        display: flex;
        align-items: center;
       ::v-deep .el-breadcrumb__item{
           .el-breadcrumb__inner{
                &.is-link{
                    color: #12f1f9;
                }
           }
           &:last-child{
            .el-breadcrumb__inner{
                color: #09f989;
            }
           }
        }

        .el-breadcrumb{
            margin-left: 30px;
        }
    }
}
</style>