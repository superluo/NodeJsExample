var net = require('net');

var server=net.createServer(function(connection){
    connection.on('data',function(data){
        connection.write([
            'Hello Net'
        ].join('\n'));
        console.log("Client Says: " + data);
    });
}).listen(8080);

console.log('Server Started...');