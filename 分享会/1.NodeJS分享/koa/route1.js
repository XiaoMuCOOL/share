const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const Router = require('koa-router')

// error handler
onerror(app)
app.use(logger())

let router = new Router();

router.get("/", ctx => {
  ctx.body = "index.html"
})

router.get("/user", ctx => {
  ctx.body = "user.html"
})

router.get("/user/dev", ctx => {
  ctx.body = "dev.html"
})

//get|put|post|patch|delete|all
router.all("/user", ctx => {
  ctx.body = "user.html"
})

router.all("/users/:id/info", ctx => {
  let id = ctx.params.id
  ctx.body = "user.html"
})

app.use(router.routes())

app.listen(3002);
