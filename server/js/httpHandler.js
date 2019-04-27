const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, headers);
    let direction = messages.dequeue() || 'no moves stored';
    res.end(direction);
  } else if (req.method === 'GET' && /[A-Za-z]*.jpg/.test(req.url)) {
    if (fs.existsSync(req.url)) {
      res.writeHead(200, headers);
      const bgImageFile = fs.createReadStream(req.url);
      bgImageFile.pipe(res);
      res.end();
    } else {
      res.writeHead(404, headers);
      res.end('Not found');
      next();
    }
  }
};


// if (req.method === 'GET') {
//   let directionArr = ['up', 'down', 'left', 'right'];
//   let randomDirection = directionArr[Math.floor(Math.random()*directionArr.length)];
//   res.writeHead(200, headers);
//   res.end(randomDirection);
// }
// };