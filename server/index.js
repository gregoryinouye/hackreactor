const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const $ = require('jquery');
const github = require('../helpers/github.js');
const db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', urlencodedParser, function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('sending GET to GitHub for: ', req.body.username);
  github.getReposByUsername(req.body.username, (err, data) => {
    // process the data by copying over keys of interest
    // save to database
    // console.log(data);
    db.save({
      _id: 2, 
      name: 'john', 
      owner: 'john', 
      html_url: 'www.google.com',
      updated_at: '2016-12-06T13:06:37Z',
      description: 'this apple'}, console.log);
    console.log.call(console, 'now should cause page refresh or send data?');
  });
  // send repos to page
  res.end();
});

app.get('/repos', function (req, res) {
  db.find((err, docs) => {
    if (err) {
      console.log('error: ', err);
    } else {
      res.status(200)
      res.send(data);
    }
  })
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

