import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import store from './store/index.js';
//引入UI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './api/mock'


Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
