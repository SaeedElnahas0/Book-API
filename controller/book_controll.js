const Book = require('../models/Book');

addbook = function (req, res, next){
    const book = new Book({
        book_name: req.body.book_name,
        book_price: req.body.book_price,
        book_description: req.body.book_description
    });
    book.save().
    then(result=>{
        res.status(200).json({
            massage: 'The book has been added'
        });
    }).
    catch(err=>{
        res.status(404).json({
            massage: 'Failed to add book'
        });
    });
};

getbooks = function (req, res, next){
    Book.find().
    select('_id book_name book_price book_description').
    then(result=>{
        res.status(200).json({
            result: result
        });
    }).
    catch(err=>{
        res.status(404).json({
            massage: 'Failed to add book'
        });
    });
};

getbookbyid = function (req, res, next){
    Book.find({_id: req.params.id}).
    select('_id book_name book_price book_description').
    then(result=>{
        res.status(200).json({
            result: result
        });
    }).
    catch(err=>{
        res.status(404).json({
            massage: 'Failed to add book'
        });
    });
};

updatebook = function (req, res, next){
    const newBook = {
        book_name: req.body.book_name,
        book_price: req.body.book_price,
        book_description: req.body.book_description
    }
    Book.updateOne({_id: req.params.id}, {$set: newBook}).
    then(result=>{
        res.status(200).json({
            massage: 'updated Successfully',
            result: result
        });
    }).
    catch(err=>{
        res.status(404).json({
            massage: err
        });
    })
};

deletebook = function (req, res, next){
    Book.deleteOne({_id: req.params.id}).
    then(result=>{
        res.status(200).json({
            massage: 'Deleted Successfully',
            result: result
        });
    }).
    catch(err=>{
        res.status(404).json({
            massage: err
        });
    });
};

module.exports = {
    addbook: addbook,
    getbooks: getbooks,
    getbookbyid: getbookbyid,
    updatebook: updatebook,
    deletebook: deletebook
}