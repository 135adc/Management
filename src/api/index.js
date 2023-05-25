//数据请求
import http from "../utils/request";

export const getdata=()=>{
    //返回一个promise对象
    return http.get('/home/getdata')
}