const dbTrip = require('../../infra/database/trip')

const getTripById = async (req, res) => {
  const { tripId } = req?.params
  const [
    trip, 
    [lastPosition] 
  ] = await Promise.all([
    dbTrip.getById(tripId),
    dbTrip.getPositionsByTripId(tripId)
  ])
  const tripData = {
    ...trip,
    startedAt: trip?.startedAt?.toDate(),
    lastPosition: {
      ...lastPosition,
      updatedAt: lastPosition?.updatedAt?.toDate()
    }
  }
  res.json(tripData)
}

module.exports = getTripById