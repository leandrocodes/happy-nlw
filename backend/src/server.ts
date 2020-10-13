import express from 'express'

import './db/connection'

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

app.listen(3030)
