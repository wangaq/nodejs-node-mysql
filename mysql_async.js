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

//async 并行执行
async.eachSeries(tasks,function(item,callback) {
    console.log('item : ' + sqls[item]);
    conn.query(sqls[item], function(err,res) {
        console.log(res);
        callback(err, res);
    });
}, function(err) {
    console.log('err : ' + err);
});

/*conn.query(selectSQL,function(err,info) {
    if(err) console.log('错误：%s',err);
    console.log('sql result ==>');
    console.log(info);
});*/