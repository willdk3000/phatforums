const db = require('../../config/db.js');
const threads = db.get('threads');

module.exports = {

  getThreads(req, res) {
    threads
      .find()
      .then(allThreads => {
        res.json(allThreads);
      });
  },

  sendThread(req, res) {
    const { id, community, category, description, date, score, level } = req.body
    const thread = {
      id,
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