var net = require('net');

var options = {
        port: 8080,
        host: 'localhost'
    };

var client = net.connect(options,function(){
    client.write([
        'hi server'
    ].join('\n'));
});``
client.on('data',function(data){
    console.log('Result: ' +data.toString());
    client.end();
});