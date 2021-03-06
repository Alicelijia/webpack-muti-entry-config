# webpack-muti-entry-config
this is webapck-config project that has multiple entries
```javascrpt;
"bin": {
    "wgpack": "./bin/wgpack.js" //全局执行npm link 即可使用该wgpack指令, 相当于node ./bin/wgapck.js 指令
  },
  "scripts": {
    "dev": "node ./bin/dev.js",
    "build": "node ./bin/build.js"
 },
```
### 这个个多入口配置的webapck项目

webpack相关配置的学习：以及webpack可以进一步优化的地方
1. 如第三方包可以在开发的时候无需打包
2. 通过webpack包文件的分析，分析哪些可以进行打包优化的地方`require('webpack-bundle-analyzer').BundleAnalyzerPlugin;`
3. 如抽离单独的css、js文件
4. 可以将稳定的第三方包通过cdn 引入的方式，加快加载速度
5. 可以将小的工具包打包为一个文件，减少http请求

关于webpack的打包优化问题可以参考学习文档：
https://juejin.cn/post/6844904071736852487


目前分为4个入口
每个入口模块分为7个模块：

1. components 当前入口特有的模块
2. store 当前入口需要的store信息，以shared下的store信息为默认信息，将当前的与shared的merge
3. layout 当前的入口的页面布局信息
4. i18n 当前入口的语言信息
5. router 当前页面的路由信息
6. model 当前入口的请求信息
7. main 当前入口的主入口信息
8.

game入口 分为 game-info 、 game-edit 2个模块（主要解决1个模块太重，需要2个入口这样加载速度会更快的问题）

game-info 主要学习： 1. 根据入口的用户权限信息，对入口页面进行相应的展示、

​									2. 活动日历的滚动，可以与左侧的日历联动滚动，效果如何实现

game-eift 主要学习多个组件间的通信，如商店信息页，左侧tab可以单独提交，在首页头部可以全局提交，适合将一个比较大的配置页面，拆分多个小的页面，既可以部分操作也可以全部操作

1. 多个页面的通信，商店信息页
2. 富文本编辑框的使用与学习
3. 多图片与文件上传的学习

wiki 入口是一个文档项目，主要了解递归的树状组件，以及树的处理

1    wik-page 多层级文档嵌套问题的学习

2   wik-search 多层级文档嵌套的搜索

datacenter: 主要学习echarts ，常用的配置，将各种图表以及地图熟练的使用

1  数据中心各种展示图表的学习



shared 入口主要解决问题：当项目太大时，需要将多个入口公共的东西提取出来集中的处理.主要分：

lib :公共的工具函数，如多个入口共享一个登录的入口，具体的入口再去做特定的逻辑，

store : 多个入口共享公共的信息，如全局都需要的用户相关信息以及权限信息，这些信息是访问所有页面都需要的，无需单独再哪一个入口做特殊的处理

i18n : 公共的翻译文件，

components: 公共的组件，例如头部组件以及上传组件

momels: 公共的接口请求函数，如isLogin 效验用户是否登录等全局各个入口都需要的数据请求

todo-list
1. 需要掌握mock如何模拟动态的接口信息
2. 异步语言包的如何在页面初始化的时候进行加载
3. 页面初始化的时候各种权限信息的人员如何进行路由的筛选
### 学习时间记录：
#### 2021.1.20 主要初始化本地项目，进行webpack多入口项目的配置


其他的用到但是不知道的知识
1. git submodule 的使用
2. vue-i18n国际化
3. 如他们的包都放在@tencent下面，这个流程是如何做到的？


2020.1.22日接入i18n 研究wegame-i18n-tool这个个loader是如何工作的
1. 如何将本地的文件转换后，在文件中获取到的
2. 通过loader转换后的文件在本地是如何使用的

- 关于接入异步的语言信息
```javascript
import Vue from 'vue'
import VueI18n from 'vue-i18n';
import App from './App.vue';
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: 'en',
    messages: {}
})
function loadI18nMessage(lang){
    return import(`./di18n-locale/${lang}`).then(msg =>{
        i18n.setLocaleMessage(lang,msg.default);
        return Promise.resolve()
    })
}
// 默认在页面初始化之前先加载语言包
loadI18nMessage("zh").then(() =>{
    new Vue({
        el:"#app",
        i18n,
        render: h => h(App)
    })
})
```

参考阅读：
https://juejin.cn/post/6844903637450227726

