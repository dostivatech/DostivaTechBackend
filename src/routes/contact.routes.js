// src/routes/contact.routes.js

const express = require('express')
const router = express.Router()

const { handleContact } = require('../controllers/contact.controller')
const validate = require('../middleware/validate.middleware')

app.use('/api/contact', require('./routes/contact.routes'))

module.exports = router