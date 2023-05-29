import Mock from 'mockjs'
import home from './mock/home';
import user from './mock/user'
import permission from './mock/permission';

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

//出现404则是请求的出现问题,在页面匹配时,我们加上了参数,所以路径匹配失败,加上路径正则
Mock.mock(/api\/user\/get/, user.getUserList)

//登录数据
Mock.mock(/api\/permission\/getMenu/, 'post',permission.getMenu)
