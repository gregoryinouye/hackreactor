const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const $ = require('jquery');
const github = require('../helpers/github.js');
const db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', urlencodedParser, function (req, res) {
  github.getReposByUsername(req.body.username, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let parsedRepos = JSON.parse(data).map(repo => {
        return {
          _id: repo.id,
          name: repo.name,
          owner: repo.owner.login,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
          description: repo.description
        }
      });
      db.save(parsedRepos, console.log);
    }
  });
  res.end();
});

app.get('/repos', function (req, res) {
  db.find((err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      res.status(200);
      res.send(data);
      res.end();
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

