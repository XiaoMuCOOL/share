const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const index = require('./routes/index1')
const user = require('./routes/user')

// error handler
onerror(app)
app.use(logger())

app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())

app.listen(3003);
