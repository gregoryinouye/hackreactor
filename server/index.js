const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const $ = require('jquery');
const github = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', urlencodedParser, function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('sending GET to GitHub for: ', req.body.username);
  github.getReposByUsername(req.body.username, console.log);
  // send repos to page
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

