var http = require('http');

let server = http.createServer(function(request,response){

    console.log('Request Method: ' + request.method);

    request.on('data',function(chunk){
        console.log('Chunk : ' + chunk);
    });

    response.setHeader('Ahluo','DemoClient');
    response.writeHead(200,{'Content-Type':'text-plain'});
    response.end('Hello Web\n');
});

server.listen(8080);

console.log('Server Started...');