const router = require('koa-router')()

router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'b/user.html'
})

router.get('/dev', function (ctx, next) {
  ctx.body = 'b/user/dev.html'
})

module.exports = router
