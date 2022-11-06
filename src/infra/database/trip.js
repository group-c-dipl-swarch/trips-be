const firebase = require('../config/firebase')
const { COLLECTIONS, getCollectionData } = require('./utils')
const db = firebase.firestore()

/**
 * 
 * @param {object} tripBody 
 * @returns 
 */
const insertTrip = async (tripBody) => {
  return await db
    .collection(COLLECTIONS.trips)
    .add(tripBody)
}

/**
 * 
 * @param {string} tripId 
 * @returns 
 */
const getTripById = async (tripId) => {
  const tripDoc = await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .get()
  return { id: tripDoc.id, ...tripDoc.data()} 
}

const getTrips = async () => {
  const tripSnap = await db
    .collection(COLLECTIONS.trips)
    .get()
  let data = []
  tripSnap.forEach( doc => {
    data.push({ id: doc.id, ...doc.data()}) 
  })
  return data
}

const deleteTripById = async ({ tripId }) => {
  return await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .delete()
}

const updateTrip = async (tripBody,tripId) => {
  return await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .update(tripBody)
}

/**
 * 
 * @param {object} params
 * @param {string} params.tripId
 * @param {object} params.positionBody 
 * @returns 
 */
const createTripPosition = async ({ tripId, positionBody }) => {
  return await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .collection(COLLECTIONS.positions)
    .add(positionBody)
}

/**
 * 
 * @param {string} tripId 
 * @returns 
 */
const getTripPositions = async(tripId) => {
  const positionSnap = await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .collection(COLLECTIONS.positions)
    .orderBy('updatedAt', 'desc')
    .get()
  return getCollectionData(positionSnap)
}

const dbTrip = {
  insert: insertTrip,
  getById: getTripById,
  list: getTrips,
  deleteById: deleteTripById,
  update: updateTrip,
  createPosition: createTripPosition,
  getPositionsByTripId: getTripPositions
}

module.exports = dbTrip