const request = require('request');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
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