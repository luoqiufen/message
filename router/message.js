 // 处理留言的路由
const express = require('express');
const Route = express.Router();
const db = require('../model');
const Message = db.Message;


//  /message请求
Route.get('/',function(req,res){
    // 查询数据库中的数据,传递给index页面解析
    db.find(Message,function(err,docs){
        if(err){
            console.log(err);
            res.render('error',{errMsg:'网络出错'});
            return;
        }
        // 取到数据,传递给页面
        res.render('index',{msg: docs})
    })
})

// post - /message/tijiao
Route.post('/tijiao',function(req,res){
    var query = req.body;
    
    db.add(Message,query,function(err){
        if(err){
            console.log(err);
            res.render('error',{errMsg:'提交留言失败!'});
            return;
        }
        // 提交成功,回到首页
        res.redirect('/');
    })
})

Route.get('/delete',function(req,res){
    var id = req.query.id
    db.del(Message,id,function(err,res){
        if(err){
            console.log(err);
            res.render('error',{errMsg:'留言删除失败!'});
            return;
        }
        // 删除成功,回到首页
        // res.redirect('/');
    })
})








module.exports = Route;