//引入模块
let http = require("http");
let server = http.createServer(function(req,res){
    //req 表示请求
    //res 表示响应
    // 设置响应头
    res.writeHead(200,{
        "Content-type":"text/html;charset=utf-8"
    })
    // 结束响应
    res.end("<h1>hello world 你好呀！</h1>")
});
server.listen(8000,function(){
    console.log("http server running on port 80")
});