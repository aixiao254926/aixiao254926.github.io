//导入模块
const http = require('http');
const {URL} = require('url');
const os = require('os')
const fs = require('fs');
const userbean = require('./userbean')
//创建服务器
http.createServer((req,res)=>{
    const url = new URL(req.url,'http://'+os.constants.hostname);
    if(url.pathname ==="/login"){
        fs.readFile("./form.html",(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }
    else if(url.pathname ==="/dologin"){
        const ub = new userbean(url.searchParams.get('username'),url.searchParams.get('pwd'))
        ub.on("loginsuccess",()=>{
            res.writeHead(200,{
                'Content-type':'text/html;charset=utf8'
            })
            res.end("登录成功!")
        })
        ub.on("loginerror",()=>{
            res.writeHead(200,{
                'Content-type':'text/html;charset=utf8'
            })
            res.end("登录失败!")
        })
        ub.login();
    }
}).listen(8002,()=>{
    console.log('http server is running on port 8002!')
})