const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();
const routes = require('./routes');

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(koaBody({
  jsonLimit: '1kb'
}));

app.use(routes);

app.listen(3000);