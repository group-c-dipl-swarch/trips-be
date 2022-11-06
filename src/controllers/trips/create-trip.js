const dbTrip = require('../../infra/database/trip')
const dbTypes = require('../../infra/database')

const createTrip = async (req, res) => {
  const { routeId, driverId, status } = req?.body
  const startedAt = dbTypes.Timestamp.now()
  const dbRes = await dbTrip.insert({ routeId, driverId, status, startedAt })
  res.json({ tripId: dbRes?.id })
}

module.exports = createTrip