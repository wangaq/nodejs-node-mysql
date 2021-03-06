/**
 * Created by WANGAQ on 2016/4/19.
 * async 异步控制demo
 */
var mysql = require('mysql');
var async = require('async');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a123',
    database: 'nodejs',
    port: '3306'
});
conn.connect();

var sqls = {
    'insertSQL' : 'insert into user(name) values("xiaom"),("xiaomi"),("hongm")',
    'selectSQL' : 'select * from user',
    'deleteSQL' : 'delete from user where id=1',
    'updateSQL' : 'UPDATE USER SET NAME="xiaomi" WHERE ID=1'
}

var tasks = ['insertSQL','selectSQL','deleteSQL','updateSQL']

//async 串行执行，一个函数数组中的每个函数，每一个函数执行完成之后才能执行下一个函数
async.eachSeries(tasks,function(item,callback) {
    console.log('item : ' + sqls[item]);
    conn.query(sqls[item], function(err,res) {
        console.log(res);
        callback(err, res);
    });
}, function(err) {
    console.log('err : ' + err);
});