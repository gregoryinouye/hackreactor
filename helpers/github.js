const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  };

  request.get(`https://api.github.com/:users/:${username}/repos`, options, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // insert data into database
      console.log('received: ', data);
      callback(data);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;