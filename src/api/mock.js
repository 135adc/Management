import Mock from 'mockjs'

import home from './mock/home';

// Mock.mock('/api/home/getdata',function(){
//     console.log('拦截到了');
//     return [] //返回的随机数据
// })

Mock.mock('/api/home/getdata',home.getStatisticalData)