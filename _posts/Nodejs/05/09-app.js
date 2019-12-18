//导入模块
const express = require('express');

//创建应用
const app = express();


//重新定义模板引擎
app.engine('html', require('ejs').__express);
//设置模板所在的目录
app.set('views', '../05/temps');
//设置使用的模板引擎
app.set('view engine', 'html');


//静态文件托管
app.use('/public', express.static('./public'));


//路由
app.get('/', (req, res) => {
    res.render('index', {title:"Express模板引擎", content:'床亲故恶搞'})
})
app.get('/posts', (req, res, next) => {
   next('route');
});
app.get('/posts', (req, res) => {
    res.send('posts文章列表');
});

//中间件
app.use((req, res, next) => {
   next(new Error(404));
});
app.use((err, req, res, next) => {
   if (err.message == 404) {
       res.render('404');
   } else {
        next(err);
   }
});


//日志处理 错误
app.use((err, req, res, next) => {
   //进行日志记录
   console.log('ErrorLog');
   next(err);
});

//判断用户是否是ajax请求
app.use((err, req, res, next) => {
    if (res.xhr) {
        res.status(500).json({error:"服务器错误"});
    } else {
        next(err);
    }
})

//错误处理 中间件 做出响应的中间件
app.use((err, req, res, next) => {
    res.status(500).send('<h1>500 服务器错误</h1>');
});


//设置监听
app.listen(4000, () => {
    console.log('http服务运行中 端口:4000');
})