//计算正方形面积和周长
module.exports = class{
    constructor(w){
        this.w = w;
    }
    area(){
        return this.w ** 2;
    }
    circumference(){
        return this.w * 4;
    }
}