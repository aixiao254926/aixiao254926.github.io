//导入模块
const fs = require('fs')
// 合并文件
const concatFile = (callback)=>{
    fs.readFile('./04/3.css',(err,data1) => {
        if (err) throw err;
        fs.readFile('./04/2.css',(err,data2)=>{
            if (err) throw err;
            let buf = Buffer.concat([data1,data2])
            fs.writeFile('./03/4.css',buf,(err)=>{
                if(err) throw err;
                callback();
            })
        })
    })
}
concatFile(()=>{
    console.log('build 4.css')
})
// 监听文件变化
fs.watch('./04',(eventType,filename)=>{
    if(eventType === 'change'&&(filename==='3.css'||filename==='2.css')){
        concatFile(function(){
            console.log('change 4.css')
        })
    }
    return;
})