const db = require('./index');

// console.log(db);

const Message = db.Message;


// 删
/* db.del(Message,'5f2138b5edc9041b28517707',function(err,res){
    console.log(err);
    console.log(res);
}) */


// 查
// 1)2参数
// db.find('model','function');
// 2)3参数
// db.find('model',{name:'a'},'function');
// db.find('model',{page:2},'function');
// 3)4参数
// db.find('model',{name:'a'},{size:6},'function');

// 改
/* var filter = {
    username:'虹猫'
}
var data = {
    message:'要拍照吗?'
}
db.modify(Message,filter,data,function(err,res){
    console.log(err);
    console.log(res);
}) */

// 增
/* var data = {
    username:'虹猫',
    message:'明天一起爬山吧',
    date:'2020-07-09 16:38'
}
db.add(Message,data,function(err){
    console.log(err);
}) */
