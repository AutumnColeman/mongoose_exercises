const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;


const Language = mongoose.model('Language', {
  name: String,
  website: String,
  dateFirstAppeared: Date,
  inventors: [{
    name: String,
    website: String
  }],
  paradigms: [String],
  typingDiscipline: [String],
  dateCurrentRelease: Date,
  influencedBy: [String]
});

const Album = mongoose.model('Album', {
  name: String,
  artist: String,
  release: Date,
  tracks: [{
    name: String,
    songWriters: String,
    duration: String
  }],
  personnel: [{
    name: String,
    instrument: String
  }]
});
