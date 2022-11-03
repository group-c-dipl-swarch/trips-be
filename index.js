const express = require('express')
const morgan = require('morgan')
const router = require('./src/routes')
const app = express()

const port = 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port }`)
})
