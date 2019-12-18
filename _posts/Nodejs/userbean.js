const events = require('events');
class userbean extends events{
    constructor(username,pwd){
        super();
        this.username = username;
        this.pwd = pwd;
    }
    login(){
        if(this.username ==="admin"&&this.pwd === "admin"){
            this.emit("loginsuccess");
        }else{
            this.emit("loginerror");
        }
    }
}
module.exports = userbean
