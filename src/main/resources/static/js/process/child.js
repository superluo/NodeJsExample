console.log('Beginning');

process.on('message',function(msg){
    console.log("child message: " + msg);
    msg.hello = msg.hello.toUppercase();
    process.send(msg);
});

//process.on('SIGTERM',function(){
//    console.log('Copy SIGTERM');
//    process.exit(0);
//});