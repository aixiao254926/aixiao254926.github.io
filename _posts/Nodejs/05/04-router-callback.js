const express = require('express');
const app = express();
// 路由的回调函数
app.get('/posts',(req,res,next)=>{
    console.log('第一个')
    // res.send('Hello world')
    next();
},(req,res)=>{
    console.log('第二个')
    res.send('hahaha')
})
app.listen(8004,()=>{
    console.log('http server is running on port 8004')
})