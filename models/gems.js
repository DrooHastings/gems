var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gemsSchema = new Schema ({
  name: String,
  gem: String,
  value: Number,
  rare: Boolean,
  date: Date

});

var Gems = mongoose.model('gems', gemsSchema);


module.exports = Gems;
