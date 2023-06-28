const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')


const app = express()




app.use(express.json())
app.use(cors())

app.use('/api', routes )


module.exports = app