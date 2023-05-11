// dependencies
const express = require('express')
const bookRouter = express.Router()
const Books = require('../models/book')


//INDEX
bookRouter.get('/', async (req, res) => {
    Books.find()
        .then(foundBooks => {
            //after index page is made put foundbooks as a input
            res.send(foundBooks)
        })
        .catch(err => {
            res.send(err)
        })
})

//SHOW
bookRouter.get('/:id', (req, res) => {
    let id = req.params.id
    Books.findById(id)
        .then(foundBooks => {
            //after show page is made put found books as an input
            res.send(foundBooks)
        })
        .catch(err => {
            res.send(err)
        })
})

// EDIT
bookRouter.get('/:id/edit', (req, res) => {
    let id = req.params.id
    console.log(id)
    Books.findById(id)
        .then(editBook => {
            console.log(editBook)
            res.render('edit', {books: editBook})
        })
  })

//CREATE
bookRouter.post('/', (req, res) => {
    Books.create(req.body)
    res.redirect('/books')
})


//EDIT METHOD
bookRouter.put('/:id', (req, res) => {
    let id = req.params.id
    Books.findByIdAndUpdate(id, req.body, {new: true})
        .then(updatedBook => {
            console.log(updatedBook)
            res.redirect(`/books/${id}`)
        })
        .catch(err => {
            console.log("err", err)
        })
})

//DELETE
bookRouter.delete('/:id', (req, res) => {
    let id = req.params.id
    Books.findByIdAndDelete(id)
        .then(deletedBook => { 
            res.status(303).redirect('/books')
         })
         .catch(err => {
            console.log("err", err)
        })
})

// EXPORT
module.exports = bookRouter