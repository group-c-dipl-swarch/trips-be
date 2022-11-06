const COLLECTIONS = {
  trips: 'trips',
  positions: 'positions'
}

const getCollectionData = (snap) => {
  let data = []
  snap.forEach( doc => {
    data.push({ id: doc.id, ...doc.data()}) 
  })
  return data
}

const utils = {
  COLLECTIONS,
  getCollectionData
}

module.exports = utils