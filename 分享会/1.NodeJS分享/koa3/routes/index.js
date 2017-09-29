const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '注册'
  })
})

router.post('/reg', async (ctx, next) => {
  await ctx.render('success', {
    title: '注册',
    name: ctx.request.body.name,
    age: ctx.request.body.age
  })
})


module.exports = router
