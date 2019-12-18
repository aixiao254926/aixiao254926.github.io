const express = require('express');
const app = express();
const fs = require('fs');
// 显示
app.get('/la',(req,res)=>{
    fs.readFile('./message.json',(err,data)=>{
        res.end(data)
    })
})
// 删除
app.get('/user',(req,res)=>{
    var id = 1;
    fs.readFile('./message.json',(err,data)=>{
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
 app.get('/lala',(req,res)=>{
     fs.readFile('./message.json',(err,data)=>{
         data=JSON.parse(data);
         data['user4'] = user['user4'];
         res.end(JSON.stringify(data));
     })
 })
 app.get('/:id',(req,res)=>{
     fs.readFile('./message.json',(err,data)=>{
         data = JSON.parse(data);
         delete data['user' + req.params.id]
         res.end(JSON.stringify(data));
     })
 })
// 用id读取
 app.get('/de/:id',(req,res)=>{
     fs.readFile('./message.json',(err,data)=>{
         data=JSON.parse(data);
         var user = data['user' + req.params.id]
         res.end(JSON.stringify(user));
     })
 })

app.listen(8001,()=>{
    console.log('http server is running on port 8001')
})