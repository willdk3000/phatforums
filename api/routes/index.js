const msgboardController = require('../controllers').msgboard;

module.exports = (app) => {

  app.get('/api/getThreads', msgboardController.getThreads);
  app.post('/api/sendThread', msgboardController.sendThread);

};