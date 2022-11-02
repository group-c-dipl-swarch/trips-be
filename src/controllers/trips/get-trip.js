const dbTrip = require('../../infra/database/trip')

const getTripById = async (req, res) => {
  const { tripId } = req?.params
  const dbRes = await dbTrip.getById({ tripId })
  res.json(dbRes?.data())
}

module.exports = getTripById