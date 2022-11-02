const dbTrip = require('../../infra/database/trip')

const createTrip = async (req, res) => {
  const { routeId, driverId, status } = req?.body
  const dbRes = await dbTrip.insert({ routeId, driverId, status })
  res.json({ tripId: dbRes?.id })
}

module.exports = createTrip