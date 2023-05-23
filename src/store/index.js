import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

//暴露出去
export default new Vuex.Store({
    modules:{
        tab
    }
})
