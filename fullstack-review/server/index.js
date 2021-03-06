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
      res.status(404).end();
      return
    } else {
      if (JSON.parse(data).message === "Not Found") {
        res.status(404).end()
        return
      }
      let parsedRepos = JSON.parse(data).map(repo => {
        return {
          _id: repo.id,
          name: repo.name,
          owner: repo.owner.login,
          owner_avatar: repo.owner.avatar_url,
          owner_url: repo.owner.html_url,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
          description: repo.description
        }
      });
      db.save(parsedRepos, (err, data) => {
        if (err) {
          console.error(err);
          res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    }
  });
});


app.get('/repos', function (req, res) {
  db.find((err, data) => {
    if (err) {
      console.error('ERROR: ', err);
      res.status(404).res.end();
    } else {
      console.log('GET received');
      console.log(data);
      res.status(200);
      res.json(data);
      res.end();
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

