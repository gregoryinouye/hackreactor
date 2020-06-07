const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const counter = require('./counter');

var items = {};

// Public API - Fix these CRUD functions ///////////////////////////////////////

exports.create = (text, callback) => {
  counter.getNextUniqueId((err, id) => {
    var newTodoFile = path.join(exports.dataDir, `${id}.txt`);
    fs.writeFile(newTodoFile, text, (err, data) => {
      callback(err, {id: id, text: text});
    });
  });
};



exports.readAll = (callback) => {
  fs.readdir(exports.dataDir, (err, data) => {
    var promiseArray = [];
    _.each(data, (fileName) => {
      var id = fileName.split('.')[0];
      promiseArray.push(new Promise((resolve, reject) => {
        fs.readFile(path.join(exports.dataDir, fileName), 'utf8', (err, text) => {
          if (err) {
            reject(err);
          } else {
            resolve({id: id, text: text});
          }
        });
      }));
    });
    Promise.all(promiseArray).then((value) => {
      callback(err, value);
    });
  });
};

exports.readOne = (id, callback) => {
  var filePath = path.join(exports.dataDir, `${id}.txt`);
  fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
      callback(new Error(`No item with id: ${id}`));
    } else {
      callback(null, { id, text });
    }
  });
};

exports.update = (id, text, callback) => {
  var filePath = path.join(exports.dataDir, `${id}.txt`);
  fs.readFile(filePath, 'utf8', (err, oldText) => {
    if (err) {
      callback(new Error(`No item with id: ${id}`));  
    } else {
      fs.writeFile(filePath, text, (err, data) => {
        callback(null, { id, text });
      });
    }
  });
};

//TRY TO REFACTOR
// exports.readOne(id, (err, oldText) => {
//   if (err) {
//     return err;
//   } else {
//     var filePath = path.join(exports.dataDir, `${id}.txt`);
//   fs.writeFile(filePath, text, (err, { id, text }) => {
//     callback(null, { id, text });
//   });
//   }   
// });


exports.delete = (id, callback) => {
  var filePath = path.join(exports.dataDir, `${id}.txt`);
  fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
      callback(new Error(`No item with id: ${id}`));  
    } else {
      fs.unlink(filePath, (err) => {
        callback(err);
      });
    }
  });
};

// Config+Initialization code -- DO NOT MODIFY /////////////////////////////////

exports.dataDir = path.join(__dirname, 'data');

exports.initialize = () => {
  if (!fs.existsSync(exports.dataDir)) {
    fs.mkdirSync(exports.dataDir);
  }
};
