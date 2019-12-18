const express = require('express')
const app = express();
// 重新定义模板引擎
// app.engine('html',require('ejs').__express)
// 设置模板引擎
// 设置模板所在的目录
app.set('views','../05');
// 设置使用的模板引擎
// app.set('view engine','html');
app.set('view engine','ejs');
// 路由
app.get('/',(req,res)=>{
    res.render('index',{title:'express模板引擎',content:'模板'})
})
app.listen(4000,()=>{
    console.log('http server is running on port 4000')
})