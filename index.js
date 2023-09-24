const http = require('http');
http.createServer((req,res)=>{
    res.write("this is first project\n");
}).listen(4500);