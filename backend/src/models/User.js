const moongose = require('mongoose');

const UserShema = new moongose.Schema({
    email: String,
});

module.exports = moongose.model('User', UserShema);