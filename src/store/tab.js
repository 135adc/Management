export default {
    //定义数据
    state:{
        isCollapse:false  //控制侧边导航栏的展开和收起
    },
    //修改状态的方法
    mutations:{
        //修改侧边导航栏的展开和收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        }
    }
}