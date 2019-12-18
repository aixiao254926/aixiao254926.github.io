//导入模块
const events = require('events');
console.log(events.defaultMaxListeners);
//实例化
const emitter = new events();
emitter.on('newListener',function(event,listner){
    console.log(`${event}添加`)
    console.log(`${listner}`)
})
//监听事件
emitter.on('aa',function(){
    console.log("aa被触发了")
})
// 自己触发事件
emitter.emit('aa')
emitter.setMaxListeners(12);
console.log(emitter.getMaxListeners())
console.log(emitter.eventNames())