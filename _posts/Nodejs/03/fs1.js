// const fs = require('fs');
// fs.readFile('./buffer.js',(err,data)=>{
//     if(err)throw err;
//     console.log(data.toString());
// })
const os = require('os');
console.log(os.arch())
// console.log(os.cpus())
console.log(os.endianness())
const buf = Buffer.from([0,1]);
console.log(buf)
console.log(buf.readInt16BE())
console.log(buf.readInt16LE())
console.log(os.hostname())
console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.release())
console.log(os.tmpdir())
console.log(os.EOL)