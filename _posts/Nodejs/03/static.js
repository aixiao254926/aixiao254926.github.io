// 静态文件服务器
// 导入模块
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
// 创建http服务
http.createServer((req,res)=>{
    //处理请求的url，只保留路径和文件
    let pathname = url.parse(req.url).pathname;
    let fileurl = path.join('')
    res.end();
}).listen(8000,()=>{
    console.log('http server running on port 8000')
})