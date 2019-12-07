const msgboardController = require('../controllers').msgboard;

module.exports = (app) => {

  app.get('/api/getThreads', msgboardController.getThreads);
  app.post('/api/getThread', msgboardController.getThread);

  app.post('/api/sendThread', msgboardController.sendThread);
  app.post('/api/sendReply', msgboardController.sendReply);

  app.post('/api/getReplies', msgboardController.getReplies);

};