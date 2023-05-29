import Cookie from 'js-cookie'
export default {
    //定义数据
    state:{
        isCollapse:false,//控制侧边导航栏的展开和收起
        // 面包屑数据
        tabList:[
        {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/Home'
        }
    ], 
    //
    menu:[]  
    },
    //修改状态的方法
    mutations:{
        //修改侧边导航栏的展开和收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val){
            // console.log(val)
            //判断点击的页面是否为首页
            // 不是首页
            if(val.name !='home'){
                //判断所点击的页面数据是否在state中存在
                // findIndex存在的话,返回数据的索引,不存在就返回-1
                const index=state.tabList.findIndex(item => item.name===val.name)
                if(index==-1){
                    state.tabList.push(val)
                }
            }
        },
        //删除tabList数据
        deleteList(state,index){
            // console.log(tag)
            state.tabList.splice(index,1)
        },

        //登录后的导航栏数据
        //Vuex中的数据在缓存中,刷新就会清空,我们将数据保存在cookie中
        setMenu(state,val){
           state.menu=val 
           //设置cookie //将对象转化成字符串
           Cookie.set('menu',JSON.stringify(val))
        }
    }
}