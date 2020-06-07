// var mysql = require('mysql');
var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'student', 'student', {
  dialect: 'mysql',
  host: 'localhost',
});

db.authenticate()
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log('Unable to connect')
);

var User = db.define('users', {
  username: Sequelize.STRING
});

var Message = db.define('messages', {
  user_id: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});
  

module.exports = db;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports.dbConnection = mysql.createConnection({
//   user: 'student',
//   password: 'student',
//   database: 'chat'
// });

// module.exports.dbConnection.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Connected to db');
//   }
// });