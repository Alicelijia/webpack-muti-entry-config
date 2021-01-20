const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var getEntriesInfo = require("../bin/utils").getEntriesInfo;

var cwd = process.cwd();
var entries = {};

getEntriesInfo(cwd,{
    entryRoot:"entry",
    template:"entry",
    urlPath:"html"
}).forEach(ele =>{
    entries[ele.name] = ele.entry;
})
module.exports = {
    entry:entries,
    output:{},
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        // options: {
                        //   presets: ['es2015'],
                        //   // plugins: ['transform-runtime']   // 如果有 async / await 的写法时，需要这个
                        // }
                    }
                ]
            },
            { test: /\.vue$/, loader: 'vue-loader' },
            // .vue.html 不知道是什么文件导致的解决办法参考来源https://github.com/vuejs/vue-loader/issues/1238
            { test: /\.vue\.html$/, loader: 'vue-loader' },
            {
                test:/\.(png | svg | jpg | gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            }
        ]
    },
    resolve:{
        enforceExtension: false,  // 支持 import 文件不带扩展名
        extensions: ['.js', '.json', '.vue', '.css'],  // 默认支持的扩展名类型
        // 自定义解析目录，比如：遇到 'lib/util'，会默认从 node_modules 和 src 目录下去查找
        modules: [
        'node_modules',
        path.resolve(cwd, 'src')
        ],
        alias:{
            'vue$':"vue/dist/vue.common.js",
            '@': path.resolve('src'),
            "@shared":path.resolve('shared'),
            "@wiki":path.resolve("wiki/src"),
            "@datacenter":path.resolve('data-center/src'),
            "@gameedit":path.resolve('game-edit/src'),
            "@gameinfo":path.resolve('game-info/src'),
            "@theme":path.resolve('theme')//使用@theme而不是theme, 标识为是通过别名加载的模块
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
