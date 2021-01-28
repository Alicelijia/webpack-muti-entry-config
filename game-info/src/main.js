import *as store from './store';
import router from './router';
import App from './view/layout/main.vue';
import initEntry from '@shared/lib/entry-init'
import i18n from './i18n'
// 异步的加载当前的语言包
// import { i18n, setLanguageAsync} from './i18n';
console.log("router",router)
initEntry({
    router,
    store,
    App,
    i18n,
    entryName: 'gameinfo',
    loadDeveloperInfo: true // 加载开发商列表
})

