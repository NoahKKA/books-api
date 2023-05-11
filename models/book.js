// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {
        type: String,
        default: "Book Title"
    },
    description: {
        type: String,
        default: "This is a book"
    },
    year: {
        type: Number,
        default: 2001
    },
    quantity: {
        type: Number,
        default: 10
    },
    imageURL: {
        type: String,
        default: 'http://placehold.it/500x500.png',
        required: true,
    }
})

const Books = mongoose.model('Books', bookSchema)
module.exports = Books