const msgboardController = require('../controllers').msgboard;

module.exports = (app) => {

  app.get('/api/getthreads', msgboardController.getThreads);
  app.post('/api/sendthread', msgboardController.sendThread);

};