import Mock from 'mockjs'
import home from './mock/home';
import user from './mock/user'

//定义mock请求拦截 home的数据
// Mock.mock('/api/home/getdata',function(){
//     console.log('拦截到了');
//     return [] //返回的随机数据
// })
Mock.mock('/api/home/getdata',home.getStatisticalData)
//拦截axios请求,并将数据返回出去


//用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser)

Mock.mock('/api/user/edit', 'post',user.updateUser)

Mock.mock('/api/user/del', 'post',user.deleteUser)

Mock.mock('/api/user/get', user.getUserList)
