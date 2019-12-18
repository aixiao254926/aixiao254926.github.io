// 导入模块
const circle = require("./circle.js");
const square = require("./square.js");
//计算圆的面积周长
console.log("圆的面积："+circle.area(4));
console.log("圆的周长："+circle.circumference(4));
//计算正方形的面积周长
var squareobj = new square(3);
console.log("正方形的面积："+squareobj.area());
console.log("正方形的周长："+squareobj.circumference());
