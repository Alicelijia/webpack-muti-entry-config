import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';

import { isLogin } from '../models/apis'
import { routerBeforeEach } from "@shared/lib/route-helper"
const init = function({store,reouter,developerList,App,i18n}){
    new Vue({
        // i18n,
        store,
        router,
        App,
        // provide(){
        //     return {
        //         developerList
        //     }
        // },
        data(){
            const { scrollWidth } = document.body;
            return {
                scrollWidth,
                isWideScreen:scrollWidth >= 1900,
                inMinWidth:scrollWidth < 1200
            }
        },
        computed:{},
        created(){
            console.log("entry-crated")
        },
    }).$mount("#app")
}
// 入口初始化
export default function initEntry(context) {
    const { router, store, entryName, i18n, loadDeveloperInfo } = context;
    console.log("init",router, store, entryName, i18n, loadDeveloperInfo)
    isLogin()
        .then(res =>{
            console.log("login_info",res)
        })

    /**
    * 设置路由特殊规则
    */
    isLogin(tokenParams)
        .then(res =>{
            if(res && Number(res.is_login) === 1){
                console.log("login-info",res)
                if(loadDeveloperInfo){
                //  确认用户登录成功之后，再初始化vue
                    init()
                }
            }
        })
}
