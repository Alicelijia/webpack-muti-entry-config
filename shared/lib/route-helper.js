import { isLogin } from "../models/apis";


let config = {};//全局上下文配置
function handleBeforeEach(to,from,next){
    const { store, setLanguageAsync, entryName } = config;
    // 1. 如果没有执行退出指令
    // 2.检查是否登录，将用户的语言信息同步/account/change_language
    // 3. 将用户的语言信息同步到store
    // 4.
    next()
}


/**
 根据上下文中提供的router, 执行路由切换前的hook
 @params { Object } context
**/
export function routerBeforeEach(context){
    config = context;
    const { router } = context;
    router.beforeEach(handleBeforeEach)
}

export default { routerBeforeEach }
