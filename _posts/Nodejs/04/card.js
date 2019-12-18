// 导入模块
const http = require('http');
const {URL} = require('url');
const fs = require('fs');
const formidable = require('formidable');
const uuid = require('uuid');
const path = require('path');
// 创建服务器
http.createServer((req,res)=>{
    let url = new URL(req.url,'http://'+req.headers.hostname)
    if(url.pathname === '/tupian'){
        fs.readFile('./card.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-type':'text/html;charset=utf8'})
            res.end(data);
        })
    }
    else if(url.pathname === '/tupian1'){
        const form = new formidable.IncomingForm({
            uploadDir :'../04',
            keepExtensions:true,
            //限制图片内存
            // maxFileSize:2*1024*1024
        });
        let fields = {likes:[]}
        form.on('field',(name,value)=>{
            if(name==='likes'){
                fields.likes.push(value)
            }else{
                fields[name] = value;
            }
        });
        form.on('file',(field,file)=>{
            //重新命名
            fs.rename(file.path,path.join(form.uploadDir,`${uuid()}.${path.extname(file.path)}`),()=>{

            });
        });
        form.on('end',()=>{
            let neirong =`${fields.name},${fields.likes}`
            fs.writeFile('./card.txt',neirong,{encoding:'utf8',flag:'a'},(err)=>{
                if(err) throw err;
                res.end('上传成功!')
            })
        })
        form.on('error',(err)=>{
            res.writeHead(200,{'Content-type':'text/html;charset=utf8'})
            res.end('图片上传失败:'+err)
        })
        //解析请求体
        form.parse(req,(err,fields,files)=>{
            if(err) {return}
            res.end();
        })
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html;charset=utf8'
        })
        res.end('<h1> NOT FOUND</h1>')
    }
}).listen(8011,()=>{
    console.log('http server is running on port 80011!')
})