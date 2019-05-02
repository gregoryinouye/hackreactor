var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('get reached db');
      db.dbConnection.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(null, results);
        }
      });
      // select * from messages
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

