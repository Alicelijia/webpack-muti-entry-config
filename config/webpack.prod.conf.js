const path = require("path");
const webpack = require("webpack");

const webapckMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebapckPlugin = require("clean-webpack-plugin");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackBaseConfig = require('./webpack.base.conf');
var getEntriesInfo = require("../bin/utils").getEntriesInfo;

var getLibChunks = require("../bin/utils").getLibChunks;
const webpackMerge = require("webpack-merge");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");


var cwd = process.cwd();

var commonFilename = 'commons';

var libChunks = [];
var allChunks = [];
var entries = {};

// 添加lib chunk
getLibChunks().forEach(ele =>{
    libChunks.push(ele.name);
    entries[ele.name] = [ele.entry];
})
// { jquery: [ 'jquery' ], lodash: [ 'lodash' ], vue: [ 'vue' ] }

// 添加业务chunk
Object.keys(webpackBaseConfig.entry).forEach(ele => {
    allChunks.push(ele);
    entries[ele] = webpackBaseConfig.entry[ele]
})

var webpackProdConfig = webpackMerge(webpackBaseConfig,{
    entry:entries, //prod环境需要将第三方包作为入口一起打包
    output:{
        path:path.resolve(cwd,'dist'),
        publicPath:"//www.wegame.com/",
        filename:"js/[name].[chunkhash].js"
    },
    module:{
        rules:[{
            test:/\.css$/,
            use: ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:[
                    {
                        loader:"css-loader",
                        options:{
                            minimize:true,
                        }
                    }
                ]
            })
        }]
    },
    plugins:[
        //  在DefinePlugin中定义全局的环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':"production"
        }),
        new ExtractTextPlugin('css/[name][contenthash].css'),//为什么js是chunkhash css的命名却为contenthash,二者有什么区别？
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions:{
                safe:true,
                autoprefixer:false,
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebapckPlugin(['dist'],{
            root:cwd
        }),
        new webpack.HashedModuleIdsPlugin(),
        new copyWebpackPlugin([{
            name:libChunks,
            minChunks:Infinity
        }]),
        new CommonsChunkPlugin({
            name:commonFilename,
            filename:"js/[name][chunkhash].js",
            chunks:allChunks,
        })
    ]
})


// 根据entry 插入HtmlWebapckPlugin
getEntriesInfo(cwd,{
    entryRoot:'entry',//入口js根目录
    template:"entry",//入口对应的js文件
    urlPath:"pages",//访问路径
}).forEach(ele => {
    webpackProdConfig.plugins.push(
        new HtmlWebpackPlugin({
            template:ele.template,
            filename:ele.htmlname,
            chunks:libChunks.concat([commonFilename,ele.name]),
            minify:{
                removeComments:true,
                collapseWhitespace:true,
            }
        })
    )
})
module.exports = webpackProdConfig;
