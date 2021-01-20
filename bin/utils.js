

var glob = require('glob');
exports.getEntriesInfo = function(cwd,config){
    var files = glob.sync(cwd.replace(/\\/g,'/') + "/" + config.entryRoot + "/**/*.js")
    return files.map(file =>{
        let chunkName = getChunkName(file,config.entryRoot);
        console.log("getChunkName",chunkName)
        return {
            name:chunkName.split("/").join("-"),
            entry:`./${config.entryRoot}/${chunkName}.js`,
            template:`${config.entryRoot}/${chunkName}.html`,
            htmlname:`${config.urlPath}/${chunkName}.html`
        }
    })
}

function getChunkName(file,entryRoot){
  var reg = new RegExp(entryRoot + '\/(.*)\.js')
  return reg.exec(file)[1];
}

exports.getLibChunks = function(){
    return [
        {
            name:"jquery",
            entry:"jquery"
        },
        {
            name:"lodash",
            entry:"lodash",
        },
        {
            name:"vue",
            entry:"vue"
        }
    ]
}

/**
{
    name:"topic",
    entry:"./src/entry/topic.js",
    template:"./src/entry/topic.html",
    htmlname:"pages/topic.html"
}
{
    name:"detail",
    entry:"./src/entry/detail.js",
    template:"./src/entry/detail.html",
    htmlname:"pages/detail.html"
}
{
    name:"game-detail",
    entry:"./src/entry/game/detail.js",
    template:"./src/entry/game/detail.html",
    htmlname:"page/game/detail.html"
}
{
    name:"profile-person-setting"
}
**/


