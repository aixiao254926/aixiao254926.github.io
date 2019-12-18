// 导入模块
const http = require('http');
const fs = require('fs');
const {URL} = require('url');
//创建服务
const server = http.createServer((req,res)=>{
    const url = new URL(req.url,'http://'+ req.headers.hostname);
    switch(url.pathname){
        case'/getform':
            fs.readFile('./get.html',(err,data)=>{
                if(err) throw err;
                // let message = `${url.searchParams.get('name')}:${url.searchParams.get('likes').join(',')}`
                 //写入文件

                res.writeHead(200,{
                    'Content-type':'text/html;charset=utf8'
                });
                res.end(data);
            });
            break;
        case '/doget': 
            let message = `${url.searchParams.get('name')}:${url.searchParams.getAll('likes').join(',')}`
            fs.writeFile('./get.txt',message,{ecoding:'utf8',flag:'a',},(err)=>{
                if(err) throw err;
                res.writeHead(200,{
                    'Content-type':'text/html;charset=utf8'
                });
                res.end('表单提交成功!')
            });
            break;
        default:
            res.writeHead(404,{
                'Content-type':'text/html;charset=utf8'
            });
            res.end('<h1>404 Not Found</h1>')
    }
    // res.end('hello world!')
})
server.listen(8002,()=>{
    console.log('http server is running on port 8001')
})