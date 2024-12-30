const mysql = require("mysql2");

// 1.创建连接池
const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "1234",
  connectionLimit: 5,
});

// 2.获取连接是否成功
connectionPool.getConnection((err, connection) => {
  // 1.判断是否有错误信息
  if (err) {
    console.log("数据库连接失败~", err);
    return;
  }

  // 2.获取connection，尝试和数据库连接是否成功
  connection.connect((err, connection) => {
    if (err) {
      console.log("和数据库交互失败~");
    } else {
      console.log("和数据库交互成功~,可以操作数据库了");
    }
  });
});

// 3.获取连接池中连接对象（promise）
const connection = connectionPool.promise();
module.exports = connection;
