const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/',booksController.getAllBooks);
router.get('/daily',booksController.getDailyVerse);

module.exports = router;