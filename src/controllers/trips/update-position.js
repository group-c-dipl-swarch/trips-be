const dbTrip = require('../../infra/database/trip')
const dbTypes = require('../../infra/database')

const updateTrip = async (req, res) => {
  const { location: { latitude, longitude } } = req?.body
  const { tripId } = req?.params
  const position = new dbTypes.GeoPoint(latitude, longitude)
  const updatedAt = dbTypes.Timestamp.now()
  const positionBody = { position, updatedAt }
  const dbRes = await dbTrip
    .createPosition({
      tripId, positionBody
    })
  res.json({ tripId: dbRes?.id })
}

module.exports = updateTrip