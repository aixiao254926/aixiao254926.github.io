const express = require('express');
const app = express();
const fs = require('fs');
// 显示
app.get('/xianshi',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        if(err) throw err;
        res.end(data)
    })
})
// 删除
app.get('/shanchu1',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        var id = 1;
        if(err) throw err;
        data = JSON.parse(data);
        delete data['user'+id];
        res.end(JSON.stringify(data))
    })
})
app.get('/shanchu2',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        var id = 2;
        if(err) throw err;
        data = JSON.parse(data);
        delete data['user'+id];
        res.end(JSON.stringify(data))
    })
})
app.get('/shanchu3',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        var id = 3;
        if(err) throw err;
        data = JSON.parse(data);
        delete data['user'+id];
        res.end(JSON.stringify(data))
    })
})
// 增加
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
app.get('/zengjia',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        res.end(JSON.stringify(data))
    })
})
// 修改
app.get('/xiugai1',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        var name = '我是一'
        if(err) throw err;
        data = JSON.parse(data);
        data['user1']['name'] = name;
        res.writeHead(200,{'Content-type':'text/html;charset=utf8'})
        res.end(JSON.stringify(data));
    })
})
app.get('/xiugai2',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        var name = '我是二'
        if(err) throw err;
        data = JSON.parse(data);
        data['user2']['name'] = name;
        res.writeHead(200,{'Content-type':'text/html;charset=utf8'})
        res.end(JSON.stringify(data));
    })
})
app.get('/xiugai3',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        var name = '我是三'
        if(err) throw err;
        data = JSON.parse(data);
        data['user3']['name'] = name;
        res.writeHead(200,{'Content-type':'text/html;charset=utf8'})
        res.end(JSON.stringify(data));
    })
})
app.listen(8001,()=>{
    console.log('http server is running on port 8001')
})