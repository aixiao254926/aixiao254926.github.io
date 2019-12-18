const http = require('http');
const {URL} = require('url');
http.createServer((req,res)=>{
    const myURL = new URL(req.url,'http://'+req.headers.host);
    console.log(myURL)
    res.writeHead(200,{
        "Content-type":"text/html;charset=utf-8"
    })
    res.end("<h1>hello world 你好呀！</h1>");
}).listen(8080,()=>{
    console.log('http server is running on port 8080')
})