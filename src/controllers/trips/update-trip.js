const dbTrip = require('../../infra/database/trip')

const updateTrip = async (req, res) => {
  const { routeId, driverId, status } = req?.body
  const { tripId } = req?.params
  const dbRes = await dbTrip.update({ routeId, driverId, status }, tripId)
  res.json({ tripId: dbRes?.id })
}

module.exports = updateTrip