var spawn = require('child_process').spawn;


result = spawn('free',['-m']);
result.stdout.on('data',function(data){
    console.log(data.toString());
});