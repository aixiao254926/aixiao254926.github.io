const express = require('express');
const app = express();
app.route('/book')
    .get((req,res)=>{
        res.send('查看评论')
    })
    .post((req,res)=>{
        res.send('添加评论')
    })
    .put((req,res)=>{
        res.send('修改评论')
    })
    .delete((req,res)=>{
        res.send('删除评论')
    })
app.listen(8005,()=>{
    console.log('http server is running on port 8005')
})