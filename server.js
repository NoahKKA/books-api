const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Books
const bookController = require('./controllers/books_controller')
app.use('/books', bookController)

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
  