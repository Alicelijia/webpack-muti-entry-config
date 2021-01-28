const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../config/webpack.dev.conf');

// 启用history模式?hash模式与history模式的区别是什么？
var history = require("connect-history-api-fallback");
var app = express();
var compiler = webpack(webpackConfig);
// app.use(express.static('dist'))
// app.use(express.static('/dist/css'))
var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,  // 绑定中间件的公共路径,与webpack配置的路径相同
  quiet: true                                   // 向控制台显示任何内容
});

var hotMiddleware = webpackHotMiddleware(compiler, {
  log: () => { }
});

// 热更新自动刷新页面，监听 html-webpack-plugin-after-emit 事件，插入 reload 操作
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

app.use(devMiddleware);

app.use(hotMiddleware);

// vue router 支持history模式
console.log("webpackConfig",webpackConfig)
if (webpackConfig && webpackConfig.historyApiFallback === true) {
    app.use(history());
  } else {
    console.log('lili',webpackConfig.devServer.historyApiFallback)
    app.use(history(webpackConfig.devServer.historyApiFallback));
    console.log("jiajia")
  }


devMiddleware.waitUntilValid(() => {
  console.log(`[wgpack] Listening at uri...\n`);
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('server is on and listening port 8000...');
});
