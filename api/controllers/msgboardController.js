const db = require('../../config/db.js');
const threads = db.get('threads');

module.exports = {

  getThread(req, res) {
    threads
      .findOne({ '_id': req.body.id._id })
      .then(thread => {
        res.json(thread);
      });
  },

  getThreads(req, res) {
    threads
      .find()
      .then(allThreads => {
        res.json(allThreads);
      });
  },

  sendThread(req, res) {
    const date = Date.now();
    const { title, community, category, description, score, level } = req.body
    const thread = {
      date,
      title,
      community,
      category,
      description,
      date,
      score,
      level
    };
    threads.insert(thread)
      .then(insertedThread => {
        res.json(insertedThread)
      });
  }

}