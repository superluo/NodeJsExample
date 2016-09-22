var fs = require('fs');
var path = require('path');


var readPath = '/ahluo/dev/GitLab/repo/NodeJsExample/src/main/resources/static/js/function/ioWriteBufferTmp.js';

fs.readFile(readPath,function(err,data){
    if(err){
        console.log('My Error Log:' + err);
    }else{
//        console.log("read file data: " + data);
    }
});

function travel(dir,callback){
    fs.readdirSync(dir).forEach(function(file){
        var pathName = path.join(dir,file);

        if(fs.statSync(pathName).isDirectory()){
            travel(dir,callback);
        }else{
            callback(pathName);
        }

    });
}

function myCallBack(pathName){
    console.log('CallBack: ' +pathName);
}

var dir = '/ahluo/dev/GitLab/repo/NodeJsExample/src/main/resources/static/js/function/';
travel(dir,myCallBack);