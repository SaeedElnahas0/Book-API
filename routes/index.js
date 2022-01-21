var express = require('express');
var router = express.Router();
const Book = require('../models/Book');
const controll = require('../controller/book_controll')

//add book
router.post('/addbook', controll.addbook);
 
//get all books
router.get('/', controll.getbooks);

//get book by id
router.get('/:id', controll.getbookbyid);

//update book
router.patch('/update/:id', controll.updatebook);

//delete book
router.delete('/delete/:id', controll.deletebook);
module.exports = router;
