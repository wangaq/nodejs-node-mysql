/**
 * Created by WANGAQ on 2016/4/19.
 */
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a123',
    database: 'nodejs',
    port: '3306'
});
conn.connect();
var date = new Date();
var insertSQL = 'insert into user(name) values("xiaom"),("xiaomi"),("hongm")';
var selectSQL = 'select * from user';
var deleteSQL = 'delete from user where id=1';
var updateSQL = 'UPDATE USER SET NAME="xiaomi" WHERE ID=1';

/*conn.query(selectSQL,function(err,info) {
    if(err) console.log('错误：%s',err);
    console.log('sql result ==>');
    console.log(info);
});*/

conn.query(selectSQL,function(err,info) {
    if(err) console.log('错误：%s',err);
    for(var i in info) {
        console.log('sql result ==>');
        console.log(info[i].Id);
    }
});

conn.end();