// 此处为模拟api接口信息
import {islogin} from '../mock/isLogin'
export function isLogin(){
    return new Promise((resolve,reject) =>{
        resolve(islogin)
    })
}
