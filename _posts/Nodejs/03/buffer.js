//创建一个buffer
//为buffer对象分配10个长度每个元素自动填充0
// buffer的每个元素都是一个字节（8bt）
const buf = Buffer.alloc(10)
const but1 = Buffer.allocUnsafe(10)
console.log(but1)
console.log(but1.toString('hex',6,10))
console.log(Buffer.concat([but1,buf],5))