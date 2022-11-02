let admin = require("firebase-admin")
const serviceAccount = require("/Users/davidperdomo/Documents/david-perdomo/arch_unal/assigment4/trips-be/lab-4-s-a.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore()

module.exports = db