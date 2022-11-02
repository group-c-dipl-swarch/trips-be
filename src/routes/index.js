const express = require('express')
const router = express.Router()

const createTrip = require('../controllers/trips/create-trip')
const getTrip = require('../controllers/trips/get-trip')

router.get('/trip', getTrip)
router.post('/trip', createTrip)

module.exports = router