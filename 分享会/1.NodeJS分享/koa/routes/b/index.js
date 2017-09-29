const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'b.html'
})
module.exports = router
