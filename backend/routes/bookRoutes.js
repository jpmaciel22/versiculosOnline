const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/',booksController.getAllBooks);
router.get('/daily',booksController.getDailyVerse);
router.get('/search/:input', booksController.getSearch)
router.get('/:bookId/chapters', booksController.getChapters);
router.get('/:bookId/:chapter', booksController.getVerses);

module.exports = router;