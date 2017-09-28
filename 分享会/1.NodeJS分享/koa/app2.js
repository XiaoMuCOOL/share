const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  if(ctx.path === '/'){
    ctx.body = 'Hello World'
  }else{
    switch (ctx.path) {
      case '/user':
        ctx.body = 'Hello user'
        break;
      case '/dev':
        ctx.body = 'Hello dev'
        break;
      default:
        ctx.body = 'Hello default'
        break;
    }
  }
});
app.listen(3000);
