var child_process = require('child_process');

var child = child_process.spawn('node',['child.js'],{stdio: [0,1,2,'ipc'] });
child.on('message',function(msg){
    console.log("message: " + msg.ack+", "+child.pid);
//    child.kill('SIGTERM');
});

child.send({call:'helloNodeJs'});

//child_process.disconnect();
//child.kill('SIGTERM');