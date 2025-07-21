const express = require('express');
const router = express.Router();

const bookRoutes = require('./routes/bookRoutes')

router.use('/books',bookRoutes)

module.exports = router