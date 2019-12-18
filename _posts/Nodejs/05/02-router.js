// 导入模块
const express = require('express');
// 实例化
const app = express();
// 路由
app.all('/',(req,res,next)=>{
    console.log("优先执行")
    next();//下一个中间件
})
app.get('/',(req,res)=>{
    res.send('网站首页')
})
app.get('/news',(req,res)=>{
    res.send('新闻列表')
})
app.get('/news/detail',(req,res)=>{
    res.send('新闻详情')
})
app.post('/',()=>{
    res.send('这次使用的时post请求 ')
})
// 监听
app.listen(8002,()=>{
    console.log('http server is running on port 8002')
})