// 计算圆的周长和面积模块
// 导出方法计算圆的面积
exports.area = function(r){
    return Math.PI * (r**2)
}
//导出方法计算圆的周长
exports.circumference = function(r){
    return 2 * Math.PI * r;
}