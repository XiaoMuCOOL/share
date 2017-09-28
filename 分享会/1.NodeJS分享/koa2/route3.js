const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const index = require('./routes/index1')
const user = require('./routes/user')

// error handler
onerror(app)
app.use(logger())

//循环

app.listen(3004);
