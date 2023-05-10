const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
  