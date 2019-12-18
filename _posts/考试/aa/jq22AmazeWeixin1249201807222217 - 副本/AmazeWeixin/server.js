const http = require('http');
const fs = require('fs');
const io = require('socket.io');
var server = http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        if(err) throw err;
        res.end(data)
    })
})
var ioo = io(server);
ioo.on('connect',(socket)=>{
    console.log('已监听')
    socket.on('client',(msg)=>{
        console.log(msg);
        ioo.emit('client',msg)
    })
})
server.listen(8000,()=>{
    console.log('http server is running on port 8000')
})