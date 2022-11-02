const dbTrip = require('../../infra/database/trip')

const listTrips = async (_, res) => {
  const dbRes = await dbTrip.list()
  res.json(dbRes)
}

module.exports = listTrips