var net = require('net');

var options = {
        port: 8080,
        host: 'localhost'
    };

var client = net.connect(options,function(){
    client.write([
        'GET / HTTP/1.1',
        'User-Agent: curl/7.26.0',
        'Host: www.ahluo.com',
        'Accept: */*',
        '',
        ''
    ].join('\n'));
});
client.on('data',function(data){
    console.log('Result: ' +data.toString());
    client.end();
});