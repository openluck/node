/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-14 13:43:28
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-14 15:37:25
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-06 13:41:10
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-14 15:18:24
 */
var mysql = require('mysql');
var config = require('./defaultConfig');

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
});


let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows);
            }
            connection.release()
          })
        }
      })
    })
  }
}

/**
 * @name: 会员用户登录
 * @msg: 
 * @param {*} username
 * @param {*} userpwd
 * @return {*}
 */
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql);
}

/**
 * @name: 企业员工登录
 * @msg: 
 * @param {*}
 * @return {*}
 */
 let adminLogin = function (adusername, aduserpwd) {
  let _sql = `select * from adminuser where adusername="${adusername}" and aduserpwd="${aduserpwd}";`
  return allServices.query(_sql);
}

module.exports = {
  userLogin,
  adminLogin
}
