//导入fs模块
const fs = require('fs');
//同步和异步
// fs.rename('./text.txt','hello.txt',function(err){
//     if(err)throw err;
//     console.log('啦啦啦')
// })
// fs.mkdir('txt',function(err){
//     if(err) throw err;
//     console.log('添加成功')
// })
fs.rmdir('./txt',err=>{
    if(err){
        console.log(345)
    }else{
        console.log(456)
    }
})
fs.access('txt',err=>{
    if(err){
        console.log(123)
    }else(
        console.log(234)
    )
}) 