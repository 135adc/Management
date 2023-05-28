//数据请求
import http from "../utils/request";

export const getdata=()=>{
    //返回一个promise对象
    return http.get('/home/getdata')
}

//使用axios请求向'/home/getdata'请求数据

export const addUser=(data)=>{
    //添加用户
    return http.post('/user/add',data)
}
 
export const editUser=(data)=>{
    //编辑用户
    return http.post('/user/edit',data)
}

export const delUser=(data)=>{
    //删除用户
    return http.post('/user/del',data)
}

export const getUser=(params)=>{
    //获取用户信息
    return http.get('/user/get',params)
}