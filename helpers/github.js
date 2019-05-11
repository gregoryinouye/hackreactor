const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
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
      // insert data into database
      console.log('statuscode: ', response && response.statusCode);
      console.log('body: ', body);
      callback(null, body);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;