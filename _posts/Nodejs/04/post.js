const http = require('http');
const {URL} = require('url');
const fs = require('fs');
const querystring = require('querystring');
const server = http.createServer((req,res)=>{
    const myurl = new URL(req.url,'http://'+req.headers.hostname);
    if (myurl.pathname ==='/postform'){
        fs.readFile('./post.html',(err,data1)=>{
            if(err) throw err;
            res.writeHead(200,{
                'Content-type':'text/html;charset=utf8'
            })
            res.end(data1)
        })
    }
    else if(myurl.pathname === '/dopost'){
        res.writeHead(200,{
            'Content-type':'text/html;charset=utf8'
        })
        let params = '';
        req.on('data',(chunk)=>{
            params += chunk;
        })
        req.on('end',()=>{
            let paramsdata = querystring.parse(params);
            let message = `${paramsdata.name},${paramsdata.likes.join(',')}`
            fs.writeFile('./post.txt',message,{encoding:'utf8',flag:'a'},(err)=>{
                if(err) throw err;
                res.writeHead(200,{
                    'Content-type':'text/html;charset=utf8'
                })
                res.end('表单提交成功!')
            })
        })
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html;charset=utf8'
        });
        res.end('<h1>404 Not Found</h1>')
    }
})
server.listen(8000,()=>{
    console.log('http server is running on port 8000!')
})