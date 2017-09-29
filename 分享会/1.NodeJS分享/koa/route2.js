const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const index = require('./routes/index')
const user = require('./routes/user')

// error handler
onerror(app)
app.use(logger())

app.use(index.routes())
app.use(user.routes())

app.listen(3003);
