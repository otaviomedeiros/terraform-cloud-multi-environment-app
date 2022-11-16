import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
var app = express()

app.get('/', (req, res) => {
  res.send(`Backend => ${process.env.ENV}.`)
})

app.listen(process.env.PORT, () => {
  console.log(`Backend listening on port ${process.env.PORT} for environment: ${process.env.ENV}`)
})