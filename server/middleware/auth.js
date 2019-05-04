const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  models.Users.get({username: req.body.username})
    .then(userObj => {
      if (!userObj) {
        next('user does not exist');
      } else if (models.Users.compare(req.body.password, userObj.password, userObj.salt)) {
      // send cookie with response
        next(null, 'authenticated');
      } else {
        next('authentication error');
      }
    });
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.createUser = (req, res, next) => {
  models.Users.get({username: req.body.username})
    .then(userObj => {
      if (userObj) {
        next('username already exists');
      } else {
        models.Users.create({username: req.body.username, password: req.body.password})
          .then(success => {
            if (!success) {
              next(success);
            } else {
              next(null, 'username created');
            }
          });
      }
    });
};