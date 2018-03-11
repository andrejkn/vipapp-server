const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vipapp');

const eventSchema = mongoose.Schema({
  name: String,
  description: String,
  startTime: Date,
  endTime: Date
});

module.exports = mongoose.model('Event', eventSchema);