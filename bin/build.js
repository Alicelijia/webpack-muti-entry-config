const webapckConfig = require("../config/webpack.prod.conf");

var webpack = require("webpack");

console.log('[wgpack] building for production...');
webpack(webapckConfig,(err,stats) => {
    if(err){
        console.log("[wgpack] build fail");
        throw err;
    }
    console.log('[wgapck] build complete')
})
