const Router = require("koa-router");
const router = new Router();
const home = require("./home");
const list = require("./list");

router.use("/home", home.routes(), home.allowedMethods());
router.use("/list", list.routes(), list.allowedMethods());

module.exports = router;
