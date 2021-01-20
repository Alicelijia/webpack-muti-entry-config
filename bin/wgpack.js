#! usr/bin/env node

/*
在package.json文件中，添加bin配置，然后在项目中执行 npm link 指令
即可在命令行执行wgpack 等同于node ./bin/wgpack.js
"bin":{
    "wgpack":"./bin/wgpack.js"
}
这个bin 参数 ，本质上是给环境变量注册了一个 node ./bin/wgpack.js 的操作
通过npm publish 了 wgpack 后，其他的人的全局安装了 wgpack 后就可以直接执行wgpack

*/
console.log("this is wgpack cli")
