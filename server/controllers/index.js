var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          res.send('not able to retrieve messages');
        } else {
          res.send(data);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, (err, data) => {
        if (err) {
          res.send('not able to post message');
        } else {
          res.send('message posted');
        }
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          res.send('not able to retrieve users');
        } else {
          res.send(data);
        }
      });
    },
    post: function (req, res) {}
  }
};

