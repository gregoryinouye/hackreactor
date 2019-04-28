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
  } else if (req.method === 'GET' && req.url === '/background.jpg') {
    fs.readFile(module.exports.backgroundImageFile, (err, fileData) => {
      if (err) {
        res.writeHead(404, headers);
        res.end('Not found');
        next();
      } else {
        res.writeHead(201, headers);
        res.write(fileData, 'binary');
        res.end();
        next();
      }
    });
  }
};