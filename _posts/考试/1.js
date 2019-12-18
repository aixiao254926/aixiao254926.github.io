const events = require('events');
const emmiter = new events();
emmiter.addListener('a',()=>{
    console.log(123456)
});
emmiter.emit('a')
emmiter.emit('a')
emmiter.emit('a')
emmiter.emit('a')