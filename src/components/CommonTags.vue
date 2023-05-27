<template>
  <div class="tabs">
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
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {

  computed:{
    ...mapState({
        tags:state=>state.tab.tabList
    })
  },
  methods:{
    ...mapMutations(['deleteList']),
    selectMenu(tag){
        // console.log(tag.name)
        // console.log(this.$route.name)
        this.$router.push({name:tag.name})
    },
    handleClose(tags,tag,index){
         // 我们应该删除tabList中的数据
        this.deleteList(index)

        let curindex=tags.length
        // console.log(index)
        // console.log(curindex)
         //删除后,路由应该改变
         //删除的项不是当前路由,不跳转
        if(tag.name !=this.$route.name)
        {
            return false
        }
        //删除最后一项,路由向前跳转
        if(index===curindex){  
            // console.log('前');
            this.$router.push({name: tags[curindex-1].name})
           }
            //删除的项不在最后且当前路由在该项上
        else{
            // console.log('后');
            this.$router.push({name: tags[index].name})
            }
        }
  },
 
}
</script>

<style lang="less" scoped>
.tabs{
    padding: 10px;
    .el-tag{
    margin: 0 10px;
    }
}
</style>