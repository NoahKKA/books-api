const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

require('dotenv').config()
const PORT = process.env.PORT

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


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
  