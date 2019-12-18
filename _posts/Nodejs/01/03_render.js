// 引入模块
let http = require("http");
let fs = require("fs");

//创建http服务
http.createServer(function(req,res){
    if(req.url === "/favicon.ico"){
        return false;
    }
    if(req.url === "/" || req.url === "/index.html"){
        //读取文件
        fs.readFile("./demo01.html",function(err,data){
                    //设置响应头
        res.writeHead(200,{
            "Content-type":"text/html;charset=utf-8"
        })
        res.end(data);//结束响应
        })
    }else if(req.url === "/detail.html"){
        //读取文件
        fs.readFile("./demo02.html",function(err,data){
        //设置响应头
        res.writeHead(200,{
            "Content-type":"text/html;charset=utf-8"
        });
        res.end(data);//结束响应
        })
    }else if(req.url === "/1.jpg"){
        //读取文件
        fs.readFile("./imgs/1.jpg",function(err,data){
        //设置响应头
        res.writeHead(200,{
            "Content-type":"imgs/jpg"
        });
        res.end(data);//结束响应
        })
    }else if(req.url === "/style.css"){
        //读取文件
        fs.readFile("./style.css",function(err,data){
        //设置响应头
        res.writeHead(200,{
            "Content-type":"text/css"
        });
        res.end(data);//结束响应
        })
    }else{
        res.writeHead(404,{
            "Content-type":"text/html;charset=utf-8"
        });
        res.end("你访问的页面不存在！")
    }

}).listen(8004,function(){
    console.log("http server is running on 8004")
})