// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    imageURL: {
        type: String,
        default: 'http://placehold.it/500x500.png',
        required: true,
    }
})

const Books = mongoose.model('Books', bookSchema)
module.exports = Books