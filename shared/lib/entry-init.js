import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';

import { isLogin } from '../models/apis'

const init = function({store,reouter,developerList,App,i18n}){
    new Vue({
        // i18n,
        store,
        router,
        App,
        provide(){
            return {
                developerList
            }
        },
        data(){
            const { scrollWidth } = document.body;
            return {
                scrollWidth,
                isWideScreen:scrollWidth >= 1900,
                inMinWidth:scrollWidth < 1200
            }
        },
        computed:{},
        watch:{},
    }).$mount("#app")
}
// 入口初始化
export default function initEntry(context) {
    const { router, store, entryName, i18n, loadDeveloperInfo } = context;
    console.log("init",router, store, entryName, i18n, loadDeveloperInfo)
    isLogin()
        .then(res =>{
            console.log("res",res)
        })
    // init(...context)
    // isLogin(tokenParams)
    //     .then(res =>{
    //         if(res && Number(res.is_login) === 1){
    //             if(loadDeveloperInfo){
    //                 init({
    //                     ...context,
    //                     developerList
    //                 })
    //             }
    //         }
    //     })
}
