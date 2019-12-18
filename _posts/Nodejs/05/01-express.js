// 导入模块
const express = require('express');
// 实例化
const app = express();
// 托管静态资源
app.use(express.static('../04'))
// 路由
app.get('/',(req,res)=>{
    res.send('Hello Word')
})
// 监听
app.listen(8001,()=>{
    console.log('http server is running on port 8001!')
})