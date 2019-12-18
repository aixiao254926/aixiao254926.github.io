const http = require('http');
const fs = require('fs');
http.createServer  ((req,res)=>{
    // 获取文件信息
    // let lastModifieDate;
    fs.stat('./card.html',(err,stat)=>{
        if(err) throw err;
        // 获取最后一次修改时间
        let lastModifieDate = stat.mtime.toUTCString();
        let ifmodifiedsince = req.headers['if-modified-since']
        // 判断缓存浏览器端缓存是否过期
        if(ifmodifiedsince && lastModifieDate === ifmodifiedsince){
            res.writeHead(304,'not modified');
            res.end();
            return;
        }  
        fs.readFile('./card.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'last-modified':lastModifieDate});
            res.end(data)
        })
    })

}).listen(8002,()=>{
    console.log('http server is running on port 8002')
})