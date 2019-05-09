// **** EXPRESS **** //

const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

server.listen(port, () => console.log(`Express server listening on port ${port}`));

server.use(cors());
server.use(express.static('public'));

server.post('/purchase', jsonParser, (req, res) => {
  console.log('POST purchase');
  addUser(req.body, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200)
      res.end(data);
      console.log('User added with id: ', data);
    }
  });
})


// **** MYSQL DATABASE **** //

const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'multiformcheckout'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err);
  } else {
    console.log(`connected to db as id: ${connection.threadId}`);
  }
});


// **** MODEL **** //



// **** CONTROLLER **** //

const addUser = (userData, cb) => {
  connection.query('INSERT INTO users SET ?', userData, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      cb(data.insertId);
    }
  });
}

