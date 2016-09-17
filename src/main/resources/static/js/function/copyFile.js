var fs = require('fs');

function copy(src,dst){
    //small file
//    fs.writeFileSync(dst,fs.readFileSync(src));
    //big file
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv){
    console.log(argv[0]);
    console.log(argv[1]);
    copy(argv[0],argv[1]);
}

main(process.argv.slice(2));

/**
 *node copyFile.js /data/GitOpensource/NodeJsExample/src/main/resources/static/js/main.js /data/GitOpensource/NodeJsExample/src/main/resources/static/js/function/dstFile.js
 */