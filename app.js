const express = require('express');
const app = express();
const {message}=require('./router')

app.listen(4000);

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

// 访问 / 请求
app.get('/',function(req,res){
    res.redirect('/message?page=1');
})

// 处理 /message开头的请求地址
app.use('/message',message);