var http = require('http');

http.get('http://localhost:8080',(res)=>{
    console.log(`Get Response: ${res.statusMessage}`);
    res.on('data',function(){
        console.log('Test Event');
    });
//    res.end("test");
//    res.resume();
}).on('error',(e)=>{
    console.log(`Get Error: ${e.message}`);
});