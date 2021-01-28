
var getEntriesInfo = require('../bin/utils').getEntriesInfo;
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const hotMiddlewareEntry = 'webpack-hot-middleware/client?noInfo=true&reload=true';
const webpackBaseConfig = require("./webpack.base.conf");
var cwd = process.cwd();
// 'topic': 'entry/topic.js' => 'toppic': [hotMiddlewareEntry, 'entry/topic.js']
//  hotMiddlewareEntry 是 webpack-hot-middleware 加在每个 entry 中的内容

Object.keys(webpackBaseConfig.entry).forEach(ele => {
  console.log("webpackBaseConfig")
  webpackBaseConfig.entry[ele] = [hotMiddlewareEntry].concat([
    webpackBaseConfig.entry[ele]
  ]);
});
var webpackDevConfig = webpackMerge(webpackBaseConfig,{
    output:{
        publicPath:"/",
        filename:'js/[name].js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader'],
        }]
    },
    devtool:"#cheap-module-source-map",
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        historyApiFallback:{
            verbose: true,
            rewrites:[
                { from:"/html/game/info", to: '/html/game/info.html' },
                { from: "/html/game/edit", to: '/html/game/edit.html'},

            ],
        }
    }
})
// 通过获取到devConfig，
getEntriesInfo(cwd,{
    entryRoot:"entry",
    tempalteRoot:"entry",
    urlPath:"html"
}).forEach(ele => {
    webpackDevConfig.plugins.push(
        new HtmlWebpackPlugin({
            template:ele.template,
            filename:ele.htmlname,
            chunks:[ele.name]
        })
    )
})
module.exports = webpackDevConfig;
