var mongoose = require('./db.js')

var Schema = mongoose.Schema

var UserSchema = new Schema({
	email:String,
	password:String
})

module.exports = mongoose.model('User',UserSchema);