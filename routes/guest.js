module.exports = (router) => router
  .get('/guest', (ctx, next) => {
    ctx.body = 'hi guest';
    next();
  });
