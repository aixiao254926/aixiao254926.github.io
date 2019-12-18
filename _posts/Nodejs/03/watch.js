const fs = require('fs');
fs.watchFile('./fs1.js',(curr,prev)=>{
    console.log(curr.mtime,curr.size)
    console.log(prev.mtime,prev.size)
})

const path = require('path');
const relave = '/home/aixiao/桌面/Nodejs'
console.log(path.format(relave,{'base':'123'}))