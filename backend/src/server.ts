import express from 'express'

import './db/connection'

import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)
app.listen(3030)
