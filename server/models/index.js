var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.query('SELECT messages.text, messages.roomname, users.username FROM messages LEFT OUTER JOIN users ON users.id WHERE users.id = messages.user_id', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (reqBody, callback) {
      db.dbConnection.query(`INSERT INTO messages (text, user_id, roomname) VALUES('${reqBody.message}', (SELECT id from users WHERE username = '${reqBody.username}'), '${reqBody.roomname}')`, (err) => {
        if (err) {
          console.log('username not found');
        } else {
          callback(null, 'db: message posted');
        }
      });
    }
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

