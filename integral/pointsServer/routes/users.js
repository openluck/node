const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig');
const utils = require('../controllers/utils');

router.prefix('/users')


//会员登录
router.post('/userLogin', async (ctx, next) => {
    var _username = ctx.request.body.username;
    var _userpwd = ctx.request.body.userpwd;
    await userService.userLogin(_username, _userpwd).then((res) => {
        let r = '';
        console.log(res);
        if (res.length) {
            r = 'ok';
            let result = {
                id: res[0].id,
                nickname: res[0].nickname,
                username: res[0].username
            }
            ctx.body = {
                code: "200",
                data: result,
                mess: "登陆成功"
            }
        } else {
            r = 'error';
            ctx.body = {
                code: "400",
                data: r,
                mess: "账号或密码错误"
            }
        }
    }).catch((err) => {
        ctx.body = {
            code: "200",
            data: err
        }
    });
})


module.exports = router
