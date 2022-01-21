const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    book_name: {
        type: String,
        required: true
    },
    book_price: {
        type: Number,
        required: true
    },
    book_description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book', bookSchema);