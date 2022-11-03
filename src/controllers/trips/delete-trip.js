const dbTrip = require('../../infra/database/trip')

const deleteTripById = async (req, res) => {
  const { tripId } = req?.params
  const dbRes = await dbTrip.deleteById({ tripId })
  res.json(dbRes)
}

module.exports = deleteTripById