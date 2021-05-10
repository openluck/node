// 1:
// const Koa = require("koa2");
// const app = new Koa();
// const port = 9000;

// app.use(async (ctx) => {
//   ctx.body = " hello, koa";
// });

// app.listen(port, () => {
//   console.log("server is running at http://localhost:" + port);
// });

// 2:引入路由
// const Koa = require("koa2");
// const app = new Koa();
// const Router = require("koa-router");
// const router = new Router();
// const port = 9000;

// router.get("/", async (ctx) => {
//   ctx.body = "首页";
// });

// router.get("/list", (ctx) => {
//   ctx.body = "列表";
// });

// app.use(router.routes(), router.allowedMethods());

// app.listen(port, () => {
//   console.log("server is running at http://localhost:" + port);
// });

// 2:路由拆分
const Koa = require("koa2");
const app = new Koa();
const port = 9000;
const router = require("./router/index");
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
  console.log("server is running at http://localhost:" + port);
});
