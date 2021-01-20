import store from './store';
import router from './router';

import App from './view/layout/main.vue';
import initEntry from '@shared/lib/entry-init'
// 异步的加载当前的语言包
// import { i18n, setLanguageAsync} from './i18n';
initEntry({
    router,
    store,
    App,
    entryName: 'gameinfo',
    loadDeveloperInfo: true // 加载开发商列表
})

