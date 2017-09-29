const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const glob = require('glob')
const path = require('path')
const router = require('koa-router')()

// error handler
onerror(app)
app.use(logger())

// 加载路由
glob.sync("routes/**/*.js").forEach(file => {
  const route = require("./" + file)
  let urlPath = path.dirname(file).replace(/\.[^.]*$/, "").replace("routes", "").replace("index", "")
  router.use(urlPath, route.routes())
});
app.use(router.routes())

app.listen(3004)
