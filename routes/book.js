const express = require('express')

const router = express.Router()

const Book = require('../models/Book')

router.get('/test', (req,res) => {
    res.send('Book route is working')
})

router.post('/', (req,res) => {
    
    Book.create(req.body).then(book => res.json({msg: 'Book added successfully', book}))
    .catch(err => res.status(400).json({error: "Unable to add this book"}))
})

router.get('/', (req,res) => {
    Book.find().then(books =>res.json(books))
    .catch(err => res.status(400).json({error: "Error while fetching books"}))
})

router.get ("/:id", (req, res) => {
    Book.findById(req.params.id).then(books => res.json(books))
    .catch(err => res.status(400).json({err}))
})

router.put("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(books => res.json({msg: "Updated Successfully"}))
    .catch(err => res.status(400).json({err}))
})

router.delete("/:id",(req, res) =>{
    Book.findByIdAndDelete(req.params.id)
    .then(books => res.json({msg: "Deleted Successfully"})).catch(err => res.status(400).json({err}))
})



module.exports = router



