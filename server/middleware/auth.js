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

