const db = require('../../config/db.js');
const threads = db.get('threads');
const replies = db.get('replies');

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

  getReplies(req, res) {
    replies
      .find({ 'thread_id': req.body.id })
      .then(replies => {
        res.json(replies);
      });
  },

  sendThread(req, res) {
    const date = Date.now();
    const { title, community, description, score } = req.body
    const thread = {
      date,
      title,
      community,
      description,
      score
    };
    threads.insert(thread)
      .then(insertedThread => {
        res.json(insertedThread)
      });

    console.log(Date.now(), 'Thread sent !')
  },

  sendReply(req, res) {
    const date = Date.now();
    const { thread_id, community, description, score } = req.body
    const reply = {
      date,
      thread_id,
      community,
      description,
      score
    };
    replies.insert(reply)
      .then(insertedReply => {
        res.json(insertedReply)
      });

    console.log(Date.now(), 'Reply sent !')
  }

}