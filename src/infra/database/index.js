const firebase = require('../config/firebase')

const dbTypes = {
  Timestamp: firebase.firestore.Timestamp,
  GeoPoint: firebase.firestore.GeoPoint
}

module.exports = dbTypes