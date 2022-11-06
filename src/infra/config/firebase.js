let admin = require("firebase-admin")
const serviceAccount = require("../../../firebase-sa.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = admin