const express = require('express');
const app = express();
//中间件
app.use((req,res,next)=>{
    // console.log('请求'+req.originalUrl)
    next();
    // 错误处理
    // next('3423');
});
app.get('/posts',(req,res,next)=>{
    // console.log("最后的响应")
    res.send('posts 成功响应 id'+req.params.id)
    // next()
})
// 404错误
app.use((req,res,next)=>{
    next(new Error(404))
})
app.use((err,req,res,next)=>{
    if(err.message == 404){
        res.statu(404).render('404');
    }else{
        next(err)
    }
})

// 日志处理错误
app.use((err,req,res,next)=>{
    console.log('Error');
    next(err);
})
// 判断是否是ajax请求
app.use((err,req,res,next)=>{
    if(res.xhr){
        res.statu(500).json({error:"服务器错误"});
    }else{
        next(err);
    }
})
// 错误处理 中间件
app.use((err,req,res,next)=>{
    res.status(500).send('<h1>服务器错误</h1>')
})
app.listen(8008,()=>{
    console.log('http server is running on port 8008')
})