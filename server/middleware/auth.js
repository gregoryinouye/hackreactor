const models = require('../models');
const Promise = require('bluebird');
const parseCookies = require('../middleware/cookieParser.js');

module.exports.createSession = (req, res, next) => {
  parseCookies(req, res, (hasCookies, data) => {
    // no cookies
    if (!hasCookies) {
      // create cookie
      models.Sessions.create()
        .then((sessionData) => {
          console.log(typeof sessionData);
          console.log(sessionData);
        }).catch();
    } else {
      //check if valid cookie
      if (models.Sessions.isLoggedIn(req.cookie.shortlyid)) {
        //   yes: set up session with existing cookie
        models.Sessions.get({});
      } else {
        console.log('need to create new cookie');
        // no: create new cookie
      }
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

module.exports.login = (req, res, next) => {
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