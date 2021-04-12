var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('/* Name goes here*/', UserSchema);

module.exports = mongoose.model('/* Name goes here*/');
