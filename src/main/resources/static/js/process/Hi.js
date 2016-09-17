var child_process = require('child_process');
var util = require('util');

function copy(source,target,callback){
    child_process.exec(
        util.format('cp -r %s/* %s',source,target),
        callback
    );
}

function myCallBack(){
    console.log('myCallBack');
}

var sourcePath ='/data/GitOpensource/NodeJsExample/src/main/resources/static/js/web/';
var targetPath = '/data/GitOpensource/NodeJsExample/src/main/resources/static/js/process/tmp/';

copy(sourcePath,targetPath,function(err){
    console.log("Error Log: " + err);
})