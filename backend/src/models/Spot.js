const moongose = require('mongoose');

const SpotShema = new moongose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        toJSON: {
            virtuals: true,
        },
    });

SpotShema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = moongose.model('Spot', SpotShema);