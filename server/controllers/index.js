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
      console.log(req);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

