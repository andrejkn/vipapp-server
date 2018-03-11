const Event = require('../models/event');

module.exports = (router) => router
  .get('/event', (ctx, next) => {
    ctx.body = 'welcome to the event';
    next();
  })
  .post('/event', async (ctx) => {
    const body = ctx.request.body;
    if (!body.name) {
      ctx.throw(400, 'Even\'s name is required');
    }
    const newEvent = new Event(body)

    console.log(`event name = ${body.name}`);
    const createdEvent = await newEvent.save();
    ctx.body = JSON.stringify(createdEvent);
    console.log(createdEvent);
  });
