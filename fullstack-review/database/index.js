const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

let repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  owner: String,
  owner_avatar: String,
  owner_url: String,
  html_url: String,
  updated_at: Date,
  description: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  Repo.insertMany(repos, {ordered: false}, (err, data) => {
    if (err) {
      console.error.apply(console, ['ERROR: ', err]);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

let find = (callback) => {
  Repo.find({}, {}, {limit: 25}, (err, data) => {
    if (err) {
      console.error('ERROR: ', err);
      callback(err);
    } else {
      callback(null, data);
    }
  }).sort('-updated_at');
}

module.exports.save = save;
module.exports.find = find;