const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BookSchema = new mongoose.Schema({
    bookStore: {
        type: String,
        required: true
    },
    nameBook: {
        type: String,
        required: true
    },    
    descriptionBook: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    crearedAt: {
        type: Date,
        default: Date.now,
    },
});

BookSchema.plugin(mongoosePaginate);

mongoose.model('Book', BookSchema);