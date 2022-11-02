const db = require('../config/firebase')

const COLLECTIONS = {
  trips: 'trips'
}

const insertTrip = async (tripBody) => {
  return await db
    .collection(COLLECTIONS.trips)
    .add(tripBody)
}

const dbTrip = {
  insert: insertTrip
}

module.exports = dbTrip