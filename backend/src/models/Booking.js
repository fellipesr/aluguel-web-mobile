const moongose = require('mongoose');

const BookingShema = new moongose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = moongose.model('Booking', BookingShema);