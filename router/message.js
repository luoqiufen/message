 // 处理留言的路由
const express = require('express');
const Route = express.Router();

//  /message请求
Route.get('/',function(req,res){
    res.render('index');
})









module.exports = Route;