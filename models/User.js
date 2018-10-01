const mongoose = require('mongoose');
// const Schema = mongoose.Schema; 
//javascript destructering below
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    displayName: String

});

mongoose.model('users', userSchema);
