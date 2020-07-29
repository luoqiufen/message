/*
 * @Author: your name
 * @Date: 2020-07-29 09:45:33
 * @LastEditTime: 2020-07-29 13:07:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \message\model\db.js
 */ 
const mongoose = require('mongoose');
const modules = require('./models.js');

var protocal = modules.protocal;
var ip = modules.ip;
var port = modules.port;
var dbName = modules.dbName;
var colName = modules.colName;

// 创建messageSchema
var mesSchema = new mongoose.Schema({
    username: String,
    message:String,
    time: Date
},{
    collection:colName,
    versionKey:false
})

// 创建对应的model
var Mes = mongoose.model('mes',mesSchema);

// 连接数据库
var url = protocal+'://'+ip+':'+port+'/'+dbName; 
const opt = {useNewUrlParser:true,useUnifiedTopology:true};

mongoose.connect(url,opt);

module.exports = Mes;