var net = require('net');

net.createServer(function(connection){
    connection.on('data',function(data){
        connection.write([
            'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 11',
            'AhluoTest: Test',
            '',
            'Hello Net'
        ].join('\n'));
    });
}).listen(8080);

console.log('Server Started...');