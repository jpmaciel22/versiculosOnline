const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBooks);
router.get('/daily', booksController.getDailyVerse);
router.get('/:bookSlug', booksController.getChapters);
router.get('/:bookSlug/:chapter', booksController.getVerses);

module.exports = router;