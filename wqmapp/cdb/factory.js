var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'meiren_db',
  port     : 3306,
});
connection.connect();
exports.mysql = connection;