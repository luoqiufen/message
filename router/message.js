/*
 * @Author: your name
 * @Date: 2020-07-29 09:47:15
 * @LastEditTime: 2020-07-29 13:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \message\router\message.js
 */ 
const express = require('express');
const Mes= require('../model/db.js')
const router = express.Router();

router.get('/',function(req,res){
    Mes.find({},function(err,mes){
        if(err){
            console.log(err);
            res.render('error',{errMsg:'获取数据库失败'});
            return;
        }
        res.render('index',{mes:mes});
    })
   
})

router.get('/delete',function (req,res) {
    var id = req.params.id;
    id = ObjectId(id)
    
    Mes.deleteOne({_id:id},function(err,result){
        if(err){
            console.log(err);
            res.render('error',{errMsg:'删除失败'});
            return;
        }
        res.redirect('/');
    })
})








module.exports = router;