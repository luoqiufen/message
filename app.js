/*
 * @Author: your name
 * @Date: 2020-07-29 09:48:14
 * @LastEditTime: 2020-07-29 14:04:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \message\views\app.js
 */ 

// 创建服务
var express = require('express');
var router = require('./router');
var Mes= require('./model/db.js') 
var time = require('silly-datetime');
// var mongooseClient = 

var app = express();
app.listen(4000);

// 设置视图引擎
app.set('view engine','ejs');
// 设置post请求头
app.use(express.urlencoded({extended:true}));
// 设置根目录
app.use(express.static('./public'));

app.get('/',function(req,res){
    res.redirect('/message');
})

app.use('/message',router.message);


app.post('/add',function(req,res){
    var body = req.body;
    var username = body.username;
    var message = body.message;
    var time = new Date();
    
    // 创建对象
    var o = new Mes({
        username:username,
        message:message,
        time:time
    });

    // 保存进数据库
    o.save(function(err,product){
        if(err){
            console.log(err);
        }
        console.log(product);
        res.redirect('/');
    })
})


