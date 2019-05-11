const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  };

  request.get(options, (err, response, body) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, body);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;