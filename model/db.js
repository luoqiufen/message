// 负责连接数据库,并对数据库进行增删改查的操作
const mongoose = require('mongoose');

const url = 'mongoose://localhost:27017/web';
const opt = {useNewUrlParser:true,useUnifiedTopology:true};

// 连接数据库
mongoose.connect(url,opt);

/**
 * 增
 * @param {*} obj 保存的对象
 * @param {*} callback 回调函数
 */
function add(obj,callback){

}

// 删

// 改

// 查

module.exports = {
    add()
}