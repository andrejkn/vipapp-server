const Router = require('koa-router');
const router = new Router();

require('./event.js')(router);
require('./guest.js')(router);

module.exports = router.routes();