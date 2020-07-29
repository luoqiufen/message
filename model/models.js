/*
 * @Author: your name
 * @Date: 2020-07-29 09:45:56
 * @LastEditTime: 2020-07-29 14:28:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \message\model\models.js
 */ 

// 创建message对象的Model对象
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    username:String,
    message:String,
    date:String
},{
    collection:'message'//指定集合名称
})

module.exports = {
    Message:mongoose.model('msg',msgSchema)
}