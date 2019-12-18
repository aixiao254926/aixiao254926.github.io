const express = require('express');
const app = express();
// app.get('/ad?c',(req,res)=>{
//     res.send('<h1>成功</h1>')
// })
// app.get('/ad+c',(req,res)=>{
//     res.send('<h1>成功</h1>')
// })
// app.get('/ad*c',(req,res)=>{
//     res.send('<h1>成功</h1>')
// })
// app.get(/\/a{2,3}/,(req,res)=>{
//     res.send('ok ')
// })
app.get('/search',(req,res)=>{
    console.log(req.query)
    res.send('ok')
})
app.get('/article/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('OK')
})
app.listen(8003,()=>{
    console.log('http server is running on port 8003')
})