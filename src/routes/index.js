const express = require('express')
const router = express.Router()

const createTrip = require('../controllers/trips/create-trip')
const getTrip = require('../controllers/trips/get-trip')
const listTrips = require('../controllers/trips/list-trips')

router.get('/trip/:tripId', getTrip)
router.post('/trip', createTrip)
router.get('/trip', listTrips)

module.exports = router