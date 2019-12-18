const fs = require('fs');
const w = fs.createReadStream('./aa/d833c895d143ad4b4a4b0af76cb2b0aaa50f06d2.jpg',{encoding:'base64'});
const r = fs.createWriteStream('./3.jpg',{encoding:'base64'});
w.pipe(r)