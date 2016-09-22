let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

let jsonData = require('./data.json');

let mine = require('./mine');

const PORT = 8080;
const IP = '0.0.0.0';
const assets = 'html';

function handleRequest(request,response){

   let pathName = url.parse(request.url).pathname;
   let realPath = assets + pathName;
   let extType = path.extname(realPath);
   extType = extType ? extType.slice(1) : 'unknown';
   console.log('current ext type : ' +extType);
   fs.stat(realPath , function(error,stats){
        //undefined stats ; WARNNING:https://nodejs.org/api/fs.html#fs_fs_stat_path_callback
//        console.log('Stats Parameter: ' + stats);
        if(error){
            response.write("This Request URL " + pathName + " was not found on this server =>" + jsonData.info);
            response.end();
        }else{
            fs.readFile(realPath,"binary",function(error,file){
                if(error){
                    response.writeHead(500,{'Content-Type':'text/plain'});
                    response.end(error);
                }else{
                    let contentType = mine.types[extType];
                    console.log('current file type: ' + contentType);
                    response.writeHead(200,{'Content-Type':contentType});
                    response.write(file,"binary");
                    response.end();
                }
            });
        }
   });

    request.on('data',function(chunk){
        console.log("Request Body: " + chunk);
    });


//    response.end("It works ! Path Hit: " + request.url + '\n');
}

let server = http.createServer(handleRequest);

server.listen(PORT,IP,function(){
    console.log(`Server Started....URL:http://${IP}:${PORT}`);
});