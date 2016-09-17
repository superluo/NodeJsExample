var http = require('http');

http.createServer(function(request,response){
    response.setHeader('Ahluo','DemoClient');
    response.writeHead(200,{'Content-Type':'text-plain'});
    response.end('Hello Web\n');
}).listen(8080);

console.log('Server Started...');