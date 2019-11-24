const mongoose = require('mongoose');

const UserScrema = new  mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { timestamps: true});

module.exports = mongoose.model('User', UserScrema);