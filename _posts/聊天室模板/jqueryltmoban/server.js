const http = require('http');
const fs = require('fs');
const ioo = require('socket.io');
var server = http.createServer((req,res)=>{
    var html = fs.readFileSync('./index.html');
    res.setHeader('Content-type','text/html')
    res.end(html)
})

var io = ioo(server);

io.on('connect',(socket)=>{
    console.log('已监听')
    socket.on('client',msg=>{
        console.log(msg);
        io.emit('client',msg);
    });
})
server.listen(8800,()=>{
    console.log('http server is running on port 8820')
})