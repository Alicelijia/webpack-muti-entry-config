import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

import login from './login'

const routes = [
    ...login
]

export default  new Router({
    mode:history,
    // base:"/pages/game/info",
    linkActiveClass:"is-active",
    scrollBehavior (to, from, savedPosition) {
        if(to.path != from.path){
            return {y:0}
        }
    },
    routes
})

