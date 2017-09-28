const router = require('koa-router')()

router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'user.html'
})

router.get('/dev', function (ctx, next) {
  ctx.body = 'dev.html'
})

module.exports = router
