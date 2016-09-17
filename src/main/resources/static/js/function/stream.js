var fs = require('fs');
var readPath = '/data/GitOpensource/NodeJsExample/src/main/resources/static/js/function/buffer.js';
var writePath = '/data/GitOpensource/NodeJsExample/src/main/resources/static/js/function/ioWriteBufferTmp.js';

var rs = fs.createReadStream(readPath);
var ws = fs.createWriteStream(writePath);


rs.on('data',function(chunk){
    console.log('chunk: ' + chunk);
    ws.write(chunk);
});

rs.on('end',function(){
    console.log('end: over');
    ws.end();
});

rs.on('drain',function(){//the same to .pipe method
    console.log('resume');
    rs.consume();
});