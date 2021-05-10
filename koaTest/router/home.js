// const Router = require('koa-router');
// const home = new Router();

// // 这里的 '/' 就是指向 index.js 中的 /home
// home.get('/', async (ctx) => {
//         ctx.body = "首页";
//     })

// module.exports = home;

// 2
const Router = require("koa-router");
const home = new Router();
const db = require("../utils/db");
home.get("/", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    let sqlLang = `select * from sys_config`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});

module.exports = home;
