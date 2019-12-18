const http = require('http');
const fs = require('fs');
const io = require('socket.io');
const server = http.createServer((req,res)=>{
    var html = fs.readFileSync('./index.html')
    res.end(html)
})
var ioo = io(server);
ioo.on('connect',(socket)=>{
    console.log('已监听')
    socket.on('client',(msg)=>{
        console.log(msg)
        ioo.emit('client',msg)
    })
})
server.listen(8800,()=>{
    console.log('http server is running on port 8800')
})