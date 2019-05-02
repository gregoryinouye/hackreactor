var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (text, callback) {
      // async to get user id from username?
      // if username does not exist
      // // post into username table using users.post
      // get username id to post
      // save message to to db using user id?
      console.log(text);
      callback(null, 'db: message posted');
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM users', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (username, callback) {
      db.dbConnection.query(`INSERT into users (username) VALUES('${username}')`, (err) => {
        if (err) {
          console.log(err);
        } else {
          callback(null, 'db: user posted');
        }
      });
    }
  }
};

