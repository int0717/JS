var mysql = require('mysql')
var config = require('./defaultConfig.js')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 定义一个统一连接数据库的方法
let allServies = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放连接池
          })
        }
      })
    })
  }
}

// 读取所有recommend表数据， 测试数据连接
let getAllRecommend = function () {
  let _sql = `select * from recommend`
  return allServies.query(_sql)
}

module.exports = {
  getAllRecommend
}