const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('openUri', function() {
  console.log('Connected to MongoDB');
});

let repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  owner: String,
  html_url: String,
  updated_at: Date,
  description: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  Repo.insertMany(repos, {ordered: false}, (err, data) => {
    if (err) {
      console.error.apply(console, ['connection error: ', err]);
    } else {
      callback(data);
    }
  });
}

let find = (callback) => {
  let repoList = Repo.find({}, callback);
}

module.exports.save = save;
module.exports.find = find;